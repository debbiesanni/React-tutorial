import React, { useState } from "react";
import useStyle from "./style";
  
const ReadMore = ({ children }) => {
    const style = useStyle();
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text"> 
      {isReadMore ? text?.slice(0, 150) : text}
      <div onClick={toggleReadMore} className={style.readOrHide} dangerouslySetInnerHTML={{ __html: isReadMore ? "...Read More" : " show less"}}></div>
    </div>
  );
};

export default ReadMore;

{/* <span onClick={toggleReadMore} className={style.readOrHide}> */}
        {/* {isReadMore ? "...Read More" : " show less"} */}
      {/* </span> */}