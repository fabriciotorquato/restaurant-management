import React from "react";
import { Label, Grid, Image, Header } from "semantic-ui-react";

const SegmentEmphasis = ({ product }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={product.url} size="small" wrapped />
      </Grid.Column>
      <Grid.Column width={13}>
        <Header>{product.name} </Header>
        {product.description}
        <Label.Group tag>
          <Label as="a">{`R$ ${product.price.toFixed(2)}`}</Label>
        </Label.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SegmentEmphasis;
