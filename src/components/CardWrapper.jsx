import GetCard from "./Card";
import styled from 'styled-components'


const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  flex-wrap: wrap;
`
const CardWrapper = (props) => {
    return (
        <CardList>
            {props.products.map((item) => {
                return <GetCard product={item} focusButton={props.focusButton} key={item.id} open={props.open} setOpen={props.setOpen}/>;
            })}
        </CardList>
    );
}
export default CardWrapper;