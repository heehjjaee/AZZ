window.onload = function() {
    setTimeout(showAlert, 500); // 0.5초 후에 showAlert 함수 실행
};

function showAlert() {
    const alertBox = document.getElementById('alertBox');
    alertBox.style.display = 'block';
}
