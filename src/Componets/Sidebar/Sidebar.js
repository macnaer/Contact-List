import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>0</span>
        </div>
        <div className="list">
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>0</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>0</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>0</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
