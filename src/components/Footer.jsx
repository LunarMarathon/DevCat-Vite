import React from "react"
import TwitterIcon from '../assets/TwitterIcon.png'
import FacebookIcon from '../assets/FacebookIcon.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import GitHubIcon from '../assets/GitHubIcon.png'
export default function Footer() {
    return (
        <div className="footer-wrap">
            <img src={TwitterIcon} />
            <img src={FacebookIcon} />
            <img src={InstagramIcon} />
            <img src={GitHubIcon} />
        </div>
    )
}