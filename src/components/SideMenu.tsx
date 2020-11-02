
import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/Subject';
import CreateIcon from '@material-ui/icons/Create';
import UserIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Hidden from '@material-ui/core/Hidden/Hidden';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import { useHomeStyles } from '../pages/Home/theme'
import ModalBlock from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';

interface SideMenuProps{
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}:SideMenuProps ):React.ReactElement => {

  const [visibleAddTweet,setVisibleAddTweet] = React.useState<boolean>(false)

  const onOpenAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }
  return (
    <ul className={classes.sideMenuList}>
             <li className={classes.sideMenuListItem}>
               <IconButton className={classes.logo} color='primary'>
                  <TwitterIcon  className={classes.logoIconTwitter}/>
                </IconButton>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>

                  <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                    </Hidden>
               </div>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                  </Hidden>
               </div>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                    <MailOutlineIcon/>
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                  </Hidden>
               </div>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                    <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                  </Hidden>
               </div>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                  </Hidden>
               </div>
            </li>
             <li className={classes.sideMenuListItem}>
               <div>
                 
                    <UserIcon className={classes.sideMenuListItemIcon}/>
                  
                  <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                  </Hidden>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <Button onClick={onOpenAddTweet} className={classes.sideMenuTweetButton} fullWidth variant='contained' color='primary' >
                <Hidden smDown>
                  Твитнуть
                </Hidden>
                <Hidden>
                  <CreateIcon style={{width: '40px'}}/>
                </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                  <div style={{width:550}}>
                    <AddTweetForm maxRows={15} classes={classes}/>
                  </div>
                </ModalBlock>
            </li>
             
             
           </ul>
  )
}
