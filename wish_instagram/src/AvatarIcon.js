import React from 'react'
import './AvatarIcon.css'
import If from './If'

function AvatarIcon({img_src, img_alt, type, has_history, username, has_span}) {
    return (
        <div className="avatar__icon">
            <div className={`avatar__img ${has_history === true ? `has__history`: ``}`}>
                <img className={type==="big" ? `big__avatar__icon` : `small__avatar__icon`} src={img_src} alt={img_alt}></img>
            </div>
            <If test={has_span===true}>
                <div className="username__div">
                    <span>{username}</span>
                </div>    
            </If>
        </div>
    )
}

export default AvatarIcon
