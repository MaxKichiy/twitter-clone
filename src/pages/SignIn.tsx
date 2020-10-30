import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormGroup, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ModalBlock from '../components/ModalBlock'

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  bluedSide: {
    position:'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#71C9F8',
    flex: '0 0 50%',
    overflow:'hidden'
  },
  blueSideListInfo: {
    position:'relative',
    listStyle:'none',
    padding:0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20
    }
  },
  blueSideListInfoIcon:{
    fontSize:32,
    marginRight:15,
  },
  blueSideListInfoItem:{
    marginBottom: 40
  },
  blueSideBigIcon: {
    position:'absolute',
    left:'50%',
    top:'50%',
    width: '260%',
    height:'260%',
    transform:'translate(-50%, -50%)'
  },
  whiteSide: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flex: '0 0 50%',
  },
  whiteSideTwitterIcon: {
    fontSize:45, 
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight:700,
    fontSize:32,
    marginBottom:45,
    marginTop:20,
  },
  loginSideField: {
    marginBottom:18
  }
}))

export const SignIn: React.FC = ():React.ReactElement => {
  const classes = useStylesSignIn()
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

  const handleClickOpenSignIn = ():void => { 
    setVisibleModal('signIn')
  }
  const handleClickOpenSignUp = ():void => { 
    setVisibleModal('signUp')
  }
  const handleCloseModal = ():void => {
    setVisibleModal(undefined)
  }
  

  return (
    <div className={classes.wrapper}>
      <section className={classes.bluedSide}>
      <TwitterIcon className={classes.blueSideBigIcon} color='primary'/>
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}><Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon}/>Читайте о том, что вам интересно.</Typography></li>
          <li className={classes.blueSideListInfoItem}><Typography variant="h6"><PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>Узнайте, о чем говорят в мире.</Typography></li>
          <li className={classes.blueSideListInfoItem}><Typography variant="h6"><ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcon}/>Присоединяйтесь к общению.</Typography></li>
        </ul>
      </section>
      <section className={classes.whiteSide}>
     <div className={classes.loginSideWrapper}>
     <TwitterIcon className={classes.whiteSideTwitterIcon} color='primary'/>
      <Typography variant='h4' className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
      <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
      <br/>
      <Button onClick = {handleClickOpenSignUp}  variant='contained' color='primary' fullWidth style={{marginBottom:20}}>Зарегистрироваться</Button>
      <Button onClick={handleClickOpenSignIn} variant='outlined' fullWidth color='primary'>Войти</Button>
      <ModalBlock visible={visibleModal === 'signIn'}  title="Войти в аккаут" onClose={handleCloseModal}>
      <FormControl component='fieldset' fullWidth >
        <FormGroup aria-label='position' row>
        <TextField className={classes.loginSideField} 
        autoFocus
        id='email'
        label='E-Mail'
        InputLabelProps={{
          shrink:true
        }}
        variant='filled'
        type='email'
        fullWidth
        />
        <TextField className={classes.loginSideField} 
        
        id='password'
        label='Пароль'
        InputLabelProps={{
          shrink:true
        }}
        variant='filled'
        type='password'
        fullWidth
        />
        <Button onClick={handleCloseModal} variant='contained' color='primary' fullWidth style={{marginBottom:15}}>Войти</Button>
        </FormGroup>
      </FormControl>
      </ModalBlock>
      <ModalBlock visible={visibleModal === 'signUp'}  title="Создайте учетную запись" onClose={handleCloseModal}>
      <FormControl component='fieldset' fullWidth >
        <FormGroup aria-label='position' row>
        <TextField className={classes.loginSideField} 
        autoFocus
        id='name'
        label='Имя'
        InputLabelProps={{
          shrink:true
        }}
        variant='filled'
        type='name'
        fullWidth
        />
        <TextField className={classes.loginSideField} 
        
        id='email'
        label='E-Mail'
        InputLabelProps={{
          shrink:true
        }}
        variant='filled'
        type='email'
        fullWidth
        />
        <TextField className={classes.loginSideField} 
        
        id='password'
        label='Пароль'
        InputLabelProps={{
          shrink:true
        }}
        variant='filled'
        type='password'
        fullWidth
        />
        <Button onClick={handleCloseModal} variant='contained' color='primary' fullWidth style={{marginBottom:15}}>Далее</Button>
        </FormGroup>
      </FormControl>
      </ModalBlock>
      
     </div>
      </section>
      
    </div>
  )
}
