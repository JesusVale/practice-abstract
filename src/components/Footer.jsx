
export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__columns">
                <div className="footer__column">
                    <h3 className="footer__title">Abstract</h3>
                    <ul className="footer__links">
                        <a href="#" className="footer__link">Start Trial</a>
                        <a href="#" className="footer__link">Pricing</a>
                        <a href="#" className="footer__link">Download</a>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">Resources</h3>
                    <ul className="footer__links">
                        <a href="#" className="footer__link">Blog</a>
                        <a href="#" className="footer__link">Help Center</a>
                        <a href="#" className="footer__link">Release Notes</a>
                        <a href="#" className="footer__link">Status</a>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">Community</h3>
                    <ul className="footer__links">
                        <a href="#" className="footer__link">Twitter</a>
                        <a href="#" className="footer__link">LinkedIn</a>
                        <a href="#" className="footer__link">Facebook</a>
                        <a href="#" className="footer__link">Dribbble</a>
                        <a href="#" className="footer__link">Podcast</a>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">Company</h3>
                    <ul className="footer__links">
                        <a href="#" className="footer__link">About Us</a>
                        <a href="#" className="footer__link">Careers</a>
                        <a href="#" className="footer__link">Legal</a>
                    </ul>
                    <div className="footer__contact">
                        <h4 className="footer__subtitle">Contact Us</h4>
                        <a href="mailto:info@abstract.com" className="header__link">info@abstract.com</a>
                    </div>
                </div>
            </div>

            <div className="footer__copy">
                <p className="footer__text">&copy; Copyright 2023</p> 
                <p className="footer__text">Abstract Studio Design, Inc.</p>
                <p className="footer__text">All rights reserved</p> 
            </div>
        </footer>
    )
}