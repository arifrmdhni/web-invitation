import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'
import logoAsean from '../assets/images/logo/asean2.c21108c2f568656a0d69.png'
import logoKBUMN from '../assets/images/logo/kbumn-horizontal.934e1b51bbd26f3e54d3.png'

const CardHeader = () => {
  return (
    <div className="card-header" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
      <div className="logo-wrapper">
        <img src={logoAsean}></img>
        <img src={logoKBUMN}></img>
      </div>
      <div className="logo-wrapper">
        <img src={logoBUMN}></img>
        <img src={logoBTN}></img>
      </div>
    </div>
  )
}
export default CardHeader