import {updateStatus } from '../src/lib/firebase-utils'

export const orderCompleted = (id, data) =>{
    updateStatus(id, { state: 'completed'})
}

export const sortCompleted = (startTime, completedTime) => {
    const timeDiff = (completedTime - startTime)/ 60; // de segundos a minutos
    console.log('timeDiff', Math.round(timeDiff));
    return Math.round(timeDiff);
}