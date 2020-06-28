import React from 'react';

import ActivityRow from './ActivityRow';

class ActivityTable extends React.Component {
  sortActivities() {
    return this.props.activities.sort((a, b) => {
      const aDate = Date.parse(a.date);
      const bDate = Date.parse(b.date);

      if (aDate !== bDate) {
        return bDate - aDate;
      } else {
        return b.id - a.id;
      }
    });
  }

  render() {
    const rows = this.sortActivities().map((activity) =>
      <ActivityRow
        key={activity.id}
        date={activity.date}
        vegetable={activity.vegetable}
        job={activity.job}
        comment={activity.comment}
      />
    );

    return (
      <table className='table is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>日付</th>
            <th>野菜</th>
            <th>作業</th>
            <th>コメント</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ActivityTable;
