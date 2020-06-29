import React from 'react';

import NewActivityForm from './NewActivityForm';
import ActivityTable from './ActivityTable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [
        {
          id: 1,
          date: '2020-06-01T00:00:00+09:00',
          vegetable: 'ピーマン',
          job: '肥料',
          comment: 'おおきくなーれ'
        },
        {
          id: 2,
          date: '2020-06-02T00:00:00+09:00',
          vegetable: 'ピーマン',
          job: '収穫',
          comment: 'おおきくなった'
        }
      ]
    };
  }

  addActivity = (activity) => {
    this.setState({
      activities: this.state.activities.concat(activity)
    });
  }

  render() {
    return (
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <NewActivityForm onSubmit={this.addActivity}/>
          <ActivityTable activities={this.state.activities}/>
        </div>
      </div>
    );
  }
}

export default App;
