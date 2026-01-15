import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginApi, register as registerApi } from "../api/auth";
import googleLogo from "../images/google-logo-vector-format-white-background-illustration-407571048.webp";

const AuthPopup = ({ mode = "login", onClose, onSwitch, disableClose = false, onSuccess }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "login") {
        const res = await loginApi(form.email, form.password);
        localStorage.setItem("token", res.token);
        window.dispatchEvent(new Event("authChange"));
        if (onSuccess) {
          onSuccess();
        } else if (!disableClose) {
          onClose();
        }
      } else {
        if (form.password !== form.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        const res = await registerApi(form.username, form.email, form.password);
        localStorage.setItem("token", res.token);
        window.dispatchEvent(new Event("authChange"));
        if (onSuccess) {
          onSuccess();
        } else if (!disableClose) {
          onClose();
        }
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md p-8 bg-[#181A20] rounded-3xl shadow-lg border border-[#2A2D3A] mx-4">
        {!disableClose && (
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            &times;
          </button>
        )}
        <h2 className="text-2xl font-bold text-white mb-6">
          {mode === "login" ? "Sign in" : "Create an account"}
        </h2>
        {mode === "login" && (
          <>
            <button type="button" className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-white text-black font-semibold border border-[#2A2D3A] hover:bg-gray-100 transition mb-4">
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-[#2A2D3A]" />
              <span className="mx-2 text-gray-400 text-xs">OR</span>
              <div className="flex-grow border-t border-[#2A2D3A]" />
            </div>
          </>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#23263A] text-white border border-[#2A2D3A] focus:outline-none"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#23263A] text-white border border-[#2A2D3A] focus:outline-none"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#23263A] text-white border border-[#2A2D3A] focus:outline-none"
              required
            />
            <span
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer select-none"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {mode === "register" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#23263A] text-white border border-[#2A2D3A] focus:outline-none"
              required
            />
          )}
          {error && <div className="text-red-400 text-xs">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-[#5B5FEF] text-white font-semibold mt-2 hover:bg-[#474ad1] transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create an account"}
          </button>
        </form>
        {mode === "register" && (
          <>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-[#2A2D3A]" />
              <span className="mx-2 text-gray-400 text-xs">OR</span>
              <div className="flex-grow border-t border-[#2A2D3A]" />
            </div>
            <button type="button" className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-white text-black font-semibold border border-[#2A2D3A] hover:bg-gray-100 transition">
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </>
        )}
        <div className="flex justify-between mt-4 text-xs text-gray-400">
          {mode === "login" ? (
            <>
              <span>
                Don&apos;t have an account?{' '}
                <button className="text-blue-400 underline" onClick={onSwitch}>Sign up</button>
              </span>
            </>
          ) : (
            <span>
              <button className="text-blue-400 underline" onClick={onSwitch}>Log in instead</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
