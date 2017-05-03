import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IUserCommentWithRate, IComment, IUser } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: 'comment-list.component.html',
    styleUrls: ['comment-list.component.css']
})

export class CommentListComponent implements OnInit, OnChanges {
    constructor() { }
    @Input() CommentsWithUser: IUserCommentWithRate[]
    public FilterdCommentsWithUser: IUserCommentWithRate[]
    ngOnInit() {
        this.FilterComments();
    }
    private FilterComments() {
        this.FilterdCommentsWithUser = this.CommentsWithUser.filter((item: IUserCommentWithRate) => {
            return item.Comment;
        });
    }
    ngOnChanges() {
        this.FilterComments();
    }
}