import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  }
}));

const Sidebar = ({ t, items }) => {
  const history = useHistory();
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {items.map((item, index) => (
            <ListItem selected={selected === index} button key={item.displayText}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={t(`sidebar.title.${item.displayText}`)}
                onClick={() => {
                  setSelected(index);
                  history.push(`/${item.value}`)
                }} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default withTranslation()(Sidebar);
