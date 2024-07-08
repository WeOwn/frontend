import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

import { Builderscard } from "../builderscard/Builderscard";
import api from "../../service/apiGateway";

const Index = ({ builders }) => {
  const List1 = [
    { id: "1", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "2", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "3", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
    { id: "4", heading: "Sara Johnson", subheading: "Delhi City Towner" },
  ];
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        // className={className}
        // style={{
        //   ...style,
        // }}
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
        // className={className}
        // style={{
        //   ...style,
        // }}
        style={{ right: "3rem" }}
        onClick={onClick}
        className={styles.circle}
      >
        <IoArrowBackSharp size="1.2rem" className={styles.arrow} />
      </div>
    );
  }

  const [visibleSlideCount, setVisibleSlideCount] = useState(0);
  const [totalslideCount, setTotalSlideCount] = useState(0);
  const [allbuilders, setAllBuilders] = useState([]);

  useEffect(() => {
    if (sliderRef.current) {
      const { slidesToShow } = sliderRef.current.innerSlider.props;
      setTotalSlideCount(sliderRef.current.innerSlider.props.children.length);
      setVisibleSlideCount(slidesToShow);
    }
  }, [window.innerWidth]);

  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(builders?.length, 4),
    slidesToScroll: Math.min(builders?.length, 4),
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: Math.min(builders?.length, 3),
          slidesToScroll: Math.min(builders?.length, 3),
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: Math.min(builders?.length, 2),
          slidesToScroll: Math.min(builders?.length, 2),
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: Math.min(builders?.length, 1),
          slidesToScroll: Math.min(builders?.length, 1),
        },
      },
    ],
  };

  // const fetchData = async () => {
  //   try {
  //     // const [buildersResponse, propertiesResponse] = await Promise.all([
  //     //   api.get("/builder/all"),
  //     //   api.get("property/list?min-price=0&page=page-2"),
  //     // ]);

  //     const buildersResponse = await api.get("/builder/all");

  //     console.log("All builders:", buildersResponse.data.data);

  //     setAllBuilders(buildersResponse.data.data);
  //   } catch (error) {
  //     console.error("Error occurred while fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <div className={styles.sliderdivp} id="divtoslide">
        <Slider {...settings} ref={sliderRef}>
          {builders?.map((builder, index) => (
            <Builderscard key={builder.id} {...builder} marginright="1rem" />
          ))}
        </Slider>
      </div>
      <div
        // className={className}
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {parseInt(activeSlide / visibleSlideCount) + 1} of{" "}
        {parseInt(totalslideCount / visibleSlideCount)}
      </div>
    </div>
  );
};

export default Index;
