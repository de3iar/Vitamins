
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";

export const routesList = [
    {
        path: "/",
        component: lazy(() => import("/src/pages/hero"))
    },
    {
        path: "/intro",
        component: lazy(() => import("/src/pages/start/intro"))
    },
    {
        path: "/getstarted",
        component: lazy(() => import("/src/pages/start/getstarted"))
    }
    ,
    {
        path: "/prefix",
        component: lazy(() => import("/src/pages/asvtb/prefix"))
    }
];