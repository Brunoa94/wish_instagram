import React, { useState } from 'react'
import './Header.css'
import { AiOutlineSearch, AiFillHome, AiOutlineHome, AiFillCompass, AiOutlineCompass, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { RiSendPlaneLine, RiSendPlaneFill } from 'react-icons/ri'
import If from './If'
import Avatar from '@material-ui/core/Avatar';


const navbarIcons = [ 
    [<AiFillHome className="navbar__icon"></AiFillHome>, <AiOutlineHome className="navbar__icon"></AiOutlineHome>, "home"], 
    [<RiSendPlaneFill className="navbar__icon"></RiSendPlaneFill>, <RiSendPlaneLine className="navbar__icon"></RiSendPlaneLine>, "send"], 
    [<AiFillCompass className="navbar__icon"></AiFillCompass>, <AiOutlineCompass className="navbar__icon"></AiOutlineCompass>, "compass"], 
    [<AiFillHeart className="navbar__icon"></AiFillHeart>, <AiOutlineHeart className="navbar__icon"></AiOutlineHeart>, "heart"]
]

function Header() {
    const [searchBar, setSearchBar] = useState(false)
    const [activeIcon, setActiveIcon] = useState("home")

    return (
        <div className="header__navbar">
            <div className="header__icons">
                <div className="instagram__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"></img>
                </div>
                <div className="search__navbar">
                    <div className="search__bar">
                        <If test={searchBar === true ? true : false}>
                            <form>
                                <AiOutlineSearch className="search__icon"></AiOutlineSearch>
                                <input type="text" placeholder="Pesquisar" autoFocus={searchBar === true ? true : false}></input>
                                <button type="submit"></button>
                                <MdCancel className="cancel__icon"></MdCancel>
                            </form>
                        </If>
                        <If test={searchBar === false ? true : false}>
                            <div className="search__title" onClick={ () => setSearchBar(true)}>
                                <AiOutlineSearch className="search__icon"></AiOutlineSearch>
                                <span>Pesquisar</span>
                            </div>
                        </If>
                    </div>
                </div>
                <div className="navbar__icons">
                    {
                        navbarIcons.map(
                            (Icons) => 
                            <div key={Icons[2]} className="navbar__icon__div" onClick={() => setActiveIcon(Icons[2])}>
                                <If test={activeIcon === Icons[2]}>
                                    {Icons[0]}
                                </If>
                                <If test={activeIcon !== Icons[2]}>
                                    {Icons[1]}
                                </If>
                            </div>
                        )
                    }
                    <div onClick={() => setActiveIcon("profile")} className={`avatar__div ${activeIcon === "profile" ? "active" : ""}`}>
                        <img src="https://scontent.flis5-3.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=arOkIwTWa3QAX-AzU2h&_nc_ht=scontent.flis5-3.fna&oh=d68f147bb15338e5a25bc162f270e5cd&oe=606C7A86"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
