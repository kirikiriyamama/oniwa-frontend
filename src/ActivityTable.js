import React from 'react';

import ActivityRow from './ActivityRow';

class ActivityTable extends React.Component {
  render() {
    const rows = this.props.activities.map((activity) =>
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
