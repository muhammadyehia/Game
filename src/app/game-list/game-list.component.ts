import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/index';
import { AppSetting } from '../config/index'
import { IFilteredGamesCommentsWithUser, IFilter } from '../interfaces/index'
@Component({
    moduleId: module.id,
    selector: 'game-list',
    templateUrl: 'game-list.component.html',
    styleUrls: ['game-list.component.css'],
    providers: [GameService]
})

export class GameListComponent implements OnInit {
    constructor(private _gameService: GameService) { }
    public FilteredGamesCommentsWithUser: IFilteredGamesCommentsWithUser;
    ngOnInit() {
        let filter: IFilter = {
            CurrentPage: 1,
            PageSize: AppSetting.PageSize,
            SortDirection: AppSetting.DefaultSortDirection,
            SortParameter: AppSetting.DefaultSortParameter
        }
        this.GetFilteredGamesCommentsAndRates(filter);
    }
    public GetFilteredGamesCommentsAndRates(filter: IFilter) {
        this._gameService.GetFilteredGamesCommentsAndRates(filter).subscribe((filteredGamesCommentsWithUser: IFilteredGamesCommentsWithUser) => {
            this.FilteredGamesCommentsWithUser = filteredGamesCommentsWithUser;
        },
            error => {
                console.log(error);
            }
        );

    }


}