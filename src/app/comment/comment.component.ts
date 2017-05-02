import { Component, OnInit,Input } from '@angular/core';
import { IUserCommentWithRate } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'comment',
    templateUrl: 'comment.component.html',
    styleUrls:['comment.component.css']
})

export class CommentComponent implements OnInit {
    constructor() { }
  @Input() CommentWithUser: IUserCommentWithRate
    ngOnInit() { }
}