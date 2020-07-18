import { StudentType } from './../student-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  studentList =[];
  depertments=['ECE','CSE','IT','CE','ME'];
  deptValue :boolean;
  submitted = false;
  selectedFile: string;
  selectedValue:boolean;
  passMarks:number;
  student = new StudentType(this.selectedFile,'mkn','',this.passMarks,'default');


  onsubmit(){
    this.submitted = true;
    // console.log(m);
  }

  validateDept(value){
    if (value === "default") {
      this.deptValue = false;
    } else {
      this.deptValue = true;
    }
  }


  onselectFile(e){
    let fileName = e.toLocaleLowerCase();
    if (fileName.includes('jpg')) {
      this.selectedValue = true;
      this.selectedFile = fileName;
      console.log(e);
      console.log(true);
    } else {
      console.log(false);
      this.selectedValue = false;
    }
  }


  onSubmit(value) {
      this.studentList.push(value);
      this.submitted = true;
      // console.log(value);
  }

  delete(value){
    this.studentList.splice(this.studentList.indexOf(value),1);
  }

  update(value){
    this.student = value;
    this.studentList.splice(this.studentList.indexOf(value),1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
