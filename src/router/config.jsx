
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";
import { getLoactionPath } from "../js/getLocationPath";

export const routesList = [
    {
        path: getLoactionPath(),
        component: lazy(() => import("/src/pages/hero"))
    },
    {
        path: getLoactionPath() + "intro",
        component: lazy(() => import("/src/pages/start/intro"))
    },
    {
        path: getLoactionPath() + "download",
        component: lazy(() => import("/src/pages/start/download"))
    }
    ,
    {
        path: getLoactionPath() + "req",
        component: lazy(() => import("/src/pages/start/req"))
    }
    ,
    {
        path: getLoactionPath() + "use",
        component: lazy(() => import("/src/pages/asvtb/use"))
    },
    {
        path: getLoactionPath() + "asvtb_prefix",
        component: lazy(() => import("/src/pages/asvtb/prefix"))
    }
    ,
    {
        path: getLoactionPath() + "asvtb_impAndLoad",
        component: lazy(() => import("/src/pages/asvtb/impAndLoad"))
    }
    ,
    {
        path: getLoactionPath() + "asvtb_knowledge",
        component: lazy(() => import("/src/pages/asvtb/knowledge"))
    },
    {
        path: getLoactionPath() + "rigger_withVitamins",
        component: lazy(() => import("/src/pages/asrigger/withVitamins"))
    },
    {
        path: getLoactionPath() + "rigger_distribution",
        component: lazy(() => import("/src/pages/asrigger/distribution"))
    },
    {
        path: getLoactionPath() + "coder_intro",
        component: lazy(() => import("/src/pages/ascoder/intro"))
    },
    {
        path: getLoactionPath() + "coder_Infomations",
        component: lazy(() => import("/src/pages/ascoder/info"))
    },
    {
        path: getLoactionPath() + "coder_quickstart",
        component: lazy(() => import("/src/pages/ascoder/quickStart"))
    },
    {
        path: getLoactionPath() + "coder_advanced",
        component: lazy(() => import("/src/pages/ascoder/advanced"))
    },
    {
        path: getLoactionPath() + "coder_example",
        component: lazy(() => import("/src/pages/ascoder/example"))
    },
    {
        path: getLoactionPath() + "faq",
        component: lazy(() => import("/src/pages/faq"))
    },
    {
        path: getLoactionPath() + "about",
        component: lazy(() => import("/src/pages/about"))
    },
    {
        path: getLoactionPath() + "comm",
        component: lazy(() => import("/src/pages/comm"))
    },
];