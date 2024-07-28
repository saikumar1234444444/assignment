import React from "react";
import "./Home.css";
import budhaImage from "../assets/budha.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

const icons = [
  { id: 1, count: 0, icon: <FavoriteBorderIcon /> },
  { id: 2, count: 120, icon: <ShareOutlinedIcon /> },
  { id: 3, count: 27, icon: <RemoveRedEyeOutlinedIcon /> },
];

const data = [
  { id: 1, title: "Dynasty", details: "Ahichchhatra" },
  { id: 2, title: "Period", details: "200 CE" },
  { id: 3, title: "Material", details: "Sandstone" },
  { id: 4, title: "Location", details: "National Museum" },
];

const Home = () => {
  const [isOpen, setIsopen] = React.useState(false);
  const openSidebar = () => {
    setIsopen(true);
  };

  const closeSidebar = () => {
    setIsopen(false);
  };
  return (
    <div className="bgContainer">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="iconBoxSmall" onClick={closeSidebar}>
          <ArrowBackIosNewOutlinedIcon
            style={{ color: "#C25B35", cursor: "pointer" }}
          />
        </div>
        <h1 className="heading">
          MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
        </h1>
        <div className="iconsBox">
          {icons.map((each) => (
            <div className="iconText">
              <div className="iconBox">{each.icon}</div>
              <p style={{ lineHeight: "4px" }}>{each.count}</p>
            </div>
          ))}
        </div>
        {data.map((each) => (
          <p className="title">
            {each.title}:<span>{each.details}</span>
          </p>
        ))}
        <h1 className="description">Description:</h1>
        <p className="info">
          Maitreya, the future Buddha to be, resides in the Tushita heaven as a
          bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
          eighth Buddha, a successor of the seven historical Buddhas
          (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha
          will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a
          bodhisattva, Maitreya wears a heavily adorned with earrings,
          wristlets, necklaces, and an amulet.
        </p>
        <div className="readIcon">
          <EastOutlinedIcon style={{ color: "#C25B35" }} />
          <h1 className="read">READ MORE</h1>
        </div>
        <div className="buttonContainer">
          <button type="button" className="collection">
            ADD TO COLLECTION
          </button>
          <button type="button" className="souvenir">
            SOUVENIR
          </button>
        </div>
      </div>
      <div className={`bgImage ${isOpen ? "moveBg" : ""}`}>
        {!isOpen ? (
          <button onClick={openSidebar} className="openButton">
            open sidebar
          </button>
        ) : (
          <button className="closeButton" onClick={closeSidebar}>
            <KeyboardDoubleArrowLeftOutlinedIcon
              style={{ color: "#C25B35", cursor: "pointer" }}
            />
          </button>
        )}
        <img src={budhaImage} className="image" />
      </div>
    </div>
  );
};
export default Home;
