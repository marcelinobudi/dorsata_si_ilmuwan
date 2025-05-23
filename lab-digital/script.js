let downloadButton = document.getElementById('download');
let downloadScreen = document.getElementById('download-screen');
let androidDownloadBtn = document.getElementById('android-download');
let windowsDownloadBtn = document.getElementById('windows-download');
let closeButton = document.getElementById('close-button');

downloadButton.addEventListener('click', function(){
    downloadScreen.hidden = false;
});

androidDownloadBtn.addEventListener('click', function(){
    window.location = 'https://dorsatateam.github.io/lab-digital/DorsataSiIlmuwan.apk';
});

windowsDownloadBtn.addEventListener('click', function(){
    window.location = 'https://dorsatateam.github.io/lab-digital/DorsataWindows64.exe'
});

closeButton.addEventListener('click', function(){
    downloadScreen.hidden = true;
});