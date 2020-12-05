import React from "react";
import { Grid, Icon, Image, Input } from "semantic-ui-react";

export default function Footer() {
  return (
    <Grid columns={4}>
      <Grid.Row id="row-1-footer">
        <Grid.Column id="alamat-footer">
          <Image src="https://baznas.go.id/application/views/assets/images/logo.png" />
          <h3>KANTOR PUSAT</h3>
          <p>
            Alamat: Jl. Matraman Raya No.134, <br /> Kb. Manggis, Kec. Matraman,
            <br />
            Jakarta 13150 <br /> Email: baznas@baznas.go.id <br /> Telepon:
            +6221-22897983
          </p>
        </Grid.Column>
        <Grid.Column>
          <h3 id="kantor-layanan-title">KANTOR LAYANAN</h3>
          <p id="alamat-kantor-layanan">
            Alamat: Jl. Matraman Raya No.134,
            <br />
            Kb. Manggis, Kec. Matraman,
            <br />
            Jakarta 13150
            <br />
            Email: layananmuzaki@baznas.go.id
            <br />
            Konfirmasi Donasi: 087877373555
          </p>
        </Grid.Column>
        <Grid.Column>
          <h3 id="ikuti-kami-ttl">IKUTI KAMI DI:</h3>
          <div className="ikuti-kami">
            <Icon name="twitter">
              <span>sejalan_community</span>
            </Icon>
          </div>
          <div className="ikuti-kami">
            <Icon name="instagram">
              <span>sejalan_community</span>
            </Icon>
          </div>
          <div className="ikuti-kami">
            <Icon name="facebook">
              <span>sejalan_community</span>
            </Icon>
          </div>
          <div className="ikuti-kami">
            <Icon name="whatsapp">
              <span>sejalan_community</span>
            </Icon>
          </div>
        </Grid.Column>
        <Grid.Column id="layanan-publik">
          <h3 >LAYANAN PUBLIK</h3>
          <div>PID BAZNAS</div>
          <div>PUSTAKA BAZNAS</div>

          <h3 id="ikuti-informasi-kami">IKUTI INFORMASI KAMI</h3>
          <Input placeholder={"masukan email anda"} />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="copyright-footer">
        <Grid.Column >
          <div> 
            Copyright ©2019 BAZNAS. All Rights Reserved
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
