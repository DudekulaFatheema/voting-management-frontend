import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.css']
})
export class UpdateVoterComponent {
  voters:any;
  voterService: any;
   
   voterId:any;
   name:any;
    age:any;
    gender:any;
    passWord:any;
    phoneNumber:any;
    userName:any;
   constructor(private http:HttpClient,private router: Router){

  }
  updateVoter() {
let updateVoter:any={}
updateVoter.voterId=this.voterId;
updateVoter.name=this.name;
updateVoter.age=this.age;
updateVoter.gender=this.gender;
updateVoter.phoneNumber=this.phoneNumber;
updateVoter.userName=this.userName;
updateVoter.passWord=this.passWord;
    debugger
    this.http.put(`http://localhost:8090/voter/update/${this.voterId}`, updateVoter).subscribe(
      (response) => {
        // Handle successful response
        debugger
        this.router.navigate(['voters'])
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.log('An error occurred:', error.error.message);
        } else {
          // Server-side error
          console.log('Backend returned status code:', error.status);
          console.log('Response body:', error.error);
        }
      }
    );
  }
}
  


