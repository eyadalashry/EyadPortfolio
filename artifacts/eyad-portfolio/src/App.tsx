import { Switch, Route, Router as WouterRouter } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/work/:slug" component={ProjectPage} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") ?? ""}>
      <Router />
      <Analytics />
    </WouterRouter>
  );
}

export default App;
