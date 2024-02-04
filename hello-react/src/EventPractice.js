import { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요."
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: '' });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
