import { Component, OnInit } from '@angular/core';
import { AxiosApiService } from '../../Services/axios-api.service'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() {
    this.hours = 0;
    this.min = 0;
    this.sec= 0;
    this.hoursString = "00";
    this.minString = "00";
    this.secString = "00"
    this.axiosServices = new AxiosApiService;
    this.id = "";
   }
  hours: number;
  min:number;
  sec: number;
  hoursString: string;
  minString:string;
  secString: String;
  contador: any;
  axiosServices: AxiosApiService;
  id:string;

  ngOnInit(): void {
    this.axiosServices.getEmployes().then((response)=>{
      this.id = response.data.data[0].id;
    });
  }
  checkin(){
    //this.axiosServices.workEntryIn(this.id);
    this.contador = setInterval( () => {
      if(this.sec < 60){
        this.sec ++;
        if(this.sec < 10){
          this.secString = "0" + this.sec.toString();
        }
        else{
          this.secString = this.sec.toString();
        }
      }
      else if(this.min < 60){
        this.min ++;
        if(this.min < 10){
          this.minString = "0" + this.min.toString();
        }
        else{
          this.minString = this.min.toString();
        }
        this.sec = 0;
        this.secString = "00";
      }
      else if(this.hours < 8){
        this.hours ++;
        this.hoursString = "0" + this.hours.toString();

        this.min = 0;
        this.minString = "00";
      }
      else {
        window.alert("El límite de horas de una jornada es de 8h");
      }
  }, 1000);
  }
  pause(){
    clearInterval(this.contador);
  }
  goOut(){
    clearInterval(this.contador);
    this.hoursString = "00";
    this.minString = "00";
    this.secString = "00"
  }
}
