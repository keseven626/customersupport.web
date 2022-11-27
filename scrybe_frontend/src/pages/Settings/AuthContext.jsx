import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users/${1}`)
      .then((res) => setUserData(res.data))
      .catch((err) => setError(err.data));
  }, []);

  const handleSubmit = (data) => {
    var config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Body: data,
      },
    };
    axios
      .patch(`http://127.0.0.1:8000/api/user/update/${1}`, config)
      .then((res) => console.log(res))
      .catch((err) => setError(err.data));
  };

  let contextData = {
    userData,
    error,
    setUserData,
    handleSubmit,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
