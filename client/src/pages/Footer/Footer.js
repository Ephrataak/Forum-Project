import React from 'react'
import "./Footer.css"
import footerlogo from "../../Resouces/evangadi-logo-footer.png"

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img alt="" src={footerlogo} />
      </div>
      <div>
        <div className="bolds">useful Link</div>
        <div className="lighter">
          <ul>
            <li>How it works</li>
          </ul>
        </div>
      </div>
      <div className="bolds">Contact Info</div>
    </div>
  );
}
