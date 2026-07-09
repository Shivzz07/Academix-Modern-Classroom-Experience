import React from 'react'
import { useRef, useEffect } from 'react'
import v7 from '../../assets/transition/v7.webm'

const Transition = () => {

  const videoRef = useRef();

  useEffect(() => {
  const v = videoRef.current;

  if (!v) return;

  v.load();

  v.play().then(() => {
    v.pause();
    v.currentTime = 0;
  }).catch(() => {});
}, []);

  return (
    <div className="overlay h-full fixed inset-0 z-999 scale-y-0 origin-top flex items-center justify-center">
  <video ref={videoRef} preload='auto'  className=" hand absolute left-1/2 -translate-x-1/2 top-[25%] w-225 h-auto object-contain max-w-none"playsInline >
    <source src={v7} type="video/webm" />
  </video>

</div>
  )
}

export default Transition