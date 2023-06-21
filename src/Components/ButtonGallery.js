const ButtonGallery = (props) => {
  
  return (
    <div className="button-invite">
      <button onClick={() => window.open("https://drive.google.com/drive/folders/1YLBAp1kJVe2h4S8RJSLjJgcj2-et27xf", "_blank")}>{props.name}</button>
    </div>
  )
}

export default ButtonGallery