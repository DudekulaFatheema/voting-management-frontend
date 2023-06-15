import { Component, OnInit } from "@angular/core";
 import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Voter } from "../voter";
import { Route } from '@angular/router';


 @Component({
   selector: "app-voter-list",
   templateUrl: "./voter-list.component.html",
   styleUrls: ["./voter-list.component.css"]
})
 export class VoterListComponent implements OnInit {
  voters:any;
 constructor(private http:HttpClient){

  }

   ngOnInit(): void {

 let response =this.http.get("http://localhost:8090/voter/voters");

 response.subscribe((data)=>this.voters=data);
  
  }


  
}

  
  // reloadData() {
  //   this.voters = this.voterService.getVoterList();
  // }

  // deleteVoter(voterId: number) {
  //   this.voterService.deleteVoter(voterId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  
