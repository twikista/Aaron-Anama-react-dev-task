import { Component } from "react";
import styled from "styled-components";
import {currencyData} from '../data';
import selectArrowDown from "../assets/select_arrow_down.svg";
import selectArrowUp from "../assets/select_arrow_up.svg";
import uniqid from 'uniqid'

const CurrencyOptionsWrapper = styled.div`
  background-image: url(${selectArrowDown});
  background-color: #fff;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  position: relative;
  &:focus-within {
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
  
`;
const CurrencyOptions = styled.option`
  background-color: white;
  color: #1D1F22;
  box-shadow: (0px 4px 35px rgba(168, 172, 176, 0.19));
  &[value=""][disabled] {
    display: none;
  }

  & Laa{
    background-color: #EEEEEE;
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;


class CurrencySelector extends Component{
    state={
        label:'',
    }

    onChangeHandler=(e)=>{
        const {name, value}= e.target;
        this.setState({[name]:value})
        console.log(name)
       
        
    }

    render(){
        
        const {currencies} = currencyData
        const [renderedSymbol] = currencies.filter(i=>i.label===this.state.label?i:null)
        return(
        
            <Label htmlFor="currency">
              {renderedSymbol?renderedSymbol.symbol:"$"}
              <CurrencyOptionsWrapper >
                <SelectCurrency id="currency" name="label" value="" onChange={this.onChangeHandler}>
                  <CurrencyOptions value="" name = "label" disabled></CurrencyOptions>
                  {currencies.map(currency=>{
                    return <CurrencyOptions key={uniqid()} name="label" value={currency.label}>{currency.symbol}{currency.label}</CurrencyOptions>
                  })}
                  
                </SelectCurrency>
              </CurrencyOptionsWrapper>
            </Label>
        )
    }
}

export default CurrencySelector