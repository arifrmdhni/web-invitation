const Button = ({name, onClick}) => {
  return (
    <div className="button-invite text-center" data-aos="fade-up"  data-aos-delay="3000" data-aos-duration="2000" data-aos-offset="0">
      <button onClick={onClick}>{name}</button>
    </div>
  )
}
export default Button