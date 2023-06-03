import {createPortal} from "react-dom";

const modalRootEl = document.querySelector('#modal');

const style = {
    position: "absolute",
    top: "7%",
    left: "50%",
    background:"green",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    width:200,
    height:100,
    p: 2,
};

const Portal = (props) => {
    const {open, onClose} = props;
    return open ? createPortal(<div style={style} onClick={onClose}>
        <div>
            {props.children} </div>
    </div>, modalRootEl) : null;
}
export default Portal;
