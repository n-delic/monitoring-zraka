import { Thresholds } from './../../models/thresholds';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectService } from './../../services/api-connect.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { Station } from 'src/app/models/station';
import { Subscription } from 'rxjs';
import { NgStyleInterface } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-ispis',
  templateUrl: './ispis.component.html',
  styleUrls: ['./ispis.component.css']
})
export class IspisComponent implements OnInit, OnDestroy {
  data: Data = new Data();
  stations: Array<Station> = [
    {name: 'Zivinice', id: 9323},
    {name: 'Tuzla',id:9320},
    {name: 'Lukavac', id: 9322}
  ];
  thresholds: Thresholds = new Thresholds();
  currentStation!: Station;
  connectt!: Subscription;
  acrs!: Subscription;
  constructor(private connect: ApiConnectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: value=>{
        for(let station of this.stations) {
          if(station.name == value.name) {
            this.currentStation = station;
            console.log(this.currentStation);
          }
        }
        this.connect.getData(this.currentStation.id.toString()).subscribe((value) => {
          this.data.aqi = value.data.aqi;
          this.data.temperature = value.data.iaqi.t.v;
          this.data.humidity = value.data.iaqi.h.v;
          this.data.pressure = value.data.iaqi.p.v;
          this.data.wind = value.data.iaqi.w.v;
          this.data.pm25 = value.data.iaqi.pm25.v;
          this.data.pm10 = value.data.iaqi.pm10.v;
          this.data.so2 = value.data.iaqi.so2.v;
          this.data.no2 = value.data.iaqi.no2.v;

          console.log(this.data);
        });
      }
    });
  }

  ngOnDestroy() : void {
    console.log('here destory');
    this.acrs.unsubscribe();
  }

  getEmoji() : string {
    if(this.data.aqi < 50) {
      return '😺';
    } else if(this.data.aqi > 51 && this.data.aqi < 101) {
      return '🙀';
    } else {
      return '😾';
    }
  }

  getColor(value: number,measure: string) : NgStyleInterface {
    for(let thres of this.thresholds.thresholds) {
      if(measure == thres.name) {
        for(let i = 0; i< thres.data.length;++i) {
          if(value < thres.data[i].value) {
            return { color: thres.data[i].color };
          }
        }
      }
    }
    return { color: '#000000' };
  }

  getText() : string {
    if(this.data.aqi < 50) {
      return 'Cist';
    } else if(this.data.aqi > 51 && this.data.aqi < 101) {
      return 'Umjereno zagaden';
    } else {
      return 'Zagaden';
    }
  }
}

