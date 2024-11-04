import React from 'react';

const Alert = ({ message, type }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-700 border border-green-300',
    error: 'bg-red-100 text-red-700 border border-red-300',
    warning: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
    info: 'bg-blue-100 text-blue-700 border border-blue-300',
  };

  return (
    <div className={`p-4 mb-4 rounded-md ${alertStyles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
