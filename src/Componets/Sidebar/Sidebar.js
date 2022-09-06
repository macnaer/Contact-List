import React from "react";
import "./Sidebar.css";
import { connect } from "react-redux";

const Sidebar = ({ List }) => {
  const totalCount = List.length;
  let familyCount = List.reduce((accum, element) => {
    if (element.status === "Family") return ++accum;
    else return accum;
  }, 0);

  let workCount = List.reduce((accum, element) => {
    if (element.status === "Work") return ++accum;
    else return accum;
  }, 0);

  let privateCount = List.reduce((accum, element) => {
    if (element.status === "Private") return ++accum;
    else return accum;
  }, 0);

  let friendsCount = List.reduce((accum, element) => {
    if (element.status === "Friends") return ++accum;
    else return accum;
  }, 0);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>{totalCount}</span>
        </div>
        <div className="list">
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>{workCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>{familyCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>{privateCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>{friendsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

export default connect(mapStateToProps)(Sidebar);
