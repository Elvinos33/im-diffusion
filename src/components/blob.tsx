"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import React from 'react';
// const useMousePosition = () => {
//   const [
//     mousePosition,
//     setMousePosition
//   ] = React.useState({ x: null, y: null });
//   React.useEffect(() => {
//     const updateMousePosition = ev => {
//       setMousePosition({ x: ev.clientX, y: ev.clientY });
//     };
//     window.addEventListener('mousemove', updateMousePosition);
//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//     };
//   }, []);
//   return mousePosition;
// };
// export default useMousePosition;

export function Blob(){
    // const mousePosition = useMousePosition();

    return(
        // <motion.div initial={{ opacity: 0, x: mousePosition.x, y: mousePosition.y }} animate={{ opacity: 1, x: mousePosition.x, y: mousePosition.y, transition: {type: "just", duration: "0.2"} }} className="w-[0.1px] h-[0.1px] aspect-square fixed lg:flex justify-center items-center overflow-visible -z-10 hidden">
            <div className="w-full h-full absolute flex justify-center items-center -z-20">
              <div className="w-72 min-w-[18rem] h-72 min-h-[18rem] bg-primary/50 aspect-square rounded-full blur-[160px]"></div>
            </div>
        // </motion.div>
    )
}