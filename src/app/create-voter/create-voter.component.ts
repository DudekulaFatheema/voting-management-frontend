import { VoterService } from '../voter.service';
import { Voter } from '../voter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-voter',
  templateUrl: './create-voter.component.html',
  styleUrls: ['./create-voter.component.css']
})
export class CreateVoterComponent {
  
  voters:any;
  voterService: any;
   addvoter: any;
   voterId:any;
   name:any;
    age:any;
    gender:any;
    passWord:any;
    phoneNumber:any;
    userName:any;
   constructor(private http:HttpClient,private router: Router){

  }
  makeHttpRequest() {
let newVoter:any={}
newVoter.voterId=this.voterId;
newVoter.name=this.name;
  newVoter.age=this.age;
  newVoter.gender=this.gender;
  newVoter.phoneNumber=this.phoneNumber;
  newVoter.userName=this.userName;
  newVoter.passWord=this.passWord;
    
    this.http.post('http://localhost:8090/voter/addvoter', newVoter).subscribe(
      (response) => {
        // Handle successful response
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
  
//    ngOnInit(): void {

//  let response =this.http.get("http://localhost:8090/voter/addvoter");

//  response.subscribe((data: any)=>this.voters=data);
 
// }

// }
  
  

  

  
  
