import React, { useEffect } from "react";
import HoverOptions from "./HoverOptions";
import landscape from "../images/Brown_Frame_l.png";

export default function GIFResults(props) {
  if (props.results && props.results.length > 0) {
    console.log(props.results);

    const images = props.results.map((val, index) => {
      const imageDetails = val.images.fixed_width;
      const source = val.source;
      const title = val.title;
      let image_ref = React.createRef();
      let classIndex = index ? "" : "new";
      return (
        <div
          key={val.id + index}
          className={`image_frame ${classIndex}`}
          ref={image_ref}
          style={{
            display: "none",
            width: Number(imageDetails.width) + 60 + "px"
          }}
        >
          <div className="gif">
            <HoverOptions
              {...props.hoverOptions}
              index={index}
              propsWidth={imageDetails.width + "px"}
              propsHeight={imageDetails.height + "px"}
              imageURL={imageDetails.url}
              source={source}
              title={title}
            />
            <img
              onLoad={element => {
                image_ref.current.style.display = "inherit";
              }}
              title={title}
              alt="giphy_image"
              style={{
                borderImage: `url(${landscape}) 30`,
                borderImageRepeat: "stretch"
              }}
              src={imageDetails.url}
            />
          </div>
          <label>{title}</label>
        </div>
      );
    });

    return <div className="images">{images}</div>;
  } else return null;
}
