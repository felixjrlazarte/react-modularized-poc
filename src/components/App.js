import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Appbar from './Appbar';
import SideBar from './Sidebar';
import Dashboard from '../scenes/Dashboard';
import Transactions from '../scenes/Transactions';
import Invoices from '../scenes/Invoices';
import BillsPay from '../scenes/BillsPay';

const routes = [
  { displayText: "dashboard", value: "" },
  { displayText: "transactions", value: "transactions" },
  { displayText: "invoices", value: "invoices" },
  { displayText: "billsPay", value: "bills-pay" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Appbar />
        <SideBar items={ routes } />
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route path="/transactions" component={ Transactions } />
            <Route path="/invoices" component={ Invoices } />
            <Route path="/bills-pay" component={ BillsPay } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
