import { Component, OnInit, Input } from '@angular/core';
import {PlayerService} from '../player.service';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../Team';
import {Location} from '@angular/common';
import {Player} from '../Player';


@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.component.html',
  styleUrls: ['./teamdetail.component.css']
})
export class TeamdetailComponent implements OnInit {
  @Input() team: Team;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeam();
  }
  getBackground(team: Team): String {
    return `url(${team.banner})`;

  }
  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.playerService.getTeam(id).subscribe(team => this.assignTeam(team));
  }
  assignTeam(team: Team): void {
    console.log('team id= ' + team.teamID);
    this.team = team;
    this.team.players.sort((a, b) => a.playerID - b.playerID);
  }
   delete(player: Player): void {
    this.team.players = this.team.players.filter(o => o !== player );
    const teamID = this.route.snapshot.paramMap.get('_id');
     this.playerService.deletePlayer(player._id, teamID).subscribe();
   }
   addPlayer(playerName: string): void {
    playerName = playerName.trim();
    if (!playerName) {
      return;
    }
     let maxId = Math.max.apply(Math, this.team.players.map(function(o) { return o.playerID; }));
     maxId = maxId + 1;
    const newPlayer = {
      _id: 'new player',
      playerName: playerName,
      tid: this.team._id,
      playerID: maxId,
      position: 'position',
      team: this.team.teamName
    }
    this.playerService.addPlayer(this.team._id, newPlayer as Player).subscribe(player => this.team.players.push(player));
}
}
