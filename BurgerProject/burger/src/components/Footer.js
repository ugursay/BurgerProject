import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.facebook.com/burgeryiyelim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/burgeryiyelimm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.instagram.com/burgeryiyelimm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
      </div>
      <p>Tüm hakları saklıdır | BurgerYiyelim</p>
    </div>
  );
};
