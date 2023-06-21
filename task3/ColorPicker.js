import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };
  <br></br>

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor,height:'50px',width:'200px',borderRadius:'5px',border:'2px solid',marginTop:'375px' }}
      >
        Pick a color
      </button>
      {isOpen && (
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          {colors.map((color, index) => (
            <li key={index} onClick={() => handleColorClick(color)}>
              <div
                style={{
                  backgroundColor: color,
                  width: '50px',
                  height: '50px',
                  marginTop:'375px',
                }}
              ></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;