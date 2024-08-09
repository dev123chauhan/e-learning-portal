// import React from 'react'
import { useRef } from "react";
import styled from 'styled-components';
export default function VideoPlayer() {
    const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const VideoButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
    const videoRef = useRef(null);

    const handlePlay = () => {
      videoRef.current.play();
    };
  
    const handlePause = () => {
      videoRef.current.pause();
    };
  
    const handleRewind = () => {
      videoRef.current.currentTime -= 10;
    };
  
    const handleForward = () => {
      videoRef.current.currentTime += 10;
    };
  
    return (
      <VideoPlayer>
        <StyledVideo ref={videoRef}>
          <source src="https://example.com/your-course-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
        <VideoControls>
          <VideoButton onClick={handleRewind}>⏪ 10s</VideoButton>
          <VideoButton onClick={handlePlay}>▶️ Play</VideoButton>
          <VideoButton onClick={handlePause}>⏸️ Pause</VideoButton>
          <VideoButton onClick={handleForward}>⏩ 10s</VideoButton>
        </VideoControls>
      </VideoPlayer>
    );
}
