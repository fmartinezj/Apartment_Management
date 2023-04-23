// import React from "react";
// import { UseREf, useState, useEffect } from "react";

// const login = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   return (
//     <section>
//       <p
//         ref={errRef}
//         className={errMsg ? "errmsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>
//       <h1>Sign In</h1>
//       <form>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//         />
//       </form>
//     </section>
//   );
// };

// export default login;
