$(document).ready(function () {
    let target = (Math.floor(100 * Math.random())) + 20;
    let wins = 0;
    let losses = 0;
    let userScore = 0;
    let adders = [];

    let targetDiv = $('#target');
    let winsDiv = $('#wins');
    for (let i = 0; i < 4; i++) {
        let img = $("<img>");
        img.addClass('img-responsive h-auto m-0');
        img.attr('src', `assets/images/crystal${i}.jpeg`);
        img.css('max-width', '100%');
        $('#crystal' + i).append(img);
    }

    for (let i = 0; i < 4; i++) {
        let temp = Math.floor(11 * (Math.random())) + 1;
        if (!adders.includes(temp)) {
            adders.push(temp);
        } else {
            i--;
        }

    }
    console.log(adders);



    targetDiv.text(target);
    winsDiv.text(`Wins: ${wins} Losses: ${losses}`)

    $('#crystal0').on('click', function () {
        let sound = document.createElement('audio');
        sound.setAttribute('src', 'assets/audio/sound0.wav');
        sound.pause();
        sound.currentTime = 0;
        $(this).append(sound);
        sound.play();
    });

    $('#crystal1').on('click', function () {
        let sound = document.createElement('audio');
        sound.setAttribute('src', 'assets/audio/sound1.wav');
        sound.pause();
        sound.currentTime = 0;
        $(this).append(sound);
        sound.play();
    });

    $('#crystal2').on('click', function () {
        let sound = document.createElement('audio');
        sound.setAttribute('src', 'assets/audio/sound2.wav');
        sound.pause();
        sound.currentTime = 0;
        $(this).append(sound);
        sound.play();
    });

    $('#crystal3').on('click', function () {
        let sound = document.createElement('audio');
        sound.setAttribute('src', 'assets/audio/sound3.wav');
        sound.pause();
        sound.currentTime = 0;
        $(this).append(sound);
        sound.play();
    });




})