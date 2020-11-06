import { LoadingState, AddFormState } from './contracts/state';
import { call, put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from '../../../services/api/tweetsApi';
import { addTweet, FetchAddTweetActionInterface, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionsType } from "./actionCreators";


export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}
export function* fetchAddTweetRequest({payload, lastItem} : FetchAddTweetActionInterface) {
  try {
    const data ={
      _id: Math.random().toString(36).substr(2),
      text:payload,
      user: {
        fullname: 'Test User',
        username: 'test',
        avatarUrl: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
    }
    const item = yield call(TweetsApi.addTweet, data, lastItem);
    
    yield put(addTweet(item))
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}

