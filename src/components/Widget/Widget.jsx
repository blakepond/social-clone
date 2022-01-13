import { Search } from "@mui/icons-material";
import React from "react";
import "./widget.css";

const Widget = () => {
   return (
      <div className="widget">
         <div className="widget_input">
            <div className="widget_search">
               <Search />
               <input
                  placeholder="Search"
                  type="text"
               />
            </div>
            <div className="widget_container"></div>
         </div>
      </div>
   );
};

export default Widget;
