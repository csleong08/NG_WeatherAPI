import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  City;
  city: string;
  image: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.city = params.city;
      console.log(this.city);
      let obs = this._httpService.getWeather(this.city);
      obs.subscribe(data => {
        this.City = data;
        console.log(this.City);
        
      });
      if(this.city == "seattle") {
        this.image = "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-03/f3d1f001ce1e4f874adc9a88fd9fb095.jpeg?itok=DHjISMr_";
      }else if(this.city == "singapore") {
        this.image = "http://estonianworld.com/wp-content/uploads/2016/09/Singapore-940x627.jpg";
      }

    });
  }


}
