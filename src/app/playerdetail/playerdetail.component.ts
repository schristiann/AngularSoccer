import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../Team';
import {Player} from '../Player';
import {PlayerService} from '../player.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.css']
})
export class PlayerdetailComponent implements OnInit {
  @Input() player: Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPlayer();
  }
  getPlayer(): void {
    const playerID = this.route.snapshot.paramMap.get('playerID');
    const teamID = this.route.snapshot.paramMap.get('_id');
    console.log('team id is' + teamID + 'player id is' + playerID);
    this.playerService.getPlayer(teamID , playerID).subscribe(player => this.player = player);
   // console.log('The returned id is: ' + this.player.playerID);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    const teamID = this.route.snapshot.paramMap.get('_id');
    this.playerService.updatePlayer(this.player, teamID).subscribe(() => this.goBack());
  }

}
