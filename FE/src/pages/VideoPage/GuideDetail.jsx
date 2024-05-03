import React, { useRef, useEffect } from 'react';
import styles from './GuideDetail.module.css';
import * as bodyPix from '@tensorflow-models/body-pix';
import testVideo from '../../assets/PerfectNight_르세라핌.mp4';
import '@tensorflow/tfjs-backend-webgl';

const GuideDetail = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        async function loadAndApplyModel() {
            const net = await bodyPix.load({
                architecture: 'MobileNetV1',
                outputStride: 16,
                multiplier: 0.5,
                quantBytes: 2
            });

            const video = videoRef.current;
            const canvas = canvasRef.current;

            function updateCanvas() {
            animationFrameId = requestAnimationFrame(updateCanvas);
            net.segmentPerson(video, {
                flipHorizontal: false,
                internalResolution: 'high',
                segmentationThreshold: 0.7
            }).then(segmentation => {
                const foregroundColor = { r: 255, g: 255, b: 255, a: 255 }; // White
                const backgroundColor = { r: 0, g: 0, b: 0, a: 0 }; // Transparent
                const mask = bodyPix.toMask(segmentation, foregroundColor, backgroundColor);
                bodyPix.drawMask(canvas, video, mask, 1, 3, false);
            });
        }

        video.addEventListener('loadeddata', () => {
            video.play();
            updateCanvas();
        });

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            video.removeEventListener('loadeddata', updateCanvas);
            net.dispose(); // Clean up resources used by the TensorFlow model
        };
    }

    if (videoRef.current && canvasRef.current) {
        loadAndApplyModel();
    }
}, []);

const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
        video.muted = false; // Unmute the video when playing
        video.play();
    }
};

  return (
    <div className={styles.mainView}>
        <button onClick={handlePlayVideo}>Play Video</button>
        <video
            ref={videoRef}
            src={testVideo}
            style={{ display: 'none' }}
            loop
            muted
            autoPlay
        />
        <canvas ref={canvasRef} style={{ width: '100%' }} />
    </div>
    );
};

export default GuideDetail;
