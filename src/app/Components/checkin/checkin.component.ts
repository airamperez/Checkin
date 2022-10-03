import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ClockComponent } from '../clock/clock.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  
  constructor() { 
    this.menuComponet = new MenuComponent;
    this.clockComponent = new ClockComponent;
    this.checkiCondition = false;
    this.pauseCondition = false;
  }
  menuComponet: MenuComponent;
  @ViewChild(ClockComponent) clockComponent: ClockComponent;
  checkiCondition: boolean;
  pauseCondition: boolean;
  ngOnInit(): void {
  }
  checkin(){
    this.checkiCondition = true;
    this.clockComponent.checkin();
  }
  pause(){
    this.pauseCondition = true;
    this.clockComponent.pause();
  }
  continue(){
    this.checkin();
    this.pauseCondition = false;
  }
  goOut(){
    this.clockComponent.goOut();
    this.checkiCondition = false;
  }
}
