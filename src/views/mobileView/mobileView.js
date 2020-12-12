import React, { useState } from 'react';
import {
    Button,
    Dropdown,
    Grid,
    Image,
    Menu,
    Sidebar,
} from "semantic-ui-react";
import { Mobile } from "../../function";
import Home from '../../page/home';

const MobileView = (props) => {
    const [visible, setvisible] = useState(false);

    return <Mobile>
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
}

export default MobileView;