import React from "react";

const index = ({ list }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {list.map((tag, index) => {
        return (
          <div
            key={tag.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div>
              <input type="checkbox" />
            </div>
            <p
              style={{
                width: "fit-content",
                color: "#42526E",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              {tag.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
