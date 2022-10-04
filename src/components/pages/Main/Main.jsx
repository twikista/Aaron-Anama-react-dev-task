import { PureComponent } from "react";
import MiniCartOverlay from "../../MiniCartOverlay/MiniCartOverlay";
import withRouter from "../../utility/NavParamsHOC";
import { MainContainer, Wrapper } from "./Main.styles";

class Main extends PureComponent {
  render() {
    const { isOpen, overLayToggler, children } = this.props;
    return (
      <MainContainer>
        <MiniCartOverlay isOpen={isOpen} overLayToggler={overLayToggler} />
        <Wrapper>{children}</Wrapper>
      </MainContainer>
    );
  }
}

export default withRouter(Main);
