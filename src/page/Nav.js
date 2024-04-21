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

                        {/* search modal lúc màn hình nhỏ */}
                        <div className="d-flex">
                            <div className="d-block d-lg-none">
                                <ModalCustom icon='fa-solid fa-magnifying-glass me-1' text='Search'>
                                    <form style={{ position: 'relative' }}>
                                        <input class="form-control me-2 border-0 py-2 px-3 mx-0 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                                        <Button variant='dark' onClick={handleClose} style={{ position: 'absolute', right: 0, top: 0 }}>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </Button>
                                    </form>
                                </ModalCustom>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa-solid fa-bars text-light"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Layout></Layout>
                        </div>

                        {/* search modal lúc màn hình > lg */}
                        <div className="d-none d-lg-flex align-items-center">
                            <ModalCustom icon='fa-solid fa-magnifying-glass me-1' text='Search'>
                                <form style={{ position: 'relative' }}>
                                    <input class="form-control me-2 border-0 py-2 px-3 mx-0 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                                    <Button variant='dark' onClick={handleClose} style={{ position: 'absolute', right: 0, top: 0 }}>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </Button>
                                </form>
                            </ModalCustom>
                            <div class="vr bg-light"></div>
                            <ModalCustom text='Login' centered>
                                <div className="bg-dark rounded">
                                    <Modal.Header closeButton >
                                        <h3 className="text-light">Sign In</h3>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="text-light">Signing in allows you to sync your data with our servers (highly recommended).
                                            If this is your first time signing in, you will have the option to upload your local data to the server.
                                        </p>
                                        <div className="d-flex gap-2">
                                            <button type="button" class="btn btn-secondary"><i class="fa-brands fa-google"></i> Sign In With Google</button>
                                            <button type="button" class="btn btn-secondary"><i class="fa-brands fa-github"></i> Sign In With Github</button>
                                        </div>
                                    </Modal.Body>
                                </div>
                            </ModalCustom>
                            <Link to='/setting'><i class="fa-solid fa-gear text-light ms-1 fs-5"></i></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav; 