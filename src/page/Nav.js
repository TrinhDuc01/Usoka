import { Link } from "react-router-dom";
import Layout from "../component/Layout";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalCustom from "../component/ModalCustom";
import Modal from 'react-bootstrap/Modal';


const Nav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ backgroundColor: '#111827', opacity: 0.96 }}>
            <div className="container-xl" >
                <nav className="navbar navbar-expand-lg py-2 p-lg-0" >
                    <div className="container-fluid ">
                        <Link className="navbar-brand d-flex align-items-center text-light gap-2" to="/">
                            <i className="fa-brands fa-ubuntu fs-1 text-primary"></i>
                            <div className="d-none d-sm-block fw-bold">UsoKa Guide</div>
                        </Link>
                        <div className="d-flex">
                            <form className="d-flex" role="search">
                                <ModalCustom icon='fa-solid fa-magnifying-glass me-1' text='Search'>
                                    <form style={{ position: 'relative' }}>
                                        <input class="form-control me-2 border-0 py-2 px-3 mx-0 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                                        <Button variant='dark' onClick={handleClose} style={{ position: 'absolute', right: 0, top: 0 }}>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </Button>
                                    </form>
                                </ModalCustom>
                                {/* <Button variant="btn btn-outline-light border-0" onClick={handleShow}>
                                    <i class="fa-solid fa-magnifying-glass me-1"></i> Search
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <form style={{ position: 'relative' }}>
                                        <input class="form-control me-2 border-0 py-2 px-3 mx-0 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                                        <Button variant='dark' onClick={handleClose} style={{ position: 'absolute', right: 0, top: 0 }}>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </Button>
                                    </form>
                                </Modal> */}
                            </form>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Layout></Layout>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav; 