import React, { useRef } from "react"

const Loader = ({ className }) => (
  <div className={className}>
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231   0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475   2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464    1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
        stroke="white"
      />
    </svg>
  </div>
)

const iconSent = 
      <span className="btn-icon">
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon" width={20} style={{marginRight: "5px"}}>
          <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" fill="rgb(255, 255, 255)"></path>
        </svg>
        Send
      </span>

const ButtonSubmit = ({ onSubmit, loading = false, disabled}) => {
  return (
    <>
      <div className="button-wrapper text-end fade-in-left">
        <button className="btn-submit" type="submit" onClick={onSubmit}>
          {!loading ? iconSent : <Loader className="spinner" />}
        </button>
      </div>
    </>
  )
}

export default ButtonSubmit