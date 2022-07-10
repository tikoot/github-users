import React from "react";
import './ClearBtn.css';


const ClearBtn = (props) => {
    
    const clearClick = () => {
        props.setUsername('');
        props.setData({})
       }
    
       const displayBtn = props.username.length > 0;

    return (
        <div>
              {displayBtn ?  (<button className="clear_btn"  onClick={clearClick}>Clear</button>) : (<div></div>)}
        </div>
      
    )
}
export default ClearBtn;