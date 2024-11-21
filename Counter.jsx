import React, { useState } from 'react';

const FirstComponent = () => {
  // State to track the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  // Function to reset the counter
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          My First React Counter
        </h1>
        
        <div className="text-6xl font-bold mb-6 text-indigo-600">
          {count}
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={decrementCounter}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Decrease
          </button>
          
          <button 
            onClick={resetCounter}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Reset
          </button>
          
          <button 
            onClick={incrementCounter}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
