
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
        path: "/download",
        component: lazy(() => import("/src/pages/start/download"))
    },
    {
        path: "/use",
        component: lazy(() => import("/src/pages/start/use"))
    }
    ,
    {
        path: "/asvtb_prefix",
        component: lazy(() => import("/src/pages/asvtb/prefix"))
    }
    ,
    {
        path: "/asvtb_impAndLoad",
        component: lazy(() => import("/src/pages/asvtb/impAndLoad"))
    }
    ,
    {
        path: "/asvtb_knowledge",
        component: lazy(() => import("/src/pages/asvtb/knowledge"))
    },
    {
        path: "/rigger_withVitamins",
        component: lazy(() => import("/src/pages/asrigger/withVitamins"))
    },
    {
        path: "/rigger_distribution",
        component: lazy(() => import("/src/pages/asrigger/distribution"))
    },
    {
        path: "/coder_intro",
        component: lazy(() => import("/src/pages/ascoder/intro"))
    },
    {
        path: "/coder_Infomations",
        component: lazy(() => import("/src/pages/ascoder/info"))
    },
    {
        path: "/coder_quickstart",
        component: lazy(() => import("/src/pages/ascoder/quickStart"))
    },
    {
        path: "/coder_advanced",
        component: lazy(() => import("/src/pages/ascoder/advanced"))
    },
    {
        path: "/coder_example",
        component: lazy(() => import("/src/pages/ascoder/example"))
    },
    {
        path: "/faq",
        component: lazy(() => import("/src/pages/faq"))
    },
    {
        path: "/about",
        component: lazy(() => import("/src/pages/about"))
    },
];