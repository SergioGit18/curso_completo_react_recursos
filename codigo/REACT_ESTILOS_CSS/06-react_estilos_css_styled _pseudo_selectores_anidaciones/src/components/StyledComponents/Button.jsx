import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  disabled: props.disabled || false,
}))`
  background-color: ${({ primary, bgColor }) => (primary ? bgColor : '#ccc')};
  color: #5c5a72;
  border: 1px solid #e3d7ff;
  padding: ${props => {
    switch (props.size) {
      case 'small':
        return '5px 10px';
      case 'large':
        return '15px 30px';
      default:
        return '10px 20px';
    }
  }};
  border-radius: 10px;
  cursor: pointer;
  margin-left: 40px;
  transition: 0.5s ease-in all;

  &:hover {
    border-radius: 25px;
    border: 1px solid black;
  }
`;

Button.defaultProps = {
  bgColor: 'gray',
  sizeWidth: '50%'
};

export default Button;