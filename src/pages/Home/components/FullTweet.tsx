import React from 'react'
import { CircularProgress } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar/Avatar'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Typography from '@material-ui/core/Typography/Typography'
import classNames from 'classnames'

import ShareIcon from '@material-ui/icons/Reply';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'
import Paper from '@material-ui/core/Paper/Paper'
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';import RepeatIcon from '@material-ui/icons/Repeat';

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
  return (
<Paper className={classes.fullTweet}>
            
              <div  className={classNames(classes.tweetsHeaderUser)} ><Avatar
            className={classes.tweetAvatar}
              alt={`Аватарка пользователя ${tweetData.user.fullname}`}
              src={tweetData.user.avatarUrl}
            />
            <Typography>
    <b>{tweetData.user.fullname}</b>
    <div>
      <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
      <span className={classes.tweetUserName}>&nbsp;·&nbsp;</span>
      <span className={classes.tweetUserName}>1ч</span>
    </div>
            </Typography>
           
            {/* <div className={classes.tweetFooter}>
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 20 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <RepeatIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </div> */}
            </div>
            <Typography className={classes.fullTweetText} gutterBottom>
              {tweetData.text}
            </Typography>
    </Paper>
  )
  }

  return null
}
