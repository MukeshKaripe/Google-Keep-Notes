import logo from '../../assets/Main-Logo-ahex.webp'


const Header = ()=>{

    return(
        <>
        <div className="header d-flex justify-content-between p-2 " >
            <img src={logo} alt="logo" width='40px' height='40px' ></img>
        <h4>Google Keep Note</h4>

        </div>
        </>
    )
}
export default Header;