"use client"

import React, { useState } from 'react';

const Expandable = (props) => {
  // console.log("props__", props);

  const { children, index, handleItemClick, openItemIndex } = props;



  return (
    <>
      <div
        className=" rounded-t-lg border border-neutral-200 bg-white p-2 ">

        <button
          className="flex justify-between gap-4 w-full "
          type="button"
          onClick={() => handleItemClick(index)}

        >

          {
            children[0] && <h2 className=" font-medium text-left"> {children[0]}</h2>
          }
          {
            children[1] && <span
              className="ml-auto h-5 w-5 ">
              {children[1]}

            </span>
          }


        </button>

      </div>
      {(openItemIndex || openItemIndex == 0) && children[2] && <p className='px-2 text-sm'>{children[2]}</p>}
    </>

  );
};

Expandable.Header = ({ children }) => <>{children}</>;
Expandable.Icon = ({ children }) => <>{children}</>;
Expandable.Body = ({ children }) => <>{children}</>;

export default Expandable;
