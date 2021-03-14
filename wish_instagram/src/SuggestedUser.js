import React from 'react'
import AvatarIcon from './AvatarIcon'
import './SuggestedUser.css'

function SuggestedUser({img_src, username}) {
    return (
        <div className="suggested__user">
            <AvatarIcon type="small" has_history={false} img_src={img_src}></AvatarIcon>
            <div className="suggested__username">
                <span className="username">{username}</span>
                <span className="recent__user">Recente no Instagram</span>
            </div>  
            <span className="follow__button">Seguir</span>
        </div>
    )
}

export default SuggestedUser
