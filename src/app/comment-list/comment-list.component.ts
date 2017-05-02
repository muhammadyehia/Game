import { Component, OnInit, Input } from '@angular/core';
import { IUserCommentWithRate, Icomment, IUser } from '../interfaces/index'
import { LoginService, CommentService } from '../services/index';
@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: 'comment-list.component.html',
    styleUrls: ['comment-list.component.css'],
    providers:[CommentService]
})

export class CommentListComponent implements OnInit {
    constructor(private _loginService: LoginService, private _commentService: CommentService) { }
    public Comment: string;
    private _currentUser: IUser;
    @Input() CommentsWithUser: IUserCommentWithRate[]
    @Input() GameId: number
    ngOnInit() {
        this._currentUser = this._loginService.GetCurrentLoginUser();
    }
    AddComment() {
        if (this._currentUser && this.GameId) {
            let userComment: Icomment = {
                Comment: this.Comment,
                UserId: this._currentUser.Id,
                GameId: this.GameId
            };
            this._commentService.AddComment(userComment).subscribe(
                () => {
                    let addedComment: IUserCommentWithRate = {
                        Comment: this.Comment,
                        UserName: this._currentUser.Name
                    }
                    this.CommentsWithUser.push(addedComment);
                },
                error => {
                    console.log(error);
                });

        }
    }

}