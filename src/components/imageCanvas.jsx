import React, { useState } from "react";
import ImagePattern from "./ImagePattern";
import 'bootstrap/dist/css/bootstrap.css';
import ColorPickerButton from "./ColorPickerButton";

const Imagecanvas = () => {
  const [showColorPicker, setShowColorPicker] = useState(null);
  const [shapeColors, setShapeColors] = useState({
    shirtImage: 'rgb(227, 20, 190)',
    crew_back: 'rgb(121, 237, 43)',
    crew_left: 'rgb(0,21,21)',
    crew_right: 'rgb(43,42,131)',
    front: 'rgb(21,21,98)',
    frontShd: 'rgb(0,21,21)',
    leftsideStripes: 'rgb(121,237,43)',
    leftsideStripes2: 'rgb(227,20,20)',
    frontStripes: 'rgb(0,21,21)',
    frontStripes2: 'rgb(43,42,131)',
    backStripes: 'rgb(227,20,190)',
    backStripes2: 'rgb(0,21,21)',
    backCollar: 'rgb(227,20,190)',
    front_collar: 'rgb(0,21,21)'
  });

  const handleButtonClick = (shape) => {
    setShowColorPicker(prevState => prevState === shape ? null : shape);
  };

  const handleColorChange = (color) => {
    const updatedColors = { ...shapeColors };
    const rgbaColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    updatedColors[showColorPicker] = rgbaColor;
    setShapeColors(updatedColors);
  };

  return (
    <div className='container '>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <div className="fronty">
            <ColorPickerButton
              shape="shirtImage"
              color={shapeColors.shirtImage}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="front"
              color={shapeColors.front}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="frontShd"
              color={shapeColors.frontShd}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="frontStripes"
              color={shapeColors.frontStripes}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="frontStripes2"
              color={shapeColors.frontStripes2}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="front_collar"
              color={shapeColors.front_collar}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
          </div>
          <div className="righty">
            <ColorPickerButton
              shape="crew_right"
              color={shapeColors.crew_right}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
          </div>
          <div className="lefty">
            <ColorPickerButton
              shape="crew_left"
              color={shapeColors.crew_left}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="leftsideStripes"
              color={shapeColors.leftsideStripes}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="leftsideStripes2"
              color={shapeColors.leftsideStripes2}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
          </div>
          <div className="backy">
            <ColorPickerButton
              shape="crew_back"
              color={shapeColors.crew_back}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="backStripes"
              color={shapeColors.backStripes}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="backStripes2"
              color={shapeColors.backStripes2}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
            <ColorPickerButton
              shape="backCollar"
              color={shapeColors.backCollar}
              showColorPicker={showColorPicker}
              onClick={handleButtonClick}
              onChange={handleColorChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <ImagePattern shapeColors={shapeColors} />
        </div>
      </div>
    </div>
  );
};

export default Imagecanvas;
