import HeaderBlur from '../component/HeaderBlur';
import '../css/header.css'

const Header = () => {
    return (
        <div className='header'>
            <HeaderBlur></HeaderBlur>
            <div className='d-flex text-light justify-content-center align-items-center h-100 gap-3'>
                <p className='m-0 d-flex align-items-center'><i className="fa-solid fa-circle" style={{ fontSize: 2, margin: '0 8px' }}></i>Looking for new web developers!</p>
                <a id='apply-now' onClick={(e) => { e.preventDefault() }} href='./'>Apply now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='d-none d-lg-block'>
            <HeaderBlur right='10%'></HeaderBlur>
            </div>
        </div>
    )
}

export default Header; 