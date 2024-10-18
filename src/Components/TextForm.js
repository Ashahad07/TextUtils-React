import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "success");
  };
  const handleLoClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");
  };
  const handleDeClick = (event) => {
    props.showAlert("Deleted the Text", "warning");
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("Changed")
    setText(event.target.value);
  };
  const handleCopy = () => {
    if (text === "") {
      props.showAlert("Please Write SomeThing to Copy", "warning");
    } else {
      var copyText = document.getElementById("myBox");
      copyText.select();
      // copyText.setSelectionRange(0, 99999)
      props.showAlert("Copy to your Clipboard", "primary");
      navigator.clipboard.writeText(copyText.value);
    }
  };
  const handleExtraSpaces = () => {
    // eslint-disable-next-line no-empty-character-class
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "primary");
  };
  const [text, setText] = useState("");
  let word = text.split(" ").filter((word) => word !== "").length;

  // setText("Enter text") //! correct way to change
  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 style={{ color: props.mode === "dark" ? "white" : "#174992" }}>
          {props.heading}{" "}
        </h2>
        <div className="mb-1">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#01051c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger my-2 mx-1"
          onClick={handleDeClick}
        >
          Delete
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {word} Words and {text.length} Character
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word !== "").length} Minutes
          read{" "}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}{" "}
        </p>
      </div>
    </>
  );
}
