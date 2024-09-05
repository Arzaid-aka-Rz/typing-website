
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";
import TwitterIcon from '@mui/icons-material/Twitter';  


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  const { setTheme, theme } = useTheme();
  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };

  return (
    <div className="footer">
      
      <div className="links">
          <a href='https://github.com/Arzaid-aka-Rz' target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{marginRight:'4px'}}/>
          </a>
          <a href='https://www.linkedin.com/in/mohd-arzaid-3220742ab/' target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
          </a>
          <a href="https://x.com/_Arzaid_" target="_blank" rel="noopener noreferrer">
          <TwitterIcon style={{ marginLeft: '4px' }} />  
        </a>
        </div>


      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
              borderColor: theme.title, // Add border color to match theme
              boxShadow: "none", // Remove default box-shadow for consistency
              "&:hover": {
                borderColor: theme.title, // Border color on hover
              },
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
              borderRadius: "8px", // Rounded corners for the dropdown
              padding: "0.5rem", // Add some padding for better spacing
            }),
            option: (styles, { isFocused }) => ({
              ...styles,
              backgroundColor: isFocused ? theme.title : theme.background,
              color: isFocused ? theme.background : theme.textColor,
              cursor: "pointer",
            }),
            singleValue: (styles) => ({
              ...styles,
              color: theme.title,
            }),
            placeholder: (styles) => ({
              ...styles,
              color: theme.textColor,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
