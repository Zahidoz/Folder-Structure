import React from "react";
import "./Demo.scss";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Demo = () => {
  const basliq1 = useRef();
  const basliq2 = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.75 } });

  useEffect(() => {
    const basliq1_G = basliq1.current;
    const basliq2_G = basliq2.current;
    gsap.registerPlugin(ScrollTrigger)   
    //tl.fromTo(basliq1_G, {opacity:0, x: -50},{opacity:1, x:0 })
    //tl.fromTo(basliq2_G, {scale:.4, opacity:0, x: 50},{scale:1, opacity:1, x:0 },'<')
   
    gsap.to(basliq2_G,{
      scrollTrigger:{
        trigger: basliq2_G,
        toggleActions: "restart none none none",
        markers:true,
        start: "0 70%",
      },
      x:200,
      duration:3
    })

  }, []);

  return (
    <div>
      <div className="sec1">
        <h1 ref={basliq1}>Hello World</h1>
      </div>
      <div className="sec2">
        <h1 ref={basliq2}>Hello World</h1>
      </div>
    </div>
  );
};

export default Demo;
