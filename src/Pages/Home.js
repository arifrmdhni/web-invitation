import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardHeader from "../Components/CardHeader";
import Button from "../Components/Button";

const Home = ({toggle, soundPlaying}) => {
  const navigate = useNavigate();
  return (
  <>
    <div className="card">
      <CardHeader />
      <div className="card-body">
        <div className="card-invite">
          <p className="invite-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-duration="2000" data-aos-offset="0">Undangan</p>
        </div>
        <div className="card-invite">
          <div className="invite-title-wrapper">
            <h3 className="invite-title text-break" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500" data-aos-duration="2000" data-aos-offset="0">Pelatihan Media Handling 2023</h3>
          </div>
        </div>
        <div className="card-invite">
          <h5 className="card-tagline" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-duration="2000" data-aos-offset="0">“Membangun Reputasi Perusahaan dengan Media melalui Komunikasi yang Efektif”</h5>
          <p className="invite-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2500" data-aos-duration="2000" data-aos-offset="0">Kepada Yth.</p>
          <h6 className="guest-invited" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="3000" data-aos-duration="2000" data-aos-offset="0">Tamu Undangan</h6>
        </div>
      </div>
      <Button onClick={() => {
            if (!soundPlaying) {
              toggle()
            }
            navigate('main/commitment')
          }} name={"Buka Undangan"}></Button>
    </div>
  </>  
  )
}
export default Home