
export const initializeApp = jest.fn(() => Promise.resolve({}));

export const getAuth = () => ({});

export const getFirestore = () => ({});

export const GoogleAuthProvider = jest.fn(() => console.log('esto es un mock?'));

export const signInWithPopup = () => Promise.resolve({
    user: {
        email: "anitaperez@email.com",
        displayName: 'Anita Perez'
    },
});
// console.log('soy el MOCK');
// export const signInWithPopup = jest.fn((auth, provider) => {
//     console.log('soy el error');
//     return Promise.resolve({})
// });
//export const signInWithPopup =jest.fn().mockImplementation(() => Promise.resolve());


export const collection = () => ({});

