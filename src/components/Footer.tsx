import { FunctionComponent } from "react";
import './Footer.css';

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <footer>
            <div className="container">
            Footer
            <p>
            footer
            </p>
            </div>
        </footer>
     );
}
 
export default Footer;