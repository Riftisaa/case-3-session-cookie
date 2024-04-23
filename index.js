function isEmailValid(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isPasswordValid(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return regex.test(password);
}

document.getElementById("mainForm").addEventListener("submit", (func)=>{
    func.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("myCheckbox").checked;

    if(!isEmailValid(email)){
        pesan("email tidak valid")
    }
    else if(!isPasswordValid(password)){
        pesan("password tidak valid")
    }
    else{
        // Buat objek data input
       var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        
        // Jika kotak "Ingat Saya" dicentang, tambahkan data rememberMe ke FormData
        if (rememberMe) {
            formData.append('rememberMe', 'on');
        }
        
        // Kirim data formulir menggunakan Ajax
        var xhr = new XMLHttpRequest();
        xhr.open("post", "proses_data.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    // Tanggapan dari server
                    var response = xhr.responseText;
                    if (response == "sucsess") {
                        // Redirect ke halaman OutputData.php jika login berhasil
                        window.location.href = "index.php";
                    } else {
                        // Menampilkan pesan kesalahan jika login gagal
                        pesan("Email atau password salah");
                    }
                } else {
                    // Menampilkan pesan kesalahan jika terjadi kesalahan koneksi
                    pesan("Terjadi kesalahan saat mengirim permintaan");
                }
            }
        };
        xhr.send(formData);



    }
            
        
    

    
})


function pesan(message){
    var dialog = document.createElement("div");
    dialog.textContent = message;
    dialog.style.backgroundColor = "red";
    dialog.style.color = "white";
    dialog.style.padding = "10px";
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.zIndex = "9999";
    document.body.appendChild(dialog);
    setTimeout(function() {
        document.body.removeChild(dialog);
    }, 3000);
}
