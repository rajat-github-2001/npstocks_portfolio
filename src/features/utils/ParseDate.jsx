import React from 'react'

const ParseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${month}/${day}/${year}`);
}

export default ParseDate;