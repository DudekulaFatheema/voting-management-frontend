import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-voter',
  templateUrl: './delete-voter.component.html',
  styleUrls: ['./delete-voter.component.css']
})
export class DeleteVoterComponent {
  voters:any;
  voterService: any;
   
   voterId:any;
   constructor(private http:HttpClient,private router: Router){

   }
   deleteVoter() {
 let existingVoter:any={}
 existingVoter.voterId=this.voterId;
 
 this.http.delete(`http://localhost:8090/voter/delete/${this.voterId}`, existingVoter).subscribe(
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


