import React from "react";
import styles from "./styles.module.css";
import user from "./user.svg";
import stardesign from "./stardesign.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import like from "./like.svg";
import dislike from "./dislike.svg";
import good_review from "./good_review.svg";
import bad_review from "./bad_review.svg";
import { IoMdStar } from "react-icons/io";

const Section6 = ({ name }) => {
  const reviews = [
    {
      heading: "Exceptional Service!",
      para: "Our Experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
  ];

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

      <div className={styles.reviewcardcontainer}>
        {Array(2)
          .fill(0)
          .map((_, index) => {
            return (
              <div className={styles.reviewcard}>
                <div className={styles.reviewcardsection1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "999px",
                          height: "3rem",
                          width: "3rem",
                        }}
                      >
                        <img
                          src={user}
                          alt="userimg"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "999px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <p style={{ fontWeight: "550", whiteSpace: "nowrap" }}>
                          {"Wade Warren"}
                        </p>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "0.8rem",
                            marginTop: "0.3rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {"Broker | 6 months ago"}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        // alignItems: "center",
                        justifyContent: "center",
                        gap: "0.2rem",
                        border: "1px solid #55D6A7",
                        background: "#55D6A71A",
                        borderRadius: "8px",
                        padding: "0.2rem 0.8rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          color: "#55D6A7",
                        }}
                      >
                        4
                      </span>
                      <div>
                        <IoMdStar color={"#55D6A7"} size={13} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewgriddiv}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.8rem",

                        // paddingRight: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "0.8rem",
                            height: "0.8rem",
                            marginTop: "-0.2rem",
                          }}
                        >
                          <img
                            src={good_review}
                            alt="img"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div
                          style={{ fontWeight: "600", whiteSpace: "nowrap" }}
                        >
                          Good things here
                        </div>
                      </div>
                      <p style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                        The location boasts convenient access to various
                        amenities. Shopping malls like Ocus, hospitals. A
                        grocery shop is within walking distance, and a police
                        station is nearby within 4 km.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.8rem",
                        borderLeft: "2px solid #E1E1E1",
                        paddingLeft: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "0.8rem",
                            height: "0.8rem",
                            marginTop: "-0.2rem",
                          }}
                        >
                          <img
                            src={bad_review}
                            alt="img"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div
                          style={{ fontWeight: "600", whiteSpace: "nowrap" }}
                        >
                          Things need to improvement
                        </div>
                      </div>
                      <p style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                        Water supply can be improved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.reviewcardsection2}>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#999999",
                      fontWeight: "600",
                    }}
                  >
                    Is this helpful?
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <div className={styles.section6likeimgdiv}>
                      <img src={like} alt="like" style={{ width: "30%" }} />
                    </div>
                    <div className={styles.section6likeimgdiv}>
                      <img
                        src={dislike}
                        alt="dislike"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Section6;
