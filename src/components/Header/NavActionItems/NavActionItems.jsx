import React, { Component } from "react";
import CartBadge from "../CartBadge/CartBadge";
import { GET_CURRENCIES } from "../../../queries/queries";
import { Query } from "@apollo/client/react/components";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { updatePrice } from "../../../redux/actionType";
import {
  ActionContainer,
  ActionItemsWrapper,
  Left,
  Right,
  CurrencyLabel,
  CurrencySelector,
  CurrencyList,
  CurrencyOption,
  CurrencySymbol,
} from "./NavActionItem.styles";

class ActionItems extends Component {
  initialState = {
    label: this.props.currencyDetails.label,
    symbol: this.props.currencyDetails.symbol,
    isOpen: false,
  };

  state = this.initialState;

  dropDownRef = React.createRef(null);

  toggleListOpen = (e) => {
    e.stopPropagation();
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };
  onChangeHandler = (currencyLabel, currencySymbol) => {
    this.setState({
      label: currencyLabel,
      symbol: currencySymbol,
      isOpen: !this.state.isOpen,
    });
  };

  closeDropDownListener = (e) => {
    if (!this.state.isOpen) return;
    if (e.target !== this.dropDownRef.current) {
      e.stopPropagation();
      this.setState({ ...this.state, isOpen: false });
    }
  };

  componentDidMount() {
    document.body.addEventListener("click", this.closeDropDownListener);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.label !== this.state.label) {
      this.props.updatePrice({
        label: this.state.label,
        symbol: this.state.symbol,
      });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeDropDownListener);
  }

  render() {
    return (
      <>
        {
          <Query query={GET_CURRENCIES}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>;
              if (error) console.log(error.message);
              if (data) {
                const currencies = data.currencies;
                const [renderedSymbol] = currencies.filter((i) =>
                  i.label === this.state.label ? i : null
                );
                return (
                  <ActionContainer>
                    <ActionItemsWrapper>
                      <Left>
                        <CurrencyLabel>
                          {renderedSymbol ? renderedSymbol.symbol : "$"}
                        </CurrencyLabel>
                        <CurrencySelector
                          isOpen={this.state.isOpen}
                          onClick={this.toggleListOpen}
                        />
                      </Left>
                      <Right>
                        <CartBadge {...this.props} />
                      </Right>
                    </ActionItemsWrapper>
                    {this.state.isOpen && (
                      <CurrencyList
                        className="drop-down"
                        ref={this.dropDownRef}
                      >
                        {currencies.map((currency) => {
                          return (
                            <CurrencyOption
                              key={uniqid()}
                              name="label"
                              value={currency.label}
                              onClick={(e) =>
                                this.onChangeHandler(
                                  currency.label,
                                  currency.symbol,
                                  e
                                )
                              }
                            >
                              <CurrencySymbol>
                                {" "}
                                {currency.symbol}
                              </CurrencySymbol>
                              {currency.label}
                            </CurrencyOption>
                          );
                        })}
                      </CurrencyList>
                    )}
                  </ActionContainer>
                );
              }
            }}
          </Query>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { currencyDetails: state.currencyDetails };
};

const mapDispactchToProps = (dispatch) => {
  return { updatePrice: (currency) => dispatch(updatePrice(currency)) };
};

export default connect(mapStateToProps, mapDispactchToProps)(ActionItems);
