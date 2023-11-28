import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = []; // for data binding

  constructor(private reservationService: ReservationService) {} //constructor to grab an instance of our service and in the lifecycle hook ngOnInit

  // simply load all the reservtions from our service and put them right into the property.
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
