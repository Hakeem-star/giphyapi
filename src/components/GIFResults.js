import React from "react";
import HoverOptions from "./HoverOptions";
import landscape from "../images/Brown_Frame_l.png";

export default function GIFResults(props) {
  if (props.results && props.results.length > 0) {
    const images = props.results.map((val, index) => {
      const imageDetails = val.images.fixed_width;
      const source = val.source;
      return (
        <div key={val.id + index} className="image_frame">
          <HoverOptions
            {...props.hoverOptions}
            index={index}
            propsWidth={imageDetails.width + "px"}
            propsHeight={imageDetails.height + "px"}
            imageURL={imageDetails.url}
            source={source}
          />
          <img
            alt="giphy_image"
            style={{
              borderImage: `url(${landscape}) 30`,
              borderImageRepeat: "stretch"
            }}
            src={imageDetails.url}
          />
        </div>
      );
    });

    return <div className="images">{images}</div>;
  } else return null;
}
