import React from 'react';

import { useHomeStyles } from '../pages/Home/theme';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';
import { Link } from 'react-router-dom';

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags:React.FC<TagsProps> = ({classes}: TagsProps):React.ReactElement | null => {

  const tags = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if(!isLoaded){
    return null;
  }

  return  (
    <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
              <b>Актуальные темы</b>
            </Paper>
            <List>
              {
                tags.map(el => (
                  <React.Fragment key={el._id}>
                  <ListItem  className={classes.rightSideBlockItem}>
                    <Link key={el._id} to={`/home/search?q=${el.name}`}>
                <ListItemText
                primary={el.name}
                secondary={
                  <Typography component='span' variant='body2'>
                    Твитов: {el.count}
                  </Typography>
                }
                />
                  </Link>
                  </ListItem>
                  <Divider component='li'/>
                  </React.Fragment>
                ))
              }
            </List>
          </Paper>
  );
};
