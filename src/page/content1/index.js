import React from "react";
import Carousel from "react-material-ui-carousel";
import { Image } from "semantic-ui-react";
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
const Content1 = (props) => {
  return (
    <Carousel>
      {items.map((item) => (
        <React.Fragment>
          <div>{item.name}</div>
          <Image src={item.description} />
        </React.Fragment>
      ))}
    </Carousel>
  );
};

export default Content1;
