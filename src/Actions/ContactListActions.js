export const UpdateContactList = (newList) => {
  return {
    type: "UPDATE_CONTACT_LIST",
    payload: newList,
  };
};

export const SetCurrentContact = (currentContact) => {
  return {
    type: "SET_CURRENT_CONTACT",
    payload: currentContact,
  };
};
