import { TweetState, LoadingState } from './contracts/state';
import { RootState } from './../../store';

export const selectTweetData = (state: RootState):TweetState['data']=> state.tweet.data





export const selectLoadingState =(state: RootState):LoadingState => state.tweet.loadingState;

export const selectIsTweetLoading =(state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded =(state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADED;