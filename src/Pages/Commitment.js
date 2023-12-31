import CardHeader from "../Components/CardHeader"
import NavigationBar from "../Components/NavigationBar"
import Button from "../Components/Button"
import { useNavigate } from "react-router-dom"
const Commitment = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="card custom-card">
      <CardHeader />
      <div className="card-body custom-card-body">
        <div className="card-invite">
          <p className="invite-text invite-text-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="0"> Statement of Commitment </p>
        </div>
        <div className="card-invite card-invite-commitment">
          <div className="invite-title-wrapper text-description-wrapper">
            <h6 className="invite-title invite-text-description" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-duration="1000" data-aos-offset="0">“Kami segenap Jajaran Pimpinan Bank BTN berkomitmen untuk mendukung keberhasilan Internalisasi Budaya Bank BTN dan menjadi panutan bagi seluruh BTNers dalam menjalankan nilai-nilai AKHLAK dan penerapan program Internalisasi Budaya  Bank BTN”</h6>
          </div>
        </div>
      </div>
      <div className="button-commitment-wrapper">
          <Button onClick={() => window.open("https://drive.google.com/drive/folders/1RQ9nrkigSpcEH10otX5CpF6C41D5skeK?usp=sharing", "_blank")} name="Materi" />
          <Button onClick={() => window.open("https://drive.google.com/drive/folders/1NVs9Kj0k_xVnKY_PM92pd746hNyIr-id", "_blank")} name="Gallery" />
      </div>
    </div>
    <NavigationBar />
    </>
  )
}
export default Commitment
