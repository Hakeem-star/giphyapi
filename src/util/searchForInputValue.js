export function searchForInputValue(valueToSearch, arrayForResult) {
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
      valueToSearch +
      "&api_key=dc6zaTOxFJmzC"
  )
    .then(resultFromAPIBuffer => resultFromAPIBuffer.json())
    .then(resultFromAPI_JSON => {
      if (resultFromAPI_JSON.data.length > 0) {
        const randomNumber = Math.floor(
          Math.random() * resultFromAPI_JSON.data.length
        );
        //select a random image from the response and push that into the array
        const selectedGIF = resultFromAPI_JSON.data[randomNumber];
        const arrayWithSelectedGif = this.state[arrayForResult].push(
          selectedGIF
        );
        this.setState({ arrayForResult: arrayWithSelectedGif });
      } else {
        alert("Nothing was found. Try another Search term");
        return;
      }
    });
}
