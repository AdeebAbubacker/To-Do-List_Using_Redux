import { legacy_createStore as createStore  } from "redux";
import Mainreducer from "./mainreducer";

const Mystore  = createStore(Mainreducer);
export default Mystore;