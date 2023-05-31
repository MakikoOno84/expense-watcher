import React from "react";
// AppRouter component needs the BrowserRouter, Routes, and Route components, from the react-router-dom node module, in order to handle the routing.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageDashboard } from "../pages/PageDashboard";
import { PageGraph } from "../pages/PageGraph";
import { PageTable } from "../pages/PageTable";

export const AppRouter = () => {
    const appInfo = {
        author  : "Makiko Ono",
        appname : "Expense Watcher"
    }

    return (
        <BrowserRouter basename="/">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<PageDashboard/>}/>
                    <Route path="/graph" element={<PageGraph/>} />
                    <Route path="/table" element={<PageTable/>}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    
    )
}

