import React, { Fragment } from "react";
import "./App.css";
import landscape from "./images/Brown_Frame_l.png";

function GIFSearchInput(props) {
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

function GifOfTheDay(props) {
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

function Results(props) {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      ajaxResponse: [],
      gotd: []
    };
  }

  componentDidMount() {
    this.searchForInputValue("gif of the day");
  }

  searchForInputValue(gifOfTheDayQuery) {
    let valueToSearch = gifOfTheDayQuery
      ? this.state.gotd
      : this.state.ajaxResponse;
    let searchQuery = gifOfTheDayQuery || this.state.inputValue;
    const notFound = <h3>Nothing was found</h3>;

    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        searchQuery +
        "&api_key=dc6zaTOxFJmzC"
    )
      .then(resultFromAPIBuffer => resultFromAPIBuffer.json())
      .then(resultFromAPI_JSON => {
        if (resultFromAPI_JSON.data.length > 0) {
          const randomNumber = Math.floor(
            Math.random() * resultFromAPI_JSON.data.length
          );
          //select a random image from the response and push that into the array
          valueToSearch.push(resultFromAPI_JSON.data[randomNumber]);
        } else {
          alert("Nothing was found. Try another Search term");
          return;
        }

        if (gifOfTheDayQuery) {
          this.setState({ gotd: valueToSearch });
        } else if (valueToSearch.length > 0) {
          this.setState({ ajaxResponse: valueToSearch });
        } else {
          this.setState({ ajaxResponse: notFound });
        }
      });
  }

  removeAllGifs(e) {
    this.setState({ ajaxResponse: [] });
  }

  inputValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>GIPHY PARTY</h1>
          <GIFSearchInput
            handleInput={e => this.inputValue(e)}
            handleSearch={e => this.searchForInputValue()}
            handleRemove={e => this.removeAllGifs(e)}
          />
        </header>
        <main className="container">
          <GifOfTheDay result={this.state.gotd} />
          <Results results={this.state.ajaxResponse} />
        </main>
      </Fragment>
    );
  }
}

export default App;
