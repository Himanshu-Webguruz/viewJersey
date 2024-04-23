import React, { useState, useEffect, useRef } from 'react';
import crew_back from "../assets/crew_back.png";
import shirtImage from '../assets/shirt.png';
import crew_right from "../assets/crew_right.png";
import crew_left from "../assets/crew_left.png";
import front from '../assets/front.png'
import frontShd from '../assets/frontShd.png';
import frontStripes from '../assets/frontStripes.png';
import frontStripes2 from '../assets/frontStripes2.png';
import backStripes from '../assets/backStripes.png'
import backStripes2 from '../assets/backStripes2.png'
import backCollar from '../assets/backCollar.png'
import leftsideStripes from '../assets/leftsideStripes.png';
import leftsideStripes2 from '../assets/leftsideStripes2.png';
import rightsideShoulder from '../assets/rightsideShoulder.png'
import rightsideStripes from '../assets/rightsideStripes.png'
import rightsideStripes2 from '../assets/rightsideStripes2.png'
import leftsideShoulder from '../assets/leftsideShoulder.png'
import backshouldernarrow from '../assets/backshouldernarrow.png'
import backshoulderwide from '../assets/backshoulderwide.png'
import front_collar from '../assets/front_collar.png'

const CanvasDraw = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const img1 = new Image();
      img1.src = shirtImage;
      
      await img1.decode(); // Wait for the image to be fully loaded
      setImages((prevImages) => ({ ...prevImages, 1: img1 }));

      const img2 = new Image();
      img2.src = crew_back;
      await img2.decode(); // Wait for the image to be fully loaded
      setImages((prevImages) => ({ ...prevImages, 2: img2 }));

      const img3 = new Image();
      img3.src = crew_left;
      await img3.decode(); // Wait for the image to be fully loaded
      setImages((prevImages) => ({ ...prevImages, 3: img3 }));

      const img4 = new Image();
      img4.src = crew_right;
      await img4.decode(); // Wait for the image to be fully loaded
      setImages((prevImages) => ({ ...prevImages, 4: img4 }));
    };

    loadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[selectedButton];
    if (img) {
      ctx.drawImage(img, 140, 40, 300, 600);
    }
    if(selectedButton==1){
      
    const overlayImg = new Image();
    overlayImg.src = front;
    overlayImg.onload = () => {
      // Adjust the position and size as needed
      ctx.drawImage(overlayImg, 140, 40, 300, 600);
    };

    const overlayImageTwo=new Image();
    overlayImageTwo.src=frontShd;
    overlayImageTwo.onload=()=>{ 
      ctx.drawImage(overlayImageTwo,140,40,300,600)
    }
    const overlayImageThree=new Image();
    overlayImageThree.src=frontStripes;
    overlayImageThree.onload=()=>{ 
      ctx.drawImage(overlayImageThree,140,40,300,600)
    }
    const overlayImageFour=new Image();
    overlayImageFour.src=frontStripes2;
    overlayImageFour.onload=()=>{ 
      ctx.drawImage(overlayImageFour,140,40,300,600)
    }
    const overlayImageFive=new Image();
    overlayImageFive.src=front_collar;
    overlayImageFive.onload=()=>{ 
      ctx.drawImage(overlayImageFive,200,40,180,100)                                                                                                                                                                            
    }
  }
    else if (selectedButton==2) {
      const overlayBackImg=new Image();
      overlayBackImg.src=backStripes;
      overlayBackImg.onload=()=>{ 
        ctx.drawImage(overlayBackImg,140,40,300,600)
      }
      const overlayBackImgTwo=new Image();
      overlayBackImgTwo.src=backStripes2;
      overlayBackImgTwo.onload=()=>{ 
        ctx.drawImage(overlayBackImgTwo,140,40,300,600)
      }
      const overlayBackImgThree=new Image();
      overlayBackImgThree.src=backCollar;
      overlayBackImgThree.onload=()=>{ 
        ctx.drawImage(overlayBackImgThree,140,40,300,600)
      }
      const overlayBackImgFour=new Image();
      overlayBackImgFour.src=backshouldernarrow;
      overlayBackImgFour.onload=()=>{ 
        ctx.drawImage(overlayBackImgFour,140,40,300,600)
      }
      
    }
    else if (selectedButton==3) {
      const overlayLeftImg=new Image();
      overlayLeftImg.src=leftsideStripes;
      overlayLeftImg.onload=()=>{ 
        ctx.drawImage(overlayLeftImg,140,40,300,600)
      }
      const overlayLeftImgTwo=new Image();
      overlayLeftImgTwo.src=leftsideStripes2;
      overlayLeftImgTwo.onload=()=>{ 
        ctx.drawImage(overlayLeftImgTwo,140,40,300,600)
      }
      const overlayLeftImgThree=new Image();
      overlayLeftImgThree.src=leftsideShoulder;
      overlayLeftImgThree.onload=()=>{ 
        ctx.drawImage(overlayLeftImgThree,140,40,300,600)
      }
    }
    else if (selectedButton==4) {
      const overlayRightImg=new Image();
      overlayRightImg.src=rightsideStripes;
      overlayRightImg.onload=()=>{ 
        ctx.drawImage(overlayRightImg,140,40,300,600)
      }
      const overlayRightImgTwo=new Image();
      overlayRightImgTwo.src=rightsideStripes2;
      overlayRightImgTwo.onload=()=>{ 
        ctx.drawImage(overlayRightImgTwo,140,40,300,600)
      }
      const overlayRightImgThree=new Image();
      overlayRightImgThree.src=rightsideShoulder;
      overlayRightImgThree.onload=()=>{ 
        ctx.drawImage(overlayRightImgThree,140,40,300,600)
      }
      
    }
  }, [images, selectedButton]);

  const buttonLabels = ['Front', 'Back', 'Left', 'Right'];

  return (
    <div>
      <div>
        {buttonLabels.map((label, index) => (
          <button key={index} onClick={() => setSelectedButton(index + 1)}>
            {label}
          </button>
        ))}
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
