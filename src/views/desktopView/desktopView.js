import React, { useState } from 'react';
import {
    Button,
    Dropdown,
    Grid,
    Image,
    Menu,
  } from "semantic-ui-react";
  import { Desktop } from "../../function";
import { Profile } from '../../page';
import Home from '../../page/home';

const DesktopView = (props) =>{
  const [activeItem, setactiveItem] = useState("tentang-kami");
  const handleItemClick = (e, { name }) => setactiveItem(name);


    return (
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
        {/* <Home/> */}
        <Profile/>
      </Desktop>
    )
}

export default DesktopView;