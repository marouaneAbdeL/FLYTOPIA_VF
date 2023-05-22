import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import MailList from "../../components/mailList/MailList";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!credentials.username) {
      errors.username = "Username is required";
      isValid = false;
    } else if (credentials.password.length < 1) {
      errors.username = "username must be at least 1 characters long";
      isValid = false;
    }

    if (!credentials.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!credentials.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (credentials.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/register", credentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
        navigate("/");
      } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      }
    }
  };

  return (
    <div>
      <Navbar />
    <div className="register">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          value={credentials.username}
          className="lInput"
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          value={credentials.email}
          className="lInput"
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          value={credentials.country}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          value={credentials.city}
          className="lInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          value={credentials.phone}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          value={credentials.password}
          className="lInput"
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        {error && <span>{error.message}</span>}
        <div class="loginPrompt">
  Already have an account? <a href="/login" class="loginLink">Click here to log in.</a>
</div>

      </div>
    </div>
    <MailList/>
    <Footer />
    </div>

 

  );
};

export default Register;
