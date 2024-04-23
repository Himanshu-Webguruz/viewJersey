import React, { useRef, useEffect } from "react";
import shirtImage from "../assets/shirt.png";
import front from '../assets/front.png'
import crew_back from "../assets/crew_back.png";
import crew_left from "../assets/crew_left.png";
import crew_right from "../assets/crew_right.png";
import frontShd from '../assets/frontShd.png';
import leftsideStripes from '../assets/leftsideStripes.png';
import leftsideStripes2 from '../assets/leftsideStripes2.png';
import frontStripes from '../assets/frontStripes.png';
import frontStripes2 from '../assets/frontStripes2.png';
import backStripes from '../assets/backStripes.png'
import backStripes2 from '../assets/backStripes2.png'
import backCollar from '../assets/backCollar.png'
import front_collar from '../assets/front_collar.png'

const ImagePattern = ({ shapeColors }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const img2 = new Image();
    img2.src = crew_back;

    const backStr = new Image();
    backStr.src = backStripes;

    const backStrTwo = new Image();
    backStrTwo.src = backStripes2;

    const backColl=new Image()
    backColl.src=backCollar;

    img2.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img2, 140, 40, 300, 600);

      const imgData1 = context.getImageData(140, 40, 300, 600);
      const updatedImgData1 = changeColor(imgData1, shapeColors.crew_back);
      context.putImageData(updatedImgData1, 140, 40);


      // Create a temporary canvas to draw the second image
      const tempCanvasbackStr = document.createElement("canvas");
      tempCanvasbackStr.width = 300;
      tempCanvasbackStr.height = 600;
      const textContextbackStr = tempCanvasbackStr.getContext("2d");
      textContextbackStr.drawImage(backStr, 0, 0, 300, 600);
      const tempImagebackStr = textContextbackStr.getImageData(0, 0, 300, 600);
      const updatedTempImagebackStr = changeColor(tempImagebackStr, shapeColors.backStripes);
      textContextbackStr.putImageData(updatedTempImagebackStr, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasbackStr, 140, 40);


      // Create a temporary canvas to draw the 3rd image
      const tempCanvasbackStr2 = document.createElement("canvas");
      tempCanvasbackStr2.width = 300;
      tempCanvasbackStr2.height = 600;
      const textContextbackStr2 = tempCanvasbackStr2.getContext("2d");
      textContextbackStr2.drawImage(backStrTwo, 0, 0, 300, 600);
      const tempImagebackStr2 = textContextbackStr2.getImageData(0, 0, 300, 600);
      const updatedTempImagebackStr2 = changeColor(tempImagebackStr2, shapeColors.backStripes2);
      textContextbackStr2.putImageData(updatedTempImagebackStr2, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasbackStr2, 140, 40);

      // Create a temporary canvas to draw the 3rd image
      const tempCanvasbackCollar = document.createElement("canvas");
      tempCanvasbackCollar.width = 300;
      tempCanvasbackCollar.height = 600;
      const textContextbackCollar = tempCanvasbackCollar.getContext("2d");
      textContextbackCollar.drawImage(backColl, 0, 0, 300, 600);
      const tempImagebackCollar = textContextbackCollar.getImageData(0, 0, 300, 600);
      const updatedTempImagebackCollar = changeColor(tempImagebackCollar, shapeColors.backCollar);
      textContextbackCollar.putImageData(updatedTempImagebackCollar, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasbackCollar, 140, 40);


    };
  }, [shapeColors.crew_back,shapeColors.backStripes,shapeColors.backStripes2,shapeColors.backCollar]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const img3 = new Image();
    img3.src = crew_left;

    const leftStripe=new Image();
    leftStripe.src=leftsideStripes;

    const leftStripe2=new Image()
    leftStripe2.src= leftsideStripes2;

    img3.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img3, 140, 40, 300, 600);

      const imageData2 = context.getImageData(140, 40, 300, 600);
      const updatedImageData2 = changeColor(imageData2, shapeColors.crew_left);
      context.putImageData(updatedImageData2, 140, 40);
    
      // Create a temporary canvas to draw the second image
      const tempCanvasLeftStr = document.createElement("canvas");
      tempCanvasLeftStr.width = 300;
      tempCanvasLeftStr.height = 600;
      const textContextLeftStr = tempCanvasLeftStr.getContext("2d");
      textContextLeftStr.drawImage(leftStripe, 0, 0, 300, 600);
      const tempImageLeftStr = textContextLeftStr.getImageData(0, 0, 300, 600);
      const updatedTempImageLeftStr = changeColor(tempImageLeftStr, shapeColors.leftsideStripes);
      textContextLeftStr.putImageData(updatedTempImageLeftStr, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasLeftStr, 140, 40);

      // Create a temporary canvas to draw the third image
      const tempCanvasLeftStr2 = document.createElement("canvas");
      tempCanvasLeftStr2.width = 300;
      tempCanvasLeftStr2.height = 600;
      const textContextLeftStr2 = tempCanvasLeftStr2.getContext("2d");
      textContextLeftStr2.drawImage(leftStripe2, 0, 0, 300, 600);
      const tempImageLeftStr2 = textContextLeftStr2.getImageData(0, 0, 300, 600);
      const updatedTempImageLeftStr2 = changeColor(tempImageLeftStr2, shapeColors.leftsideStripes2);
      textContextLeftStr2.putImageData(updatedTempImageLeftStr2, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasLeftStr2, 140, 40);

    
    
    };
  }, [shapeColors.crew_left,shapeColors.leftsideStripes,shapeColors.leftsideStripes2]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const img4 = new Image();
    img4.src = crew_right;

    img4.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img4, 140, 40, 300, 600);

      const imageData3 = context.getImageData(140, 40, 300, 600);
      const updatedImageData3 = changeColor(imageData3, shapeColors.crew_right);
      context.putImageData(updatedImageData3, 140, 40);
    };
  }, [shapeColors.crew_right]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const img = new Image();
    img.src = shirtImage;
    
    const shoulderImg = new Image();
    shoulderImg.src = front;

    const shdWideImg=new Image();
    shdWideImg.src=frontShd;

    const frontStripe=new Image();
    frontStripe.src=frontStripes;

    const frontStripe2=new Image();
    frontStripe2.src=frontStripes2;

    const frontColl=new Image();
    frontColl.src=front_collar;


    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 140, 40, 300, 600);

      const imageData = context.getImageData(140, 40, 300, 600);
      const updatedImageData = changeColor(imageData, shapeColors.shirtImage);
      context.putImageData(updatedImageData, 140, 40);


      // Create a temporary canvas to draw the second image
      const tempCanvasShd = document.createElement("canvas");
      tempCanvasShd.width = 300;
      tempCanvasShd.height = 600;
      const textContextShd = tempCanvasShd.getContext("2d");
      textContextShd.drawImage(shoulderImg, 0, 0, 300, 600);
      const tempImageDataShd = textContextShd.getImageData(0, 0, 300, 600);
      const updatedTempImageDataShd = changeColor(tempImageDataShd, shapeColors.front);
      textContextShd.putImageData(updatedTempImageDataShd, 0, 0);

      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasShd, 140, 40);

      // Create a temporary canvas to draw the third image
      const tempCanvasShdWide = document.createElement("canvas");
      tempCanvasShdWide.width = 300;
      tempCanvasShdWide.height = 600;
      const tempContextShdWide = tempCanvasShdWide.getContext("2d");
      tempContextShdWide.drawImage(shdWideImg, 0, 0, 300, 600);
      const tempImageDataShdWide = tempContextShdWide.getImageData(0, 0, 300, 600);
      const updatedTempImageDataShdWide = changeColor(tempImageDataShdWide, shapeColors.frontShd);
      tempContextShdWide.putImageData(updatedTempImageDataShdWide, 0, 0);
  
      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasShdWide, 140, 40);


      // Create a temporary canvas to draw the 4rd image
      const tempCanvasFrontStr = document.createElement("canvas");
      tempCanvasFrontStr.width = 300;
      tempCanvasFrontStr.height = 600;
      const tempContextFrontStr = tempCanvasFrontStr.getContext("2d");
      tempContextFrontStr.drawImage(frontStripe, 0, 0, 300, 600);
      const tempImageDataFrontStr = tempContextFrontStr.getImageData(0, 0, 300, 600);
      const updatedTempImageDataFrontStr = changeColor(tempImageDataFrontStr, shapeColors.frontStripes);
      tempContextFrontStr.putImageData(updatedTempImageDataFrontStr, 0, 0);
  
      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasFrontStr, 140, 40);


      // Create a temporary canvas to draw the 5th image
      const tempCanvasFrontStr2 = document.createElement("canvas");
      tempCanvasFrontStr2.width = 300;
      tempCanvasFrontStr2.height = 600;
      const tempContextFrontStr2 = tempCanvasFrontStr2.getContext("2d");
      tempContextFrontStr2.drawImage(frontStripe2, 0, 0, 300, 600);
      const tempImageDataFrontStr2 = tempContextFrontStr2.getImageData(0, 0, 300, 600);
      const updatedTempImageDataFrontStr2 = changeColor(tempImageDataFrontStr2, shapeColors.frontStripes2);
      tempContextFrontStr2.putImageData(updatedTempImageDataFrontStr2, 0, 0);
  
      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasFrontStr2, 140, 40);


      // Create a temporary canvas to draw the 6th image
      const tempCanvasFrontColl = document.createElement("canvas");
      tempCanvasFrontColl.width = 300;
      tempCanvasFrontColl.height = 600;
      const tempContextFrontColl = tempCanvasFrontColl.getContext("2d");
      tempContextFrontColl.drawImage(frontColl, 63, -2, 172, 100);
      const tempImageDataFrontColl = tempContextFrontColl.getImageData(63, -2, 172, 100);
      const updatedTempImageDataFrontColl = changeColor(tempImageDataFrontColl, shapeColors.front_collar);
      tempContextFrontColl.putImageData(updatedTempImageDataFrontColl, 63, -2);
  
      // Draw the updated second image on the main canvas
      context.drawImage(tempCanvasFrontColl, 140, 40);
    };

  }, [shapeColors.shirtImage,shapeColors.front,shapeColors.frontShd,shapeColors.frontStripes,shapeColors.frontStripes2,shapeColors.front_collar]);

  const changeColor = (imageData, color) => {
    const { data } = imageData;
    const [red, green, blue] = color.match(/\d+/g).map(Number);
    for (let i = 0; i < data.length; i += 4) {
      data[i] = red;
      data[i + 1] = green;
      data[i + 2] = blue;
    }
    return imageData;
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={700}
      style={{ border: "1px solid black" }}
    />
  );
};

export default ImagePattern;
