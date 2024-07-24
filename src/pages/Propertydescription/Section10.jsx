import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import stardesign from "./stardesign.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import useGetFaqbyPropertyid from "../../hooks/useGetFaqbyPropertyid.js";
import Skeleton from "react-loading-skeleton";
import api from "../../service/apiGateway";

const Section10 = ({ id }) => {
  const faqs = [
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
  ];

  // const { fetched, loading, error, data } = useGetFaqbyPropertyid(id);
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchdata = async (id) => {
    try {
      console.log("chlo bhai");
      setLoading(true);
      const response = await api.get(`/faq/${id}`);
      console.log("reviews", response?.data);
      setData(response?.data);
      setFetched(true);
      console.log("response", response);
    } catch (error) {
      console.log("error while fetching FAQs", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchdata(id);
  }, [id]);

  return (
    <div>
      <IntroContainer
        stardesign={stardesign}
        heading="Frequently Asked Questions"
        desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way `}
        btntext="View All FAQs"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          //   alignItems: "center",
          gap: "2rem",
          width: "100%",
          overflow: "auto",
          marginTop: "4rem",
        }}
      >
        {fetched ? (
          data?.map((faq, index) => {
            return (
              <div
                style={{
                  padding: "2rem",
                  // width: "45%",
                  // height: "rem",
                  borderRadius: "10px",
                  backgroundColor: "#7065f0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2rem",
                  color: "white",
                }}
              >
                <div style={{ fontWeight: "600" }}>{faq.heading}</div>
                <p style={{ fontSize: "0.9rem" }}>{faq.para}</p>

                <div
                  style={{
                    backgroundColor: "white",
                    //   border: "1px solid #E1E1E1",
                    padding: "0.8rem 1rem",

                    borderRadius: "10px",
                    fontSize: "0.9rem",
                    color: "#7065f0",
                    whiteSpace: "nowrap",
                  }}
                >
                  Read More
                </div>
              </div>
            );
          })
        ) : loading ? (
          Array(3)
            .fill(0)
            .map((_, index) => {
              return (
                <div style={{ width: "100%", aspectRatio: "3/2" }}>
                  {" "}
                  <Skeleton key={index} width="100%" height="100%" />
                </div>
              );
            })
        ) : (
          <h4>{error?.message}</h4>
        )}
      </div>
    </div>
  );
};

export default Section10;
