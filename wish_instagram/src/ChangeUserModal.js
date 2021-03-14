import React, { useEffect, useState } from 'react'
import './ChangeUserModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose, AiFillCheckCircle} from 'react-icons/ai'
import AvatarIcon from './AvatarIcon'
import If from './If'
import { setUser, setModalInvisible } from './userSlice'
import { db } from './firebase'
import firebase from 'firebase'

const UserRegistered = (username, name, photo_url) => {
    const dispatch = useDispatch();
    return(
        <div key={name} onClick={() => dispatch(setUser({username, name, photo_url}))} className="user__registered">
            <AvatarIcon type="big" img_src={photo_url}></AvatarIcon>
            <span>{username}</span>
            <AiFillCheckCircle className="checked"></AiFillCheckCircle>
        </div>
    )
}

function ChangeUserModal() {
    const [display, setDisplay] = useState("usersRegistered")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [users, setUsers] = useState([])
    const modalVisible = useSelector(state => state.userSlice.modalVisible)
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) =>
        setUsers(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ));
    }, [])

    const postUser = (e) => {
        e.preventDefault();
        db.collection('users').add({
            username: username,
            name: name,
            photo: photo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(
            setDisplay("usersRegistered")
        )
    }

    return (
        <div className={`modal ${modalVisible === true ? `active`: ``}`}>
            <If test={display === "usersRegistered"}>
                <div className="users__registered">
                    <div className="modal__header">
                        <div className="change__account">
                            <span>{display === "usersRegistered" ? "Mudar de conta" : "Registar conta"}</span>
                        </div>
                    </div>
                    <div className="users">
                        {
                            users.map(({id, data: {username, name, photo}}) => UserRegistered(username, name, photo))
                        }
                    </div>
                    <div className="other__account">
                        <span onClick={() => setDisplay("recordAccount")}>Iniciar sessão numa outra conta</span>
                    </div>
                </div>
            </If>
            <If test={display === "recordAccount"}>
                <div className="record__account">
                    <div className="instagram__logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"></img>
                    </div>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
                        <input type="text" id="name" name="name" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                        <input type="text" id="photo" name="photo" placeholder="Photo" onChange={e => setPhoto(e.target.value)}></input>
                        <div className="other__account">
                            <span onClick={postUser}>Registar Conta</span>
                        </div>
                    </form>
                </div>
            </If>
        </div>
    )
}

export default ChangeUserModal
