import React, {Component, Fragment} from 'react';
import axios from 'axios';

class WeeklyStats extends Component {
  state = {
    stats: []
  };

  async componentDidMount() {
    const stats = await this.weeklyStats();
    this.setState({stats});
  }

  weeklyStats() {
    return axios.get(`http://localhost:3001/api/stats/weekly`)
      .then(res => {
        const stats = res.data;
        return stats;
      })
  }


  render() {
    return (
      <div>
        <Fragment>
          <table className="table ">
            <thead>
            <tr>
              <th scope="col">Total distance</th>
              <th scope="col">Total price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{this.state.stats.total_distance}</td>
              <td>{this.state.stats.total_price}</td>
            </tr>
            </tbody>
          </table>

        </Fragment>
      </div>
    );
  }
}

export default WeeklyStats;