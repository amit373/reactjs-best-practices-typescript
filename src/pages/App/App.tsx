import { BrowserRouter } from "react-router-dom";

import {Router} from "../../routes";
import styles from "./App.module.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Router />
      </div>
    </BrowserRouter>
  );
}
