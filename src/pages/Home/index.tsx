import React from 'react';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';

import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';


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
               <div className={classes.addForm}> <AddTweetForm classes={classes} />
                <div className={classes.addFormBottomLine}/></div>
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
