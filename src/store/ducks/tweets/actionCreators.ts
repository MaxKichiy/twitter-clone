import { LoadingState, Tweet } from './contracts/state';
import { TweetsState } from './contracts/state';
export enum TweetsActionsType {
  SET_TWEETS='tweets/SET_TWEETS',
  FETCH_TWEETS= 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE= 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET= 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET= 'tweets/ADD_TWEET',
}

export interface SetTweetsActionInterface{
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}
export interface FetchAddTweetActionInterface{
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
  lastItem: number;
}
export interface AddTweetActionInterface{
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
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
export const fetchAddTweet = (payload: string, lastItem: number): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
  lastItem
});
export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS
});

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStateInterface | FetchTweetsActionInterface | FetchAddTweetActionInterface | AddTweetActionInterface;
