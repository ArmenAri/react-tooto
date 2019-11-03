import React from "react";
import "./Card.css"

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type;
        this.title = props.title;
        this.desc = props.desc;
        this.extra = props.extra;
    }

    render() {
        return (
            <div className={`card ${this.type}`} onClick={() => {
                if (this.type === "secret") {
                    document.querySelector('.card.secret .additional').style = 'width: 50px'
                }
            }}>
                <div className="additional">
                    <div className="user-card"></div>
                </div>
                <div className="general">
                    <h1>{this.title}</h1>
                    <p>{this.desc}</p>
                    <span className="more">
                        {this.extra}
                    </span>
                </div>
            </div>
        )
    }
}

export default Card