import { IGame } from './game'
import { IUserCommentWithRate } from './userCommentWithRate'

export interface IGamesCommentsWithUser {
    Game: IGame,
    UsersCommentsWithRate: IUserCommentWithRate
}