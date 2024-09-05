import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Modal, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useTheme } from "../Context/ThemeContext";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Bounce, toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const navigate  = useNavigate();

  const [user] = useAuthState(auth);

  const handleModalOpen = () => {
    if(user){
      //navigate to the user page
      navigate("/user");
    }
    else{
      setOpen(true);
    }
  

  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const logout =()=>{
    auth.signOut().then((res)=>{
      toast.success('Logged out', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }).catch((err)=>{
      toast.error('Not able to logout', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    })
  }

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,googleProvider).then((res)=>{
      toast.success('Google Login successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      handleClose();
    }).catch((err)=>{
      toast.error(errorMapping[err.code]||'Not able to use google authentication', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    })
  }

  return (
    <div>
      <AccountCircleIcon onClick={handleModalOpen} />
      {(user) && <LogoutIcon onClick={logout}/>}
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "400px", textAlign: "center" }}>
          <AppBar position="static" style={{ background: "transparent" }}>
            <Tabs
              value={value}
              onChange={handleValueChange}
              variant="fullWidth"
            >
              <Tab label="login" style={{ color: theme.textColor }} />
              <Tab label="signup" style={{ color: theme.textColor }} />
            </Tabs>
          </AppBar>
          <div style={{ padding: "16px 0" }}>
            {value === 0 && <LoginForm handleClose={handleClose} />}
            {value === 1 && <SignupForm handleClose={handleClose} />}
          </div>
          <Box >
            <span>OR</span>
            <GoogleButton style={{ width: '100%', marginTop: '8px' }}
            
            onClick={handleGoogleSignIn}
            />

          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
