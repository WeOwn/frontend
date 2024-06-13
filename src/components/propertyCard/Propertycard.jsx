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
  img,
  heading,
  description,
  detail1,
  detail2,
  detail3,
  price,
}) => {
  return (
    <div className={styles.maindiv}>
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
          <div>Price</div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{price}</div>
        </div>
        <Link to={"/property_description"}>
          <div className={styles.propertyButton}>
            <Button
              style={{
                backgroundColor: "rgba(112, 101, 240, 1)",
                color: "white",
                paddingBlock: "1em",
                // paddingInline: "1em",
                borderRadius: "8px",
                border: "0px solid",
                cursor: "pointer",
                width: "8rem",
                marginLeft: "1rem",
              }}
            >
              View Property
            </Button>
          </div>
        </Link>
      </div>
      {/* <Chip></Chip> */}
    </div>
  );
};
