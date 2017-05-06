import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, RateService, CommentService } from '../services/index'
import { IGameCommentsWithUser, IUser, IRate, IUserCommentWithRate, IComment, IGame } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css'],
    providers: [RateService, CommentService]
})

export class GameComponent implements OnInit {
    constructor(private _loginService: LoginService, private _rateService: RateService, private _commentService: CommentService, private _router: Router) { }
    @Input() GameCommentsWithUser: IGameCommentsWithUser;
    public FilterdCommentsWithUser: IUserCommentWithRate[]
    public Game: IGame;
    private _currentUser: IUser;
    public AllowShowComments: boolean = false;
    public AllowShowRate: boolean = true;
    public ShowAddComment: boolean = true;
    ngOnInit() {
        this._currentUser = this._loginService.GetCurrentLoginUser();
        this.FilterdCommentsWithUser = this.GameCommentsWithUser.UsersCommentsWithRate.filter((item: IUserCommentWithRate) => {
            return item.Comment;
        });
        this.Game = this.GameCommentsWithUser.Game;
        this.AllowAddComment();
        this.AllowAddRate();
    }
    ShowHideComments() {
        this.AllowShowComments = !this.AllowShowComments;
    }
    private AllowAddComment() {

        let result: boolean = this._currentUser ? true : false;
        if (result) {
            result = this.GameCommentsWithUser.UsersCommentsWithRate.some((item: IUserCommentWithRate) => {
                return (item.UserName === this._currentUser.Name && item.Comment !== "" && item.Comment !== null && item.Comment !== undefined);
            });
            result = !result;
        }
        this.ShowAddComment = result;
    }
    private AllowAddRate() {

        let result: boolean = this._currentUser ? true : false;
        if (result) {
            result = this.GameCommentsWithUser.UsersCommentsWithRate.some((item: IUserCommentWithRate) => {
                return item.UserName === this._currentUser.Name && item.Rate > 0;
            });
            result = !result;
        }
        this.AllowShowRate = result;
    }
    onRatingClicked(rate: number) {
        if (this._currentUser && rate > 0) {
            let userRate: IRate = {
                Rate: rate,
                UserId: this._currentUser.Id,
                GameId: this.Game.Id
            };
            this._rateService.AddRate(userRate).subscribe(
                (overAllRate: number) => {
                    this.Game.NumberOfVotes += 1;
                    this.Game.OverAllRate = overAllRate;
                    this.AllowShowRate = false;
                },
                error => {
                    console.log(error);
                    let link = ['/error'];
                    this._router.navigate(link);
                });


        }
    }

    AddComment(comment: string) {
        var ss = "";
        if (this._currentUser && comment) {
            let userComment: IComment = {
                Comment: comment,
                UserId: this._currentUser.Id,
                GameId: this.Game.Id
            };
            this._commentService.AddComment(userComment).subscribe(
                () => {
                    let addedComment: IUserCommentWithRate = {
                        Comment: comment,
                        UserName: this._currentUser.Name
                    }
                    this.FilterdCommentsWithUser.push(addedComment);
                    this.ShowAddComment = false;
                },
                error => {
                    console.log(error);
                    let link = ['/error'];
                    this._router.navigate(link);
                });


        }
    }

}