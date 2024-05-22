import React from "react";
import Input from "../../Atoms/input";
import Button from "../../Atoms/Button";
import classNames from "classnames";
import styles from "./styles.module.css";

const Search = () => {
  function serachInputHandler(value) {
    console.log(value);
  }

  return (
    <div className={classNames(styles.search)}>
      <select className={styles.dropdowndiv}>
        <option value="">Banglore</option>
        <option value="">Delhi</option>
        <option value="">Mumbai</option>
      </select>
      <div className={styles.inputBox}>
        <Input
          placeholder={"Search for locality, landmark or builder"}
          onChange={(value) => {
            serachInputHandler(value);
          }}
          style={{
            outline: "none",
            border: "none",
          }}
        />
      </div>
      {/* <hr></hr> */}
      <div>
        <Button type="primary">Search</Button>
      </div>
    </div>
  );
};

export default Search;
