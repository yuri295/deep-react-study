/*
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

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
  */

import { useState } from 'react';

const EventPractice = () => {
  /*
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  */
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form값을 이 자리에 복사
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>event practice</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
