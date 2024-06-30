import React from "react";
import styles from "./styles.module.css";
import bedroom_logo from "./bedroom_logo.png";
import propertyimage from "./property.png";
import bathroom_logo from "./bathroom_logo.png";
import villa_logo from "./Villa_logo.png";
import Button from "../../Atoms/Button";
import Chip from "../../Atoms/Chip";
import wishlist_btn from "./wishlist_btn.png";
import { Link } from "react-router-dom";

export const Propertycard = ({
  heading,
  img,
  name,
  description,
  detail1,
  detail2,
  detail3,
  price,
  marginright,
}) => {
  // const [detail1, detail2, detail3] = features;

  return (
    <div className={styles.maindiv} style={{ marginRight: marginright }}>
      <div className={styles.imagediv}>
        <img
          src={propertyimage}
          alt="Property Image"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <div className={styles.wishlist_btn}>
          <img
            src={wishlist_btn}
            alt="wishlist_btn"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.subheading}>{description}</div>
      </div>

      <div className={styles.details}>
        <div className={styles.capsule}>
          <div>
            <img
              src={bedroom_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span style={{ whiteSpace: "nowrap" }}>{detail1}</span>
        </div>
        <div className={styles.capsule}>
          <div>
            <img
              src={bathroom_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span style={{ whiteSpace: "nowrap" }}>{detail2}</span>
        </div>
        <div className={styles.capsule}>
          <div>
            <img
              src={villa_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span style={{ whiteSpace: "nowrap" }}>{detail3}</span>
        </div>
      </div>

      <div className={styles.pricediv}>
        <div className={styles.pricesection}>
          <div style={{ fontSize: "0.8rem" }}>Price</div>
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{price}</div>
        </div>
        <Link to={"/property_description"}>
          <div className={styles.propertyButton}>
            <div>
              <Button type="primary">View property</Button>
            </div>
          </div>
        </Link>
      </div>
      {/* <Chip></Chip> */}
    </div>
  );
};
