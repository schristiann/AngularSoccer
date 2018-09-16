import { Component, OnInit } from '@angular/core';
import {Player} from '../Player';
import {Team} from '../Team';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getTeams();
  }
  getTeams(): void {
    this.playerService.getTeams().subscribe(teams => this.sortTeams(teams));
  }
  sortTeams(teams: Team[]): void {
    teams.sort((a, b) => a.teamID - b.teamID);
    this.teams = teams;
  }

}
