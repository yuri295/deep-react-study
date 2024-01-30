import PropTypes from 'prop-types';
import { Component } from 'react';

/*클래스형 컴포넌트
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
*/

/* defaultProps와 propTypes를 class 내부에서 지정하기
class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

*/

const MyComponent = ({ name, favoriteNumber, children }) => {
  //비구조화 할당
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children값은 {children} 입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string, //name 값은 무조건 string
  favoriteNumber: PropTypes.number.isRequired, //필수 propTypes 지정-> 설정하지 않으면 경고 메세지
};

export default MyComponent;
