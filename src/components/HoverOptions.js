import React, { useState } from "react";

export default function HoverOptions({
  propsWidth,
  propsHeight,
  index = "Change_image",
  removeImage,
  changeImage,
  imageURL,
  source,
  title
}) {
  const [copied, setCopied] = useState("");

  function goToSource() {}

  function copyURL() {
    const el = document.createElement("textarea");
    el.value = imageURL;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    copied === "" ? setCopied("copied") : setCopied("");
  }

  return (
    <div
      className={`hover_options ${index}`}
      style={{
        position: "absolute",
        width: propsWidth || "auto",
        height: propsHeight || "auto"
      }}
      title={title}
    >
      <ul>
        {index === "Change_image" ? (
          <li
            onClick={() => {
              changeImage();
            }}
          >
            Change image
          </li>
        ) : (
          <li
            onClick={() => {
              removeImage(index);
            }}
          >
            Remove
          </li>
        )}
        <li onClick={goToSource}>
          <a rel="noopener noreferrer" target="_blank" href={`${source}`}>
            Source
          </a>
        </li>
        <li className={`copy ${copied}`} onClick={copyURL}></li>
      </ul>
    </div>
  );
}
