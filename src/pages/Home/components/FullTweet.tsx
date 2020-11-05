import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'

export const FullTweet : React.FC = ():React.ReactElement | null => {

  const classes = useHomeStyles()
  let tweetData = useSelector(selectTweetData)
  for(let key in tweetData){ //extracting object from returned object by firebase
    tweetData = tweetData[key]
  }
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsTweetLoading)
  const params : {id?: string} = useParams();
 
  const id = params.id
  
  React.useEffect(()=> {
    if(id){
      dispatch(fetchTweetData(id))
    }
    return ()=> {
      dispatch(setTweetData(undefined))
    }
  },[dispatch, id])
  
  if(isLoading){
    return  <div style={{textAlign:'center', marginTop:60}}><CircularProgress/></div>
  }

  if(tweetData){
  return <Tweet {...tweetData} classes={classes} />
  }

  return null
}
