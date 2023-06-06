
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";
import { getLoactionPath } from "../js/getLocationPath";
let a = getLoactionPath()
export const routesList = [
    {
        path: a,
        component: lazy(() => import("/src/pages/hero"))
    },
    {
        path: a + "intro",
        component: lazy(() => import("/src/pages/start/intro"))
    },
    {
        path: a + "download",
        component: lazy(() => import("/src/pages/start/download"))
    }
    ,
    {
        path: a + "req",
        component: lazy(() => import("/src/pages/start/req"))
    }
    ,
    {
        path: a + "prefixAdvan",
        component: lazy(() => import("/src/pages/start/prefixAdvan"))
    },
    {
        path: a + "use",
        component: lazy(() => import("/src/pages/asvtb/use"))
    },

    {
        path: a + "asvtb_prefix",
        component: lazy(() => import("/src/pages/asvtb/prefix"))
    }
    ,
    {
        path: a + "asvtb_impAndLoad",
        component: lazy(() => import("/src/pages/asvtb/impAndLoad"))
    }
    ,
    {
        path: a + "asvtb_knowledge",
        component: lazy(() => import("/src/pages/asvtb/knowledge"))
    },
    {
        path: a + "rigger_withVitamins",
        component: lazy(() => import("/src/pages/asrigger/withVitamins"))
    },
    {
        path: a + "rigger_distribution",
        component: lazy(() => import("/src/pages/asrigger/distribution"))
    },
    {
        path: a + "coder_intro",
        component: lazy(() => import("/src/pages/ascoder/intro"))
    },
    {
        path: a + "coder_Infomations",
        component: lazy(() => import("/src/pages/ascoder/info"))
    },
    {
        path: a + "coder_quickstart",
        component: lazy(() => import("/src/pages/ascoder/quickStart"))
    },
    {
        path: a + "coder_advanced",
        component: lazy(() => import("/src/pages/ascoder/advanced"))
    },
    {
        path: a + "coder_example",
        component: lazy(() => import("/src/pages/ascoder/example"))
    },
    {
        path: a + "faq",
        component: lazy(() => import("/src/pages/faq"))
    },
    {
        path: a + "about",
        component: lazy(() => import("/src/pages/about"))
    },
    {
        path: a + "comm",
        component: lazy(() => import("/src/pages/comm"))
    },
];