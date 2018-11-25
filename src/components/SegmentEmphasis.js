import React from "react";
import { Label, Grid, Image, Header } from "semantic-ui-react";

const SegmentEmphasis = ({ product }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={product.image} size="small" wrapped />
      </Grid.Column>
      <Grid.Column width={13}>
        <Header>{product.title} </Header>
        {product.description}
        <Label.Group tag>
          <Label as="a">{product.price}</Label>
        </Label.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SegmentEmphasis;
