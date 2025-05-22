export const haveProf = ()=>{
    const savedData = JSON.parse(localStorage.getItem("userProfile"));
    return !!savedData;
}