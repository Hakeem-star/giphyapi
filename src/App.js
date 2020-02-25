import React, { Fragment } from "react";
import "./App.css";
import GIFSearchInput from "./components/GIFSearchInput";
import GifOfTheDay from "./components/GifOfTheDay";
import GIFResults from "./components/GIFResults";
import searchForInputValue from "./components/searchForInputValue";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      ajaxResponse: [],
      gotd: []
    };
    searchForInputValue = searchForInputValue.bind(...arguments, this);
  }

  componentDidMount() {
    searchForInputValue("gif of the day", "gotd");
  }

  //searchForInputValue = (valueToSearch, arrayForResult)=> searchForInputValue(valueToSearch, arrayForResult);

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
            handleSearch={e =>
              searchForInputValue(e.target.value, "ajaxResponse")
            }
            handleRemove={e => this.removeAllGifs(e)}
          />
        </header>
        <main className="container">
          <GifOfTheDay result={this.state.gotd} />
          <GIFResults results={this.state.ajaxResponse} />
        </main>
      </Fragment>
    );
  }
}

export default App;
