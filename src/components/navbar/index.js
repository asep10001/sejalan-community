import React, { Component } from "react";
import {
  Button,
  Dropdown,
  Grid,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
  Header,
} from "semantic-ui-react";
import { Default, Desktop, Mobile, Tablet } from "../../function";
import Home from "../../page/home";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "tentang-kami",
      visible: false,
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  setVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const segmentRef = React.createRef();
    const { setVisible } = this;
    const { activeItem, visible } = this.state;
    return (
      <>
        <Default>
          <Desktop>
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <Image src="https://baznas.go.id/application/views/assets/images/gallery/baznas_header.png" />
                </Grid.Column>
                <Grid.Column id="menu-item">
                  <Menu pointing secondary>
                    <Dropdown
                      name="tentang-kami"
                      text="Tentang Kami"
                      className="link item"
                      active={activeItem === "tentang-kami"}
                      onClick={this.handleItemClick}
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item>Susunan Organisasi</Dropdown.Item>
                        <Dropdown.Item>Visi-Misi</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                      name="kegiatan-kami"
                      active={activeItem === "kegiatan-kami"}
                      onClick={this.handleItemClick}
                    >
                      Kegiatan Kami
                    </Menu.Item>
                    <Menu.Item
                      name="agenda"
                      active={activeItem === "agenda"}
                      onClick={this.handleItemClick}
                    >
                      Agenda Penyaluran Bantuan
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column id="button-konfirmasi">
                  <Button>BAYAR ZAKAT</Button>
                  <Button>KONFIRMASI</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Desktop>
        </Default>
        <Tablet>HI</Tablet>
        <Mobile>
          <Grid columns={2}>
            <Grid.Column id='button-id-mobile'>
              <Button  onClick={() => this.setVisible()}>Menu</Button>
            </Grid.Column>
            <Grid.Column>
              <Image id='logo_baznas_mobile' src='https://baznas.go.id/application/views/assets/images/logo_baznas_mobile.png'/>
            </Grid.Column>
            <Grid.Column>
                <Sidebar
                  as={Menu}
                  animation="scale down"
                  direction='top'
                  icon="labeled"
                  inverted
                  horizontal
                  visible={visible}
                  width="wide"
                >
                    <Dropdown
                      text="Messages"
                      pointing="bottom"
                      className="link item"
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item>Visi Misi</Dropdown.Item>
                        <Dropdown.Item>Struktur Organisasi</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  <Menu.Item as="a">Games</Menu.Item>
                  <Menu.Item as="a">Channels</Menu.Item>
                </Sidebar>
            </Grid.Column>
          </Grid>
        </Mobile>
      </>
    );
  }
}

export default Navbar;
