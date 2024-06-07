// // Navbar.js

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logowhite from "./logowhite.png";

// import styles2 from "./navbar2.module.css";

// import hamburger2 from "./hamburger2.png";
// import userimg from "./userimg.png";
// import searchlogo from "./searchlogo.png";
// import Sidebar1 from "../../components/sidebar/Sidebar1";
// import Sidebar2 from "../../components/sidebar/Sidebar2";
// import Sidebar3 from "../../components/sidebar/Sidebar3";
// import Sidebar4 from "../../components/sidebar/Sidebar4";
// import Sidebar5 from "../../components/sidebar/Sidebar5";
// // import Sidebar from "../sidebar/Sidebar";

// function Navbar() {
//   const [issideopen, setIssideopen] = useState(false);
//   const [isside2open, setIsside2open] = useState(false);
//   const [isside3open, setIsside3open] = useState(false);
//   const [isside4open, setIsside4open] = useState(false);
//   const [isside5open, setIsside5open] = useState(false);

//   const handlesideopen = () => {
//     setIssideopen(true);
//   };
//   const handlesideclose = () => {
//     setIssideopen(false);
//   };
//   const handleside2open = () => {
//     setIsside2open(true);
//   };
//   const handleside2close = () => {
//     setIsside2open(false);
//   };
//   const handleside3open = () => {
//     setIsside3open(true);
//   };
//   const handleside3close = () => {
//     setIsside3open(false);
//   };
//   const handleside4open = () => {
//     setIsside4open(true);
//   };
//   const handleside4close = () => {
//     setIsside4open(false);
//   };
//   const handleside5open = () => {
//     setIsside5open(true);
//   };
//   const handleside5close = () => {
//     setIsside5open(false);
//   };

//   //
//   return (
//     <div>
//       <div>
//         {issideopen && (
//           <div
//             className={styles2.sidebarouterContainer}
//             onClick={handlesideclose}
//           ></div>
//         )}
//         {issideopen && (
//           <Sidebar1
//             handleside2open={handleside2open}
//             handleside3open={handleside3open}
//             handleside4open={handleside4open}
//             handleside5open={handleside5open}
//           />
//         )}
//         {issideopen && isside2open && (
//           <Sidebar2 handleside2close={handleside2close} />
//         )}
//         {issideopen && isside3open && (
//           <Sidebar3 handleside3close={handleside3close} />
//         )}
//         {issideopen && isside4open && (
//           <Sidebar4 handleside4close={handleside4close} />
//         )}
//         {issideopen && isside5open && (
//           <Sidebar5 handleside5close={handleside5close} />
//         )}
//       </div>
//       <nav className={styles2.navbar}>
//         <Link to="/">
//           <div className={styles2.logo}>
//             <img
//               src={logowhite}
//               alt="Logo"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//         </Link>
//         <div className={styles2.center}>
//           <div className={styles2.dropdown1}>
//             <p style={{ color: "white", whiteSpace: "nowrap" }}>Buy in</p>
//             <select
//               style={{
//                 outline: "none",
//                 border: "none",
//                 color: "white",
//                 fontWeight: "bold",
//                 background: "transparent",
//                 cursor: "pointer",
//               }}
//             >
//               <option style={{ color: "black" }}>Banglore</option>
//               <option style={{ color: "black" }}>Delhi</option>
//               <option style={{ color: "black" }}>Noida</option>
//             </select>
//           </div>
//           <div className={styles2.navCenter}>
//             <div className={styles2.searchbar}>
//               <div className={styles2.dropdowndiv}>
//                 <select style={{ border: "none", outline: "none" }}>
//                   <option>View & Buy</option>
//                   <option>Search Builders</option>
//                   <option>Group Investment</option>
//                   <option>List Property</option>
//                   <option>Compare</option>
//                 </select>
//               </div>
//               <div className={styles2.searchtext}>
//                 <input
//                   placeholder="Search for locality, landmark or builder"
//                   style={{
//                     outline: "none",
//                     border: "none",
//                   }}
//                 />
//               </div>
//             </div>
//             <div style={{ cursor: "pointer" }}>
//               <img
//                 src={searchlogo}
//                 style={{ height: "70%", width: "70%" }}
//                 alt="search"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles2.navRight}>
//           {/* <Link to="/signup" className={styles2.registerButton}>
//           Register
//         </Link>
//         <Link to="/login" className={styles2.loginButton}>
//           Login
//         </Link> */}
//           <div onClick={handlesideopen}>
//             <img
//               src={hamburger2}
//               alt="icon"
//               style={{ height: "60%", width: "60%" }}
//             />
//           </div>
//           <div
//             style={{
//               backgroundColor: "White",
//               // boxShadow: "2px 2px 3px 0 black",
//               padding: "0.2rem",
//               borderRadius: "999px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={userimg}
//               alt="icon"
//               style={{ height: "80%", width: "80%" }}
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
