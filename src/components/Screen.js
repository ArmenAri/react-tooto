import React from "react"
import Card from "./Card"
import "./Screen.css"
import { pickRandomData } from "../services/dataService"

class Screen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            normalCards: [
                pickRandomData()
            ],
            secretCards: [
                pickRandomData()
            ]
        }

        this.changeCards = this.changeCards.bind(this)
    }

    changeCards = () => {
        this.setState(
            {
                normalCards: [
                    pickRandomData()
                ],
                secretCards: [
                    pickRandomData()
                ]
            }
        )
    }

    render() {
        return (
            <div className="center">
                <div className="App">
                    <header className="App-header">
                        <div>
                            {this.state.normalCards.map(card => {
                                return <Card key={card.id}
                                    type=""
                                    title={card.title}
                                    desc={card.description}
                                    extra={card.extra} />
                            })}
                        </div>
                        <div>
                            {this.state.secretCards.map(card => {
                                return <Card key={card.id}
                                    type="secret"
                                    title={card.title}
                                    desc={card.description}
                                    extra={card.extra} />
                            })}
                        </div>
                    </header>
                </div>
                <button className="change" onClick={this.changeCards}>→</button>
                <button className="re" onClick={() => window.location.reload()}>↩︎</button>
            </div>
        )
    }
}

export default Screen