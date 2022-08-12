import {Component} from 'react';
import styled from 'styled-components';

const AtributeContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 136px;
    /* border: solid limegreen 1px; */
`


const AttributeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 120px;
    /* height: 48px; */
    /* border: solid purple 1px; */
`
const AttributeTitle = styled.h5`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    display: flex;
    align-items: center;
    text-transform: capitalize;
`
const Attributes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: 120px;
    height: 24px;
`

const AttributeValue = styled.label`
    flex:1;
    max-height: ${props => props.width };
    height: 24px;
    display: inline-block;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1d1f22;
    border: 1px solid #1d1f22;
    background-color: ${props => props.value };
    border: 1px solid ${props => props.border };
    flex-wrap: wrap;
    cursor: pointer;
`

const RadioButton = styled.input`
   display: none;
`



class ProductAttribute extends Component{
    state={color:""};

    // handleClick=()=>{
    //     this.setState({color:`${value}`})
    //     console.log(this.state)
    // }
    render(){
        console.log(this.state)
        const {attributes} = this.props;
        return(
            <AtributeContainer>
            {attributes.map(({id, name, type, items})=>{
               return (
                    <AttributeWrapper key={id}>
                        <AttributeTitle>{name}</AttributeTitle>
                            <Attributes >
                                {items.map(({id, displayValue, value})=>{
                                    const color = displayValue !=="White"? value:"black";
                                    return type==="swatch"?<AttributeValue key={id} value={`${value}`} width="20px" htmlFor={`${displayValue}`} border={`${color}`} onClick={()=>this.setState({color:`${value}`})}/> : <AttributeValue key={id}>{value}</AttributeValue>          
                                })}
                            </Attributes>
                    </AttributeWrapper>
                )
            })}
            
            </AtributeContainer>
            
        )
    }

}

export default ProductAttribute