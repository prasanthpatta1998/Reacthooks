import React, { useRef, useState } from "react";

const PlayingRefVideo = () => {
  const [vidoePlaying, setVideoPlaying] = useState(false);
  const ref = useRef(null);

  const handlePlay = () => {
    const playVideo = !vidoePlaying;
    setVideoPlaying(playVideo);
    if (playVideo) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <button onClick={handlePlay}>{vidoePlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setVideoPlaying(true)}
        onPause={() => setVideoPlaying(false)}
        controls
      >
        <source
          src="https://youtu.be/J4hCHqKtyOc?si=obULqWKJUeRdSx3I"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default PlayingRefVideo;
