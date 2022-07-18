import {updateStatus } from '../src/lib/firebase-utils'

const orderCompleted = (id, data) =>{
    updateStatus(id, { state: 'completed'})
}


export{ orderCompleted};