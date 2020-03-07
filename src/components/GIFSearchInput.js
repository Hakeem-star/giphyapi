import React from "react";

export default function GIFSearchInput(props) {
  return (
    <div className="search_inputs">
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Enter a search term"
        onKeyPress={e => {
          (e.key === "Enter" || e.keyCode === 13) && props.handleSearch(e);
        }}
      ></input>
      <div className="buttons">
        <button onClick={props.handleSearch}>Search</button>
        <button onClick={props.handleRemove}>Start again</button>
      </div>
    </div>
  );
}
