import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import bedroom_logo from "./bedroom_logo.png";
import propertyimage from "./property.png";
import bathroom_logo from "./bathroom_logo.png";
import villa_logo from "./Villa_logo.png";
import Button from "../../Atoms/Button";
import Chip from "../../Atoms/Chip";
import wishlist_btn from "./wishlist_btn.png";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoFolder } from "react-icons/io5";

export const Propertycard = ({
  _id,
  name,
  images,
  amenities,
  price,
  description,
  detail1,
  detail2,
  detail3,

  marginright,
}) => {
  // const [detail1, detail2, detail3] = features;
  const [isLoading, setIsLoading] = useState(false);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isheadingExpanded, setIsheadingExpanded] = useState(false);

  const handleImageLoaded = () => {
    console.log("hogyi load");
    setIsLoading(false);
  };

  const descStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const headingStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div className={styles.maindiv} style={{ marginRight: marginright }}>
      <div className={styles.imagediv}>
        {images?.length > 0 ? (
          <img
            src={images[0]}
            alt={"Property Image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            // onLoad={handleImageLoaded}
          />
        ) : (
          <Skeleton
            width="100%"
            height="100%"
            borderRadius="10px"
            // baseColor="#202020"
            // highlightColor="#444"
            // duration={4}
          />
        )}

        <div className={styles.wishlist_btn}>
          <img
            src={wishlist_btn}
            alt="wishlist_btn"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className={styles.description}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <div
            className={styles.heading}
            style={!isheadingExpanded ? headingStyles : null}
          >
            {name}
          </div>

          <span
            style={{
              cursor: "pointer",
              fontSize: "0.8rem",
              marginTop: "-0.3rem",
            }}
            onClick={() => setIsheadingExpanded(!isheadingExpanded)}
          >
            {isheadingExpanded ? "less" : "more"}
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <div
            className={styles.subheading}
            style={!isDescExpanded ? descStyles : null}
          >
            {description}
          </div>
          <span
            style={{ cursor: "pointer", fontSize: "0.8rem" }}
            onClick={() => setIsDescExpanded(!isDescExpanded)}
          >
            {isDescExpanded ? "Read less" : "Read more"}
          </span>
        </div>
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
          <span
            style={{ whiteSpace: "nowrap" }}
          >{`${amenities.bedrooms} Bedrooms`}</span>
        </div>
        <div className={styles.capsule}>
          <div>
            <img
              src={bathroom_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span
            style={{ whiteSpace: "nowrap" }}
          >{`${amenities.bathrooms} Bathrooms`}</span>
        </div>
        <div className={styles.capsule}>
          <div>
            <img
              src={villa_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span
            style={{ whiteSpace: "nowrap" }}
          >{`${amenities.parking} Parking`}</span>
        </div>
        <div className={styles.capsule}>
          <div>
            <img
              src={villa_logo}
              style={{ height: "1rem", width: "1rem" }}
              alt="logo"
            />
          </div>
          <span
            style={{ whiteSpace: "nowrap" }}
          >{`${amenities.security} Security`}</span>
        </div>
      </div>

      <div className={styles.pricediv}>
        <div className={styles.pricesection}>
          <div style={{ fontSize: "0.8rem" }}>Price</div>
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{price}</div>
        </div>
        <Link to={`/property_description/${_id}`}>
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
