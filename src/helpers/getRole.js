export const getRole = (pathname) =>
{
    let role = ""
    for (let i = 1; i < pathname.length; i++)
    {
        if (pathname[i] === '/') break;
        role += pathname[i];
    }
    return role;
}