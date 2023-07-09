import React from "react";
import App from "../app";
import Home, { homeServerSideData } from "../pages/Home";

let ROUTES = [
    {
        path: '/',
        element: <App />,
        serverSideData: () => { status: 200 }
    },
    {
        path: '/products',
        element: <Home />,
        serverSideData: homeServerSideData,
    }
]

export default ROUTES