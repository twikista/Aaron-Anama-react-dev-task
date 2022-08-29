import { Component } from "react";
import styled from "styled-components";
import caretLeft from "../assets/caret_left.svg";
import caretRight from "../assets/caret_right.svg";

const Image = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const ImageControlWrapper = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const CaretWrapper = styled.button`
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
  justify-content: center;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Caret = styled.img``;

class ProductImage extends Component {
  state = {
    index: 0,
  };

  decrementHandler = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };
  incrementHandler = (gallery) => {
    if (this.state.index < gallery.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  };
  render() {
    const { gallery } = this.props;
    return (
      <Image
        width={this.props.width}
        height={this.props.height}
        url={gallery[this.state.index]}
      >
        {gallery.length > 1 && (
          <ImageControlWrapper>
            <CaretWrapper onClick={this.decrementHandler}>
              <Caret src={`${caretLeft}`} />
            </CaretWrapper>
            <CaretWrapper onClick={() => this.incrementHandler(gallery)}>
              <Caret src={`${caretRight}`} />
            </CaretWrapper>
          </ImageControlWrapper>
        )}
      </Image>
    );
  }
}

export default ProductImage;
