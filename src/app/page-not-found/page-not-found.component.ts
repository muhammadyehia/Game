import { Component, OnInit } from '@angular/core';
import { AppSetting } from '../config/index'
@Component({
    moduleId: module.id,
    selector: 'page-not-found',
    templateUrl: 'page-not-found.component.html',
    styleUrls: ['page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }
    public ErrorMessage: string;
    ngOnInit() {
        this.ErrorMessage = AppSetting.PageNotFoundMessage;
    }
}