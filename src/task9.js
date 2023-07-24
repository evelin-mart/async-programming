const asyncBar = async () => 'Some thing!';

async function foo() {
    const value = await asyncBar();
    console.log(value);
}
