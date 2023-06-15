
import { CreateVoterComponent } from './create-voter/create-voter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoterListComponent } from './voter-list/voter-list.component';
import { DeleteVoterComponent } from './delete-voter/delete-voter.component';
import { UpdateVoterComponent } from './update-voter/update-voter.component';


const routes: Routes = [
  
  { path: 'voters', component: VoterListComponent },
  { path: 'create', component: CreateVoterComponent },
  { path: 'delete', component: DeleteVoterComponent },
  { path: 'update', component: UpdateVoterComponent },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
