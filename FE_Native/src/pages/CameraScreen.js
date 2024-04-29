import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Audio, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

export default function CameraScreen() {
  const guide = require("../assets/guide.mp4");
  const [isRecording, setIsRecording] = useState(false);
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);
  const [showVideo, setShowVideo] = useState("");
  const [convertedVideoUri, setConvertedVideoUri] = useState(null);
  const [saveStatus, setSaveStatus] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );
  const [isCameraReady, setIsCameraReady] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    // 권한 인증 로직
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == "granted");

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.status == "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == "granted");

      const mediaSave = await MediaLibrary.requestPermissionsAsync();
      setSaveStatus(mediaSave.status == "granted");

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

  const recordVideo = async () => {
    if (cameraRef) {
      setIsRecording(true);
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["720"],
          mute: false,
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          setShowVideo(source);
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
  const onSave = async () => {
    const mediaLibraryPermissions = await MediaLibrary.getPermissionsAsync();
    if (mediaLibraryPermissions.granted) {
      await MediaLibrary.saveToLibraryAsync(showVideo.uri);
    }
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setShowVideo(result.assets[0].uri);
    }
  };

  const reStart = () => {
    setShowVideo("");
  };

  return (
    <View style={styles.container}>
      {showVideo ? (
        <>
          <SafeAreaView style={styles.viewContainer}>
            <Text>{convertedVideoUri}</Text>
            <Video
              style={styles.video}
              source={{ uri: showVideo }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          </SafeAreaView>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.ButtonOne}
              onPress={() => reStart()}
            >
              <Text style={styles.ButtonText}>다시촬영</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonTwo}>
              <Text style={styles.ButtonText} onPress={() => onSave()}>
                평가하기
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {isFocused ? (
            <>
              <Camera
                ref={(ref) => setCameraRef(ref)}
                style={styles.camera}
                ratio={"16:9"}
                type={cameraType}
                flashMode={cameraFlash}
                autoFocus={true}
                onCameraReady={() => setIsCameraReady(true)}
              />
              <View style={styles.overlayVideo}>
                <Video
                  style={styles.overlayVideoInfo}
                  source={guide}
                  useNativeControls
                  shouldPlay={true}
                  isMuted={true}
                  isLooping
                  resizeMode="contain"
                />
              </View>
            </>
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
    position: "relative",
    width: "100%",
    height: "100%",
  },

  viewContainer: {
    flex: 6,
  },

  buttonBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  camera: {
    flex: 1,
  },
  bottomBarContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginBottom: 30,
    zIndex: 2,
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
    zIndex: 2,
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
  ButtonOne: {
    flex: 1,
    backgroundColor: "#ef5350",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },

  ButtonTwo: {
    flex: 1,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  overlayVideo: {
    position: "absolute",
    zIndex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    aspectRatio: 16 / 9,
    opacity: 0.1,
  },
  overlayVideoInfo: {
    width: ScreenWidth,
    height: ScreenHeight,
  },
});
