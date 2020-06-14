import React from 'react';

class ActivityRow extends React.Component {
  weekday(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }

  render() {
    const date = new Date(this.props.date);

    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');

    return (
      <tr>
        <td>{`${y}-${m}-${d} ${this.weekday(date)}`}</td>
        <td>{this.props.vegetable}</td>
        <td>{this.props.job}</td>
        <td>{this.props.note}</td>
      </tr>
    );
  }
}

export default ActivityRow;
