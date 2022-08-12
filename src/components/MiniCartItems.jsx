import { Component } from "react";
import styled from "styled-components";
import MiniCartItem from "./MiniCaritem";
import {cart} from '../data'

const MiniCartItems = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    gap:40px;
    width: 293px;
    max-height: 420px;
    /* border:solid 2px tomato; */
    overflow:hidden scroll;
`;

class MinicartItems extends Component{
    render(){
        console.log(cart)
        return(
            <MiniCartItems>
                {cart.map((item)=>(<MiniCartItem key={item.id} item = {item}/> ))}
            </MiniCartItems>
            
        )
    }

}

export default MinicartItems