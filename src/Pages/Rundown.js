import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"

const Rundown = () => {
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body text-center">
        <div className="card-invite d-flex justify-content-center align-items-center">
          <div className="invite-text-wrapper invite-text-wrapper-mobile">
            <h5 className="invite-text invite-text-title" style={{fontSize:"1.5rem", fontWeight: "400", lineHeight: "1.334", letterSpacing: "0", fontFamily: "TitiliumBold"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
              Rundown Acara
            </h5>
            {/* <p style={{margin: "16px 0 0", fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.43", letterSpacing: "0.01071em", fontFamily: "Titilium"}} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0" data-aos-delay="500">Harap memperhatikan <strong>Dresscode</strong></p> */}
          </div>
        </div>
      </div>
      <div id="rundown">
        <div className="rundown-container fade-in-left">
          <div className="rundown-wrapper">
            <h4 className="day-text">
              Day 1 (Kamis, 13 Juli 2023)
            </h4>
            <div className="rundown-template">
              <h5 className="rundown-time-text">12:00 – 17:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Check–in Peserta</p>
                {/* <div className="rundown-description-list">
                  <span>•</span>
                  <span>Dresscode: Kaos Putih dan Topi (disiapkan oleh Panitia, dan dihimbau menggunakan Jaket)</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Tiba di stasiun Gambir paling lambat pukul 13.00 WIB</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Gerbong 3 & 4 untuk Kepala Divisi, Kepala Kantor Wilayah</span>
                </div> */}
              </div>
            </div>
            {/* <div className="rundown-template">
              <h5 className="rundown-time-text">19:30 – 21:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Dinner di <strong>D'Kamboja</strong></p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">21:30 – 22:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Check–in Padma Hotel Semarang</p>
              </div>
              <div className="rundown-list-note">
                <p><strong>Catatan:</strong></p>
                <p>Bawa <strong>pakaian hangat/jaket</strong> untuk suhu dingin</p>
                <p>Bawa <strong>obat-obatan pribadi</strong> yang diperlukan</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="rundown-container fade-in-left">
          <div className="rundown-wrapper">
            <h4 className="day-text">
              Day 2 (Jumat, 14 Juli 2023)
            </h4>
            <div className="rundown-template">
              <h5 className="rundown-time-text">07:00 – 08:25</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Registrasi peserta pelatihan</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">08:25 – 08:30</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Pembukaan</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">08:30 – 08:35</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Menyanyikan Lagu Indonesia Raya</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">08:35 – 08:50</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Laporan Corsec Bank BTN</p>
                <p className="rundown-description-text"><strong>Ramon Armando </strong>(Corporate Secretary Division Head)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">08:50 – 09:50</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Keynote Speech + QnA</p>
                <p className="rundown-description-text"><strong>Arya Sinulingga </strong>(Staf Khusus III Menteri BUMN)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">09:50 – 10:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Coffe Break</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">10:00 – 10:30</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Sambutan Direksi Bank BTN</p>
                <p className="rundown-description-text"><strong>Eko Waluyo </strong>(Direktur Human Capital, Compliance, and Legal)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">10:30 – 11:45</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Pengajar 1</p>
                <p className="rundown-description-text"><strong>Febrina Siahaan </strong>(Professional Consultant in Media & Communication)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">11:45 – 14:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Istirahat, Sholat & Makan Siang</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">14:00 – 15:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Lanjutan Pengajar 1 + QnA</p>
                <p className="rundown-description-text"><strong>Febrina Siahaan </strong>(Professional Consultant in Media & Communication)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">15:00 – 16:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Pengajar 2</p>
                <p className="rundown-description-text"><strong>M. Wendiyanto Saputro</strong> (Chief of KumparanBisnis)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">16:00 – 17:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Pengajar 2 + QnA</p>
                <p className="rundown-description-text"><strong>M. Wendiyanto Saputro</strong> (Chief of KumparanBisnis)</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">17:00 – 17:10</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Penutupan + Sesi Foto</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">17:10 – 19:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Persiapan Gala Dinner</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">19:00 – 19:05</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Peserta Peserta Berkumpul di Lokasi Gala Dinner</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">19:05 – 21:55</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Gala Dinner</p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">21:55 – 22:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Selesai</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rundown-container fade-in-left">
          <div className="rundown-wrapper">
            <h4 className="day-text">
              Day 3 (Sabtu, 15 Juli 2023)
            </h4>
            <div className="rundown-template">
              <h5 className="rundown-time-text">07:00 – 12:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Check–out Peserta</p>
                {/* <div className="rundown-description-list">
                  <span>•</span>
                  <span>Dresscode: Kaos Putih dan Topi (disiapkan oleh Panitia, dan dihimbau menggunakan Jaket)</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Tiba di stasiun Gambir paling lambat pukul 13.00 WIB</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Gerbong 3 & 4 untuk Kepala Divisi, Kepala Kantor Wilayah</span>
                </div> */}
              </div>
            </div>
            {/* <div className="rundown-template">
              <h5 className="rundown-time-text">19:30 – 21:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Dinner di <strong>D'Kamboja</strong></p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">21:30 – 22:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Check–in Padma Hotel Semarang</p>
              </div>
              <div className="rundown-list-note">
                  <p><strong>Catatan:</strong></p>
                  <p>Bawa <strong>pakaian hangat/jaket</strong> untuk suhu dingin</p>
                  <p>Bawa <strong>obat-obatan pribadi</strong> yang diperlukan</p>
                </div>
            </div> */}
          </div>
        </div>
        {/* <div className="rundown-container">
          <div className="rundown-wrapper">
            <h4 className="day-text">
              Day 1 (Kamis, 6 Juli 2023)
            </h4>
            <div className="rundown-template">
              <h5 className="rundown-time-text">13:00 – 19:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Keberangkatan</p>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Dresscode: Kaos Putih dan Topi (disiapkan oleh Panitia, dan dihimbau menggunakan Jaket)</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Tiba di stasiun Gambir paling lambat pukul 13.00 WIB</span>
                </div>
                <div className="rundown-description-list">
                  <span>•</span>
                  <span>Gerbong 3 & 4 untuk Kepala Divisi, Kepala Kantor Wilayah</span>
                </div>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">19:30 – 21:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Dinner di <strong>D'Kamboja</strong></p>
              </div>
            </div>
            <div className="rundown-template">
              <h5 className="rundown-time-text">21:30 – 22:00</h5>
              <div className="rundown-description-wrapper">
                <p className="rundown-description-text">Check–in Padma Hotel Semarang</p>
              </div>
              <div className="rundown-list-note">
                  <p><strong>Catatan:</strong></p>
                  <p>Bawa <strong>pakaian hangat/jaket</strong> untuk suhu dingin</p>
                  <p>Bawa <strong>obat-obatan pribadi</strong> yang diperlukan</p>
                </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default Rundown
