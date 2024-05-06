const names = document.getElementById("isiUser")
const pw = document.getElementById("isiPW")
const pw2 = document.getElementById("isiPW2")

const reg = () => {
    pw.value === pw2.value ? alert("berhasil register") : alert("isi password dengan benar!")
}
const resLog=()=>{
    // names.required = false
    // pw.required = false
    // pw2.required = false
    alert("ok")
}