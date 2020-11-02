import {  Avatar, Button, CircularProgress, Container, createStyles, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, TextareaAutosize, TextField, Theme, Typography, withStyles } from '@material-ui/core'
import React from 'react'

import grey from '@material-ui/core/colors/grey'
import { Tweet } from '../components/Tweet';
import theme from '../theme';
import { SideMenu } from '../components/SideMenu';
import classNames from 'classnames';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';




export const useHomeStyles= makeStyles((theme: Theme)=> ({
  wrapper: {
    height:'100vh',
  },
  logo: {
    margin: '10px 0'
  },

  logoIconTwitter: {
    fontSize:36,
  },

  sideMenuList : {
    position:'sticky',
    top: 0,
    listStyle: 'none',
    padding:0,
    margin: 0,
    maxWidth:230,
  },
  sideMenuListItem: {
    cursor:'pointer',
    '&:hover' : {
      '& div' :{
        backgroundColor: 'rgba(29,161,242,0.1)',
        '& h6': {
          color:theme.palette.primary.main
        },
        '& svg path': {
          color:theme.palette.primary.main
        }
      }
     
    },
    '& div': {
      display:'inline-flex',
      alignItems: 'center',
      position: 'relative',
      left: -10,
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginButtom: 15,
      transition: 'background-color 0.1s ease-in-out'
    },
  },
  sideMenuListItemLabel: {
    fontWeight:700,
    fontSize:20,
    marginLeft:15
  },
  sideMenuListItemIcon: {
    fontSize:28,
    marginLeft: -5
  },
  sideMenuTweetButton : {
    marginTop:30,
  },
  tweetsWrapper: { 
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: 0,
    borderRight: 0,
    padding:'10px 15px',

    '& h6': {
      fontWeight:800,
    },
    
  },
  tweetFooter: {
    display: 'flex',
    position:'relative',
    left: -13,
    justifyContent:'space-between',
    maxWidth: 450,

  },
  tweetUserName: {
    color: grey[500],
  },
  tweet: {
    display:'flex',
    paddingTop:15,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight:15,
  },
  rightSide: {
    paddingTop: 20,
    position:'sticky',
    top:0,
  },
  rightSideBlock:{
    backgroundColor:'#F5F8FA',
    borderRadius:15,
    marginTop:20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    background:'transparent',
    padding:'13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth:50,
    },
    '& .MuiListItemText-root': {
      margin:0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addForm: {
    padding:20,
  },
  addFormBody: {
    display:'flex',
    width:'100%',
  },
  addFormBottom: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop:10,
    paddingLeft:70,
  },
  addFormTextarea: {
    width:'100%',
    border: 0,
    fontSize:20,
    outline:'none',
    fontFamily: 'inherit',
    resize:'none',
  },
  addFormBottomLine: {
    height:12,
    backgroundColor:'#E6ECF0',
  },
  addFormCircleProgress: {
    position:'relative',
    width:20,
    height:20,
    margin: '0 10px',
    '& .MuiCircularProgress-root':{
      position:'absolute',
    },
  },
  addFormBottomRight: {
    display:'flex',
    alignItems:'center',
  },


  
}));

const SearchTextField = withStyles((theme: Theme)=>({
  root: {
     '& .MuiOutlinedInput-root': {
       borderRadius: 30,
       backgroundColor: '#E6ECF0',
       padding: 0,
       paddingLeft: 15,
       '&.Mui-focused': {
         backgroundColor:'#fff',
         '& fieldset': { borderWidth: 1, borderColor:theme.palette.text},
         '& svg path': { fill: theme.palette.primary.main},
       },
     },
     '&:hover': {
      '& fieldset': { borderColor: 'transparent'},
     },
     '& fieldset': { borderColor: 'transparent', borderWidth: 1,},
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 14px 14px 5px',
  },
}))(TextField)



export const Home = ():React.ReactElement => {
  const classes = useHomeStyles();
  return (
    <Container maxWidth='lg' className={classes.wrapper}>
      
       <Grid container spacing={3}>
         <Grid item sm={1}  md={3}>
           <SideMenu classes={classes}/>
           
         </Grid>
         <Grid item sm={8} md={6}>
           <Paper className={classes.tweetsWrapper} variant='outlined'>
              <Paper className={classes.tweetsHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
              <Paper>
                <div className={classes.addForm}>
                  <div className={classes.addFormBody}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя UserAvatar`} src={'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}/>
                    <TextareaAutosize className={classes.addFormTextarea}
                    placeholder='Что происходит?'/>
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
                      <span>280</span>
                      <div className={classes.addFormCircleProgress}>
                        <CircularProgress variant='static' size={20}/>
                        <CircularProgress style={{color: 'rgba(0,0,0,0.1'}} variant='static' size={20} thickness={4} value={100}/>
                      </div>
                      <Button color='primary' variant='contained'>
                        Твитнуть
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={classes.addFormBottomLine}/>
              </Paper>
             

             {new Array(20).fill( <Tweet text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, officia tempora quam voluptatibus est maxime dignissimos illo ipsam blanditiis reiciendis.' classes={classes} user={{fullname: 'Mark1', username: 'TheMark1', avatarUrl: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }}/>)}
           </Paper>
         </Grid>
         <Grid item sm={3} md={3}>
           <div className={classes.rightSide}>
           <SearchTextField variant="outlined" placeholder='Поиск в твиттере' fullWidth 
           InputProps={{ 
            startAdornment:(
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
           }}/>
          <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
              <b>Актуальные темы</b>
            </Paper>
            <List>
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                primary='Санкт-Петербург'
                secondary={
                  <Typography component='span' variant='body2'>
                    Твитов: 3 331
                  </Typography>
                }
                />
              </ListItem>
              <Divider component='li'/>
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                primary='#коронавирус'
                secondary={
                  <Typography component='span' variant='body2'>
                    Твитов: 163 122
                  </Typography>
                }
                />
              </ListItem>
              <Divider component='li'/>
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                primary='Беларусь'
                secondary={
                  <Typography component='span' variant='body2'>
                    Твитов: 13 515
                  </Typography>
                }
                />
              </ListItem>
              <Divider component='li'/>
            </List>
          </Paper>

          <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
              <b>Кого читать</b>
            </Paper>
            <List>
            <ListItem className={classes.rightSideBlockItem}>
                <ListItemAvatar>
                  <Avatar alt='Remy Sharp' src='https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                </ListItemAvatar>
                <ListItemText primary='Dock Of Shame' secondary={
                  <Typography component='span' variant='body2'>
                    @FavDockOfShame
                  </Typography>
                 }
                />
                <Button color='primary'>
                  <PersonAddIcon/>
                </Button>
              </ListItem>
              <Divider component='li'/>
            </List>
          </Paper>
           </div>
         </Grid>
       </Grid>
       
       </Container>
  )
}
