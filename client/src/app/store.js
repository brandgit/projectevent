import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../feature/events.slice"
import idUserReducer  from "../feature/user.slice";

export default configureStore({
  reducer: {
    events: eventsReducer,
    iduser: idUserReducer,
  },
  
});
