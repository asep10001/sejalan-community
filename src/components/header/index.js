import React, { Component } from "react";
import {
  Grid,
} from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Default, Desktop, Mobile, Tablet } from "../../function";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }



  render() {


    return (
      <>
        <Default>
          <Desktop>
            <Grid id="header" columns={3}>
                <Grid.Column className="logo-social-media">
                  <Grid id="logo-social-media" columns={5}>
                    <Grid.Column
                      className="logo-masing-masing"
                      style={{
                        width: "auto",
                      }}
                    >
                      <Icon name="facebook" />
                    </Grid.Column>
                    <Grid.Column
                      className="logo-masing-masing"
                      style={{
                        width: "auto",
                      }}
                    >
                      <Icon name="twitter" />
                    </Grid.Column>
                    <Grid.Column
                      className="logo-masing-masing"
                      style={{
                        width: "auto",
                      }}
                    >
                      <Icon name="instagram" />
                    </Grid.Column>
                    <Grid.Column
                      className="logo-masing-masing"
                      style={{
                        width: "auto",
                      }}
                    >
                      <Icon name="whatsapp" />
                    </Grid.Column>
                    <Grid.Column
                      className="logo-masing-masing"
                      style={{
                        width: "auto",
                      }}
                    >
                      <Icon name="youtube" />
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column className="covid">
                  <div id="update-covid-19">
                    <div>UPDATE COVID-19</div>
                  </div>
                </Grid.Column>
                <Grid.Column className="column-rekening-zakat">
                  <Grid columns={3}>
                    <Grid.Column id="icon-phone-header">
                      <Icon name="phone" />
                    </Grid.Column>
                    <Grid.Column id="phone-number-header">
                      <div>+6221-22897983</div>
                    </Grid.Column>
                    <Grid.Column id="rekening-zakat">
                      <button id="btn-rekening-zakat">REKENING ZAKAT</button>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
            </Grid>
          </Desktop>
        </Default>

        <Tablet>HI</Tablet>
        <Mobile>
          <Grid doubling columns={3}>
            <div id="rekening-zakat">
              <div>REKENING ZAKAT</div>
            </div>
          </Grid>
          
        </Mobile>
      </>
    );
  }
}

export default Header;
