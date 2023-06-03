import React, { useState } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [otherInputValue, setOtherInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setOtherInputValue(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <input type="text" value={otherInputValue} />
      <button onClick={handleButtonClick}>Transfer</button>
    </div>
  );
}

export default MyComponent;