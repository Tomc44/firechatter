import { Button } from '@material-ui/core'
import {db, auth} from '../firebase'
import firebase from 'firebase'
import React, {useState} from 'react'

function SendMessage() {
     const [msg,setMsg] = useState('')

     async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createAt: firebase.firestore.FieldValue.serverTimestap()
        })
        setMsg('')

     }
  return (
    <div>SendMessage


        <form onSubmit={SendMessage}>
            <input value={msg} onChange={(e) => setMsg(e. target.value )} placeholder="Message..."/>
            <Button type="submit">Send</Button>
        </form>
    </div>
  )
}

export default SendMessage