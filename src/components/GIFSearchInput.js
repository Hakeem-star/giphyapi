import React from "react";

export function GIFSearchInput(props) {
  return (
    <div>
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Enter a search term"
        onKeyPress={e => {
          e.key === "Enter" && props.handleSearch(e);
        }}
      ></input>
      <button onClick={props.handleSearch}>Search Giphy!</button>
      <button onClick={props.handleRemove}>Remove Images</button>
    </div>
  );
}
