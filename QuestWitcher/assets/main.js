let currentScene = 0;

    const scenes = [
        {
            text: "Вы стоите перед входом в Забытые Руины. Что будете делать?",
            imagePath: "img/2.jpeg",
            options: [
                { text: "Спросить о местных тайнах", nextScene: 1 },
                { text: "Потребовать объяснений", nextScene: 2 }
            ]
        },
        {
            text: "Таинственная фигура рассказывает вам о духах, защищающих тайны руин.",
            imagePath: "img/3.jpeg",
            options: [
                { text: "Исследовать подземелья", nextScene: 3 },
                { text: "Поискать артефакты", nextScene: 4 }
            ]
        },
        {
            text: "Вы бросаете вызов фигуре, требуя объяснений. Она предлагает вам загадки для решения.",
            imagePath: "img/4.jpeg",
            options: [
                { text: "Решить загадку", nextScene: 5 },
                { text: "Использовать силу", nextScene: 6 }
            ]
        },
        {
            text: "Вы находите древний артефакт с магической силой.",
            imagePath: "img/5.jpeg",
            options: [
                { text: "Взять артефакт", nextScene: 7 },
                { text: "Оставить его", nextScene: 8 }
            ]
        },
        {
            text: "Под артефактом вы обнаруживаете тайный храм с древними надписями.",
            imagePath: "img/6.jpeg",
            options: [
                { text: "Расшифровать надписи", nextScene: 9 },
                { text: "Игнорировать надписи", nextScene: 10 }
            ]
        },
        {
            text: "Надписи рассказывают о могущественном заклинании. Что вы хотите сделать?",
            imagePath: "img/7.jpeg",
            options: [
                { text: "Использовать заклинание", nextScene: 11, reputationEffect: 1 },
                { text: "Остаться бдительным", nextScene: 12, reputationEffect: -1 }
            ]
        },
        {
            text: "Вы используете заклинание и ощущаете прилив сил. Репутация ведьмака растет.",
            imagePath: "img/8.jpeg",
            options: [
                { text: "Продолжить исследование", nextScene: 13 },
                { text: "Завершить квест", nextScene: 14 }
            ]
        },
        {
            text: "Вы решаете оставить артефакт, чтобы сохранить баланс сил в руинах.",
            imagePath: "img/9.jpeg",
            options: [
                { text: "Исследовать дальше", nextScene: 13 },
                { text: "Завершить квест", nextScene: 14 }
            ]
        },
        {
            text: "Расшифровав надписи, вы обретаете знания, способные изменить мир.",
            imagePath: "img/10.jpeg",
            options: [
                { text: "Использовать знания для блага", nextScene: 15, reputationEffect: 2 },
                { text: "Использовать знания для себя", nextScene: 16, reputationEffect: -2 }
            ]
        },
        {
            text: "Вы осторожно продолжаете свой путь, бдительно относясь к окружающему.",
            imagePath: "img/11.jpeg",
            options: [
                { text: "Продолжить исследование", nextScene: 13 },
                { text: "Завершить квест", nextScene: 14 }
            ]
        },
        {
            text: "Вы решаете проигнорировать надписи, не желая рисковать. Ваша репутация понижается.",
            imagePath: "img/12.jpeg",
            options: [
                { text: "Продолжить исследование", nextScene: 13 },
                { text: "Завершить квест", nextScene: 14 }
            ]
        },
        {
            text: "Вы обнаруживаете тайную комнату, где спрятаны богатства.",
            imagePath: "img/13.jpeg",
            options: [
                { text: "Взять сокровища", nextScene: 17, reputationEffect: -2 },
                { text: "Оставить сокровища", nextScene: 18, reputationEffect: 2 }
            ]
        },
        {
            text: "Вы обнаруживаете древний артефакт, который может изменить ход событий в вашу пользу.",
            imagePath: "img/14.jpeg",
            options: [
                { text: "Воспользоваться артефактом", nextScene: 19, reputationEffect: -2 },
                { text: "Оставить артефакт", nextScene: 20, reputationEffect: 2 }
            ]
        },
        {
            text: "Вы используете свои новые знания для защиты мирных жителей. Репутация ведьмака растет.",
            imagePath: "img/15.jpeg",
            options: [
                { text: "Продолжить свое путешествие", nextScene: 21 },
                { text: "Завершить квест", nextScene: 22 }
            ]
        },
        {
            text: "Вы используете свои новые знания в своих собственных интересах. Репутация ведьмака понижается.",
            imagePath: "img/16.jpeg",
            options: [
                { text: "Продолжить свое путешествие", nextScene: 21 },
                { text: "Завершить квест", nextScene: 22 }
            ]
        },
        {
            text: "Вы продолжаете своё путешествие, и на вашем пути возникают новые загадки и приключения.",
            imagePath: "img/17.jpeg",
            options: [
                { text: "Продолжить путешествие", nextScene: 23 },
                { text: "Завершить квест", nextScene: 24 }
            ]
        },
        {
            text: "Вы решаете вернуться в город, поделившись новыми знаниями и заработанными сокровищами.",
            imagePath: "img/18.jpeg",
            options: [
                { text: "Вернуться в город", nextScene: 25 },
                { text: "Продолжить путешествие", nextScene: 23 }
            ]
        },
        {
            text: "Вы решаете вернуться в город и использовать свои новые силы в борьбе с злом.",
            imagePath: "img/19.jpeg",
            options: [
                { text: "Вернуться в город", nextScene: 26 },
                { text: "Продолжить путешествие", nextScene: 23 }
            ]
        },
        {
            text: "Вы решаете вернуться в город и использовать свои новые знания для личных целей.",
            imagePath: "img/20.jpeg",
            options: [
                { text: "Вернуться в город", nextScene: 27 },
                { text: "Продолжить путешествие", nextScene: 23 }
            ]
        },
        {
            text: "В городе вас приветствуют как героя, спасшего их от древнего зла. Квест завершен.",
            imagePath: "img/good_ending.jpeg",
            options: [
                { text: "Начать заново", nextScene: 0 }
            ]
        },
        {
            text: "Ваши действия привели к нарушению баланса сил. Город сталкивается с новыми угрозами. Квест завершен.",
            imagePath: "img/bad_ending.jpeg",
            options: [
                { text: "Начать заново", nextScene: 0 }
            ]
        },
        {
            text: "Вы продолжаете своё путешествие, оставив город за спиной. Квест завершен.",
            imagePath: "img/neutral_ending.jpeg",
            options: [
                { text: "Начать заново", nextScene: 0 }
            ]
        }
    ];

    let reputation = 0;

function startQuest() {
    reputation = 0;
    showScene(currentScene);
}

    function showScene(sceneIndex) {
        const currentSceneData = scenes[sceneIndex];
        document.getElementById("story").innerHTML = currentSceneData.text;
        document.getElementById("image-container").innerHTML = `<img src="${currentSceneData.imagePath}" alt="Scene Image">`;
        document.querySelector(".button-container").innerHTML = "";

        currentSceneData.options.forEach(option => {
            const button = document.createElement("button");
            button.className = "button";
            button.textContent = option.text;
            button.addEventListener("click", () => goToNextScene(option.nextScene, option.reputationEffect));
            document.querySelector(".button-container").appendChild(button);
        });
    }

    function goToNextScene(nextSceneIndex, reputationEffect) {
        currentScene = nextSceneIndex;
        reputation += reputationEffect || 0;
    
        console.log("Current Reputation:", reputation);
    
        if (reputation >= 2) {
            showEnding("Хорошая концовка: Великий Ведьмак", "img/good_ending.jpeg");
        } else if (reputation <= -2) {
            showEnding("Плохая концовка: Падший Ведьмак", "img/bad_ending.jpeg");
        } else {
            showScene(currentScene);
        }
    }
    

    function showEnding(endingText, endingImagePath) {
        document.getElementById("story").innerHTML = endingText;
        document.getElementById("image-container").innerHTML = `<img src="${endingImagePath}" alt="Ending Image">`;
        document.querySelector(".button-container").innerHTML = '<button class="button" onclick="startQuest()">Начать заново</button>';
    }