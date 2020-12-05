import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Grid,
  Image,
  Menu,
  Sidebar,
} from "semantic-ui-react";
import { Default, Desktop, Mobile, Tablet } from "../../function";
import { Content1, Featured } from "../../page";

const Navbar = () => {
  const [activeItem, setactiveItem] = useState("tentang-kami");
  const [visible, setvisible] = useState(false);

  const handleItemClick = (e, { name }) => setactiveItem(name);

  return (
    <>
      <Default>
        <Desktop>
          <Grid columns={3}>
              <Grid.Column>
                <Image src="https://baznas.go.id/application/views/assets/images/gallery/baznas_header.png" />
              </Grid.Column>
              <Grid.Column id="menu-item">
                <Menu pointing secondary>
                  <Dropdown
                    name="tentang-kami"
                    text="Tentang Kami"
                    className="link item"
                    active={activeItem === "tentang-kami" ? "true" : false}
                    onClick={handleItemClick}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item>Susunan Organisasi</Dropdown.Item>
                      <Dropdown.Item>Visi-Misi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item
                    name="kegiatan-kami"
                    active={activeItem === "kegiatan-kami" ? "true" : false}
                    onClick={handleItemClick}
                  >
                    Kegiatan Kami
                  </Menu.Item>
                  <Menu.Item
                    name="agenda"
                    active={activeItem === "agenda" ? "true" : false}
                    onClick={handleItemClick}
                  >
                    Agenda Penyaluran Bantuan
                  </Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column id="button-konfirmasi">
                <Button id="btn-bayar-zakat">BAYAR ZAKAT</Button>
                <Button id="btn-konfirmasi-zakat">KONFIRMASI</Button>
              </Grid.Column>
          </Grid>
          <Content1 />
          <Featured />
        </Desktop>
      </Default>
      <Tablet>HI</Tablet>
      <Mobile>
        <Grid columns={2}>
          <Grid.Column id="button-id-mobile">
            <Button onClick={() => setvisible(!visible)}>Menu</Button>
          </Grid.Column>
          <Grid.Column>
            <Image
              id="logo_baznas_mobile"
              src="https://baznas.go.id/application/views/assets/images/logo_baznas_mobile.png"
            />
          </Grid.Column>
          <Grid.Column>
            <Sidebar
              as={Menu}
              animation="scale down"
              direction="top"
              icon="labeled"
              inverted
              horizontal
              visible={visible}
              width="wide"
            >
              <Dropdown text="Messages" pointing="bottom" className="link item">
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
};

export default Navbar;
