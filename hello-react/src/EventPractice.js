import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  /*
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);  //this가 컴포넌트 자신을 제대로 기리키기 위해서는 this와 binding
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ message: e.target.value });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({ message: '' });
  }
  */

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //[]로 감싸면 그 레퍼런스가 가리키는 실제 값이 key로 사용됨.
  };
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
