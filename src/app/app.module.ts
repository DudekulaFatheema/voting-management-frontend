import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVoterComponent } from './create-voter/create-voter.component'
import { VoterListComponent } from './voter-list/voter-list.component';
import { DeleteVoterComponent } from './delete-voter/delete-voter.component';
import { UpdateVoterComponent } from './update-voter/update-voter.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateVoterComponent,
    VoterListComponent,
    DeleteVoterComponent,
    UpdateVoterComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
