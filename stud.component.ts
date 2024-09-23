import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Student } from '../pojo/Student';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit{


  student:any=[];

  studObj:Student=new Student();
  
  constructor(private dataService:DataService){
    
  }
  ngOnInit(): void {
    this.fillList();
  }


  clearData()
  {
    this.studObj.sno=0;
    this.studObj.sname='';
    this.studObj.age=0;
    
  }

  fillList()
  {
    this.dataService.getData("student").subscribe(data=>{this.student=data; /*alert(JSON.stringify(this.student));*/});   
    this.clearData();
  }

  save()
  {
    this.dataService.insertData("student", this.studObj).subscribe(data=>{this.fillList();})
  }
  Update(sno:number)
  {
    //alert(sno);
    this.dataService.getData("student/" +sno).subscribe(data=>{this.studObj=data; });   
  }


  edit()
  {
    this.dataService.updateData("student", this.studObj).subscribe(data=>{this.fillList();})
  }

  Delete(sno:number)
  {

    let ans=confirm("Are you sure you want to delete this record?")
    //alert(sno);
    if(ans)
    this.dataService.deleteData("student/" +sno).subscribe(data=>{this.fillList();})
  }
}