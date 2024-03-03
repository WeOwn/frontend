import React from "react";

const PropertyCard = ({
  imgUrl,
  label,
  description,
  chips = [],
  price,
  buttonLabel,
}) => {
  return (
    <div>
      <img src={imgUrl} />
    </div>
  );
};

export default PropertyCard;
