import React from "react";
import "./sideBar.css";
import LogoIcon from "@mui/icons-material/Details";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@mui/icons-material/BungalowOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/PermIdentityOutlined";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import OfferIcon from "@mui/icons-material/SellOutlined";
import CreatePostIcon from "@mui/icons-material/CreateSharp";
import CreateEventIcon from "@mui/icons-material/FestivalSharp";
import CreateOfferIcon from "@mui/icons-material/LocalOfferSharp";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import Button from "@mui/material/Button";

const SideBar = (props) => {
   return (
      <div className="sideBar">
         <LogoIcon className="sideBar_logoIcon" />
         <SideBarOption
            active
            Icon={HomeIcon}
            text="Home"
         />
         <SideBarOption
            Icon={SearchIcon}
            text="Search"
         />
         <SideBarOption
            Icon={ProfileIcon}
            text="Profile"
         />
         <SideBarOption
            Icon={InboxIcon}
            text="Messages"
         />
         <SideBarOption
            Icon={NotificationsIcon}
            text="Notifications"
         />
         <SideBarOption
            Icon={OfferIcon}
            text="Offers"
         />
         <SideBarOption
            Icon={CreatePostIcon}
            text="+ Post +"
         />
         <SideBarOption
            Icon={CreateEventIcon}
            text="+ Event +"
         />
         <SideBarOption
            Icon={CreateOfferIcon}
            text="+ Offer +"
         />
         <SideBarOption
            Icon={SettingsIcon}
            text="Settings"
         />
         <Button
            variant="outlined"
            className="sideBar_button"
            fullwidth="true"
         >
            Create
         </Button>
      </div>
   );
};

export default SideBar;
