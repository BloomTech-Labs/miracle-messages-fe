import React from "react"

const FormFooter = () => {
  return (
    <div>
      <div className="footer-icons">
        <h1>placeholder for icons</h1>
      </div>

      <div className="footer-wrapper">
        <div className="footer-phone-email">
          <span className="phone">1-800-MISS-YOU </span>
          <span className="email">HELLO @MIRACLEMESSAGES.ORG </span>
        </div>
        <p className="footer">
          © 2019. Miracle Messages is a fiscally sponsored project of Netroots
          Foundation, a CA 501(c)3 <br />
          corporation.EIN #20-8672843.
        </p>
        <p className="footer">
          MIRACLE MESSAGES is a trademark of Miracle Messages.
        </p>
        <a
          href="https://www.classy.org/give/231839/#!/donation/checkout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>DONATE</div>
        </a>
      </div>
    </div>
  )
}

export default FormFooter
