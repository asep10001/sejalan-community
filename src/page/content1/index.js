import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { Image, Item } from "semantic-ui-react";

export class Content1 extends Component {
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
      description:
        "https://intranet.baznas.or.id/attachment/banner/petani.jpg",
    },
    {
      description:
        "https://intranet.baznas.or.id/attachment/banner/sts-update.jpg",
    }
  ];
  render() {
    return (
      <Carousel>
        {this.items.map((item, i) => (
          <React.Fragment>
            <div>{item.name}</div>
            <Image src={item.description} />
          </React.Fragment>
        ))}
      </Carousel>
    );
  }
}

export default Content1;
