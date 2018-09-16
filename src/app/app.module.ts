import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStyle} from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TeamsComponent } from './teams/teams.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamdetailComponent } from './teamdetail/teamdetail.component';
import { PlayerdetailComponent } from './playerdetail/playerdetail.component';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamdetailComponent,
    PlayerdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
