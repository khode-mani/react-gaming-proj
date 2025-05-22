export let isLogin = ()=>{
    const saveData = document.cookie.includes("username=mani")
    // return document.cookie.includes("username=mani")
    return !!saveData;
};