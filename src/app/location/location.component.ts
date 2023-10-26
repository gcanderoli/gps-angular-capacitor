import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  longitude = 0;
  latitude = 0;
  dataLoaded = false;
  loading = true;

  constructor() {}

  async ngOnInit() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.dataLoaded = true;
      this.loading = false;
    } catch (error) {
      this.dataLoaded = false;
      this.loading = false;
    }
  }
}
