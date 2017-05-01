import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from '../services/index'
import { IGameCommentsWithUser } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'game-comment-rate',
    templateUrl: 'game-comment-rate.component.html',
    styleUrls:['game-comment-rate.component.css']
})

export class GameCommentRateComponent implements OnInit {
    constructor( ) { }
    @Input() GameCommentsWithUser: IGameCommentsWithUser
    ngOnInit() { }
}