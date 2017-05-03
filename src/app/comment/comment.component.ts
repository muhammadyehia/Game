import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUserCommentWithRate } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.css']
})

export class CommentComponent implements OnInit {
    constructor() { }
    public Comment: string = "";
    public TitleBorderStyle: string = "";
    @Output() onComment: EventEmitter<string> = new EventEmitter<string>();
    ngOnInit() { }
    AddComment(): void {
        if (this.Comment) {
            this.TitleBorderStyle = "";
            this.onComment.emit(this.Comment);
        }
        else {
            this.TitleBorderStyle = "rgb(252, 88, 85)";
        }
    }
}