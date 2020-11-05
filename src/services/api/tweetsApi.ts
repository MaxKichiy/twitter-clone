import { Tweet } from './../../store/ducks/tweets/contracts/state';

import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

const url = 'https://twclone-aae45.firebaseio.com/data/tweets.json';

export const TweetsApi = {
  fetchTweets() : Promise<TweetsState['items']>{
    return axios.get(url).then(({data}) => data
    );
  },
  fetchTweetData(id:string) : Promise<Tweet>{
    return axios.get(`${url}?orderBy="_id"&equalTo="${id}"`).then(({data}) => data);
  }
}
