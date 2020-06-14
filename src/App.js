import React from 'react';

class Activity extends React.Component {
  render() {
    const date = new Date(this.props.date);

    return (
      <li>
        <div>{date.toDateString()}</div>
        <div>{this.props.vegetable}</div>
        <div>{this.props.job}</div>
        <div>{this.props.note}</div>
      </li>
    );
  }
}

class App extends React.Component {
  render() {
    const data = [
      {
        id: '1',
        date: '2020-06-01T00:00:00+09:00',
        vegetable: 'ピーマン',
        job: '肥料',
        note: 'おおきくなーれ'
      },
      {
        id: '2',
        date: '2020-06-02T00:00:00+09:00',
        vegetable: 'ピーマン',
        job: '収穫',
        note: 'おおきくなった'
      }
    ];

    const activities = data.map((activity) =>
      <Activity
        key={activity.id}
        date={activity.date}
        vegetable={activity.vegetable}
        job={activity.job}
        note={activity.note}
      />
    );

    return (
      <ul>{activities}</ul>
    );
  }
}

export default App;
