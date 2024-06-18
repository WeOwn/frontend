import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/filterslice";

const Index = ({ list, type }) => {
  const dispatch = useDispatch();
  const handleAppliedfilter = (name, index) => {
    dispatch(setFilters(name));
  };

  return (
    <div className={type === "column" ? styles.column : styles.flex}>
      {list.map((tag, index) => {
        return (
          <div
            key={tag.id}
            style={{
              border: "1px solid #EBECF0",
              borderRadius: "999px",
              padding: "0.5rem",
              width: "fit-content",
              color: "#42526E",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            onClick={() => handleAppliedfilter(tag.name)}
          >
            {tag.name}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
