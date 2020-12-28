import React, { useState } from "react";
import { Grid, Image, Menu, Segment, Divider } from "semantic-ui-react";

const TabularMenu = (props) => {
  const [activeItem, setActiveItem] = useState("bio");

  const handleItemClick = (name) => setActiveItem(name);
  return (
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name="Tentang Baznas"
            active={activeItem === "Tentang Baznas"}
            onClick={() => {
              handleItemClick("Tentang Baznas");
              window.location.href = "#tentang_baznas_segment";
            }}
          />
          <Menu.Item
            name="Logo Baznas"
            active={activeItem === "Logo Baznas"}
            onClick={() => {
              handleItemClick("Logo Baznas");
              window.location.href = "#logo_baznas";
            }}
          />
          <Menu.Item
            name="Visi Baznas"
            active={activeItem === "Visi Baznas"}
            onClick={() => {
              handleItemClick("Visi Baznas");
              window.location.href = "#visi_baznas";
            }}
          />
          <Menu.Item
            name="Misi Baznas"
            active={activeItem === "Misi Baznas"}
            onClick={() => {
              handleItemClick("Misi Baznas");
              window.location.href = "#misi_baznas";
            }}
          />
          <Menu.Item
            name="Jaringan Baznas"
            active={activeItem === "Jaringan Baznas"}
            onClick={() => {
              handleItemClick("Jaringan Baznas");
              window.location.href = "#jaringan_baznas";
            }}
          />
          <Menu.Item
            name="Penghargaan Baznas"
            active={activeItem === "Penghargaan Baznas"}
            onClick={() => {
              handleItemClick("Penghargaan Baznas");
              window.location.href = "#penghargaan_baznas";
            }}
          />
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>
          <div id="tentang_baznas_segment">
            <h1>Tentang BAZNAS</h1>
            <p>
              Badan Amil Zakat Nasional (BAZNAS) merupakan badan resmi dan
              satu-satunya yang dibentuk oleh pemerintah berdasarkan Keputusan
              Presiden RI No. 8 Tahun 2001 yang memiliki tugas dan fungsi
              menghimpun dan menyalurkan zakat, infaq, dan sedekah (ZIS) pada
              tingkat nasional. Lahirnya Undang-Undang Nomor 23 Tahun 2011
              tentang Pengelolaan Zakat semakin mengukuhkan peran BAZNAS sebagai
              lembaga yang berwenang melakukan pengelolaan zakat secara
              nasional. Dalam UU tersebut, BAZNAS dinyatakan sebagai lembaga
              pemerintah nonstruktural yang bersifat mandiri dan bertanggung
              jawab kepada Presiden melalui Menteri Agama. Dengan demikian,
              BAZNAS bersama Pemerintah bertanggung jawab untuk mengawal
              pengelolaan zakat yang berasaskan: syariat Islam, amanah,
              kemanfaatan, keadilan, kepastian hukum, terintegrasi dan
              akuntabilitas.
            </p>
          </div>
          <Divider />
          <div id="logo_baznas">
            <h1>Logo BAZNAS</h1>
            <Image src="https://baznas.go.id/application/views/assets/images/logo1.png" />
            <p>
              Logo BAZNAS terdiri dari Lambang Burung Garuda Pancasila dengan
              tulisan BAZNAS dibawahnya dan Badan Amil Zakat Nasional.
            </p>
          </div>
          <Divider />
          <div id="visi_baznas">
            <h1>Visi BAZNAS</h1>
            <p>“Menjadi pengelola zakat terbaik dan terpercaya di dunia.”</p>
          </div>
          <Divider />
          <div id="misi_baznas">
            <h1>Misi BAZNAS</h1>
            <ol>
              <li>
                Mengkoordinasikan BAZNAS provinsi, BAZNAS kabupaten/kota, dan
                LAZ dalam mencapai target-target nasional.
              </li>
              <li>
                {" "}
                Mengoptimalkan secara terukur pengumpulan zakat nasional.
              </li>
              <li>
                Mengoptimalkan pendistribusian dan pendayagunaan zakat untuk
                pengentasan kemiskinan, peningkatan kesejahteraan masyarakat,
                dan pemoderasian kesenjangan sosial.
              </li>
              <li>
                Menerapkan sistem manajemen keuangan yang transparan dan
                akuntabel berbasis teknologi informasi dan komunikasi terkini.
              </li>
              <li>
                Menerapkan sistem pelayanan prima kepada seluruh pemangku
                kepentingan zakat nasional.
              </li>
              <li>
                Menggerakkan dakwah Islam untuk kebangkitan zakat nasional
                melalui sinergi ummat.
              </li>
              <li>Terlibat aktif dan memimpin gerakan zakat dunia.</li>
              <li>
                Mengarusutamakan zakat sebagai instrumen pembangunan menuju
                masyarakat yang adil dan makmur, baldatun thayyibatun wa rabbun
                ghafuur.
              </li>
              <li>
                Mengembangkan kompetensi amil zakat yang unggul dan menjadi
                rujukan dunia.
              </li>
            </ol>
          </div>
          <Divider />
          <div id="jaringan_baznas">
            <h1>Jaringan BAZNAS</h1>
            <Image src="https://baznas.go.id/application/views/assets/images/jaringan.jpeg" />
          </div>
          <Divider />
          <div id="penghargaan_baznas">
            <h1>Penghargaan</h1>
            <Image src="https://baznas.go.id/application/views/assets/images/penghargaan.jpeg" />
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default TabularMenu;
