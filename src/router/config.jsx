
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";

export const routesList = [
    {
        path: "/",
        component: lazy(() => import("/src/pages/hero"))
    }
];