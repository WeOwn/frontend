import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
// import RangeFilter from "../../Atoms/rangeFilter";
import RangeFilter from "../../Atoms/rangeSlider";
import down_arrow from "./down_arrow.svg";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import AppliedFilters from "./appliedfilters";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../redux/filterslice";
import api from "../../service/apiGateway";

const Index = () => {
  // console.log(appliedfilters);

  const rangeSlider = useSelector((store) => store.filters.rangeSlider);
  const filters = useSelector((store) => store.filters.appliedfilters);
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
    dispatch(removeAll());
  };

  const List1 = [
    {
      id: "1",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "2",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "3",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "4",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "5",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "6",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "7",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "8",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
  ];

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

  const [allproperties, setAllProperties] = useState(null);
  const fetchData = async () => {
    try {
      const propertiesResponse = await api.get(
        "/property/list?min-price=0&page=page-1"
      );
      // console.log("All properties:", propertiesResponse.data.data);
      let filter_by_city = [];

      filters?.forEach((city) => {
        propertiesResponse?.data?.data.forEach((property) => {
          if (property?.location?.city.toUpperCase() === city.toUpperCase()) {
            filter_by_city.push(property);
          }
        });
      });

      console.log("filter by city->", filter_by_city);

      if (filter_by_city.length > 0) {
        setAllProperties(filter_by_city);
      } else {
        setAllProperties(propertiesResponse.data.data);
      }
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <div>
      <div className={styles.filterpageContainer}>
        <div className={styles.filterdivContainer}>
          {((rangeSlider?.length > 0 &&
            (rangeSlider[0] !== 0 || rangeSlider[1] !== 100)) ||
            filters?.length > 0) && (
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
                    fontWeight: "550",
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
          {allproperties?.map((property, index) => (
            <Propertycard key={property._id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
