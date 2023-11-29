"use client"
import React, { useState } from 'react';
import Expandable from './Expandable';

const FAQSection = ({ faqData }) => {

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <div className=' space-y-2'>

      <h1 className='text-xl font-semibold'>FAQ Section</h1>

      <div className="grid grid-flow-row space-y-2">
        {faqData.map((item, index) => {
          //  console.log("item__", item);
          return (

            <Expandable key={index} openItemIndex={openItemIndex} index={index} handleItemClick={handleItemClick}>

              <Expandable.Header >
                {item.header}
              </Expandable.Header>

              <Expandable.Icon >{index === openItemIndex ? (item?.icon?.collapse || '-') : (item?.icon?.expand || '+')}</Expandable.Icon>

              {
                (openItemIndex === index) && <Expandable.Body >
                  {item.content_body}
                </Expandable.Body>
              }
            </Expandable>

          )
        })}
      </div>

    </div>

  );
};

export default FAQSection;
