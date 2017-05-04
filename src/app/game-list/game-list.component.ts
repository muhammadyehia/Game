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
    CurrentPage: number;
    TotalItems: number;
    PageSize: number;
    ngOnInit() {
        this.CurrentPage = 1;
        this.PageSize = AppSetting.PageSize;
        let filter: IFilter = {
            CurrentPage: this.CurrentPage,
            PageSize: AppSetting.PageSize,
            SortDirection: AppSetting.DefaultSortDirection,
            SortParameter: AppSetting.DefaultSortParameter
        }
        this.GetFilteredGamesCommentsAndRates(filter);
    }
    public GetFilteredGamesCommentsAndRates(filter: IFilter) {
        this._gameService.GetFilteredGamesCommentsAndRates(filter).subscribe((filteredGamesCommentsWithUser: IFilteredGamesCommentsWithUser) => {
            this.FilteredGamesCommentsWithUser = filteredGamesCommentsWithUser;
            this.TotalItems = filteredGamesCommentsWithUser.Filter.TotalRecords;
        },
            error => {
                console.log(error);
            }
        );

    }



    public onPageChange(event: any) {
        this.CurrentPage = event.currentPage;
        let filter: IFilter = {
            CurrentPage: this.CurrentPage,
            PageSize: AppSetting.PageSize,
            SortDirection: AppSetting.DefaultSortDirection,
            SortParameter: AppSetting.DefaultSortParameter
        }
        this.GetFilteredGamesCommentsAndRates(filter);
    };


}