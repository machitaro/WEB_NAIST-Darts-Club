import React from "react";

export const OpeningVideo = (props) => {
  const { fadeduration, videoRef, onEnded, isPlaying } = props;
  return (
    <section 
      style={{ transition: `opacity ${fadeduration}ms ease-out` }}
      className={`
        fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white 
        ${isPlaying ? "opacity-100" : "opacity-0"}
        ${!isPlaying && 'pointer-events-none'}
        `}
    >
      <div className="container mx-auto px-4">
        <video
          ref={videoRef}
          className="w-2/3 md:w-1/3 h-auto mx-auto"
          src="./mov/op.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={onEnded}
        />
      </div>
    </section>
  );
};