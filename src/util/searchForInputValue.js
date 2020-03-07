import fetchFromGiphyAPI from "./fetchFromGiphyAPI";

export const randomImagePicker = arrayOfImages => {
  return Math.floor(Math.random() * arrayOfImages.data.length);
};
export const pickRandomImageFromResponse = (
  resultFromAPI_JSON,
  arrayForResult
) => {
  if (resultFromAPI_JSON.message === "API rate limit exceeded") {
    throw resultFromAPI_JSON.message;
  }
  console.log(resultFromAPI_JSON.data.length);
  if (resultFromAPI_JSON.data.length > 0) {
    const randomNumber = randomImagePicker(resultFromAPI_JSON);
    //select a random image from the response and push that into the array
    const selectedGIF = resultFromAPI_JSON.data[randomNumber];
    // const arrayWithSelectedGif = [...this.state[arrayForResult], selectedGIF];
    return [arrayForResult, selectedGIF];
  } else {
    alert("Nothing was found. Try another Search term");
  }
};

export default function searchForInputValue(valueToSearch, arrayForResult) {
  return fetchFromGiphyAPI(valueToSearch)
    .then(resultFromAPIPromise => {
      return resultFromAPIPromise.json();
    })
    .then(resultFromAPI_JSON => {
      return pickRandomImageFromResponse(resultFromAPI_JSON, arrayForResult);
    })
    .catch(error => {
      console.error(error);
      alert(error, "Please wait a minute before trying again");
      // return { error };
    });
}
export { searchForInputValue };
