import React, { Fragment } from "react";
import "./App.css";
import landscape from "./images/Brown_Frame_l.png";

function Gotd(props) {
  console.log(props.result);
  let final = "";
  let value = "";

  if (props.result[0] !== undefined) {
    value = props.result[0].images.original.url;
    final = (
      <div className="container gotd">
        <h2>Gif of the day!</h2>
        <img
          style={{
            borderImage: `url(${landscape}) 30`,
            borderImageRepeat: "stretch"
          }}
          src={value}
          alt="gif of the day"
        />
      </div>
    );
  }

  return final;
}

class InputQuery extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleInput}
          type="text"
          placeholder="Enter a search term"
          onKeyPress={e => {
            e.key === "Enter" && this.props.handleSearch(e);
          }}
        ></input>
        <button onClick={this.props.handleSearch}>Search Giphy!</button>
        <button onClick={this.props.handleRemove}>Remove Images</button>
      </div>
    );
  }
}

class Results extends React.Component {
  render() {
    let images = "";

    if (this.props.results.length > 0) {
      images = this.props.results.map((val, index) => {
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
    }

    return <div className="images">{images}</div>;
  }
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
    this.search("gif of the day");
  }

  search(day) {
    let results = day ? this.state.gotd : this.state.ajaxResponse;
    let query = day || this.state.inputValue;
    const Na = <h3>Nothing was found</h3>;
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        query +
        "&api_key=dc6zaTOxFJmzC"
    )
      .then(result => result.json())
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          let random = Math.floor(Math.random() * res.data.length);
          console.log(this, res, results, random);
          //select a random image from the response and push that into the array
          results.push(res.data[random]);
        } else {
          alert("Nothing was found. Try another Search term");
          return;
        }

        if (day) {
          this.setState({ gotd: results });
        } else if (results.length > 0) {
          this.setState({ ajaxResponse: results });
        } else {
          this.setState({ ajaxResponse: Na });
        }
      });
  }

  remove(e) {
    this.setState({ ajaxResponse: [] });
  }

  inputValue(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <header>
          <h1>GIPHY PARTY</h1>
          <InputQuery
            handleInput={e => this.inputValue(e)}
            handleSearch={e => this.search()}
            handleRemove={e => this.remove(e)}
          />
        </header>
        <main className="container">
          <Gotd result={this.state.gotd} />
          <Results results={this.state.ajaxResponse} />
        </main>
      </Fragment>
    );
  }
}

export default App;
