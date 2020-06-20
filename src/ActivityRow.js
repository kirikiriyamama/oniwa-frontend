import React from 'react';

class ActivityRow extends React.Component {
  weekday() {
    const days = ['日', '月', '火', '水', '木', '金', '土'];

    const date = new Date(this.props.date);
    return days[date.getDay()];
  }

  formatDate() {
    const date = new Date(this.props.date);

    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');

    return `${y}-${m}-${d} (${this.weekday()})`;
  }

  render() {
    return (
      <tr>
        <td>{this.formatDate()}</td>
        <td>{this.props.vegetable}</td>
        <td>{this.props.job}</td>
        <td>{this.props.note}</td>
      </tr>
    );
  }
}

export default ActivityRow;
