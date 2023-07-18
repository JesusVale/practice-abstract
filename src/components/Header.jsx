import { useState } from "react"
import { Search, CloseIcon } from "./icons.jsx"


export default function Header(){

    const [showMenu, setShowMenu] = useState(false);
    const [showSearcher, setShowSearcher] = useState(false);


    const classLine = showMenu? "header__line header__line--show": "header__line";
    const classSearcher = showSearcher? "header__searcher header__searcher--show" : "header__searcher";

    return (
        <header className="header">
            <nav className={showMenu? "header__navigation header__navigation--show" : "header__navigation"}>
                <h1 className="header__titulo">
                    <a href="https://www.abstract.com/" className="header__link header__link--logo">Abstract</a> | 
                    <a href="/help-center" className="header__link header__link--help"> Help Center</a>
                </h1>
                <div className="header__mobileMenu">
                    <button className="header__search" onClick={() => setShowSearcher(true)}><Search /></button>
                    <button className="header__lines" onClick={() => setShowMenu(!showMenu)}>
                        <span className={classLine}></span>
                        <span className={classLine}></span>
                        <span className={classLine}></span>
                    </button>
                </div>
                <div className={showMenu? "header__menu header__menu--show" : "header__menu"}>
                    <a href="#" className="header__link header__link--menu header__link--request">Submit a request</a>
                    <div className="header__separator"></div>
                    <a href="#" className="header__link header__link--menu header__link--sign">Sign in</a>
                </div>
                <form className={classSearcher}>
                    <input placeholder="Search" type="text" className="header__input" />
                    <button type="button" className="header__close" onClick={() => setShowSearcher(false)}><CloseIcon /></button>
                </form>
            </nav>
        </header>
    )
}