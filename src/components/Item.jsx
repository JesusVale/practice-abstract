

export default function Item({icon, title, desc, link}){

    return (
        <div className="item">
            <div className="item__icon">
                <img src={icon} alt={`image of ${icon}`} className="item__image" />
            </div>
            
            <div className="item__info">
                <h3 className="item__title">{title}</h3>
                <p className="item__desc">{desc}</p>
                <a href={link} className="item__link">Learn More →</a>
            </div>
        </div>
    )

}