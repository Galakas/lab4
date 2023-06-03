import {useEffect, useState} from "react";
import Portal from "./Portal";
import FavoriteIcon from "./Favoritelcon";
import styled from 'styled-components'


const Card = styled.article`
  font-size: 24px;
  margin-top: 10px;
`
const Title = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`
const Price = styled.span`
  font-size: 24px;
  margin-top: 10px;
`
const Image = styled.div`
  position: relative;
  height: 170px;
  margin-bottom: 16px;
`
const Button = styled.button`
  width: 100px;
  height: 30px;
`

const GetCard = (props) => {
    return (
        <Card className="card" onClick={props.focusButton}>
            <Portal open={props.open} onClose={() => props.setOpen(false)}>
                <p>Додано</p>
            </Portal>
            <FavoriteIcon id={props.product.id}/>
            <Image>
                <img src={props.product.image} alt=""/>
            </Image>
            <Title>{props.product.title}</Title>
            <Button onClick={() => props.setOpen(true)}>Порівняти</Button>

            <Price>{props.product.price} &#8372;</Price>
        </Card>
    );
}

export default GetCard