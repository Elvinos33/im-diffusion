"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import React from 'react';
const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;

export function MouseBlob(){
    const mousePosition = useMousePosition();

    return(
        <motion.div animate={{ x: mousePosition.x, y: mousePosition.y, transition: {type: "just", duration: "0.6"} }}  className="w-[1px] h-[1px] aspect-square absolute flex justify-center items-center overflow-visible -z-10">
            <div className="w-72 min-w-[18rem] h-72 min-h-[18rem] bg-gradient-to-br from-blue-800 to-blue-300 aspect-square rounded-full blur-[160px]"></div>
        </motion.div>
    )
}