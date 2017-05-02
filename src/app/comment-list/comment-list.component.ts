import { Component, OnInit, Input } from '@angular/core';
import { IUserCommentWithRate } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: 'comment-list.component.html',
    styleUrls: ['comment-list.component.css']
})

export class CommentListComponent implements OnInit {
    constructor() { }
    @Input() CommentsWithUser: IUserCommentWithRate[]
    ngOnInit() { }
}