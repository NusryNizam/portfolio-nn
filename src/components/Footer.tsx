import { FunctionComponent } from "react";

import "./Footer.css";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer>
      <div className="container footer-container">
        <h2 className="heading-2">Get in touch</h2>
        <div className="contact">
          <span>Email: </span>
          <a className='email' href="mailto:nusry@proton.me?subject=Inquiry">nusry@proton.me</a>
        </div>

        <a className="to-top" href="#app" aria-label="Go back to top">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
