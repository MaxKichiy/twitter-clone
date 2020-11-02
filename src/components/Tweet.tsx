import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Reply';

import classNames from 'classnames';
import React from 'react';
import { useHomeStyles } from '../pages/Home';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname:string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet:React.FC<TweetProps> = ({text, user,classes}: TweetProps):React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader)}
      variant='outlined'
    >
          <Avatar
          className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
          <Typography>
  <b>{user.fullname}</b>
  <span className={classes.tweetUserName}>@{user.username}</span>
  <span className={classes.tweetUserName}>&nbsp;·&nbsp;</span>
  <span className={classes.tweetUserName}>1ч</span>
          </Typography>
          <Typography>
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
    </Paper>
  );
};
