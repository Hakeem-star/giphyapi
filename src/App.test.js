import React from "react";
import App from "./App";
import {
  render,
  wait,
  waitForDomChange,
  cleanup,
  fireEvent,
  getAllByAltText,
  getByText,
  queryByAltText,
  queryByText
} from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import { searchForInputValue as searchForInputValueMock } from "./util/searchForInputValue";
const result = {
  images: {
    id: "WfXQpCwemYCnm",
    original: {
      frames: "23",
      hash: "2e927e2ae83d568fd3567fcad89ceef6",
      height: "370",
      mp4:
        "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.mp4?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.mp4",
      mp4_size: "417624",
      size: "726896",
      url:
        "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.gif?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.gif",
      webp:
        "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.webp?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.webp",
      webp_size: "439118",
      width: "499"
    }
  }
};
const resultFixedWidth = () => {
  let randomNum = Math.random();
  return {
    id: randomNum,
    images: {
      fixed_width: {
        frames: "23",
        hash: "2e927e2ae83d568fd3567fcad89ceef6",
        height: "370",
        mp4:
          "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.mp4?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.mp4",
        mp4_size: "417624",
        size: "726896",
        url:
          "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.gif?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.gif",
        webp:
          "https://media0.giphy.com/media/7vQZanyufdRe0/giphy.webp?cid=e1bb72ff39b4ffd314ee75aaa1e2f7cc68213d8b357a887f&rid=giphy.webp",
        webp_size: "439118",
        width: "499"
      }
    }
  };
};
afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("./util/searchForInputValue");

test("renders without crashing", () => {
  searchForInputValueMock.mockImplementation(() => {
    return ["gotd", result];
  });
  const { getByText } = render(<App />);
  expect(getByText("GIPHY PARTY"));
});

test("renders the gotd image on mount", async () => {
  searchForInputValueMock.mockImplementation(() => {
    return ["gotd", result];
  });

  const { findByAltText } = render(<App />);

  const gifOfTheDay = findByAltText("gif of the day");

  expect(await gifOfTheDay).toBeDefined();
});

describe("Adds and removes images", () => {
  test("renders the image after multiple searches", async () => {
    searchForInputValueMock.mockImplementation((_, stateToReplace) => {
      return Promise.resolve([stateToReplace, resultFixedWidth()]);
    });

    const {
      getByPlaceholderText,
      findAllByAltText,
      getByText,
      queryByAltText,
      debug,
      container,
      baseElement
    } = render(<App />);

    //Called on land to get Gif of the day
    expect(searchForInputValueMock).toHaveBeenCalledTimes(1);

    const searchInput = getByPlaceholderText("Enter a search term");
    fireEvent.input(searchInput, { target: { value: "test" } });
    fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });

    const gifResultImages = async () => {
      return await findAllByAltText("giphy_image");
    };

    expect(await gifResultImages()).toHaveLength(1);

    //Called after the first search is made
    expect(searchForInputValueMock).toHaveBeenCalledTimes(2);

    fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });

    //Called after the second search is made
    expect(searchForInputValueMock).toHaveBeenCalledTimes(3);
    await waitForDomChange({ baseElement }).then(mutationsList =>
      console.log("DOM changed!")
    );
    expect(await gifResultImages()).toHaveLength(2);

    //Remove Images
    const removeButton = getByText("Remove Images");
    fireEvent.click(removeButton);

    expect(queryByAltText("giphy_image")).toBeNull();
  });
});
