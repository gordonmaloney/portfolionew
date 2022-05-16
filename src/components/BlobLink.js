import React from "react";
import { Blob } from "./Blob";

export const BlobLink = ({ content, width, colour }) => {
    return (
      <div
        style={{
          position: "relative",
          width: width,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "-1",
        }}
      >
        <Blob colour={colour} radius={95} squash={2.8} />
  
        <span style={{ zIndex: 5 }}>
          <a href="mailto:gordonmaloney@gmail.com" target="_blank">
            <u>{content}</u>
          </a>
        </span>
      </div>
    );
  };
  