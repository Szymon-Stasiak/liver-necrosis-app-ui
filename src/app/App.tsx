import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './globalStyle.css';
import NavBarAdder from "./components/NavigationBar/NavBarAdder";
import {ROUTES} from "./utils/ROUTES";
import Home from "./pages/Home";
import CheckStage from "./pages/CheckStage";
import PageNotFound from "./pages/PageNotFound";
import Result from "./pages/Result";
import {ApiResponseProvider} from "./ContexProvider";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <ApiResponseProvider>
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route element={<NavBarAdder/>}>
                        <Route path={ROUTES.BASE} element={<Home/>}/>
                        <Route path={ROUTES.HOME} element={<Home/>}/>
                        <Route path={ROUTES.CHECK_STAGE} element={<CheckStage/>}/>
                        <Route path={ROUTES.RESULT} element={<Result/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ApiResponseProvider>
    );
}

export default App;