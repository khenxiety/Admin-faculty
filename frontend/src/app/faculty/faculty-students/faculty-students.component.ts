import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-students',
  templateUrl: './faculty-students.component.html',
  styleUrls: ['./faculty-students.component.scss']
})
export class FacultyStudentsComponent implements OnInit {

  teacherid:any

  students:any
  constructor(private api:ApiService) {
    this.teacherid=localStorage.getItem('teachid');
    console.log(this.teacherid);
    this.getStudents()
   }

  ngOnInit(): void {
  }

  getStudents(){
    this.api.getClassesStudents(this.teacherid).subscribe((res: any)=>{
      console.log(res);
      this.students=res;
    }),(err: any)=>{
      console.log(err);
    }
  }

}
