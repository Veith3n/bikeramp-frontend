import React, {Component, Fragment} from 'react';
import './monthly_stats.css';
import up_arrow from '../../icons/up-arrow.png';
import down_arrow from '../../icons/down-arrow.png';
import {api} from "../../config/axios_consts";

const TableHeader = ({columnSorted, id, name, sortType, ...props}) => {
  return (
    <th id={id} scope="col" {...props}>
      {name}
      {columnSorted === id && sortType === 'asc' &&
      <img src={up_arrow} className="arrow"/>
      }
      {columnSorted === id && sortType === 'desc' &&
      <img src={down_arrow} className="arrow"/>
      }
    </th>
  );
};

class MonthlyStats extends Component {
  state = {
    trips: [],
    columnSorted: 'day',
    sortType: 'asc'
  };

  tableHeads = [
    {id: 'day', name: 'Day'},
    {id: 'total_distance', name: 'Total distance'},
    {id: 'avg_ride', name: 'Average ride'},
    {id: 'avg_price', name: 'Average price'}
  ];

  async componentDidMount() {
    const trips = await this.monthlyStats(this.state.columnSorted, this.state.sortType);
    this.setState({trips: trips});
  }

  monthlyStats(columnSorted, sortType) {
      return api.get(`stats/monthly`, {
      params: {
        orderParam: columnSorted,
        orderType: sortType
      }
    })
      .then(res => {
        const trips = res.data;
        return trips;
      })
  }

  determineSortType = (key) => {
    const {columnSorted, sortType} = this.state;

    if (columnSorted === key) {
      return {sortType: sortType === 'asc' ? 'desc' : 'asc', columnSorted: key};
    } else {
      return {sortType: 'asc', columnSorted: key};
    }
  };

  async sortBy(key) {
    // this.setState(() => ({loader: true})); // call with arrow function if you want to update state multiple times in one function
    const {columnSorted, sortType} = this.determineSortType(key);
    const trips = await this.monthlyStats(columnSorted, sortType);
    this.setState({trips, columnSorted, sortType})
  }

  render() {
    return (
      <div>
        <Fragment>
          <table id="example" className="table">
            <thead>
            <tr id="main">
              {/*second way to initialize all table headers from hash up*/}
              {/* {this.tableHeads.map(({id, name}) => (
              <th id={id} scope="col" onClick={() => this.sortBy(id)}>
              {name}
              {this.state.columnSorted === id && this.state.sortType === 'asc' &&
              <img src={up_arrow} className="arrow"/>
              }
              {this.state.columnSorted === id && this.state.sortType === 'desc' &&
              <img src={down_arrow} className="arrow"/>
              }
              </th>
              ))} */}
              <TableHeader id="day" name="Day" sortType={this.state.sortType}
                           columnSorted={this.state.columnSorted} onClick={() => this.sortBy('day')}/>
              <TableHeader id="total_distance" name="Total distance" sortType={this.state.sortType}
                           columnSorted={this.state.columnSorted} onClick={() => this.sortBy('total_distance')}/>
              <TableHeader id="avg_ride" name="Average ride" sortType={this.state.sortType}
                           columnSorted={this.state.columnSorted} onClick={() => this.sortBy('avg_ride')}/>
              <TableHeader id="avg_price" name="Average price" sortType={this.state.sortType}
                           columnSorted={this.state.columnSorted} onClick={() => this.sortBy('avg_price')}/>
            </tr>
            </thead>
            {this.state.trips.map(trip =>
              <tbody>
              <tr>
                <td>{trip.day} </td>
                <td>{trip.total_distance}</td>
                <td>{trip.avg_ride}</td>
                <td>{trip.avg_price}</td>
              </tr>
              </tbody>
            )}
          </table>
        </Fragment>
      </div>
    );
  }
}

export default MonthlyStats;
