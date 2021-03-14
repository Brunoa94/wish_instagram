import React from 'react'
import AvatarIcon from './AvatarIcon'
import './Container.css'
import './mock-data'
import { profile_pictures, follow_users} from './mock-data'
import { AiOutlineRight } from 'react-icons/ai'
import PostItem from './PostItem'
import SuggestedUser from './SuggestedUser'
import { VscCircleFilled } from 'react-icons/vsc'
import { AiOutlineCopyrightCircle } from 'react-icons/ai' 
import { setModalVisible } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Container() {
    const first_line = ["Sobre", "Ajuda", "Imprensa", "API", "Empregos"]
    const second_line = ["Privacidade", "Termos", "Localizações"]
    const thirth_line = ["Contas principais", "Hashtags", "Idioma"]
    const dispatch = useDispatch()
    const username = useSelector(state => state.userSlice.username)
    const name = useSelector(state => state.userSlice.name)
    const photo = useSelector(state => state.userSlice.photo_url)

    return (
        <div className="main__container">
            <div className="left__part__container">
                <div className="instadirect__container">
                    {
                        profile_pictures.map(
                            (profile, index) => <AvatarIcon key={index} has_span={true} username={profile[2]} img_src={profile[0]} img_alt={`history-${index}`} type="big" has_history={true}></AvatarIcon>
                        )
                    }
                </div>
                <div className="next__history">
                    <AiOutlineRight className="next__history__arrow"></AiOutlineRight>
                </div>
                <div className="feed__container">
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                    <PostItem></PostItem>
                </div>
            </div>
            <div className="right__part__container">
                <div className="profile__logged">
                    <AvatarIcon type="big" has_history={false} img_src={photo}></AvatarIcon>
                    <div className="username__name">
                        <span className="username"><strong>{username}</strong></span>
                        <span className="name">{name}</span>
                    </div>
                    <span onClick={() => dispatch(setModalVisible())} className="change__button">Mudar</span>
                </div>
                <div className="suggestions">
                    <div className="suggestions__header">
                        <span className="suggestions__title">Sugestões para ti</span>
                        <span onClick className="watch__all">Ver todas</span>
                    </div>
                    <div className="suggestions__users">
                        {
                            follow_users.map(
                                user => <SuggestedUser img_src={user[0]} username={user[1]}></SuggestedUser>
                            )
                        }
                    </div>
                    <div className="informations">
                        <div className="informations__line">
                            {
                                first_line.map(
                                    information => 
                                    <div className="information__point">
                                        <span>{information}</span>
                                        <VscCircleFilled className="point"></VscCircleFilled>
                                    </div>
                                )
                            }
                        </div>
                        <div className="informations__line">
                            {
                                second_line.map(
                                    information => 
                                    <div className="information__point">
                                        <span>{information}</span>
                                        <VscCircleFilled className="point"></VscCircleFilled>
                                    </div>
                                )
                            }
                        </div>
                        <div className="informations__line">
                            {
                                thirth_line.map(
                                    information => 
                                    <div className="information__point">
                                        <span>{information}</span>
                                        <VscCircleFilled className="point"></VscCircleFilled>
                                    </div>
                                )
                            }
                        </div>
                        <div className="copyright__footer">
                            <AiOutlineCopyrightCircle className="copyright"></AiOutlineCopyrightCircle>
                            <span>2021 INSTAGRAM DO FACEBOOK</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
