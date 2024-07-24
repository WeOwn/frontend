import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
// import RangeFilter from "../../Atoms/rangeFilter";
import RangeFilter from "../../Atoms/rangeSlider";
import down_arrow from "./down_arrow.svg";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import AppliedFilters from "./appliedfilters";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../redux/filterslice";
import api from "../../service/apiGateway";
import PropertycardSkeleton from "../../components/propertyCard/PropertycardSkeleton";
import MultiRangeSlider from "../../components/mutliRangeSlider/MultiRangeSlider";

const Index = () => {
  // console.log(appliedfilters);

  const priceRange = useSelector((store) => store.filters.priceRange);
  const city = useSelector((store) => store.filters.city);
  console.log("city", city);
  const dispatch = useDispatch();

  const [isopen, setisopen] = useState([false, false, false, false, false]);
  const [isOn, setIsOn] = useState([false, false, false, false]);

  // const [appliedfilter, setAppliedFilter] = useState(false);

  const handleopendropdown = (index) => {
    setisopen((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const toggleSwitch = (index) => {
    setIsOn((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleremoveAll = () => {
    dispatch(clearFilters());
  };

  const list1 = [
    {
      id: "1",
      name: "Residential Apartment",
    },
    {
      id: "2",
      name: "Independent House/Villa",
    },
    {
      id: "3",
      name: "Residential Land",
    },
    {
      id: "4",
      name: "Independent Builder/Floor",
    },
    {
      id: "5",
      name: "1 RK/Studio Apartment",
    },
  ];
  const list2 = [
    {
      id: "1",
      name: "1 RK/1 BHK",
    },
    {
      id: "2",
      name: "2 BHK",
    },
    {
      id: "3",
      name: "3 BHK",
    },
    {
      id: "4",
      name: "4 BHK",
    },
    {
      id: "5",
      name: "5 BHK",
    },
  ];

  const list3 = [
    {
      id: "1",
      name: "New Launch",
    },
    {
      id: "2",
      name: "Under Construction",
    },
    {
      id: "3",
      name: "Ready To Move",
    },
  ];

  const list4 = [
    {
      id: "1",
      name: "Whitefield",
    },
    {
      id: "2",
      name: "Sarjapur Road",
    },
    {
      id: "3",
      name: "Old Madras Road",
    },
    {
      id: "4",
      name: "KR Puram",
    },
    {
      id: "5",
      name: "Varthur",
    },
  ];

  const list5 = [
    {
      id: "1",
      name: "Parking",
    },
    {
      id: "2",
      name: "Power Backup",
    },
    {
      id: "3",
      name: "Swimming Pool",
    },
    {
      id: "4",
      name: "Park",
    },
    {
      id: "5",
      name: "Lift",
    },
  ];

  const [allproperties, setAllProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    console.log("call");
    try {
      setLoading(true);
      const propertiesResponse = await api.get(
        `/property/list?min-price=${priceRange[0]}&max-price=${priceRange[1]}&city=${city}&page=page-1`
      );

      console.log("propertyResponse->", propertiesResponse.data.data);

      setAllProperties(propertiesResponse?.data?.data);
    } catch (error) {
      // setError(error);
      console.error("Error occurred while fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("effect");
    fetchData();
  }, [city, priceRange]);

  return (
    <div>
      {console.log("Ui")}
      <div className={styles.filterpageContainer}>
        <div className={styles.filterdivContainer}>
          {((priceRange?.length > 0 &&
            (priceRange[0] !== 0 || priceRange[1] !== 60000000)) ||
            city) && (
            <div className={styles.filteritemsdivp}>
              <div
                className={styles.filteritemssection1}
                // onClick={() => handleopendropdown(0)}
              >
                <p className={styles.paraheading}>Applied Filters</p>
                <div style={{ cursor: "pointer" }} onClick={handleremoveAll}>
                  <span
                    style={{
                      color: "#0078DB",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                    }}
                  >
                    Clear all
                  </span>
                </div>
              </div>
              {/* {appliedfilters&&appliedfilters?.map()} */}
              <AppliedFilters />
            </div>
          )}

          <div className={styles.filtersection1}>
            <div
              style={{
                borderBottom: "1px solid #CED4DD",
                paddingBlock: "1rem",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className={styles.paraheading}>Hide already seen</p>
              <div className={styles.switchContainer}>
                <div
                  className={`${styles.switch} ${
                    isOn[0] ? styles.on : styles.off
                  }`}
                  onClick={() => toggleSwitch(0)}
                >
                  <div
                    className={`${styles.toggle} ${
                      isOn[0] ? styles.toggleOn : styles.toggleOff
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid #CED4DD",
                paddingBlock: "1rem",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p className={styles.paraheading}>Verified properties</p>
                <div
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.2rem 0.8rem",
                    backgroundColor: "#28AD35",
                    textAlign: "center",
                    display: "inline-block",
                    fontSize: "0.7rem",
                    color: "white",
                    fontWeight: "600",
                    borderRadius: "2px",
                  }}
                >
                  Verified
                </div>
              </div>
              <div className={styles.switchContainer}>
                <div
                  className={`${styles.switch} ${
                    isOn[1] ? styles.on : styles.off
                  }`}
                  onClick={() => toggleSwitch(1)}
                >
                  <div
                    className={`${styles.toggle} ${
                      isOn[1] ? styles.toggleOn : styles.toggleOff
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.filtersection2}>
            <p className={styles.paraheading}>Budget</p>
            <RangeFilter />
          </div>
          <div>
            <div
              className={styles.filtersection3}
              onClick={() => handleopendropdown(0)}
            >
              <p className={styles.paraheading}>Type of property</p>
              <div style={{ width: "0.8rem", height: "0.8rem" }}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%" }}
                  className={isopen[0] && styles.rotate180}
                />
              </div>
            </div>
            {isopen[0] && <Dropdown list={list1} type="column" />}
          </div>

          <div>
            <div
              className={styles.filtersection3}
              onClick={() => handleopendropdown(1)}
            >
              <p className={styles.paraheading}>No. of Bedrooms</p>
              <div style={{ width: "0.8rem", height: "0.8rem" }}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%" }}
                  className={isopen[1] && styles.rotate180}
                />
              </div>
            </div>
            {isopen[1] && <Dropdown list={list2} type="flex" />}
          </div>

          <div>
            <div
              className={styles.filtersection3}
              onClick={() => handleopendropdown(2)}
            >
              <p className={styles.paraheading}>Construction Status</p>
              <div style={{ width: "0.8rem", height: "0.8rem" }}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%" }}
                  className={isopen[2] && styles.rotate180}
                />
              </div>
            </div>
            {isopen[2] && <Dropdown list={list3} type="column" />}
          </div>

          <div className={styles.filtersection2}>
            <div>
              <p className={styles.paraheading}>Area</p>
              <p style={{ fontSize: "0.75rem", marginTop: "0.3rem" }}>sq.ft</p>
            </div>
            <RangeFilter />
          </div>

          <div>
            <div
              className={styles.filtersection3}
              onClick={() => handleopendropdown(3)}
            >
              <p className={styles.paraheading}>Localities</p>
              <div style={{ width: "0.8rem", height: "0.8rem" }}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%" }}
                  className={isopen[3] && styles.rotate180}
                />
              </div>
            </div>
            {isopen[3] && <Checkbox list={list4} type="column" />}
          </div>

          <div>
            <div
              className={styles.filtersection3}
              onClick={() => handleopendropdown(4)}
            >
              <p className={styles.paraheading}>Amenities</p>
              <div style={{ width: "0.8rem", height: "0.8rem" }}>
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%" }}
                  className={isopen[4] && styles.rotate180}
                />
              </div>
            </div>
            {isopen[4] && <Dropdown list={list5} type="flex" />}
          </div>

          <div className={styles.filtersection1}>
            <div
              style={{
                borderBottom: "1px solid #CED4DD",
                paddingBlock: "1rem",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className={styles.paraheading}>Properties with photos</p>
              <div className={styles.switchContainer}>
                <div
                  className={`${styles.switch} ${
                    isOn[2] ? styles.on : styles.off
                  }`}
                  onClick={() => toggleSwitch(2)}
                >
                  <div
                    className={`${styles.toggle} ${
                      isOn[2] ? styles.toggleOn : styles.toggleOff
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid #CED4DD",
                paddingBlock: "1rem",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className={styles.paraheading}>Properties with 3D views</p>

              <div className={styles.switchContainer}>
                <div
                  className={`${styles.switch} ${
                    isOn[3] ? styles.on : styles.off
                  }`}
                  onClick={() => toggleSwitch(3)}
                >
                  <div
                    className={`${styles.toggle} ${
                      isOn[3] ? styles.toggleOn : styles.toggleOff
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section2cardsp}>
          {!error &&
            !loading &&
            (allproperties?.length > 0 ? (
              allproperties?.map((property, index) => (
                <Propertycard key={property._id} {...property} />
              ))
            ) : (
              <h4>0 properties found based on applied filters</h4>
            ))}
          {loading &&
            Array(9)
              .fill(0)
              .map((_, index) => {
                return <PropertycardSkeleton />;
              })}
          {error && <h4>{error?.message}</h4>}
        </div>
      </div>
      {console.log("ui end")}
    </div>
  );
};

export default Index;
