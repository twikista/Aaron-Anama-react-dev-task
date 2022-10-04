import { PureComponent } from "react";

import caretLeft from "../../assets/caret_left.svg";
import caretRight from "../../assets/caret_right.svg";
import {
  Image,
  ImageControlWrapper,
  CaretWrapper,
  Caret,
} from "./ProductImage.styles";

class ProductImage extends PureComponent {
  state = {
    index: 0,
  };

  decrementHandler = (gallery) => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: gallery.length - 1 });
    }
  };
  incrementHandler = (gallery) => {
    if (this.state.index < gallery.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
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
            <CaretWrapper onClick={() => this.decrementHandler(gallery)}>
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
