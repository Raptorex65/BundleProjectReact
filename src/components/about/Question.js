import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header className='titleandbutton'>
        <span>  <h6>{title}</h6> </span>
        <span>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        </span>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
