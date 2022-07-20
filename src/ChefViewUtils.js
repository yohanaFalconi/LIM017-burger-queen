import { updateStatus } from '../src/lib/firebase-utils';

export const completeOrder = (id) =>{
    updateStatus(id, { state: 'completed'})
}

export const serveOrder = (id) =>{
    updateStatus(id, { state: 'served'})
}

export const getTimeDiff = (startTime, completedTime) => {
    const timeDiff = (completedTime - startTime)/ 60; // de segundos a minutos
    return Math.round(timeDiff);
}