import { Route, IndexRoute } from "react-router";

import App from "./App";

export default (
  <Route path="/" component={App}>
    <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);
