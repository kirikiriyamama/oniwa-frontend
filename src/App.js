import React from 'react';

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

    const activities = data.map((activity) => {
      const date = new Date(activity.date);

      return (
        <li key={activity.id}>
          <div>{date.toDateString()}</div>
          <div>{activity.vegetable}</div>
          <div>{activity.job}</div>
          <div>{activity.note}</div>
        </li>
      );
    });

    return (
      <ul>{activities}</ul>
    );
  }
}

export default App;
