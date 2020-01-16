import React, { useState } from 'react';

interface props {
  start: number;
  end: number;
  current: number;
  total: number;
}
const Pagenation = ({ start, end, current, total }: props) => {
  const [startIndex, setStart] = useState(start);
  const [endIndex, setEnd] = useState(end);
  const [currentIndex, setCurrent] = useState(current);

  const nextIndex = () => {
    setCurrent(currentIndex + 1);
    setEnd(endIndex + endIndex);
    setStart(startIndex + startIndex);
  };
  const prevIndex = () => {
    if (startIndex === 0) {
      return;
    }
    setCurrent(currentIndex - 1);
    setEnd(endIndex - endIndex);
    setStart(startIndex - startIndex);
  };
  const pageArray = [];
  for (let i = 0; i < total; i++) {
    pageArray.push(i + 1);
  }
  const target = pageArray.slice(startIndex, endIndex);
  return <div></div>;
};

export default Pagenation;
