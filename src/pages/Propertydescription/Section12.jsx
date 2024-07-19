import React from "react";
import styles from "./styles.module.css";
import EMI from "./EMI.svg";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import Button from "../../Atoms/Button";

const Section11 = () => {
  const faqs = [
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
  ];

  return (
    <div>
      <IntroContainer
        stardesign={stardesign2}
        heading="Testimonials"
        // desc={`Find answers to common questions about Estateins's services, property
        //   listing, and the real estate process. We're here to provide clarity
        //   and assist you every tep of the way `}
        // btntext="View Details"
      />

      <div
        style={{
          border: "1px solid grey",
          padding: "2rem",
          marginTop: "3rem",
          borderRadius: "10px",
        }}
      >
        <form className={styles.section12form}>
          <div className={styles.section12form_grid}>
            <div style={{ width: "100%", marginTop: "0rem" }}>
              <label htmlFor="positiveReview" style={{ fontWeight: "550" }}>
                Good things here
              </label>
              <div
                className={styles.inputdiv}
                style={{ marginTop: "1rem", height: "8rem" }}
              >
                <textarea
                  id="positiveReview"
                  name="positiveReview"
                  type="text"
                  placeholder="type here"
                  style={{
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    border: "none",
                    outline: "none",
                    // borderColor: "black",
                    // row: "50",
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "0rem" }}>
              <label htmlFor="negativeReview" style={{ fontWeight: "550" }}>
                Things need to improvement
              </label>
              <div
                className={styles.inputdiv}
                style={{ marginTop: "1rem", height: "8rem" }}
              >
                <textarea
                  id="negativeReview"
                  name="negativeReview"
                  type="text"
                  placeholder="type here"
                  style={{
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    border: "none",
                    outline: "none",
                    // borderColor: "black",
                    // row: "50",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ width: "100%", marginTop: "2rem" }}>
              <label htmlFor="rating" style={{ fontWeight: "550" }}>
                Rating
              </label>
              <div id="rating">* * * *</div>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Button type="primary2">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section11;
