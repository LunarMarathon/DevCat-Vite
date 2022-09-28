import React from "react"
import profilePhoto from '../assets/thiscatdoesnotexist.jpg'
export default function Header() {
    return (
        <div >
            <img className="ProfilePic" src={profilePhoto} />
        </div>
    )
}