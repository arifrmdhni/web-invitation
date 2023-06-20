/* eslint-disable */
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";

const Button = ({name, onClick, toggle, soundPlaying}) => {

  const navigate = useNavigate();

  return (
    <div className="button-invite">
      <button onClick={
        onClick
      } data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000">{name}</button>
    </div>
  )
}

export default Button