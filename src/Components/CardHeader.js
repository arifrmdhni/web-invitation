import logoBTN from '../assets/images/logo/btn.18889c77112ab26987de.png'
import logoBUMN from '../assets/images/logo/bumn-logo.png'

const CardHeader = () => {
  return (
    <div className="card-header" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
      <div className="logo-wrapper">
        <img src={logoBUMN}></img>
      </div>
      <div className="logo-wrapper">
        <img src={logoBTN}></img>
      </div>
    </div>
  )
}
export default CardHeader
