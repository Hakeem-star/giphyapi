import React from "react";

export default function GIFSearchInput(props) {
  return (
    <div>
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Enter a search term"
        onKeyPress={e => {
          (e.key === "Enter" || e.keyCode === 13) && props.handleSearch(e);
        }}
      ></input>
      <button onClick={props.handleSearch}>Search Giphy!</button>
      <button onClick={props.handleRemove}>Remove Images</button>
    </div>
  );
}
