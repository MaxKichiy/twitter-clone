import { Tweet } from './../../store/ducks/tweets/contracts/state';

import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

const url = 'https://twclone-aae45.firebaseio.com/data/tweets';

export const TweetsApi = {
  fetchTweets() : Promise<TweetsState['items']>{
    return axios.get(`${url}.json`).then(({data}) => data
    );
  },
  addTweet(payload:Tweet, lastItem: number) : Promise<any>{
    return axios.put(`${url}/${lastItem}.json`, payload).then(({config}) => {
      return JSON.parse(config.data)
    }
    );
  },
  fetchTweetData(id:string) : Promise<Tweet>{
    return axios.get(`${url}.json?orderBy="_id"&equalTo="${id}"`).then(({data}) => data);
  }
}
