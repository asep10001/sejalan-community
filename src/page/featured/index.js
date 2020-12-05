import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "semantic-ui-react";

const Featured = (props) => {
  const [indeks, setindeks] = useState(0);
  const [jumlah, setjumlah] = useState(4);

  const items = [
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

  const loopingItems = (jumlah) => {
    const hasil = [];
    if (items.length > 4) {
      for (let index = indeks; index < jumlah; index++) {
        hasil.push(
          <Grid.Column key={index}>
            <Card style={styles.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={items[index].description}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => changeIndex()}
                  size="small"
                  color="primary"
                >
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid.Column>
        );
      }
    }
    return hasil;
  };

  const changeIndex = () => {
    if (jumlah === items.length) {
      setindeks(0);
      setjumlah(4);
    } else {
      setindeks(indeks + 1);
      setjumlah(jumlah + 1);
    }
  };

  return (
    <Grid columns={4}>
      <div>
        <h1 id="featured-title">FEATURED</h1>
      </div>
      <Grid.Row>{loopingItems(jumlah)}</Grid.Row>
    </Grid>
  );
};

export default Featured;

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};
