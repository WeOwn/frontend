import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Propertycard } from "../../components/propertyCard/Propertycard";

import api from "../../service/apiGateway";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import PropertycardSkeleton from "../propertyCard/PropertycardSkeleton";

const Index = ({ projects }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ right: "0rem" }}
        onClick={onClick}
        className={styles.circle}
      >
        <IoArrowForwardSharp size="1.2rem" className={styles.arrow} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ right: "3rem" }}
        onClick={onClick}
        className={styles.circle}
      >
        <IoArrowBackSharp size="1.2rem" className={styles.arrow} />
      </div>
    );
  }

  const [visibleSlideCount, setVisibleSlideCount] = useState(0);
  const [totalSlideCount, setTotalSlideCount] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1280) setVisibleSlideCount(Math.min(projects?.length, 3));
    else if (width > 705) setVisibleSlideCount(Math.min(projects?.length, 2));
    else setVisibleSlideCount(Math.min(projects?.length, 1));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [projects]);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlideCount(projects?.length);
    }
  }, [projects]);

  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(projects?.length, 3),
    slidesToScroll: Math.min(projects?.length, 3),
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(projects?.length, 2),
          slidesToScroll: Math.min(projects?.length, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(projects?.length, 1),
          slidesToScroll: Math.min(projects?.length, 1),
        },
      },
    ],
  };

  const getSlideInfo = () => {
    if (visibleSlideCount > 0 && totalSlideCount > 0) {
      return `${Math.ceil(activeSlide / visibleSlideCount) + 1} of ${Math.ceil(
        totalSlideCount / visibleSlideCount
      )}`;
    }
    return null;
  };

  return (
    <div>
      <div className={styles.sliderdivp} id="divtoslide">
        {!projects ? (
          <>
            {console.log("outside")}
            <Slider {...settings} ref={sliderRef}>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <PropertycardSkeleton key={index} marginright="1rem" />
                ))}
            </Slider>
          </>
        ) : (
          <>
            {console.log("inside")}
            <Slider {...settings} ref={sliderRef}>
              {projects.map((property) => (
                <Propertycard
                  key={property._id}
                  {...property}
                  marginright="1rem"
                />
              ))}
            </Slider>
          </>
        )}
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {getSlideInfo() || ""}
      </div>
    </div>
  );
};

export default Index;
