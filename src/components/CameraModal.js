import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(12px);
`;

const ModalContent = styled.div`
  background: var(--gray-900);
  border-radius: 16px;
  width: 90vw;
  max-width: 1200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.6);
  border: 3px solid var(--mp-orange);
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      transform: scale(0.9) translateY(20px);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--gray-800);
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--white);
  margin: 0;
`;

const CloseButton = styled.button`
  background: var(--error);
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #dc2626;
    transform: scale(1.05);
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Removed unused VideoElement

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%);
  background-size: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  font-size: 1.125rem;
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--mp-orange);
  border-radius: 2px;
  width: ${props => props.progress}%;
  transition: width 0.1s ease;
`;

const InfoPanel = styled.div`
  padding: 1rem 1.5rem;
  background: var(--gray-800);
  border-top: 1px solid var(--gray-700);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

const InfoItem = styled.div`
  text-align: center;
`;

const InfoLabel = styled.div`
  font-size: 0.75rem;
  color: var(--gray-400);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const InfoValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.status === 'active' ? 'var(--success)' : 'var(--error)'};
  color: white;
`;

function CameraModal({ camera, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  
  const videoUrl = 'https://videos.pond5.com/kathmandu-nepal-8-october-2018-footage-103838498_main_xxl.mp4';

  // Move all hooks before early return
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      };
      
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', updateProgress);
      
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', updateProgress);
      };
    }
  }, []);

  useEffect(() => {
    // Disable body scroll and improve modal behavior
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!camera) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Moved useEffect hooks above early return

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{camera.name} - Live Feed</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <VideoContainer>
          {camera.status === 'active' ? (
            <>
              <video
                ref={videoRef}
                src={videoUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                muted={isMuted}
                loop
                preload="metadata"
              />
              <VideoControls>
                <ControlButton onClick={togglePlay}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </ControlButton>
                <ControlButton onClick={toggleMute}>
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </ControlButton>
                <ProgressBar>
                  <Progress progress={progress} />
                </ProgressBar>
                <ControlButton title="Zoom In">
                  <ZoomIn size={16} />
                </ControlButton>
                <ControlButton title="Zoom Out">
                  <ZoomOut size={16} />
                </ControlButton>
                <ControlButton title="Reset View">
                  <RotateCcw size={16} />
                </ControlButton>
                <ControlButton title="Fullscreen">
                  <Maximize size={16} />
                </ControlButton>
              </VideoControls>
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                🔴 LIVE - {camera.name}
              </div>
            </>
          ) : (
            <VideoPlaceholder>
              ⚠️ Camera Offline - {camera.name}
              <br />
              <small style={{ marginTop: '0.5rem', display: 'block', color: 'var(--error)' }}>
                Under maintenance
              </small>
            </VideoPlaceholder>
          )}
        </VideoContainer>

        <InfoPanel>
          <InfoItem>
            <InfoLabel>Status</InfoLabel>
            <InfoValue>
              <StatusBadge status={camera.status}>
                {camera.status.toUpperCase()}
              </StatusBadge>
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Current Density</InfoLabel>
            <InfoValue>
              {camera.density ? camera.density.toFixed(1) : '0.0'} ppl/m²
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Resolution</InfoLabel>
            <InfoValue>1920x1080 HD</InfoValue>
          </InfoItem>
        </InfoPanel>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CameraModal;
