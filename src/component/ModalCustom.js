import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalCustom = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props)
    return (
        <>
            <Button variant="btn btn-outline-light border-0" onClick={handleShow}>
            <i class={props.icon}></i> {props.text}
            </Button>

            <Modal show={show} onHide={handleClose}>
                {props.children}
            </Modal>
        </>
    )
}

export default ModalCustom;