import { useState } from "react";

import "./App.css";
import { NavBar } from "./components/ui/NavBar";
import { Start } from "./components/layout/Start";
import {Switch , Route} from 'wouter'
import { Main } from "./components/layout/Main";
function App() {
  return (
    <div className="bg-black h-screen">
      <div className="mx-auto max-w-screen-lg flex py-8 flex-col">
        <NavBar />
        <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/" component={Start}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
