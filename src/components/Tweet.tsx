import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Reply';

import { useHomeStyles } from '../pages/Home/theme';
import Paper from '@material-ui/core/Paper/Paper';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Link } from 'react-router-dom';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname:string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet:React.FC<TweetProps> = ({_id,text, user,classes}: TweetProps):React.ReactElement => {

  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader)}
      variant='outlined'
    >
            <Avatar
            className={classes.tweetAvatar}
              alt={`Аватарка пользователя ${user.fullname}`}
              src={user.avatarUrl}
            />
              <div className={classes.tweetText}>
            <Typography>
    <b>{user.fullname}</b>
    <span className={classes.tweetUserName}>@{user.username}</span>
    <span className={classes.tweetUserName}>&nbsp;·&nbsp;</span>
    <span className={classes.tweetUserName}>1ч</span>
            </Typography>
            <Typography variant='body1' gutterBottom>
              {text}
            </Typography>
            <div className={classes.tweetFooter}>
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
            </div>
            </div>
    </Paper>
          </Link>
  );
};
