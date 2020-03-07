import fetchFromGiphyAPI from "../fetchFromGiphyAPI";
import { searchForInputValue, randomImagePicker } from "../searchForInputValue";
//import "@testing-library/jest-dom/extend-expect";
jest.mock("../fetchFromGiphyAPI");
const mockFetchFromGiphyAPI = {
  data: [
    {
      0: {
        images: {
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
      }
    },
    {
      1: {
        images: {
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
      }
    },
    {
      2: {
        images: {
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
      }
    }
  ]
};

const mockFetchFromGiphyAPI_1image = {
  data: [
    {
      0: {
        images: {
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
      }
    }
  ]
};

const result = {
  0: {
    images: {
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
  }
};

describe("handles an empty response correctly", () => {
  it("randomImagePicker picks a random image within the length of the array", () => {
    expect(randomImagePicker(mockFetchFromGiphyAPI)).toBeLessThan(
      mockFetchFromGiphyAPI.data.length
    );
  });

  it("returns an array with the key and value", async () => {
    fetchFromGiphyAPI.mockImplementation(() => {
      return Promise.resolve({ json: () => mockFetchFromGiphyAPI_1image });
    });

    await expect(
      searchForInputValue("gif of the day", "gotd")
    ).resolves.toEqual(["gotd", result]);
  });

  it("shows an alert when search result is blank", async () => {
    fetchFromGiphyAPI.mockImplementation(() => {
      return Promise.resolve({ json: () => ({ data: [] }) });
    });
    global.alert = jest.fn(() => true);

    await searchForInputValue("gif of the day", "gotd");
    console.log(global.alert.mock.calls);
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
