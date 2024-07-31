
// // 소리측정
// async function startSoundMeasurement() {
//     try {

//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         const analyser = audioContext.createAnalyser();
//         const microphone = audioContext.createMediaStreamSource(stream);
//         const scriptProcessor = audioContext.createScriptProcessor(256, 1, 1);

//         analyser.smoothingTimeConstant = 0.8;
//         analyser.fftSize = 1024;

//         microphone.connect(analyser);
//         analyser.connect(scriptProcessor);
//         scriptProcessor.connect(audioContext.destination);

//         scriptProcessor.onaudioprocess = function () {
//             const array = new Uint8Array(analyser.frequencyBinCount);
//             analyser.getByteFrequencyData(array);
//             console.log(array)


//             let values = 0;
//             const length= array.length;
//             for (let i = 0; i < length; i++ ) {
//                 values += array[i];
//             }
           
//             const average = values / length;
//             const dbValue = Math.round(20 * Math.log10(average / 255));
     

//             document.querySelector('.db').innerText = `${dbValue}dB`;

//             // 현재 페이지 경로
//             const currentPage = window.location.pathname;
//             console.log(currentPage)

//             if (dbValue <= -50) {
//                 if (currentPage !== '/templates/main.html') {
//                     window.location.href = '/templates/main.html';
//                 }
//             } else if (dbValue > -30 && dbValue <= -20) {
//                 if (currentPage !== '/templates/main02.html') {
//                     window.location.href = '/templates/main02.html';
//                 }
//             } else if (dbValue > -20) {
//                 if (currentPage !== '/templates/main03_01.html') {
//                     window.location.href = '/templates/main03_01.html';
//                 }
//             }
//         };
//     } catch (err) {
//         console.error(err);
//         alert('마이크 권한을 허용해주세요.');
//     }
// }

// //주기적으로 서버에 현재 페이지 확인
// setInterval(checkPageUpdate, 500);

