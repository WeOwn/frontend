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
      <Input
        placeholder={"select City"}
        onChange={(value) => {
          serachInputHandler(value);
        }}
        style={{
          outline: "none",
          border: "none",
        }}
      />
      <Button type="primary">Search</Button>
    </div>
  );
};

export default Search;
