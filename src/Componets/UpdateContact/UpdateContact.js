import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { UpdateContactList } from "../../Actions/ContactListActions";

import "./UpdateContact.css";

const UpdateContact = ({ currentContact, List, UpdateContactList }) => {
  const [isRedirect, setRedirect] = useState(false);
  const [name, setName] = useState(currentContact.name);
  const [status, setStatus] = useState(currentContact.status);
  const [email, setEmail] = useState(currentContact.email);
  const [phone, setPhone] = useState(currentContact.phone);
  const [avatar, setAvatar] = useState(currentContact.avatar);
  const [gender, setGender] = useState(currentContact.gender);
  const [favorite, setFavorite] = useState(currentContact.favorite);

  const getUpdatedData = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const avatar = e.target[3].value;
    const gender = e.target[4].value;
    const status = e.target[5].value;
    const favorite = !!e.target[6].value;
    const updatedContact = {
      id: currentContact.id,
      name,
      phone,
      email,
      avatar,
      gender,
      status,
      favorite,
    };

    const index = List.findIndex((elem) => elem.id === currentContact.id);
    const tmpList = List.slice();
    tmpList[index] = updatedContact;
    UpdateContactList(tmpList);
    setRedirect(true);
  };
  return (
    <>
      {isRedirect ? (
        <Navigate to="/" />
      ) : (
        <div
          id="loginModal"
          className="modal show"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="text-center">Update contact</h1>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={getUpdatedData}
                  className="form col-md-12 center-block"
                >
                  <div className="form-group">
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-control input-lg"
                      placeholder={name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="form-control input-lg"
                      placeholder={phone}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="email"
                      type="email"
                      className="form-control input-lg"
                      placeholder={email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="avatar"
                      type="number"
                      min={0}
                      max={99}
                      className="form-control input-lg"
                      placeholder={avatar}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      required
                      className="form-select form-control"
                      aria-label="Default select example"
                      defaultValue={gender}
                    >
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      required
                      className="form-select form-control"
                      aria-label="Default select example"
                      defaultValue={status}
                    >
                      <option value="Work">Work</option>
                      <option value="Family">Family</option>
                      <option value="Private">Private</option>
                      <option value="Friends">Friends</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      required
                      className="form-select form-control"
                      aria-label="Default select example"
                      defaultValue={favorite}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg btn-block"
                    >
                      Update
                    </button>
                       
                  </div>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { currentContact, List } = ContactListReducer;
  return { currentContact, List };
};
const mapDispatchToProps = {
  UpdateContactList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContact);
