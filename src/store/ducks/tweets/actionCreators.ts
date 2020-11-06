import { LoadingState } from './contracts/state';
import { TweetsState } from './contracts/state';
export enum TweetsActionsType {
  SET_TWEETS='tweets/SET_TWEETS',
  FETCH_TWEETS= 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE= 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}
export interface SetTweetsLoadingStateInterface{
  type: TweetsActionsType.SET_LOADING_STATE;
  payload:LoadingState 
}

export interface FetchTweetsActionInterface{
  type: TweetsActionsType.FETCH_TWEETS;
}



export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload
});
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS
});

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateInterface | FetchTweetsActionInterface;
