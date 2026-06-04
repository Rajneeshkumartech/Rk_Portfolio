'use client';

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import {useSwiper} from "swiper/react";



const WorkSliderBtns = ({containerStyles , BtnStyles , IconStyles}) => {

    const swiper = useSwiper();


  return (
  <div className={containerStyles}>
<button className={BtnStyles} onClick={() => swiper.slidePrev()}><PiCaretLeftBold  className={IconStyles}/></button>
<button className={BtnStyles} onClick={() => swiper.slideNext()}><PiCaretRightBold className={IconStyles}/></button>
  </div>
  )
}

export default WorkSliderBtns