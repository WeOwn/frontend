import React from "react";
import Button from "../../Atoms/Button";
import styles from "./styles.module.css";
import down_arrow from "./down_arrow.svg";
import { Link } from "react-router-dom";
import Searchdropdown from "../../Atoms/searchdropdown";

const Search = () => {
  const location = ["Banglore", "Manali", "Ooty", "Gurugram"];

  return (
    <div>
      <div className={styles.search}>
        <div className={styles.searchover}>
          <Searchdropdown
            dropdownname={"Banglore"}
            logo={down_arrow}
            style={{
              bgcolor: "white",
              border: "none",
              droplogobg: "none",
              namecolor: "#0F0B3E",
              flexgap: "0.5rem",
              selectBoxwidth: "10%",
            }}
            list={location}
          />

          <div className={styles.inputBox}>
            <input
              placeholder={"Search for locality, landmark or builder"}
              className={styles.searchInput}
            />
          </div>
        </div>

        <Link to={"/properties_filter"}>
          <div>
            <Button type="primary">Search</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;
