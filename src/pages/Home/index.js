import React, { Component } from "react";
import "./Home.css";
import MenuHeaderVertical from "../../components/MenuHeaderVertical";
import SegmentEmphasis from "../../components/SegmentEmphasis";
import { Grid } from "semantic-ui-react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/products")
      .then(response => this.handleChangeData(response.data));
  }

  handleChangeData(data) {
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <MenuHeaderVertical />
          </Grid.Column>
          <Grid.Column width={13}>
            {this.state.data != null ? (
              this.state.data.map((object, i) => {
                return (
                  <SegmentEmphasis obj={object} key={i} product={object} />
                );
              })
            ) : (
              <div />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
