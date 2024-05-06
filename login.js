const user = document.getElementById("logUs")
const pws = document.getElementById("logPw")
const logPage =document.getElementById("loginPage")
const regPage =document.getElementById("regPage")
const names = document.getElementById("isiUser")
const pw = document.getElementById("isiPW")
const pw2 = document.getElementById("isiPW2")
const box = document.getElementById("box-cen")

regPage.style.display = "none"
const toRegis = () => {
    regPage.style.display = "block"
    logPage.style.display = "none"
}
const login = () => {
    if(names.value !== "" && pw.value !== ""){
        if (pw.value === pws.value && user.value ===names.value) {
            alert("ok")
            box.style.display = "none"
        }else{
            alert("username atau password salah")
        }
    }else if(pws.value === "sandy" && user.value === "sandy"){
        box.style.display = "none"

    }else{
        alert("username atau password salah")
    }
}

const reg = () => {
    pw.value === pw2.value ? resLog() : alert("isi password dengan benar!")
}
const resLog=()=>{
    regPage.style.display = "none"
    logPage.style.display = "block"

}