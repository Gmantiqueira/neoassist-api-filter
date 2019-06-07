import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TicketActions } from "../../store/ducks/tickets";

import { CardWrapper } from "./styles";
import CardContent from "../CardContent";

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

  false = () => {
    return false;
  };

  render() {
    return (
      <CardWrapper
        onClick={!this.state.isOpened ? this.openCard : this.false}
        isOpened={this.state.isOpened}
      >
        <header>
          <div className="last">
            <div class="expert darker bold">
              <h4>
                {
                  this.props.ticketList.Interactions[
                    this.props.ticketList.Interactions.length - 1
                  ].Sender
                }
              </h4>
            </div>

            <div className="interaction light regular">
              <h4>respondeu em </h4>
            </div>
          </div>

          <div className="datecreated light regular">
            <h4>Criado em {this.props.ticketList.DateCreate}</h4>
          </div>
        </header>

        <CardContent
          ticketList={this.props.ticketList}
          isOpened={this.state.isOpened}
          openCard={this.openCard}
        />
        <main>
          <div class="message dark regular">
            <h4>
              {this.props.ticketList.Interactions[
                this.props.ticketList.Interactions.length - 1
              ].Message.substring(0, 70)}{" "}
              {this.props.ticketList.Interactions[
                this.props.ticketList.Interactions.length - 1
              ].Message.length > 40
                ? "..."
                : ""}
            </h4>
          </div>

          <div class="number normal ">
            <h4>{this.props.ticketList.Interactions.length} interações</h4>
          </div>
        </main>
      </CardWrapper>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TicketActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
