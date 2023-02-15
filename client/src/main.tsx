import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./app";
import { ThemeProvider } from "@/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
