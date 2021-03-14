import React from 'react'
import './PostItem.css'
import AvatarIcon from './AvatarIcon'
import { FaEllipsisH } from 'react-icons/fa'
import { IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'
import { VscSmiley } from 'react-icons/vsc'

function PostItem({username, img_src, comments}) {
    return (
        <div className="post__item">
            <div className="post__header">
                <div className="left__post__header">
                    <div className="user__avatar__post">
                        <AvatarIcon img_src={"https://pbs.twimg.com/profile_images/1035594270567288832/TWTvcAnR_400x400.jpg"} type="small" alt="frasesdem3rda" has_history={true}></AvatarIcon>
                    </div>
                    <div className="user__info__post">
                        <span className="post__username"><strong>frasesdem3rda</strong></span>
                        <span className="post__location">Foda-se a localização</span>
                    </div>
                </div>
                <div className="right__post__header">
                    <FaEllipsisH className="plus__icon"></FaEllipsisH>
                </div>
            </div>
            <div className="post__image">
                <img src="https://pbs.twimg.com/media/DlXMQyaXsAM8FBa?format=jpg&name=900x900"></img>
            </div>
            <div className="post__interactions">
                <div className="post__actions">
                    <div className="left__post__actions">
                        <IoIosHeartEmpty className="interaction__icon"></IoIosHeartEmpty>
                        <IoChatbubbleOutline className="interaction__icon"></IoChatbubbleOutline>
                        <IoPaperPlaneOutline className="interaction__icon"></IoPaperPlaneOutline>
                    </div>
                    <div className="right__post__actions">
                        <IoBookmarkOutline className="interaction__icon"></IoBookmarkOutline>
                    </div>
                </div>
                <div className="post__likes">
                    <div className="person__img__like">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1024px-President_Barack_Obama.jpg"></img>
                    </div>
                    <span>Gostos: <strong>barackobama</strong> e <strong>14 815 outras pessoas</strong></span>
                </div>
            </div>
            <div className="post__description">
                <div className="description">
                    <span><strong>frasesdem3rda</strong></span>
                    <span className="description__text">Marca os teus companheiros de putaria 😢</span>
                </div>  
                <span className="post__time">HÁ 18 HORAS</span>
            </div>
            <div className="comments">
            </div>
            <div className="post__add__comment">
                <VscSmiley className="comment__smile"></VscSmiley>
                <input placeholder="Adiciona um comentário..."></input>
                <span className="publish__button">Publicar</span>
            </div>
        </div>
    )
}

export default PostItem
