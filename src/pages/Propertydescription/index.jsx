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
import useGetPropertyDetails from "../../hooks/useGetPropertyDetails.js";

const PropertyDescription = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  // const section7 = useRef(null);
  // const section8 = useRef(null);


 

 
  const { id } = useParams();
  
  const {loading,fetched,error,data}=useGetPropertyDetails(id);

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
  } = data || {};


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
  console.log("section->",section)
  const reducescroll = 76;
  const [reviewAdded,setReviewAdded]=useState(0);
  const handleReviewAdded=()=>{
    setReviewAdded(reviewAdded+1);
  }

  

  const handlescroll = () => {
   
    if (window.scrollY >= 76) setStick(true);
    else setStick(false);

  if (
      section !== 2 &&
      section2?.current &&
      
      window.scrollY >= section2.current.offsetTop-reducescroll &&
      window.scrollY <= section2.current.offsetTop+section2.current.offsetHeight-reducescroll
    ) {
      setSection(2);
    } else if (
      section !== 3 &&
      section3?.current &&
      
      window.scrollY >= section3.current.offsetTop-reducescroll &&
      window.scrollY <= section3.current.offsetTop+section3.current.offsetHeight-reducescroll
    ) {
      setSection(3);      
    }else if (
      section !== 4 &&
      section4?.current &&
      
      window.scrollY >= section4.current.offsetTop-reducescroll &&
      window.scrollY <= section4.current.offsetTop+section4.current.offsetHeight-reducescroll
    ) {
      setSection(4);} else if (
      section !== 5 &&
      section5?.current &&
      
      window.scrollY >= section5.current.offsetTop-reducescroll &&
      window.scrollY <= section5.current.offsetTop+section5.current.offsetHeight-reducescroll
    ) {
      setSection(5);
    }  else if (
      section !== 6 &&
      section6?.current &&
      
      window.scrollY >= section6.current.offsetTop-reducescroll&&
      window.scrollY <=section6.current.offsetTop+section6.current.offsetHeight-reducescroll
    ) {
      setSection(6);} 
      else setSection(1);
    // } else if (
    //   section !== 7 &&
    //   section7?.current &&
      
    //   window.scrollY >= section7.current.offsetTop - reducescroll &&
    //   window.scrollY <= section7.current.offsetTop+section7.current.offsetHeight-reducescroll
    // ) {
    //   setSection(7);
    // } 
    //  else if (
    //   section !== 8 &&
    //   section8?.current &&
      
    //   window.scrollY >= section8.current.offsetTop - reducescroll &&
    //   window.scrollY <= section8.current.offsetTop+section8.current.offsetHeight-reducescroll
    // ) {
    //   setSection(8);
    
  };

  useEffect(() => {
    handlescroll();
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handlesectionScroll = (id) => {
    const sectionRef=id===2?section2:id===3?section3:id===4?section4:id===5?section5:id===6?section6:null  
    if (!sectionRef)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    else if (sectionRef.current)
      window.scrollTo({
        top: sectionRef.current.offsetTop-reducescroll,
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* <Navbar2 /> */}
      <div className={styles.maindiv}>
        <div
          ref={section1}
          id="section1"
          className={` ${stick ? styles.section1stick : styles.section1}`}
         
        
        >
          <Section1
            name={name}
            stick={stick}
            handlesectionScroll={(section) => handlesectionScroll(section)}
           
           
        
            section={section}
          />
        </div>
        <div className={styles.seconddiv}>
          <div className={styles.section2} id="section2" ref={section2}>
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
          <div className={styles.section3} id="section3 " ref={section3}>
            <Section3 pricingdetails={pricing_details} />
          </div>
          <div className={styles.section4} id="section4" ref={section4}>
            <Section4 />
          </div>
          <div className={styles.section5} id="section5" ref={section5}>
            <Section5 name={name} id={id} />
          </div>
          <div className={styles.section6} id="section6" ref={section6}>
            <Section6 name={name} id={id} reviewAdded={reviewAdded}  />
          </div>
          <div className={styles.section7} id="section7">
            <Section7 />
          </div>
          <div className={styles.section8} id="section8">
            <Section8 builder={builder} />
          </div>

          <div className={styles.section9}>
            <Section9 id={id} />
          </div>
          <div className={styles.section10}>
            <Section10 id={id} />
          </div>
          <div className={styles.section11}>
            <Section11 />
          </div>
          <div className={styles.section12}>
            <Section12 id={id} handleReviewAdded={handleReviewAdded} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDescription;
