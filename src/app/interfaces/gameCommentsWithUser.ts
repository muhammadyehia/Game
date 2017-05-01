import { IGame } from './game'
import { IUserCommentWithRate } from './userCommentWithRate'

export interface IGameCommentsWithUser {
    Game: IGame,
    UsersCommentsWithRate: IUserCommentWithRate[]
}