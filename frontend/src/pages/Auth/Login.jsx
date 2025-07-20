import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle login form submit

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a valid password");
      return;
    }

    setError("");
    setLoading(true);

    // Login API call

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { user } = response.data;

      if (user?.token) {
        // localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to log in
      </p>

      <form onSubmit={handleLogin}>
        {/* Email input */}
        <Input
          type="text"
          placeholder="John@example.com"
          label="Email Address"
          className=""
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        {/* Password input */}
        <Input
          type="password"
          placeholder="Min 8 Characters"
          label="Password"
          className=""
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button
          className="btn-primary transition-all duration-300"
          type="submit"
          disabled={loading} //
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </>
          ) : (
            "LOGIN"
          )}
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            SignUp
          </button>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
