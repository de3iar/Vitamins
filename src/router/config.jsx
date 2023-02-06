
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";

export const routesList = [
    {
        path: window.location.pathname,
        component: lazy(() => import("/src/pages/hero"))
    },
    {
        path: window.location.pathname + "intro",
        component: lazy(() => import("/src/pages/start/intro"))
    },
    {
        path: window.location.pathname + "download",
        component: lazy(() => import("/src/pages/start/download"))
    }
    ,
    {
        path: window.location.pathname + "req",
        component: lazy(() => import("/src/pages/start/req"))
    }
    ,
    {
        path: window.location.pathname + "use",
        component: lazy(() => import("/src/pages/asvtb/use"))
    },
    {
        path: window.location.pathname + "asvtb_prefix",
        component: lazy(() => import("/src/pages/asvtb/prefix"))
    }
    ,
    {
        path: window.location.pathname + "asvtb_impAndLoad",
        component: lazy(() => import("/src/pages/asvtb/impAndLoad"))
    }
    ,
    {
        path: window.location.pathname + "asvtb_knowledge",
        component: lazy(() => import("/src/pages/asvtb/knowledge"))
    },
    {
        path: window.location.pathname + "rigger_withVitamins",
        component: lazy(() => import("/src/pages/asrigger/withVitamins"))
    },
    {
        path: window.location.pathname + "rigger_distribution",
        component: lazy(() => import("/src/pages/asrigger/distribution"))
    },
    {
        path: window.location.pathname + "coder_intro",
        component: lazy(() => import("/src/pages/ascoder/intro"))
    },
    {
        path: window.location.pathname + "coder_Infomations",
        component: lazy(() => import("/src/pages/ascoder/info"))
    },
    {
        path: window.location.pathname + "coder_quickstart",
        component: lazy(() => import("/src/pages/ascoder/quickStart"))
    },
    {
        path: window.location.pathname + "coder_advanced",
        component: lazy(() => import("/src/pages/ascoder/advanced"))
    },
    {
        path: window.location.pathname + "coder_example",
        component: lazy(() => import("/src/pages/ascoder/example"))
    },
    {
        path: window.location.pathname + "faq",
        component: lazy(() => import("/src/pages/faq"))
    },
    {
        path: window.location.pathname + "about",
        component: lazy(() => import("/src/pages/about"))
    },
    {
        path: window.location.pathname + "comm",
        component: lazy(() => import("/src/pages/comm"))
    },
];