import React from 'react';

import ActivityRow from './ActivityRow';

class ActivityTable extends React.Component {
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
      <ActivityRow
        key={activity.id}
        date={activity.date}
        vegetable={activity.vegetable}
        job={activity.job}
        note={activity.note}
      />
    );

    return (
      <table>
        <tbody>
          {activities}
        </tbody>
      </table>
    );
  }
}

export default ActivityTable;
