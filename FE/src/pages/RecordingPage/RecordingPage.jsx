import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./RecordingPage.module.css";

export const WebcamStreamCapture = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [heightSize, setHeightSize] = useState(window.innerHeight);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordVideo, setRecordVideo] = useState("");

  const handleResize = () => {
    setWidthSize(window.innerWidth);
    setHeightSize(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthSize, heightSize]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
  useEffect(() => {
    console.log("영상", recordedChunks);
    console.log(recordVideo);
  }, [recordedChunks, recordVideo]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    const url = URL.createObjectURL(blob);
    setRecordVideo(url);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <section className={styles["record-page"]}>
      {recordVideo ? (
        <video controls src={recordVideo} type="video/webm" />
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            width={widthSize}
            height={heightSize}
            videoConstraints={{ aspectRatio: 9 / 16 }}
          />
          {capturing ? (
            <article className={styles["record-btn"]}>
              <button
                className={styles["record-stop"]}
                onClick={handleStopCaptureClick}
              >
                　
              </button>
            </article>
          ) : (
            <article className={styles["record-btn"]}>
              <button
                className={styles["record-start"]}
                onClick={handleStartCaptureClick}
              >
                　
              </button>
            </article>
          )}
        </>
      )}
    </section>
  );
};
