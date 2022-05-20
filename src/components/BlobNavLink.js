import React from 'react'
import { Blob } from './Blob'



export const BlobNavLink = ({text}) => {
  return (
    <div
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Blob colour="#f3d2c1" radius={85} squash={2.1} />

              <h3 className="projectDesc navbarBlobLink">{text}</h3>
            </div>
  )
}
