//create user
export const postUser = (user) => (
    $.ajax({ 
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

//create session
export const postSession = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

//delete session
export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);