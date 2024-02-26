// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuiSuisJePage from "../pages/QuiSuisJePage";
import Consultationpage from "../pages/ConsultationPage";
import Therapiepage from "../pages/TherapiePage";
import HonorairesPage from "../pages/HonorairesPage";
import PrendreRdvPage from "../pages/PrendreRdvPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/QuiSuisJePage" component={QuiSuisJePage} />
        <Route path="/difficulte" component={Consultationpage} />
        <Route path="/anxiete" component={Consultationpage} />
        <Route path="/depression" component={Consultationpage} />
        <Route path="/comportement" component={Consultationpage} />
        <Route path="/traumatismes" component={Consultationpage} />
        <Route path="/maladies" component={Consultationpage} />
        <Route path="/addictions" component={Consultationpage} />
        <Route path="/sexualite" component={Consultationpage} />
        <Route path="/travail" component={Consultationpage} />
        <Route path="/prendreRdv" component={Therapiepage} />
        <Route path="/honoraires" component={HonorairesPage} />
        <Route path="/calendarPrendreRdv" component={PrendreRdvPage} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Switch>
    </Router>
  );
}

export default Routes;
