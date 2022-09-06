import { v4 as uuidv4 } from "uuid";

const initialState = {
  List: [
    {
      id: uuidv4(),
      name: "Alexander Ver",
      status: "Work",
      phone: "+1-800-600-9898",
      email: "alex@email.com",
      gender: "men",
      avatar: "51",
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "Eva Anderson",
      status: "Private",
      phone: "097-123-56-75",
      email: "eva@email.com",
      gender: "women",
      avatar: "49",
      favorite: true,
    },
  ],
  currentContact: null,
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT_LIST":
      return {
        ...state,
        List: action.payload,
      };
    case "SET_CURRENT_CONTACT":
      return {
        ...state,
        currentContact: action.payload,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
