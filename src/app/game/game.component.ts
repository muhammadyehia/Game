import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from '../services/index'
import { IGameCommentsWithUser } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls:['game.component.css']
})

export class GameComponent implements OnInit {
    constructor( ) { }
    @Input() GameCommentsWithUser: IGameCommentsWithUser
    ngOnInit() {
      
     }
}