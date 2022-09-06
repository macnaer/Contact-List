import React from "react";
import "./ContactList.css";

import { connect } from "react-redux/es/exports";

// Import Contact Item
import ContactItem from "../ContactItem/Contactitem";
import Sidebar from "../Sidebar/Sidebar";

const ContactList = ({ List }) => {
  const listItem = List.map((contact) => {
    return <ContactItem key={contact.id} {...contact} />;
  });
  return (
    <div className="container bootstrap snippets bootdeys bootdey">
      <div className="row decor-default">
        <Sidebar />
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="contacts-list">
            <div
              className="ac-custom ac-checkbox ac-checkmark"
              autoComplete="off"
            ></div>
            <div className="unit head">
              <div className="field name">
                <div className="check">
                  <input id="cb1" name="cb1" type="checkbox" />
                  <label htmlFor="cb1"></label>
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </div>
                Name
              </div>
              <div className="field phone">Phone</div>
              <div className="field email icons">Email</div>
            </div>
            {List.length > 0 ? listItem : <p>Contact list is empty.</p>}
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

export default connect(mapStateToProps)(ContactList);
