import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import DashboardLayout from "../templates/DashboardLayout";
import { Suspense } from "react";
const Event = React.lazy(() => import("../pages/Event"));
const Races = React.lazy(() => import("../pages/Races"));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/events" />
          </Route>
          <DashboardLayout>
            <>
              <Route path="/events" exact component={Event} />
              <Route path="/events/races" exact component={Races} />
            </>
          </DashboardLayout>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routers;
