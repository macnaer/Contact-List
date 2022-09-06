// import UUID
import { v4 as uuidv4 } from "uuid";
// Import Navigate for redirect
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { UpdateContactList } from "../../Actions/ContactListActions";
import React, { useState } from "react";
import "./NewContact.css";

const NewContact = ({ List, UpdateContactList }) => {
  const [isRedirect, setRedirect] = useState(false);

  const onSaveContact = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const avatar = e.target[3].value;
    const gender = e.target[4].value;
    const status = e.target[5].value;
    const favorite = !!e.target[6].value;
    console.log(favorite, typeof favorite);
    const NewContact = {
      id: uuidv4(),
      name,
      phone,
      email,
      avatar,
      gender,
      status,
      favorite,
    };

    const tmpList = List.slice();
    tmpList.unshift(NewContact);

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
                <h1 className="text-center">Add new contact</h1>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={onSaveContact}
                  className="form col-md-12 center-block"
                >
                  <div className="form-group">
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-control input-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="form-control input-lg"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="email"
                      type="email"
                      className="form-control input-lg"
                      placeholder="Email"
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
                      placeholder="Avatar"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      required
                      className="form-select form-control"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose gender</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      required
                      className="form-select form-control"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose status</option>
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
                    >
                      <option defaultValue>Favorite</option>
                      <option value="True">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block">
                      Add
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
  const { List } = ContactListReducer;
  return { List };
};

const mapDispathToProps = {
  UpdateContactList,
};

export default connect(mapStateToProps, mapDispathToProps)(NewContact);
