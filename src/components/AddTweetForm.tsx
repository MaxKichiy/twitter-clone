import React, { useState } from 'react';
import classNames from 'classnames';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';
import Alert from '@material-ui/lab/Alert';

import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Button from '@material-ui/core/Button/Button';
import { useHomeStyles } from '../pages/Home/theme';
import {  fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';



interface AddTweetFormProps{
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number; 
  lastItem?: any
}

const MAX_LENGTH = 280

export const AddTweetForm:React.FC<AddTweetFormProps> = ({classes, maxRows, lastItem} : AddTweetFormProps):React.ReactElement => {

const dispatch = useDispatch()
const [visibleNotification, setVisibleNotification] = useState<boolean>(false)
const addFormState = useSelector(selectAddFormState)
const [text, setText] = React.useState<string>('')
const textLimitPercent = Math.floor(text.length/280*100)
const maxLength = MAX_LENGTH -  text.length;


const handleChangeTextarea =(e : React.FormEvent<HTMLTextAreaElement>):void => {
  if(e.currentTarget){
    setText(e.currentTarget.value)
  }
}

const handleClickAddTweet = (): void => {
  dispatch(fetchAddTweet(text, lastItem))
  setText('')
 }


  return (

  
    <div>
                  <div className={classes.addFormBody}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя UserAvatar`} src={'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
                    <TextareaAutosize onChange={handleChangeTextarea} className={classes.addFormTextarea}
                    placeholder='Что происходит?' value={text} rowsMax={maxRows}/>
                  </div>
                  <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetFooter)}>

                    <IconButton color='primary'>
                      <ImageOutlinedIcon style={{fontSize:26}}/>

                    </IconButton>
                    <IconButton color='primary'>
                      <EmojiIcon style={{fontSize:26}}/>

                    </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                      
                      {text &&  
                      <>
                      <span>{maxLength}</span>
                      <div className={classes.addFormCircleProgress}>
                        <CircularProgress variant='static' size={20} thickness={4} value={textLimitPercent > 100 ? 100: textLimitPercent} style={textLimitPercent >= 100 ? {color: 'red'} : undefined}/>
                        <CircularProgress style={{color: 'rgba(0,0,0,0.1'}} variant='static' size={20} thickness={5} value={100}/>
                      </div></>}
                      <Button 
                      onClick={handleClickAddTweet} 
                      disabled= {!text || text.length > MAX_LENGTH} color='primary' 
                      variant='contained'>
                        {addFormState === AddFormState.LOADING ? (<CircularProgress color='inherit' size={16}/>) : "Твитнуть"}
                      </Button>
                    </div>
                  </div>
                  {addFormState === AddFormState.ERROR && 
                  <Alert style={{marginBottom:3}} severity="error">Ошибка при добавлении твита</Alert>}
                </div>
  )
}
