import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { S3 } from "aws-sdk";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function CameraScreen() {
  const s3 = new S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REIGON,
  });

  const bucketName = "elasticbeanstalk";
  const [isRecording, setIsRecording] = useState(false);
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);
  const [showVideo, setShowVideo] = useState("");
  const [convertedVideoUri, setConvertedVideoUri] = useState(null);

  const [galleryItems, setGalleryItems] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );
  const [isCameraReady, setIsCameraReady] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == "granted");

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.status == "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == "granted");

      if (galleryStatus.status == "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["video"],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);
  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    return (
      <View>
        <Text style={{ marginTop: 30 }}>subscribe to simon</Text>
      </View>
    );
  }

  const uploadToS3 = async (localUri, fileName) => {
    console.log("여기", localUri, fileName);
    const fileContent = await FileSystem.readAsStringAsync(localUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
      ContentType: "video/mp4",
      ACL: "public-read",
    };

    try {
      await s3.upload(params).promise();
      console.log("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file to S3:", error);
    }
  };

  const recordVideo = async () => {
    if (cameraRef) {
      setIsRecording(true);
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["480"],
          mute: false,
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          setShowVideo(source);
          const fileName = "test.mp4"; // 파일 이름 설정
          await uploadToS3(source, fileName);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
      setIsRecording(false);
    }
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      // pass video uri into save component
    }
  };

  console.log(galleryItems);

  return (
    <View style={styles.container}>
      {showVideo ? (
        <SafeAreaView style={styles.container}>
          <Text>{convertedVideoUri}</Text>
          <Video
            style={styles.video}
            source={{ uri: showVideo }}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        </SafeAreaView>
      ) : (
        // <video controls>{/* <source src={showVideo} /> */}</video>
        <>
          {isFocused ? (
            <Camera
              ref={(ref) => setCameraRef(ref)}
              style={styles.camera}
              ratio={"16:9"}
              type={cameraType}
              flashMode={cameraFlash}
              onCameraReady={() => setIsCameraReady(true)}
            />
          ) : null}

          <View style={styles.sideBarContainer}>
            <TouchableOpacity
              style={styles.sideBarButton}
              onPress={() =>
                setCameraType(
                  cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )
              }
            >
              <Feather name="refresh-ccw" size={24} color={"white"} />
              <Text style={styles.iconText}>Flip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sideBarButton}
              onPress={() =>
                setCameraFlash(
                  cameraFlash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
                )
              }
            >
              <Feather name="zap" size={24} color={"white"} />
              <Text style={styles.iconText}>Flash</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBarContainer}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.recordButtonContainer}>
              <TouchableOpacity
                disabled={!isCameraReady}
                onPress={isRecording ? () => stopVideo() : () => recordVideo()}
                style={styles.recordButton}
              >
                <View
                  style={isRecording ? styles.stopButton : styles.startButton}
                ></View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => pickFromGallery()}
                style={styles.galleryButton}
              >
                {galleryItems[0] == undefined ? (
                  <></>
                ) : (
                  <Image
                    style={styles.galleryButtonImage}
                    source={{ uri: galleryItems[0].uri }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  camera: {
    flex: 1,
    // backgroundColor: "black",
    // aspectRatio: 10 / 16,
  },
  bottomBarContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginBottom: 30,
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  recordButton: {
    borderWidth: 8,
    borderColor: "#ff404087",
    borderRadius: 100,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "#ff4040",
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },
  stopButton: {
    backgroundColor: "#ff4040",
    width: 40,
    height: 40,
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 50,
    height: 50,
  },
  galleryButtonImage: {
    width: 50,
    height: 50,
  },
  sideBarContainer: {
    top: 60,
    right: 0,
    marginHorizontal: 20,
    position: "absolute",
  },
  iconText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sideBarButton: {
    alignItems: "center",
    marginBottom: 25,
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});
