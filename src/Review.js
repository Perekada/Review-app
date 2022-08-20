import React, { useState } from 'react';
import reviews from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteLeft} from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = reviews[index]

  const checkNumber = (number) => {
    if (number>reviews.length-1) {
      return 0;
    }
    if (number<0){
      return reviews.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex ((index) =>{
      let newIndex = index+1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex ((index) =>{
      let newIndex = index-1;
      return checkNumber(newIndex);
    });
  };
  const Random =  () => {
    setIndex((index) =>{
      let newIndex = Math.floor(Math.random() * reviews.length);
      if (newIndex === index){
        newIndex = index + 1;
      }
    return checkNumber(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteLeft/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        < button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
        </button>
        < button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
        </button>
      </div>
      < button className='random-btn' onClick={Random}>suprise me</button>
    </article>
  );
};

export default Review