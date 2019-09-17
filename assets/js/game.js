$(document).ready(function () {
    let target = (Math.floor(100 * Math.random())) + 20;
    let wins = 0;
    let losses = 0;
    let userScore = 0;
    let adders = randomAdderSet();

    initWrite();

    $('.crystal').on('click', function () {
        buttonSound($(this).data("index"));
        userScore += adders[$(this).data("index")];
        $('#user-score').text(userScore);
        checkWinState(userScore);
    });

    function checkWinState(score) {
        if (score == target) {
            $('#user-wins').text('You Won!');
            wins++;
            reset();
        } else if (score > target) {
            $('#user-wins').text('You Lost!');
            losses++;
            reset();
        }
    }

    function reset() {
        target = (Math.floor(100 * Math.random())) + 20;
        userScore = 0;
        adders = randomAdderSet();
        initWrite();
    }

    function initWrite() {
        $('#target').text(target);
        $('#wins').text(wins);
        $('#losses').text(losses)
        $('#user-score').text(userScore);
    }

    function randomAdderSet() {
        let arr = [];
        for (let i = 0; i < 4; i++) {
            let temp = Math.floor(11 * (Math.random())) + 1;
            if (!arr.includes(temp)) {
                arr.push(temp);
            } else {
                i--;
            }
        }
        return arr;
    }

    function buttonSound(index) {
        let sound = new Audio(`assets/audio/sound${index}.wav`);
        sound.volume = 0.5;
        sound.play();
    }
});