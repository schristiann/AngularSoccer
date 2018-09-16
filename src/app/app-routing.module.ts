import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TeamsComponent} from './teams/teams.component';
import {TeamdetailComponent} from './teamdetail/teamdetail.component';
import {PlayerdetailComponent} from './playerdetail/playerdetail.component';


const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:_id', component: TeamdetailComponent},
  {path: 'teams/:_id/:playerID', component: PlayerdetailComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
