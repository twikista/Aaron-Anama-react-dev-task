import React, { Component } from "react";
import styled from "styled-components";
import CartBadge from "./CartBadge";
import selectArrowDown from "../assets/select_arrow_down.svg";
import selectArrowUp from "../assets/select_arrow_up.svg";
import { GET_CURRENCIES } from "../queries/queries";
import { Query } from "@apollo/client/react/components";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { updatePrice } from "../redux/actionType";

const ActionContainer = styled.div`
  width: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const ActionItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  color: #1d1f22;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  border: solid lemon 1px;
`;

const CurrencyLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CurrencySelector = styled.div`
  background-image: ${(props) =>
    props.isOpen ? `url(${selectArrowUp})` : `url(${selectArrowDown})`};
  background-color: #fff;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
  width: 15px;
  cursor: pointer;

  &:focus-within,
  &:hover {
    background-image: url(${selectArrowUp});
  }

  &:active {
    background-image: url(${selectArrowUp});
  }
`;

const CurrencyList = styled.ul`
  width: 114px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  top: 60px;
  position: absolute;
  z-index: 30;
  background-color: #fff;
`;

const CurrencyOption = styled.li`
  width: 100%;
  padding: 10px 0 10px 20px;
  list-style: none;
  display: grid;
  grid-template-columns: 15px auto;
  gap: 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;
const CurrencySymbol = styled.span`
  text-align: right;
  justify-self: flex-end;
  font-weight: 500;
`;

class ActionItems extends Component {
  state = {
    label: "USD",
    symbol: "$",
    isOpen: false,
  };

  dropDownRef = React.createRef(null);

  toggleListOpen = (e) => {
    e.stopPropagation();
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };
  onChangeHandler = (label, symbol) => {
    this.setState({ label, symbol, isOpen: !this.state.isOpen });
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
      // this.props.getSelectedCurrency(this.state);
      this.props.updatePrice({ ...this.state });
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
                console.log(this.state);
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

const mapDispactchToProps = (dispatch) => {
  return { updatePrice: (currency) => dispatch(updatePrice(currency)) };
};

export default connect(null, mapDispactchToProps)(ActionItems);
