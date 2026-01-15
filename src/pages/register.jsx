import React from "react";
import { useNavigate } from "react-router-dom";
import AuthPopup from "../components/AuthPopup";
import useAuthPopup from "../components/useAuthPopup";

const Register = () => {
    const { show, mode, open, close, switchMode } = useAuthPopup();
    const navigate = useNavigate();

    React.useEffect(() => {
        open("register");
        // Open register popup on mount
        // eslint-disable-next-line
    }, []);

    const handleAuthSuccess = () => {
        navigate("/detection");
    };

    return (
        <section
            className="w-full h-screen min-h-[700px] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url("/assets/signinup/background.png")` }}
        >
            <div className="w-full h-full bg-black/30 flex flex-col items-center justify-center">
                <img src="/assets/home/logo.png" alt="DeepVision Logo" className="mb-8 h-16 w-auto" />
                {show && (
                    <AuthPopup mode={mode} onClose={close} onSwitch={switchMode} disableClose={true} onSuccess={handleAuthSuccess} />
                )}
            </div>
        </section>
    );
};

export default Register;