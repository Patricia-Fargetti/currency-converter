import styles from './Header.css';
function Header(){
    return(
        <header className="headerContainer">
        <div className="contentWrap">
        <ul 
        >
            <div className="contactList">
        <li><a href="#">Converter</a></li>
        <li><a href="http://yourwebsite.com" target="_blank">Send Money</a></li>
        <li><a href="#" target="_blank">Business &#38; API</a></li>
        <li><a href="#" target="_blank">Tools</a></li>
        <li><a href="#" target="_blank">Resourcers</a></li>
        </div>
    <div className="Sign_in">
    <li className="sign_element" ><a href="#" target="_blank">Sign up</a></li>
        <li><a href="#" target="_blank">Login</a></li>
    </div>


    </ul>
         
        </div>
      </header>
    )
    }
    export default Header;