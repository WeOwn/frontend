import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
import Section8 from "./Section8.jsx";
import Section9 from "./Section9.jsx";
import Section10 from "./Section10.jsx";
import Section11 from "./Section11.jsx";
import Section12 from "./Section12.jsx";
import api from "../../service/apiGateway";
import { useParams } from "react-router-dom";
import Navbar2 from "../../components/navbar/Navbar2.jsx";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./../../auth/index";
import { setPropertiesViewed } from "../../redux/userSlice.jsx";


const PropertyDescription = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
  const section8 = useRef(null);
  const section9 = useRef(null);
  const section10 = useRef(null);
  const section11 = useRef(null);
  const section12 = useRef(null);

  const [data, setData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { id } = useParams();
  console.log("id-> ", id);
  const fetchdata = async () => {
    // setLoading(true);
    // setError(null);
    try {
      const response = await api.get(`/property/${id}`);
      // const data=response.data.data;
      // console.log("desc response-> ", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // setError("Failed to fetch data");
    }
    //  finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const {
    amenities,
    pricing_details,
    name,
    description,
    type,
    location,
    price,
    size,
    features,
    images,
    builder,
    iframe,
    floor_images,
  } = data;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const dispatch = useDispatch();
  const handlePropertiesViewed = () => {
    dispatch(setPropertiesViewed(id));
  };
  const userDetails = useSelector((store) => store.user);
  useEffect(() => {
    handlePropertiesViewed();
  }, []);

  const [stick, setStick] = useState(false);

  const [section, setSection] = useState(1);
  const reducescroll = 0;


  const handlescroll = () => {
    if (window.scrollY >= 76) setStick(true);
    else setStick(false);

    if (
      section !== 1 &&
      section1?.current &&
      section2?.current &&
      window.scrollY >= 0 &&
      window.scrollY < section2.current.offsetTop - reducescroll
    ) {
      setSection(1);
    } else if (
      section !== 2 &&
      section2?.current &&
      section3?.current &&
      window.scrollY >= section2.current.offsetTop - reducescroll &&
      window.scrollY < section3.current.offsetTop - reducescroll
    ) {
      setSection(2);
    } else if (
      section !== 3 &&
      section3?.current &&
      section4?.current &&
      window.scrollY >= section3.current.offsetTop - reducescroll &&
      window.scrollY < section4.current.offsetTop - reducescroll
    ) {
      setSection(3);
    } else if (
      section !== 4 &&
      section4?.current &&
      section5?.current &&
      window.scrollY >= section4.current.offsetTop - reducescroll &&
      window.scrollY < section5.current.offsetTop - reducescroll
    ) {
      setSection(4);
    } else if (
      section !== 5 &&
      section5?.current &&
      section6?.current &&
      window.scrollY >= section5.current.offsetTop - reducescroll &&
      window.scrollY < section6.current.offsetTop - reducescroll
    ) {
      setSection(5);
    } else if (
      section !== 6 &&
      section6?.current &&
      section7?.current &&
      window.scrollY >= section6.current.offsetTop - reducescroll &&
      window.scrollY < section7.current.offsetTop - reducescroll
    ) {
      setSection(6);
    } else if (
      section !== 7 &&
      section7?.current &&
      section8?.current &&
      window.scrollY >= section7.current.offsetTop - reducescroll &&
      window.scrollY < section8.current.offsetTop - reducescroll
    ) {
      setSection(7);
    } else if (
      section !== 8 &&
      section8?.current &&
      section9?.current &&
      window.scrollY >= section8.current.offsetTop - reducescroll &&
      window.scrollY < section9.current.offsetTop - reducescroll
    ) {
      setSection(8);
    } else if (
      section !== 9 &&
      section9?.current &&
      section10?.current &&
      window.scrollY >= section9.current.offsetTop - reducescroll &&
      window.scrollY < section10.current.offsetTop - reducescroll
    ) {
      setSection(9);
    } else if (
      section !== 10 &&
      section10?.current &&
      section11?.current &&
      window.scrollY >= section10.current.offsetTop - reducescroll &&
      window.scrollY < section11.current.offsetTop - reducescroll
    ) {
      setSection(10);
    } else if (
      section !== 11 &&
      section11?.current &&
      section12?.current &&
      window.scrollY >= section11.current.offsetTop - reducescroll &&
      window.scrollY < section12.current.offsetTop - reducescroll
    ) {
      setSection(11);
    } else if (
      section !== 12 &&
      section12?.current &&
      window.scrollY >= section12.current.offsetTop - reducescroll
    ) {
      setSection(12);
    }
  };

  useEffect(() => {
    handlescroll();
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);

  }, []);


  const handlesectionScroll = (sectionRef) => {
    console.log("sectionref-> ", sectionRef);
    if (!sectionRef)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    else if (sectionRef.current)
      window.scrollTo({
        top: sectionRef.current.offsetTop - reducescroll,
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* <Navbar2 /> */}
      <div className={styles.maindiv}>
        <div
          ref={section1}
          className={`${styles.section1} ${stick ? styles.section1stick : ""}`}
          // className={styles.section1stick}
        >
          <Section1
            name={name}
            stick={stick}
            handlesectionScroll={(section) => handlesectionScroll(section)}
            section1={section1}
            section2={section2}
            section3={section3}
            section4={section4}
            section5={section5}
            section6={section6}
            section7={section7}
            section8={section8}
            section9={section9}
            section10={section10}
            section11={section11}
            section12={section12}
            section={section}
          />
        </div>

        <div className={styles.seconddiv}>

          <div className={styles.section2} ref={section2}>
            <Section2
              name={name}
              description={description}
              builder={builder}
              amenities={amenities}
              type={type}
              features={features}
              images={images}
              size={size}
              iframe={iframe}
              floor_images={floor_images}

              id={id}
              city={location?.city}

            />
          </div>
          <div className={styles.section3} ref={section3}>
            <Section3 pricingdetails={pricing_details} />
          </div>
          <div className={styles.section4} ref={section4}>
            <Section4 />
          </div>
          <div className={styles.section5} ref={section5}>
            <Section5 name={name} />
          </div>
          <div className={styles.section6} ref={section6}>

            <Section6 name={name} id={id} />

          </div>
          <div className={styles.section7} ref={section7}>
            <Section7 />
          </div>
          <div className={styles.section8} ref={section8}>
            <Section8 builder={builder} />
          </div>

          <div className={styles.section9} ref={section9}>

            <Section9 id={id} />
          </div>
          <div className={styles.section10} ref={section10}>
            <Section10 id={id} />

          </div>
          <div className={styles.section11} ref={section11}>
            <Section11 />
          </div>
          <div className={styles.section12} ref={section12}>

            <Section12 id={id} />

          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDescription;
