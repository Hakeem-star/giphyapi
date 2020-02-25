import React from "react";
import landscape from "./images/Brown_Frame_l.png";

export function GifOfTheDay(props) {
  const resultFromApi = props.result[0];
  if (resultFromApi !== undefined) {
    const gifOfTheDayAPIURL = props.result[0].images.original.url;
    return (
      <div className="container gotd">
        <h2>Gif of the day!</h2>
        <img
          style={{
            borderImage: `url(${landscape}) 30`,
            borderImageRepeat: "stretch"
          }}
          src={gifOfTheDayAPIURL}
          alt="gif of the day"
        />
      </div>
    );
  } else return null;
}
