import { Component, OnInit } from '@angular/core';
import { AppSetting } from '../config/index'
@Component({
    moduleId: module.id,
    selector: 'error',
    templateUrl: 'error.component.html',
    styleUrls:['error.component.css']
})
export class ErrorComponent implements OnInit {
    constructor() { }
    public ErrorMessage: string;
    ngOnInit() {
        this.ErrorMessage = AppSetting.ErroMessage;
    }
}