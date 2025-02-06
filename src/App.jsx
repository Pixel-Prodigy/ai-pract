import { useState } from "react";
import { NavBar } from "./components/ui/NavBar";
import { Start } from "./components/layout/Start";
import { Route } from "wouter";
import { Main } from "./components/layout/Main";
import { Translate } from "./components/layout/Translate";
import { Search } from "./components/layout/Search";  

import { ContextProvider } from "./components/ui/ContextProvider";
import { OpenAuth } from "./components/ui/OpenAuth";

function App() {
  return (
    <ContextProvider>
      <div className="bg-black h-screen">
        <div className="mx-auto max-w-screen-lg flex py-8 flex-col">
          <OpenAuth />
          <NavBar />
          <Route path="/" component={Start} />
          <Route path="/main" component={Main} />
           <Route path="/translate" component={Translate} />
           <Route path="/search" component={Search} />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
