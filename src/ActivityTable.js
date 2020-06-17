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
        note={activity.note}
      />
    );

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ActivityTable;
