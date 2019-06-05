import React, { Component } from "react";

import { CardWrapper } from "./styles";

class Card extends Component {
  state = {
    isOpened: false
  };

  openCard = () => {
    if (this.state.isOpened) {
      this.setState({ isOpened: false });
    } else {
      this.setState({ isOpened: true });
    }
  };

  render() {
    return (
      <CardWrapper onClick={this.openCard} isOpened={this.state.isOpened}>
        <header>
          <div className="last">
            <div class="expert">
              <h4>
                {
                  this.props.ticket.Interactions[
                    this.props.ticket.Interactions.length - 1
                  ].Sender
                }
              </h4>
            </div>

            <div className="interaction">
              <p>respondeu em </p>
            </div>
          </div>

          <div className="datecreated">
            <h4>Criado em {this.props.ticket.DateCreate}</h4>
          </div>
        </header>

        <main>
          <div class="message">
            <h4>
              {this.props.ticket.Interactions[
                this.props.ticket.Interactions.length - 1
              ].Message.substring(0, 70)}{" "}
              {this.props.ticket.Interactions[
                this.props.ticket.Interactions.length - 1
              ].Message.length > 40
                ? "..."
                : ""}
            </h4>
          </div>

          <div class="number">
            <h4>{this.props.ticket.Interactions.length} interações</h4>
          </div>
        </main>
      </CardWrapper>
    );
  }
}

export default Card;
