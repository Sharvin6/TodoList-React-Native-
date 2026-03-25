import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const tron = Reactotron
  .configure({ name: "TodoApp" })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = tron;

export default tron;