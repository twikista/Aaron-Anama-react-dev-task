import { Component } from "react";
import styled from "styled-components";
// import { currencyData } from "../data";
import selectArrowDown from "../assets/select_arrow_down.svg";
import selectArrowUp from "../assets/select_arrow_up.svg";
import uniqid from "uniqid";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { GET_CURRENCIES } from "../queries/queries";

const CurrencyOptionsWrapper = styled.div`
  background-image: url(${selectArrowDown});
  background-color: #fff;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  position: relative;

  &:focus-within,
  &:hover {
    background-image: url(${selectArrowUp});
  }

  &:active {
    background-image: url(${selectArrowUp});
  }
`;

const SelectCurrency = styled.select`
  border: none;
  outline: none;
  appearance: none;
  /* visibility: hidden; */
  background-color: white;
  background-image: url(${selectArrowDown});
  background-position: 50% 70%;
  background-repeat: no-repeat;
  font-size: 18px;
  position: relative;
  text-transform: uppercase;
  width: 10px;
  opacity: 0;
  cursor: pointer;
`;
const CurrencyOptions = styled.option`
  background-color: white;
  color: #1d1f22;
  box-shadow: (0px 4px 35px rgba(168, 172, 176, 0.19));
  &[value=""][disabled] {
    display: none;
  }

  & Laa {
    background-color: #eeeeee;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class CurrencySelector extends Component {
  state = {
    label: "",
    symbol: "",
  };

  onChangeHandler = (e, data) => {
    const { name, value } = e.target;
    const currency = data.find((i) => i.label === value);
    this.setState({ [name]: value, symbol: currency.symbol });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.label !== this.state.label) {
      this.props.getSelectedCurrency(this.state);
    }
  }

  render() {
    return (
      <>
        <Query query={GET_CURRENCIES}>
          {({ loading, error, data }) => {
            if (loading) return <p>loading...</p>;
            if (error) console.log(error.message);

            // console.log(data);
            let currencies;
            if (data) {
              currencies = data.currencies;
            }
            const [renderedSymbol] = currencies.filter((i) =>
              i.label === this.state.label ? i : null
            );
            return (
              <Label htmlFor="currency">
                {renderedSymbol ? renderedSymbol.symbol : "$"}
                <CurrencyOptionsWrapper>
                  <SelectCurrency
                    id="currency"
                    name="label"
                    value={this.state.label}
                    onChange={(e) => this.onChangeHandler(e, currencies)}
                  >
                    <CurrencyOptions
                      value=""
                      name="label"
                      disabled
                    ></CurrencyOptions>
                    {currencies.map((currency) => {
                      return (
                        <CurrencyOptions
                          key={uniqid()}
                          name="label"
                          value={currency.label}
                        >
                          {currency.symbol}
                          {currency.label}
                        </CurrencyOptions>
                      );
                    })}
                  </SelectCurrency>
                </CurrencyOptionsWrapper>
              </Label>
            );
          }}
        </Query>
      </>
    );

    // const { currencies } = currencyData;
  }
}

export default CurrencySelector;
