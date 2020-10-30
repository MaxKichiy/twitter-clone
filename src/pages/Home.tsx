import {  Container, createStyles, Grid, IconButton, InputBase, makeStyles, Paper, Theme, Typography, withStyles } from '@material-ui/core'
import React from 'react'

import grey from '@material-ui/core/colors/grey'
import { Tweet } from '../components/Tweet';
import theme from '../theme';
import { SideMenu } from '../components/SideMenu';

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
    listStyle: 'none',
    padding:0,
    margin: 0,
    width:'180px',
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
    width: '90%'
  },
  tweetUserName: {
    color: grey[500],
  },
  tweet: {
    paddingTop:15,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  
}));

const SearchTextField = withStyles(()=>
createStyles({
  input: {
    borderRadius: 30,
    backgroundColor: '#E6ECF0',
    height:45,
    padding:0
  },
}),)(InputBase)


export const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container maxWidth='lg' className={classes.wrapper}>
      
       <Grid container spacing={3}>
         <Grid item xs={3}>
           <SideMenu classes={classes}/>
           
         </Grid>
         <Grid item xs={6}>
           <Paper className={classes.tweetsWrapper} variant='outlined'>
              <Paper className={classes.tweetsHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
             

             {new Array(20).fill( <Tweet text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, officia tempora quam voluptatibus est maxime dignissimos illo ipsam blanditiis reiciendis.' classes={classes} user={{fullname: 'Mark1', username: 'TheMark1', avatarUrl: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }}/>)}
           </Paper>
         </Grid>
         <Grid item xs={3}>
           <SearchTextField placeholder='Поиск в твиттере' fullWidth />
         </Grid>
       </Grid>
       
       </Container>
  )
}
