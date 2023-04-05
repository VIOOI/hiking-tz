import React from "react";
import ReactDOM from "react-dom/client";

import { FormPage } from "@pages/index";

import "./index.scss";
import { Context, store } from "@store/context";

const root = document.getElementById("root") as HTMLElement;


ReactDOM.createRoot(root).render(<FormPage />);
