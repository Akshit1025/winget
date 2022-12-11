import { styled } from "../utils/theme";

const Button = styled.button`
  display: block;
  position: relative;
  background: transparent;
  border: none;
  margin: 30px auto;
  color: ${(x) => x.theme.text};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 53px;
    height: 53px;
    border-radius: 27px;
    background: ${(x) => x.theme.accentDark};
    z-index: -1;
    right: -12px;
    top: 50%;
    transform: translateY(-50%) translateY(1px);
    transition: width 250ms cubic-bezier(0.68, 0, 0.41, 1.71);
  }
  &:focus {
    outline: none;
    &::before {
      background: ${(x) => x.theme.accent};
    }
  }
  &:hover::before {
    width: calc(100% + 32px);
  }
  img {
    margin-left: 6px;
    transform: translateY(1px);
  }
`;

const LoadMore = (props) => {
  return (
    <Button {...props}>
      Load more packages <img src={require("./icons/plus.svg")} alt="" />
    </Button>
  );
};

export default LoadMore;