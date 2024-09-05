import { Box, Button, TextField } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { Bounce, toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";

const LoginForm = ({handleClose}) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = ()=>{
    if (!email || !password) {
      toast.warning('Please fill in all required fields.', {
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
      return;
    }
    
    auth.signInWithEmailAndPassword(email,password).then((res)=>{
      toast.success('Logged in successfully.', {
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
    
      toast.error(errorMapping[err.code]||'Some error occured', {
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
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        type="email"
        variant="outlined"
        label="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.title,
          },
        }}
        InputProps={{
          style: {
            color: theme.title,
          },
        }}
      />

      <TextField
        type="password"
        variant="outlined"
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.title,
          },
        }}
        InputProps={{
          style: {
            color: theme.title,
          },
        }}
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: theme.title, color: theme.background }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
