import React, {Component} from 'react';
import './main_page.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavbarMain from './navbar';
import NewTripInner from '../components/new_trip/new_trip'
import MonthlyStatsInner from '../components/monthly_stats/monthly_stats'
import WeeklyStatsInner from '../components/weekly_stats/weekly_stats'


const Root = () => (
  <h2>Home</h2>
);

const NewTrip = () => (
  <NewTripInner/>
);

const MonthlyStats = () => (
  <MonthlyStatsInner/>
);

const WeeklyStats = () => (
  <WeeklyStatsInner/>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavbarMain/>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Root}/>
              <Route path='/newTrip' component={NewTrip}/>
              <Route path='/monthlyStats' component={MonthlyStats}/>
              <Route path='/weeklyStats' component={WeeklyStats}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
