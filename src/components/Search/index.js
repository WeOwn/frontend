import React from "react";
import Input from "../../Atoms/input";
import Button from "../../Atoms/Button";

const Search = () => {
  function serachInputHandler(value) {}

  return (
    <div>
      <Input
        placeholder={"select City"}
        onChange={(value) => {
          serachInputHandler(value);
        }}
      />
      <Button>
        <div>Search</div>
      </Button>
    </div>
  );
};

export default Search;
