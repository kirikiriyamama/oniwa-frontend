import React from 'react';

class NewActivityForm extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();

    const y = now.getFullYear();
    const m = (now.getMonth() + 1).toString().padStart(2, '0');
    const d = now.getDate().toString().padStart(2, '0');

    this.state = {
      show: false,
      activity: {
        date: `${y}-${m}-${d}`,
        vegetable: '',
        job: '',
        comment: ''
      }
    };
  }

  handleButtonClick = () => {
    this.setState((state) => ({ show: !state.show }));
  }

  handleInputChange = (event) => {
    const target = event.target;
    const activity = Object.assign({}, this.state.activity);

    activity[target.name] = target.value;
    this.setState({ activity: activity });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const activity = Object.assign({}, this.state.activity);
    activity.id = Date.now();
    activity.date = (new Date(activity.date)).toISOString();

    this.props.onSubmit(activity)

    this.clearForm();
  }

  clearForm() {
    const activity = Object.assign({}, this.state.activity);

    activity.vegetable = '';
    activity.job = '';
    activity.comment = '';

    this.setState({ activity: activity });
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='field'>
          <label className='label'>日付</label>
          <div className='control'>
            <input
              type='date'
              name='date'
              value={this.state.activity.date}
              onChange={this.handleInputChange}
              className='input'
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>野菜</label>
          <div className='control'>
            <input
              type='text'
              name='vegetable'
              value={this.state.activity.vegetable}
              onChange={this.handleInputChange}
              className='input'
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>作業</label>
          <div className='control'>
            <input
              type='text'
              name='job'
              value={this.state.activity.job}
              onChange={this.handleInputChange}
              className='input'
            />
          </div>
        </div>

        <div className='field'>
          <label className='label'>コメント</label>
          <div className='control'>
            <textarea
              name='comment'
              value={this.state.activity.comment}
              onChange={this.handleInputChange}
              className='textarea'
            />
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <input type='submit' value='送信' className='button' />
          </div>
        </div>
      </form>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick} className='button'>
          {this.state.show ? '閉じる' : '登録'}
        </button>
        {this.state.show ? this.renderForm() : null}
      </div>
    );
  }
}

export default NewActivityForm;
