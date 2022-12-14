import React, { useState, useRef, useEffect } from "react";
import Tesseract from "tesseract.js";

function preprocessImage(canvas) {
  const image = canvas
    .getContext("2d")
    .getImageData(0, 0, canvas.width, canvas.height);
  thresholdFilter(image.data, 0.5);
  return image;
}

// from https://github.com/processing/p5.js/blob/main/src/image/filters.js
function thresholdFilter(pixels, level) {
  if (level === undefined) {
    level = 0.5;
  }
  const thresh = Math.floor(level * 255);
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];

    const gray = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    let value;
    if (gray >= thresh) {
      value = 255;
    } else {
      value = 0;
    }
    pixels[i] = pixels[i + 1] = pixels[i + 2] = value;
  }
}

const Ingredients = ({ handleSubmit }) => {
  document.body.style.backgroundColor = "#efbed5";
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    //const canvas = photoRef.current;
    let ctx = photo.getContext("2d");
    //ctx.putImageData(preprocessImage(canvas), 0, 0);
    //const dataUrl = canvas.toDataURL("image/jpeg");

    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const handleClick = () => {
    let photo = photoRef.current;
    const dataUrl = photo.toDataURL();
    console.log(dataUrl);

    Tesseract.recognize(dataUrl, "eng", { logger: (m) => console.log(m) })
      .catch((err) => {
        console.error(err);
      })
      .then(({ data: { text } }) => {
        console.log(text);
        //setIngredients(text);
        handleSubmit(text);
      });
  };

  const [ingredients, setIngredients] = useState("");

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  return (
    <div class="wrapper2">
      <h3>
        <b>Scan your Ingredients Label Below</b>
      </h3>
      <div class="padding">
        <div classname="camera">
          <video ref={videoRef}></video>
          <button class="submitBtn" onClick={takePhoto}>
            Snap your pic, click until you're happy!
          </button>
        </div>
        <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
          <canvas ref={photoRef}></canvas>
        </div>
        <h4>
          <b>Or input the ingredients manually (seperated by commas):</b>
        </h4>
        <form>
          <label>
            <input
              type="text"
              value={ingredients}
              onChange={handleChange}
              name="name"
            />
          </label>
          <input
            type="submit"
            value="Next"
            onClick={() => {
              handleSubmit(ingredients);
            }}
          />
        </form>
        <button class="submitBtn" onClick={handleClick}>
          {" "}
          Ready to analyze?{" "}
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
