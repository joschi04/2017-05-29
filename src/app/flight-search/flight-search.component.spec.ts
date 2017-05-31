import { TestBed, async } from '@angular/core/testing';
import { FlightSearchModule } from "app/flight-search/flight-search.module";
import { HttpModule } from "@angular/http";
import { BASE_URL } from "app/app.tokens";

import 'rxjs';
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { Observable } from "rxjs";
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-search/flight.service";

let flightServiceMock = {
  find(from: string, to:string):Observable<Flight[]> {
    return Observable.of([
      {id: 4711, from: 'Nürnberg', to: 'Hamburg', date: 'sofort'},
      {id: 4712, from: 'Nürnberg', to: 'Hamburg', date: 'sofort'},
      {id: 4713, from: 'Nürnberg', to: 'Hamburg', date: 'sofort'},
    ]);
  }
}

describe('FlightSearchComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FlightSearchModule
      ],
      declarations: [
      ],
      providers: [
        // { provide: BASE_URL, useValue: 'http://www.angular.at/api/' }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: flightServiceMock}
        ]
      }
    }).compileComponents();

  }));

  it('has no found filights initially', () => {

      let fixture = TestBed.createComponent(FlightSearchComponent);

      // fixture.nativeElement; // DOM
      // fixture.debugElement; // DOM-Wrapper

      let comp = fixture.componentInstance;

      expect(comp.flights.length).toBe(0);

  });

    it('does not search for flights without from and/or to', (done: Function) => {

      let fixture = TestBed.createComponent(FlightSearchComponent);

      // fixture.nativeElement; // DOM
      // fixture.debugElement; // DOM-Wrapper

      let comp = fixture.componentInstance;

      comp.afterSearch$.subscribe(
        flights => {
          fail();
          done();
        },
        err => {
          expect(comp.flights.length).toBe(0);
          done();
        }
      );

      comp.from = '';
      comp.to = '';
      comp.search();

  });


    it('searches for flights with from and to', (done:Function) => {

      let fixture = TestBed.createComponent(FlightSearchComponent);

      // fixture.nativeElement; // DOM
      // fixture.debugElement; // DOM-Wrapper

      let comp = fixture.componentInstance;

      comp.afterSearch$.subscribe(
        flights => {
          expect(comp.flights.length).toBe(3);
          done();
        },
        err => {
          fail(err);
          done();
        }
      );


      comp.from = 'Hamburg';
      comp.to = 'Graz';
      comp.search();

  });

    it('searches for flights with from and to (2)', () => {

      let fixture = TestBed.createComponent(FlightSearchComponent);

      let comp = fixture.componentInstance;
      comp.from = 'Hamburg';
      comp.to = 'Graz';
      comp.search();
      expect(comp.flights.length).toBe(3);

  });

});
