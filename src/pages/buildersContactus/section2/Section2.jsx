import React from "react";
import styles from "./styles.module.css";
import blackstardesign from "../blackstardesign.svg";
import ToggleContainer from "./toggleContainer";
import mail_img from "./mail_img.svg";
import call_img from "./call_img.svg";
import location_img from "./location_img.svg";

const Section2 = () => {
  const list = [
    {
      id: 1,
      location: "Main Headquarters",
      heading: "123 Estatein Plaza, City Center, Metropolis",
      desc: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      info: [
        { id: 1, img: mail_img, contact: "info@weown.com" },
        { id: 2, img: call_img, contact: "+1 (123) 456-7890" },
        { id: 3, img: location_img, contact: "Metropolis" },
      ],
    },
    {
      id: 2,
      location: "Regional Offices",
      heading: "456 Urban Avenue, Downtown District, Metropolis",
      desc: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      info: [
        { id: 1, img: mail_img, contact: "info@weown.com" },
        { id: 2, img: call_img, contact: "+1 (123) 456-7890" },
        { id: 3, img: location_img, contact: "Metropolis" },
      ],
    },
  ];
  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={blackstardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>
        Discover Our Office Locations
      </h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "grey" }} className={styles.desc}>
          Estatein is here to serve you across multiple locations. Whether
          you're looking to meet our team, discuss real estate opportunities, or
          simply drop by for a chat, we have offices conveniently located to
          serve your needs. Explore the categories below to find the Estatein
          office nearest to you
        </p>
      </div>
      <ToggleContainer />

      <div className={styles.carddivp}>
        {list.map((card, index) => {
          return (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardintro}>
                <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                  {card.location}
                </span>
                <h4 className={styles.cardheading}>{card.heading}</h4>
              </div>
              <div className={styles.carddesc}>{card.desc}</div>
              <div className={styles.cardlocationdiv}>
                {card.info.map((info, index) => {
                  return (
                    <div key={info.id} className={styles.cardcapsule}>
                      <div className={styles.logodiv}>
                        <img
                          src={info.img}
                          alt="img"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          color: "#7065f0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {info.contact}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
