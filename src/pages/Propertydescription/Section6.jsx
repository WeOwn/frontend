import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import user from "./user.svg";
import stardesign from "./stardesign.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import like from "./like.svg";
import dislike from "./dislike.svg";
import good_review from "./good_review.svg";
import bad_review from "./bad_review.svg";
import { IoMdStar } from "react-icons/io";


import useGetReviewbyPropertyid from "../../hooks/useGetReviewbyPropertyid";
import ReviewCard from "../../components/reviewCard/ReviewCard";


import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import api from "../../service/apiGateway";

const Section6 = ({ name, id }) => {
  // const { fetched, loading, error, data } = useGetReviewbyPropertyid(id);
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/review/${id}`);
      console.log("reviews", response?.data);
      setData(response?.data);
      setFetched(true);
    } catch (error) {
      console.log("error while fetching property reviews", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchdata();
  }, [id]);

  const box = document.querySelector("#reviewoverflowbox");
  const scrollprev = () => {
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft - width,
      behavior: "smooth",
    });
  };
  const scrollnext = () => {
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft + width,
      behavior: "smooth",
    });
  };
  console.log("section6");

  if (fetched && data?.length > 0) {
    return (
      <div>
        <IntroContainer
          stardesign={stardesign}
          heading={`Reviews About ${name}`}
          desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way `}

          btntext="View All Reviews"
        />

        <div
          className={styles.reviewcardcontainer}
          id="reviewoverflowbox"
          style={{
            position: "relative",
          }}
        >
          {data?.map((review, index) => {
            return <ReviewCard review={review} key={review?._id} />;
          })}
          {/* <div onClick={scrollprev} className={styles.leftarr2}>
            <MdArrowBackIosNew size={12} />
          </div>
          <div onClick={scrollnext} className={styles.rightarr2}>
            <MdArrowForwardIos size={12} />
          </div> */}
        </div>
      </div>
    );
  } else if (!fetched) {
    return (
      <div>
        <Skeleton
          width="100%"
          height="100%"
          borderRadius="10px"
          count={4}
          // baseColor="black"
          // highlightColor="#444"
          // duration={4}
        />

      </div>
    );
  }
};

export default Section6;
