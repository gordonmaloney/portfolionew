import React from "react";

export const ScreenShot = ({ video, img, src, rotate }) => {
  return (
    <>
      {video && (
        <video
          loop={true}
          autoPlay={true}
          mute={true}
          src={src}
          className="projectSS"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
      )}

      {img && (
        <img
          src={src}
          className="projectSS"
          style={{
            transform: rotate,
          }}
        />
      )}
    </>
  );
};
