import Dialog from '@material-ui/core/Dialog/Dialog'
import DialogContent from '@material-ui/core/DialogContent/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle'
import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import {useStylesSignIn} from '../pages/SignIn'

interface ModalBlockProps{
  title?: string;
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
    <Dialog open={visible}>
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
