
const HeaderBlur = (props) => {
    console.log(props.right)
    return (
        <div style={{
            filter: 'blur(40px)',
            position: 'absolute',
            right: props.right,
            top: 0,
            zIndex: -100,
            width: '30%'
        }}>
            <div style={{
                width: '100%',
                height: '310px',
                transform: 'translate3d(0,-50%,0)',
                backgroundImage: 'linear-gradient(to right,#ff80b5, #9089fc)',
                opacity: 0.3,

                clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
            }}>
            </div>
        </div>
    )
}

export default HeaderBlur;