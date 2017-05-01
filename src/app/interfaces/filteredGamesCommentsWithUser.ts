import { IFilter } from './filter'
import { IGameCommentsWithUser } from './gameCommentsWithUser'

export interface IFilteredGamesCommentsWithUser {
    Filter: IFilter,
    GamesCommentsWithUser : IGameCommentsWithUser[]
}