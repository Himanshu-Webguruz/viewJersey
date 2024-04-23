import React, { useState, useEffect, useRef } from 'react';
import crew_back from "../assets/crew_back.png";
import shirtImage from '../assets/shirt.png';
import crew_right from "../assets/crew_right.png";
import crew_left from "../assets/crew_left.png";

const CanvasDraw = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    drawSampleImage1(ctx, canvas);
  }, []);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (buttonNumber) {
      case 1:
        drawSampleImage1(ctx, canvas);
        break;
      case 2:
        drawSampleImage2(ctx);
        break;
      case 3:
        drawSampleImage3(ctx);
        break;
      case 4:
        drawSampleImage4(ctx);
        break;
      default:
        break;
    }
  };

  const drawSampleImage1 = (ctx, canvas) => {
    const img = new Image();
    img.src = shirtImage;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 140, 40, 300, 600);
      const imageData = ctx.getImageData(140, 40, 300, 600);
      const updatedImageData = changeColor(imageData, shapeColors.shirtImage); // Assuming changeColor and shapeColors are defined
      ctx.putImageData(updatedImageData, 140, 40);
    };
  };

  const drawSampleImage2 = (ctx) => {
    const img2 = new Image();
    img2.src = crew_back;
    img2.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img2, 140, 40, 300, 600);

      const imgData1 = ctx.getImageData(140, 40, 300, 600);
      const updatedImgData1 = changeColor(imgData1, shapeColors.crew_back);
      ctx.putImageData(updatedImgData1, 140, 40);
  };
}

  const drawSampleImage3 = (ctx) => {
    const img3 = new Image();
    img3.src = crew_left;

    img3.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img3, 140, 40, 300, 600);

      const imageData2 = ctx.getImageData(140, 40, 300, 600);
      const updatedImageData2 = changeColor(imageData2, shapeColors.crew_left);
      ctx.putImageData(updatedImageData2, 140, 40);
  };
}

  const drawSampleImage4 = (ctx) => {
    const img4 = new Image();
    img4.src = crew_right;
    img4.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img4, 140, 40, 300, 600);

      const imageData3 = ctx.getImageData(140, 40, 300, 600);
      const updatedImageData3 = changeColor(imageData3, shapeColors.crew_right);
      ctx.putImageData(updatedImageData3, 140, 40);
    };
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick(1)}>Image 1</button>
        <button onClick={() => handleButtonClick(2)}>Image 2</button>
        <button onClick={() => handleButtonClick(3)}>Image 3</button>
        <button onClick={() => handleButtonClick(4)}>Image 4</button>
      </div>
      <canvas
        id="canvas"
        width={600}
        height={900}
        style={{ border: '1px solid black' }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default CanvasDraw;