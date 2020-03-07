function fetchFromGiphyAPI(valueToSearch) {
  return fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
      valueToSearch +
      "&api_key=dc6zaTOxFJmzC"
  );
}
export default fetchFromGiphyAPI;
