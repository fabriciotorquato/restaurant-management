import React, { Component } from "react";
import "./App.css";
import MenuHeaderVertical from "../../components/MenuHeaderVertical";
import Header from "../../layout/Header";
import SegmentEmphasis from "../../components/SegmentEmphasis";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    const product = {
      image:
        "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/pratos/0d6de216-1968-4959-a601-37a2b8f81fbd/201802221207_39207405.png",
      title: "Frango Crispy Grande",
      description: "Pedaços de frango empanado com farinha crocante.",
      price: "$30.99"
    };
    return (
      <div>
        <header>
          <Header />
        </header>
        <center>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={3}>
                <MenuHeaderVertical />
              </Grid.Column>
              <Grid.Column width={13}>
                {[...Array(10)].map(function(object, i) {
                  return (
                    <SegmentEmphasis obj={object} key={i} product={product} />
                  );
                })}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </center>
      </div>
    );
  }
}

export default App;
