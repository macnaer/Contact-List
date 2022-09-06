import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ContactItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  UpdateContactList,
  SetCurrentContact,
} from "../../Actions/ContactListActions";

const ContactItem = ({
  id,
  avatar,
  email,
  name,
  phone,
  status,
  gender,
  favorite,
  UpdateContactList,
  SetCurrentContact,
  List,
}) => {
  const onFavorite = (id) => {
    const index = List.findIndex((i) => i.id === id);
    let tmpList = List.slice();
    tmpList[index].favorite = !tmpList[index].favorite;
    UpdateContactList(tmpList);
  };

  const onStatus = (id) => {
    const index = List.findIndex((i) => i.id === id);
    let tmpList = List.slice();
    switch (tmpList[index].status) {
      case "Friends":
        tmpList[index].status = "Work";
        break;
      case "Work":
        tmpList[index].status = "Family";
        break;
      case "Family":
        tmpList[index].status = "Private";
        break;
      case "Private":
        tmpList[index].status = "Friends";
        break;
    }
    UpdateContactList(tmpList);
  };

  const onEdit = (id) => {
    const index = List.findIndex((elem) => elem.id === id);
    const currentContact = List[index];
    SetCurrentContact(currentContact);
  };

  const onRemove = (id) => {
    const index = List.findIndex((elem) => elem.id === id);
    const partOne = List.slice(index + 1);
    const partTwo = List.slice(0, index);
    const tmpList = [...partOne, ...partTwo];
    UpdateContactList(tmpList);
  };

  const URL_AVATAR = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
  let statusStyles = "lab lab-warning";
  let favoriteStyles = "star";
  switch (status) {
    case "Friend":
      statusStyles = "lab lab-warning";
      break;
    case "Private":
      statusStyles = "lab lab-danger";
      break;
    case "Family":
      statusStyles = "lab lab-primary";
      break;
    case "Work":
      statusStyles = "lab lab-success";
      break;
  }

  switch (favorite) {
    case true:
      favoriteStyles = "star starFavorite";
      break;
    default:
      favoriteStyles = "star";
      break;
  }

  const star = <FontAwesomeIcon icon={faStar} size="2x" />;
  return (
    <div className="unit">
      <div className="field name">
        <span className={favoriteStyles} onClick={() => onFavorite(id)}>
          {star}
        </span>
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>

        <div>
          <img src={URL_AVATAR} alt="image" className="avatar" /> {name}
        </div>
        <div className={statusStyles} onClick={() => onStatus(id)}>
          {status}
        </div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
      <div className="field">
        <Link to="/update-contact">
          <FontAwesomeIcon
            icon={faEdit}
            className="edit"
            size="2x"
            onClick={() => onEdit(id)}
          />
        </Link>
      </div>
      <div className="field">
        <FontAwesomeIcon
          icon={faTrash}
          className="trash"
          size="2x"
          onClick={() => onRemove(id)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

const mapDispatchToProps = {
  UpdateContactList,
  SetCurrentContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
