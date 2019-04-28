import { combineReducers } from "redux";

import qrReducer from "./qrReducer";

export default combineReducers({
    qr: qrReducer,
});