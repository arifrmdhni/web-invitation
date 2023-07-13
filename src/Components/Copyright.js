import logoSHIFTinc from "../assets/images/logo/logo-shiftinc.png"

const Copyright = () => {
  return (
    <>
    <div className="copyright-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-delay="1000" data-aos-offset="0">
      <div className="copyright-content">
        <p>Developed by</p>
        <a onClick={(e) => window.open("https://shiftinc.id/", "_blank")}>
          <img src={logoSHIFTinc} className="copyright-logo"/>
        </a>
      </div>
    </div>
    </>
  )
}
export default Copyright