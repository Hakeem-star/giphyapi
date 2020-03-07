import React, { Fragment } from "react";
import "./App.css";
import GIFSearchInput from "./components/GIFSearchInput";
import GifOfTheDay from "./components/GifOfTheDay";
import GIFResults from "./components/GIFResults";
import searchForInputValue from "./util/searchForInputValue";

const hoverOptions = function() {
  return {
    changeImage: async () => {
      const [key, value] = await searchForInputValue("gif of the day", "gotd");
      this.setState({
        [key]: value
      });
    },
    removeImage: index => this.removeImage(index),
    openShareDialogue: () => this.openShareDialogue
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      imagesFromSearch: [],
      gotd: []
    };
  }

  async componentDidMount() {
    const [key, value] = await searchForInputValue("gif of the day", "gotd");
    this.setState({ [key]: value });
  }

  //searchForInputValue = (valueToSearch, arrayForResult)=> searchForInputValue(valueToSearch, arrayForResult);

  removeAllGifs(e) {
    this.setState({ ajaxResponse: [] });
  }

  inputValue(e) {
    this.setState({ inputValue: e.target.value });
  }
  removeImage(index) {
    console.log("doing", this);
    const newArrayOfImages = [...this.state.imagesFromSearch].filter(
      (value, filterIndex) => index !== filterIndex
    );
    this.setState({
      imagesFromSearch: newArrayOfImages
    });
  }

  copyURL() {
    console.log(this.state.imagesFromSearch);
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>GIPHY PARTY</h1>
          <GIFSearchInput
            handleInput={e => this.inputValue(e)}
            handleSearch={async e => {
              const [key, value] = await searchForInputValue(
                this.state.inputValue,
                "imagesFromSearch"
              );
              const newState = [...this.state.imagesFromSearch, value];
              this.setState({
                [key]: newState
              });
            }}
            handleRemove={e => this.removeAllGifs(e)}
          />
        </header>
        <main className="container">
          <GifOfTheDay
            result={this.state.gotd}
            hoverOptions={hoverOptions.call(this)}
          />
          <GIFResults
            hoverOptions={hoverOptions.call(this)}
            results={this.state.imagesFromSearch}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
