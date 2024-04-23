// ColorPickerButton.jsx
import React from 'react';
import Button from './Button';
import { CirclePicker } from 'react-color';

const ColorPickerButton = ({ shape, color, showColorPicker, onClick, onChange }) => {
  return (
    <div className='col-md-6'>
      <Button onClick={() => onClick(shape)} name={`${shape} Color`} />
      {showColorPicker && (showColorPicker === shape) && (
        <CirclePicker color={color} onChange={(color) => onChange(color, shape)} />
      )}
    </div>
  );
};

export default ColorPickerButton;
