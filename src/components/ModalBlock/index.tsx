import { Button, Dialog, DialogContent, DialogTitle, FormControl, FormGroup, IconButton, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import {useStylesSignIn} from '../../pages/SignIn'

interface ModalBlockProps{
  title: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>
  visible? : boolean;
  onClose: ()=> void;
}

const ModalBlock:React.FC<ModalBlockProps> = ({title, children, onClose, visible=false}):React.ReactElement | null=> {
  if(!visible){
    return null
  }
  return (
    <Dialog open={visible} onClick = {onClose} >
      <DialogTitle>
  <IconButton onClick={onClose} color='secondary' >&times;</IconButton> 
    {title}
      </DialogTitle>
      <DialogContent>
      
      {children}
      </DialogContent>
      </Dialog>
  )
}

export default ModalBlock
