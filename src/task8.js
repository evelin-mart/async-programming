const getUsers = (url) => fetch(url);

async function foo(url) {
    try {
        const res = await getUsers(url);
        const [user] = await res.json();
        console.log(user);
    } catch (e) {
        console.log('Error!', e);
    }
}
