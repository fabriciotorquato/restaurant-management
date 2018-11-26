import React, { Component } from "react";
import { Menu, Icon, Button } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "inicial" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <header >
        <Menu pointing secondary>
          <Menu.Item
            name="inicial"
            active={activeItem === "inicial"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="pedidos"
            active={activeItem === "pedidos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="carteira"
            active={activeItem === "carteira"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">

            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            >
              <Button icon basic circular labelPosition='left'>
                <Icon name="user circle" />
                <div>José Mario</div>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </header>
    );
  }
}
