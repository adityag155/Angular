import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  uname:string="Aditya";
  flag1:boolean=true;
  flag2:boolean=false;
  

  constructor() { }

  ngOnInit(): void {

  }

  myfun():void{
    alert("Hii");
    this.uname="Adii";
  }
}
