import { Component, OnInit, Input } from '@angular/core';
import { IUserCommentWithRate, Icomment, IUser } from '../interfaces/index'
import { LoginService, CommentService } from '../services/index';
@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: 'comment-list.component.html',
    styleUrls: ['comment-list.component.css'],
    providers: [CommentService]
})

export class CommentListComponent implements OnInit {
    constructor(private _loginService: LoginService, private _commentService: CommentService) { }
    public Comment: string;
    public TitleBorderStyle: string = "";
    private _currentUser: IUser;
    public ShowAddComment: boolean = true;
    @Input() CommentsWithUser: IUserCommentWithRate[]
    @Input() GameId: number
    ngOnInit() {
        this._currentUser = this._loginService.GetCurrentLoginUser();
        this.AllowAddComment();
    }
    private AllowAddComment() {

            let result: boolean = this._currentUser ? true : false;
            if (result) {
                result = this.CommentsWithUser.some((item: IUserCommentWithRate) => {
                    return item.UserName === this._currentUser.Name;
                });
            }
            this.ShowAddComment = !result;
        
    }
    AddComment() {
        if (this._currentUser && this.GameId) {
            if (this.Comment) {
                this.TitleBorderStyle = "";
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
                        this.Comment = "";
                        this.ShowAddComment=false;
                    },
                    error => {
                        console.log(error);
                    });
            }
            else {
                this.TitleBorderStyle = "rgb(252, 88, 85)";
            }
        }
    }

}