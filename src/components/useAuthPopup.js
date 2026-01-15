import { useState } from "react";

export default function useAuthPopup() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("login");
  const open = (m = "login") => {
    setMode(m);
    setShow(true);
  };
  const close = () => setShow(false);
  const switchMode = () => setMode((m) => (m === "login" ? "register" : "login"));
  return { show, mode, open, close, switchMode };
}
