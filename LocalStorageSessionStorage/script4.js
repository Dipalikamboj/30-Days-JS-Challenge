function saveToStorages(key, value) {
        localStorage.setItem(key, value);

        sessionStorage.setItem(key, value);



    const localStorageVal = localStorage.getItem(key);
    const sessionStorageVal = sessionStorage.getItem(key);

console.log(`Value in Local Storage: ${localStorageVal}`);
console.log(`Value in Session Storage: ${sessionStorageVal}`);


}
const key = "age";
const value = 55;

saveToStorages(key, value);

function clearAllStorages() {
    localStorage.clear();

    sessionStorage.clear();

    const local = localStorage.length === 0;
    console.log(`Local Storage is empty: ${local}`);
    const session = sessionStorage.length === 0;
    console.log(`Session Storage is empty: ${session}`);

    return {
        localStorage : local,
        sessionStorage : session
    }

}
clearAllStorages();