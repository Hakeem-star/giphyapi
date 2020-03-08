import React from "react";
import landscape from "../images/Brown_Frame_l.png";
import HoverOptions from "./HoverOptions";

export default function GifOfTheDay(props) {
  const resultFromApi = props.result;
  if (resultFromApi.images !== undefined) {
    try {
      const gifOfTheDayAPIURL = resultFromApi.images.original.url;
      const imageDetails = resultFromApi.images.original;
      const source = resultFromApi.source;
      const title = resultFromApi.title;
      let image_ref = React.createRef();

      return (
        <div ref={image_ref} className="gotd" style={{ display: "none" }}>
          <h2>Gif of the day!</h2>
          <div className="gif">
            <div className="_image_group">
              <HoverOptions
                {...props.hoverOptions}
                propsWidth={imageDetails.width + "px"}
                propsHeight={imageDetails.height + "px"}
                imageURL={imageDetails.url}
                source={source}
              />
              <img
                onLoad={element => {
                  image_ref.current.style.display = "block";
                }}
                style={{
                  borderImage: `url(${landscape}) 30`,
                  borderImageRepeat: "stretch",
                  maxWidth: "20rem"
                }}
                src={gifOfTheDayAPIURL}
                alt="gif of the day"
              />
            </div>
          </div>
          <label>{title}</label>
        </div>
      );
    } catch {
      return null;
    }
  } else return null;
}
