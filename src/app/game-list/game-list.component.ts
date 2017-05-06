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
    public AlphabeticSortParameter: string;
    public RateSortParameter: string;
    public AscendingSortDirection: boolean;
    public DescendingSortDirection: boolean;
    public SortBy: string;
    public SortDir: boolean;
    CurrentPage: number;
    TotalItems: number;
    PageSize: number;
    ngOnInit() {
        this.AlphabeticSortParameter = AppSetting.AlphabeticSortParameter;
        this.SortBy = this.AlphabeticSortParameter;
        this.RateSortParameter = AppSetting.RateSortParameter;
        this.CurrentPage = 1;
        this.PageSize = AppSetting.PageSize;
        this.AscendingSortDirection = AppSetting.AscendingSortDirection;
        this.DescendingSortDirection = AppSetting.DescendingSortDirection;
        this.SortDir = this.AscendingSortDirection;
        let filter: IFilter = {
            CurrentPage: this.CurrentPage,
            PageSize: AppSetting.PageSize,
            SortDirection: this.SortDir,
            SortParameter: this.AlphabeticSortParameter
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

    public Sort() {
        this.CurrentPage=1;
        let filter: IFilter = {
            CurrentPage: this.CurrentPage,
            PageSize: AppSetting.PageSize,
            SortDirection: this.SortDir,
            SortParameter: this.SortBy
        }
        this.GetFilteredGamesCommentsAndRates(filter);
    }

    public onPageChange(event: any) {
        this.CurrentPage = event.currentPage;
        let filter: IFilter = {
            CurrentPage: this.CurrentPage,
            PageSize: AppSetting.PageSize,
            SortDirection: this.SortDir,
            SortParameter: this.SortBy
        }
        this.GetFilteredGamesCommentsAndRates(filter);
    };


}