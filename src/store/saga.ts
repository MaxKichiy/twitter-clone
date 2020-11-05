import { tweetsSaga } from "./ducks/tweets/sagas";
import { tweetSaga } from "./ducks/tweet/sagas";
import { tagsSaga } from "./ducks/tags/sagas";
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
  yield all(
    [tweetsSaga(), tagsSaga(), tweetSaga()]
  )
}