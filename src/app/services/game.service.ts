import { Injectable } from '@angular/core';
import { AppSetting } from '../config/index'
import { IGamesCommentsWithUser } from '../interfaces/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class GameService {

    constructor() { }
}