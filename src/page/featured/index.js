import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";
import { Grid, Image } from "semantic-ui-react";

export class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  items = [
    {
      description:
        "https://intranet.baznas.or.id/attachment/banner/baznas-zakat-rekening.jpg",
    },
    {
      description:
        "https://intranet.baznas.or.id/attachment/banner/zakat-perusahaan-gantilogo.jpg",
    },
    {
      description:
        "https://intranet.baznas.or.id/attachment/banner/semesta-kebajikan-zakat.jpg",
    },
    {
      description: "https://intranet.baznas.or.id/attachment/banner/petani.jpg",
    },
    {
      description:
        "https://intranet.baznas.or.id/attachment/banner/sts-update.jpg",
    },
  ];

  render() {
    return (
      <Grid>
        <div>
          <h1 id="featured-title">FEATURED</h1>
        </div>
        {/* <Carousel> */}
          {this.items.map((gambar, i) => (
            <Grid.Row columns={4}>
              <Grid.Column>
                <Image src={gambar.description} />
              </Grid.Column>
              <Grid.Column>
                <Image src={gambar.description} />
              </Grid.Column>{" "}
              <Grid.Column>
                <Image src={gambar.description} />
              </Grid.Column>{" "}
              <Grid.Column>
                <Image src={gambar.description} />
              </Grid.Column>
            </Grid.Row>
          ))}
        {/* </Carousel> */}
      </Grid>
    );
  }
}

export default Featured;

const styles = {
  root: {
    maxWidth: 345,
  },
};
