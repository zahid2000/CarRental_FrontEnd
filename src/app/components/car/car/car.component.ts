import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/catDetail';
import { CarService } from 'src/app/sevices/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  
  carDetails: CarDetail[]=[];
  constructor(private carService: CarService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
    })
    this.getCarDetail();
  }

  getCarDetail() {
    this.carService.getCarDetail().subscribe(response=>{
       this.carDetails=response.data;
    })
  }
  getCarByColorIdAndBrandId(colorId:number,brandId:number){
    this.carService.getCarByColorIdAndBrandId(colorId,brandId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
}
