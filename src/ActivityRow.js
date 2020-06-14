import React from 'react';

class ActivityRow extends React.Component {
  render() {
    const date = new Date(this.props.date);

    return (
      <tr>
        <td>{date.toDateString()}</td>
        <td>{this.props.vegetable}</td>
        <td>{this.props.job}</td>
        <td>{this.props.note}</td>
      </tr>
    );
  }
}

export default ActivityRow;
