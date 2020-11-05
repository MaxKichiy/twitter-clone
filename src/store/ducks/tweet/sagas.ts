import { Tweet } from './../tweets/contracts/state';
import { setTweetData, setTweetLoadingState, TweetActionsType, FetchTweetActionInterface } from './actionCreators';
import { LoadingState } from './contracts/state';
import { call, put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from '../../../services/api/tweetsApi';


export function* fetchTweetRequest({payload: tweetId} : FetchTweetActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData,tweetId);
    
    yield put(setTweetData(data))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
  
  
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}

