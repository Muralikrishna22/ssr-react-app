import React from "react";
import { useRoutes } from 'react-router-dom'
import ROUTES from "./routes";

const CustomRoutes = () => {
    let routes = useRoutes(ROUTES)
    return routes
}

export default CustomRoutes