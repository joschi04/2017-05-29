import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { PassengerSearchComponent } from "app/passenger-search/passenger-search.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    /*
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    */
    {
        path: '**',
        redirectTo: 'home'
    }

];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);