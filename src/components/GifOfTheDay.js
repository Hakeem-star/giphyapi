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
      return (
        <div className="container gotd">
          <h2>Gif of the day!</h2>
          <div className="_image_group">
            <HoverOptions
              {...props.hoverOptions}
              propsWidth={imageDetails.width + "px"}
              propsHeight={imageDetails.height + "px"}
              imageURL={imageDetails.url}
              source={source}
            />
            <img
              style={{
                borderImage: `url(${landscape}) 30`,
                borderImageRepeat: "stretch"
              }}
              src={gifOfTheDayAPIURL}
              alt="gif of the day"
            />
          </div>
        </div>
      );
    } catch {
      return null;
    }
  } else return null;
}
