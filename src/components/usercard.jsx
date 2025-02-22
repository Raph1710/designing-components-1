// write the component code here
//eslint-disable-next-line
import React from 'react'
const userCardStyle = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
    TextAlign: "center",
    backgroundColor: "rgba(231, 220, 220, 0.32)",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  };
  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  };
  const textStyle = {
    fontSize: "18px",
    TextAlign: "left",
  };

const Usercard = () => {
    return(
    <div style={userCardStyle}>
        <img src="https://i.pinimg.com/736x/4b/73/dc/4b73dc1055a27d3a5b9e2a37be344b41.jpg" alt="profile picture" style={imageStyle}/>
        <h2>Sung Jinwoo</h2>
        <div style={textStyle}>
            <p>jinwoo@gmail.com</p>
            <p>010-1234-5678</p>
            <p>Shop No 84, Motiram Dayaram Chawl, S. J. Marg, Lower Parel, Mumbai</p>
        </div>


    </div>
    )
}

export default Usercard