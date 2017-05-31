import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { PassengerSearchComponent } from "app/passenger-search/passenger-search.component";
import { FlightEditComponent } from "app/flight-edit/flight-edit.component";

const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];

export const FlightSearchRouterModule = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);
                                            //         ^
                                            //         |
                                            //         +------> Für Feature Module !!!