import { Component } from "react";
import styled from "styled-components";
// import {item} from '../data';
import plusIcon from '../assets/plus-square.svg';
import minusIcon from '../assets/minus-square.svg';
import ProductAttribute from "./ProductAtrributes";

// const {gallery, prices, attributes} = item;

const CartItemContainer = styled.article`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 293px;
`

const CartItemLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 4px;
    width: 164px;
    /* flex: 0.6; */
    /* height: 190px; */
    /* border: solid yellow 1px; */
  
`

const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 164px;
    /* height: 82px; */
    /* border: solid pink 1px; */
    
`
const CartItemBasicDetails = styled.div`
/* border: solid green 1px; */
 
`

const CartItemName = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    color: #1d1f22;
`
const CartItemPrice = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
`

//increment/decrement amount controls
const CartItemcontrols = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* gap: 32px; */
    width: 24px;
    /* height: 190px; */
    /* height: 100%; */
    align-self: stretch;
    /* padding-left: 10px; */


`
const AmountControlIcon = styled.img`
    width: 24px;
    height: 24px;
`

const Amount = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
`

const CartItemRight = styled.div`
    width: 121px;
    /* flex: 0.4; */
    /* height: 190px; */
    background: url(${props=>props.url});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`




class MiniCartItem extends Component{
    render(){
        const {item} = this.props
        const {prices, gallery, brand, name} = item
         
        console.log(gallery)
        return(
            <CartItemContainer>
                <CartItemLeft>
                    <CartItemDetails>
                        <CartItemBasicDetails>
                            <CartItemName>{`${brand} ${name}`}</CartItemName>
                            <CartItemPrice>{prices[0].currency.symbol}{prices[0].amount}</CartItemPrice>
                        </CartItemBasicDetails>
                        <ProductAttribute attributes = {item.attributes}/> 
                    </CartItemDetails>
                    
                    <CartItemcontrols>
                        <AmountControlIcon src={`${plusIcon}`} alt="plus icon"/>
                        <Amount>4</Amount>
                        <AmountControlIcon src={`${minusIcon}`} alt="minus icon"/>
                    </CartItemcontrols>
                </CartItemLeft>
                <CartItemRight url={`${gallery[0]}`}/>
            </CartItemContainer>
        )
    }
}

export default MiniCartItem