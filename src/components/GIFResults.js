import React from "react";
import landscape from "./images/Brown_Frame_l.png";

export function GIFResults(props) {
  if (props.results.length > 0) {
    const images = props.results.map((val, index) => {
      return (
        <div className="image_frame">
          <img
            alt=""
            key={val.id + index}
            style={{
              borderImage: `url(${landscape}) 30`,
              borderImageRepeat: "stretch"
            }}
            src={val.images.fixed_width.url}
          />
        </div>
      );
    });
    return <div className="images">{images}</div>;
  } else return null;
}
