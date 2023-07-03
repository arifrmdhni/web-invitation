import React, { useRef } from "react"

const ButtonSubmit = () => {
  
  return (
    <>
      <div className="button-wrapper text-end fade-in-left">
        <button className="btn-submit" type="submit">
          <span className="btn-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon" width={20}>
              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" fill="rgb(255, 255, 255)"></path>
            </svg>
          </span>
          Send
        </button>
      </div>
    </>
  )
}

export default ButtonSubmit