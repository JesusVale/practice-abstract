import { ArrowDown } from "./icons.jsx"


export default function Hero(){
    return (
        <section className="hero">
            <div className="hero__text">How can we help?</div>
            <form className="hero__help">
                
                <div className="hero__searcher">
                    <input type="text" placeholder="Searcher" className="hero__input" />
                    <div className="hero__arrow"><ArrowDown /></div>
                </div>
            </form>
        </section>
    )
}