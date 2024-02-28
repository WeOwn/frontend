import jwt from "jsonwebtoken";

function decodeToken() {
  const decoded = jwt.decode(token);
  if (decoded) {
    return decoded;
  }
  return null;
}

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
}

function setToken(token) {
  localStorage.setItem("token", token);
}

export { getToken, setToken, decodeToken };
