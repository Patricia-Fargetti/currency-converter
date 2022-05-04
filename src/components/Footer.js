import styles from './Footer.css';
function Footer(){
return(
    <footer className="footerContainer">
    <div className="contentWrap">
      

     
      <ul className={styles.contactList}>
      <h4>Company Information</h4>
        <li><a href="mailto:email@example.com">© 1995-2022 XE.com Inc.</a></li>
    
      </ul>
    </div>
  </footer>
)
}
export default Footer;