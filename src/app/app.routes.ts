import {HomeComponent} from "./pages/home/home.component";
import { NewPage2Component } from "./pages/new-page2/new-page2.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'newPage2',
        component: NewPage2Component
    }
    ,
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
];