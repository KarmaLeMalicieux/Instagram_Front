import "./styles/SideNav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function SideNav() {
  return (
    <div className="sideNav">

      <img className="sideNav__logo" src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo" />


      <div className="sideNav_buttons">

        <button className="sideNav__button">
          <HomeIcon />
          <span> Home </span>
        </button>


        <button className="sideNav__button">
          <SearchIcon />
          <span> Search </span>
        </button>


        <button className="sideNav__button">
          <ExploreIcon />
          <span> Explore </span>
        </button>


        <button className="sideNav__button">
          <SlideshowIcon />
          <span> Reels </span>
        </button>


        <button className="sideNav__button">
          <ChatIcon />
          <span> Messages </span>
        </button>


        <button className="sideNav__button">
          <FavoriteBorderIcon />
          <span> Notifications </span>
        </button>


        <button className="sideNav__button">
          <AddCircleOutlineIcon />
          <span> Create </span>
        </button>

      </div>

      <div className="sideNav__more">
        <button className="sideNav__button">
          <MenuIcon />
          <span> More </span>
        </button>
      </div>

    </div>
  )
}

export default SideNav
