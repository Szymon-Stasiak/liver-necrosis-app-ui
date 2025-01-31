import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'globalStyle.css';
import NavBarAdder from "./components/NavigationBar/NavBarAdder";
import {ROUTES} from "./utils/ROUTES";
import Home from "./pages/Home";
import CheckStage from "./pages/CheckStage";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavBarAdder/>}>
                    <Route path={ROUTES.BASE} element={<Home/>}/>
                    <Route path={ROUTES.HOME} element={<Home/>}/>
                    <Route path={ROUTES.CHECK_STAGE} element={<CheckStage/>}/>
                    <Route path={ROUTES.RESULTS} element={<PageNotFound/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;