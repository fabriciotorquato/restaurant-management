import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuHeaderVertical extends Component {
  state = { activeItem: "chinesa" };

  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state || {};

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Mais pedidos no jantar</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="lanches"
              active={activeItem === "lanches"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="pizza"
              active={activeItem === "pizza"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Promoções pra você</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="brasileira"
              active={activeItem === "brasileira"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="arabe"
              active={activeItem === "arabe"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="chinesa"
              active={activeItem === "chinesa"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Jantar por até R$ 15,00</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="sushi"
              active={activeItem === "sushi"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="spaghetti"
              active={activeItem === "spaghetti"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
