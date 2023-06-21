const ButtonMatery = (props) => {
  
  return (
    <div className="button-invite">
      <button onClick={() => window.open("https://drive.google.com/drive/folders/1-2DP0qFZ4rq5Gt5oC6jaX7ag2afQ8odS", "_blank")}>{props.name}</button>
    </div>
  )
}

export default ButtonMatery