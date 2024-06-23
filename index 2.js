const a1 = [
  "Амбициозная – стремление к вершинам вдохновляет.",
  "Авантюрная – жажда новых открытий завораживает.",
  "Аккуратная –  каждая деталь твоей жизни – шедевр.",
  "Артистичная – твой талант – истинное искусство.",
  "Атлетичная – твоя сила и грация – восхитительны.",
  "Аристократичная –  благородство твоего духа  неподвластно времени.",
  "Ангельская –  твоя доброта  заставляет мир  светиться.",
  "Азартная –  твоя энергия  заряжает  всех вокруг.",
  "Агрессивная –  твоя решительность  прокладывает  путь к успеху.",
  "Адаптивная –  твоя способность  приспосабливаться  удивительна.",
  "Активная –  твоя  жизнерадостность  заражает  всех вокруг.",
  "Амбициозная –  твои  мечты  вдохновляют  на великие  дела.",
  "Алмазная –  твоя  твердость  духа  удивительна.",
  "Атлетическая –  твоя  сила  и грация  восхищают.",
  "Адаптивная –  твоя  способность  приспосабливаться  к  изменениям  удивительна.",
  "Актуальная –  твои  знания  и  интересы  всегда  в  курсе  событий.",
  "Аристократичная –  твоя  изящность  и  грация  завораживают.",
  "Амбициозная –  твоя  целеустремленность  вдохновляет.",
  "Амбициозная –  твоя  уверенность  в  себе  заражает  окружающих.",
  "Авантюрная –  твоя  жажда  приключений  увлекает  за собой.",
];
const r = [
  "Радужная – ты как мимолетное явление, оставляющее след в сердце.",
  "Роскошная – твоя красота и изящество словно драгоценности в витрине.",
  "Редкая - легче найти самый редкий элемент из таблицы Менделеева, чем человека интереснее тебя",
  "Разгадка – ты как тайна, которую хочется разгадать.",
  "Романтичная – твоя натура пронизана любовью и чувственностью.",
  "Рассветная – твоя улыбка напоминает первые лучи солнца.",
  "Радостная – твое присутствие приносит радость и счастье.",
  "Реалистичная – ты ценишь жизнь такой, какая она есть.",
  "Ресурсная – ты полна сил и энергии для новых свершений.",
  "Рельефная – твоя личность выделяется, как рельеф на карте.",
  "Разносторонняя – ты обладаешь множеством талантов и интересов.",
  "Радиантная – ты излучаешь свет и тепло.",
  "Резонансная – твое мнение вызывает отклик у окружающих.",
  "Рациональная – ты принимаешь взвешенные и обдуманные решения.",
  "Радикальная – ты не боишься перемен и нововведений.",
  "Рапсодическая – твоя жизнь полна ярких событий и эмоций.",
  "Разноцветная – ты как палитра, полная красок и оттенков.",
  "Резвая – твоя энергия и жизнелюбие заразительны.",
  "Расчетливая – ты умеешь планировать и достигать целей.",
  "Радиальная – твое влияние распространяется во все стороны.",
];
const i = [
  "Интригующая – интерес к тебе неиссякаем, как источник вдохновения.",
  "Изысканная – изящество твоих манер искренне завораживает.",
  "Искренняя – искорка в глазах отражает твою душу.",
  "Изумительная – идеальное сочетание красоты и ума.",
  "Инновационная – идеи всегда напереди времени.",
  "Игривая – искорки юмора искрят в разговоре.",
  "Идеальная – иллюзий нет, ты реально совершенна.",
  "Интеллектуальная – интеллект просвечивает в каждом слове.",
  "Изобретательная – идеи творческие, исполнение безупречное.",
  "Интуитивная – интуиция твоя не подведет.",
  "Импульсивная – искра решимости внезапно вспыхивает.",
  "Изящная – изгибы словно искусство.",
  "Импозантная – излучаешь величие и достоинство.",
  "Ироничная – искрометный юмор исцеляет душу.",
  "Индивидуальная – идентичность твоя неповторима.",
  "Интенсивная – интересы страстные, как игра огней.",
  "Информативная – излагаешь мысли ясно и точно.",
  "Инфраструктурная – идеально организованная в каждом аспекте.",
  "Инстинктивная – инстинкты твои невероятно точны.",
  "Императивная – инициатива твоя командует вниманием.",
];
const n = [
  "Неповторимая – находка для настоящего ценителя натуральной красоты.",
  "Нежная – намекает на невероятную чуткость и непосредственность.",
  "Незаурядная – невозможно не заметить твою необычность и неподражаемость.",
  "Непредсказуемая – никогда не знаешь, какое новое начинание тебя навестит.",
  "Несравненная – ни одна нитка не сплетена так же нежно и настойчиво.",
  "Настойчивая – никогда не отступает перед невзгодами и неприятностями.",
  "Непринужденная – натуральность твоего обаяния неподкупна.",
  "Неподдельная – настоящие чувства не нуждаются в наигранности.",
  "Непревзойденная – никто не может сравниться с твоей неподражаемостью.",
  "Непосредственная – непринужденность твоего общения неподдельна.",
  "Непримиримая – никогда не идет на компромиссы с недостойными нормами.",
  "Непревзойденная – никакие награды не выразят твою неподражаемость.",
  "Непререкаемая – никто не осмелится оспорить твою непогрешимость.",
  "Непревзойденная – ни одна награда не сравнится с твоей неподражаемостью.",
  "Неприметная – на первый взгляд незаметна, но незабываема.",
  "Непоколебимая – невозможно нарушить твою непреклонность и настойчивость.",
  "Непревзойденная – ни один недруг не сравнится с твоей неподражаемостью.",
  "Непревзойденная – ни одна награда не сравнится с твоей неподражаемостью.",
  "Непревзойденная – ни одна награда не сравнится с твоей неподражаемостью.",
  "Непревзойденная – ни одна награда не сравнится с твоей неподражаемостью.",
];
const a2 = [
  "Аристократичная – благородство и изящество веет от тебя.",
  "Аккуратная – каждая деталь в твоем образе продумана до мелочей.",
  "Амбициозная – стремление к вершинам вдохновляет.",
  "Артистичная – талант к творчеству просто завораживает.",
  "Атлетичная – красота и сила гармонично сочетаются в тебе.",
  "Адаптивная – легко и непринужденно справляешься с любыми ситуациями.",
  "Амбициозная – стремление к вершинам вдохновляет.",
  "Авантюрная – жажда приключений заразительна.",
  "Адекватная – здравый смысл и логика  являются твоими сильными сторонами.",
  "Атмосферная –  твоя харизма создает вокруг тебя особую ауру.",
  "Активная – энергия бьет ключом, а  заряд оптимизма заразителен.",
  "Амбициозная –  ты всегда стремишься к новым вершинам.",
  "Аналитическая –  твоя проницательность впечатляет.",
  "Авангардная –  ты всегда на шаг впереди.",
  "Авантюрная –  твоя смелость и жажда приключений завораживают.",
  "Артистичная –  твои творческие способности  заслуживают восхищения.",
  "Активная –  ты  наполняешь жизнь яркими красками.",
  "Атлетическая –  твоя  физческая форма и  грация  впечатляют.",
  "Артистичная –  твоя харизма  и  креативность  заразительны.",
  "Адекватная –  твоя  разумность и  сдержанность  заслуживают уважения.",
];

function next() {
  document.getElementById("first-slide").innerHTML = `
    <h3>Это та самая "у меня есть идея"</h3>
    <button onclick="next1()">Продолжить</button>`;
}
function next1() {
  document.querySelector(".top-body").innerHTML = `
  <div style="
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9em;
  margin: 0; /* Set margin to 0 to decrease space */
  padding: 0; /* Set padding to 0 to decrease space */
  "
  >
    <img class="i1" src="images 2/img1.png" alt="Star Image 1" style="width: 60px; height: 70px; border:none; box-shadow: 0px 0px 6px light-yellow; margin-right:20px"  />
    <img class="i2" src="images 2/img2.png" alt="Star Image 2" style="width: 25px; height: 50px; border:none; box-shadow: 0px 0px 6px light-yellow; margin-top:90px "/>
    <img class="i3" src="images 2/img3.png" alt="Star Image 3" style="width: 25px; height: 25px; border:none; box-shadow: 0px 0px 6px light-yellow; margin-top:0px ">
    <img class="i4" src="images 2/img4.png" alt="Star Image 4" style="width: 67px; height: 70px; border:none; box-shadow: 0px 0px 6px light-yellow; margin-top: 25px"  />
    <img class="i5" src="images 2/img5.png" alt="Star Image 5" style="width: 90px; height: 80px; border:none; box-shadow: 0px 0px 6px light-yellow; margin-top: 40px"  />
    <img class="i6" src="images 2/img6.png" alt="Star Image 6" style="width: 80px; height: 90px; border:none; box-shadow: 0px 0px 6px light-yellow;"  />
    <img class="i7" src="images 2/img7.png" alt="Star Image 7" style="width: 70px; height: 70px; border:none; box-shadow: 0px 0px 6px light-yellow;"  />
    <img class="i8" src="images 2/img8.png" alt="Star Image 8" style="width: 30px; height: 30px; border:none; box-shadow: 0px 0px 6px light-yellow;"  />
    <img class="i9" src="images 2/img9.png" alt="Star Image 9" style="width: 40px; height: 40px; border:none; box-shadow: 0px 0px 6px light-yellow;"  />
    
  </div>`;
  // document.getElementById("top-body").style.width = "10px";

  document.getElementById("first-slide").innerHTML = `
  
    <h3 style="margin-bottom: 0; padding-top: 0%">O'key, для начала тебе нужно написать правильное количество звезд, которое ты видишь на своем экране! </h3>
    <h3 style="margin-top: 0; padding-top: 0%">Арин, пожалуйста, будь  внимательна</h3>
    `;
  document.getElementById("first-slide").style.paddingTop = "10%";
  document.querySelector(".inp").innerHTML = `
    <input type="text" id="answerInput" style="margin-top: 30px">
    <button id="next-btn" onclick="checkAnswer()">Проверить</button>
  `;
}
function checkAnswer() {
  const answer = document.getElementById("answerInput").value;
  if (answer === "9") {
    alert("Арин, это не 9) \nПосмотри в зеркало и подумай еще раз");
    // Add code to proceed to the next step or level
  } else if (answer === "10") {
    alert("eeeeeeeeee");

    next2();
  }
}

function next2() {
  document.getElementById("answerInput").remove();
  document.getElementById("next-btn").remove();
  document.querySelector(".top-body").innerHTML = "";
  document.getElementById("first-slide").innerHTML = `
    
  <h3 style="margin-bottom: 0; text-align: center">Я думал над твоим именнем и составил немного прилагаельных слов</h3>

  <h3 style="margin-top: 0; text-align: center"></h3>
  `;
  document.getElementById("first-slide").style.paddingTop = "5%";
  setTimeout(() => {
    document.getElementById("first-slide").innerHTML = `
    <div style="margin-top:0; margin-button: 20px">
        <button class="letter-button A" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration1()">A</button>
        <button class="letter-button R" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration2()">P</button>
        <button class="letter-button I" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration3()">N</button>
        <button class="letter-button N" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration4()">H</button>
        <button class="letter-button A" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration5()">A</button>

    </div>
    <button class="skip-btn" onclick="next3()">SKIP</button>

    `;
  }, 7000); // Timeout set to 5 seconds (5000 milliseconds)
}
let count = 0; // Initialize the counter

function slowCount() {
  if (count <= 100) {
    // Set the maximum count value
    document.getElementById("counter").innerHTML = count; // Update the counter display
    count++; // Increment the counter
    setTimeout(slowCount, 5000); // Set the interval for the count increment (1000 milliseconds = 1 second)
  }
}

function next3() {
  document.getElementById("first-slide").innerHTML = `
  Счетчик того, сколько раз я думаю тебе в настоящее время:
  <div id="counter" style="margin-bottom: 150px; font-size:100px" >0</div> <!-- Display the counter -->




  ps. ты ведь все равно проиграешь))
   <button class="skip-btn" onclick="next4()">
    SKIP
  </button>
  `;
  slowCount(); // Start the slow count
}

function next4() {
  document.getElementById("first-slide").innerHTML = `
    <div class="row">
      <div><button style="background-color:black;color: white;" onclick="redirectToNewPagePhoto()">Библиотека фотографий</button></div>
      <div><button onclick="redirectToNewPageLove()">Любимые...</button></div>
      <div><button style="background-color:#db0dc7;color: white;"onclick="redirectToNewPageYou()">Ты</button></div>
    </div>
  `;
}

function redirectToNewPagePhoto() {
  window.open("photo 2.html", "_blank"); // Open the new page in a new window
}

function redirectToNewPageLove() {
  window.open("lovely 2.html", "_blank"); // Open the new page in a new window
}
function redirectToNewPageYou() {
  window.open("you 2.html", "_blank"); // Open the new page in a new window
}

function wordGeneration1() {
  const randomIndex = Math.floor(Math.random() * a1.length);
  const randomWord = a1[randomIndex];
  document.querySelector(".first-slide").innerHTML = `
    <div styly="
  position: fixed;
  width: 10%;
  height: 10%;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
">

<div style="
  position: fixed;
  border: none;
  border-radius: 9px;
  width: 50px;
  box-shadow: 0 0 9px gray;
  width: 400px;
  background-color: white;">
</div>
    ${randomWord}
    <button onclick="render()">X</button>
    
</div>

  `;
}
function wordGeneration2() {
  const randomIndex = Math.floor(Math.random() * r.length);
  const randomWord = r[randomIndex];
  document.querySelector(".first-slide").innerHTML = `
    <div styly="
  position: fixed;
  width: 10%;
  height: 10%;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
">

<div style="
  position: fixed;
  border: none;
  border-radius: 9px;
  width: 50px;
  box-shadow: 0 0 9px gray;
  width: 400px;
  background-color: white;">
</div>
    ${randomWord}
    <button onclick="render()">X</button>
    
</div>

  `;
}
function wordGeneration3() {
  const randomIndex = Math.floor(Math.random() * i.length);
  const randomWord = i[randomIndex];
  document.querySelector(".first-slide").innerHTML = `
    <div styly="
  position: fixed;
  width: 10%;
  height: 10%;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
">

<div style="
  position: fixed;
  border: none;
  border-radius: 9px;
  width: 50px;
  box-shadow: 0 0 9px gray;
  width: 400px;
  background-color: white;">
</div>
    ${randomWord}
    <button onclick="render()">X</button>
    
</div>

  `;
}
function wordGeneration4() {
  const randomIndex = Math.floor(Math.random() * n.length);
  const randomWord = n[randomIndex];
  document.querySelector(".first-slide").innerHTML = `
    <div styly="
  position: fixed;
  width: 10%;
  height: 10%;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
">

<div style="
  position: fixed;
  border: none;
  border-radius: 9px;
  width: 50px;
  box-shadow: 0 0 9px gray;
  width: 400px;
  background-color: white;">
</div>
    ${randomWord}
    <button onclick="render()">X</button>
    
</div>

  `;
}
function wordGeneration5() {
  const randomIndex = Math.floor(Math.random() * a2.length);
  const randomWord = a2[randomIndex];
  document.querySelector(".first-slide").innerHTML = `
  <div styly="
position: fixed;
width: 10%;
height: 10%;
left: 0;
right: 0;
top: 10%;
bottom: 0;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
">

<div style="
position: fixed;
border: none;
border-radius: 9px;
width: 50px;
box-shadow: 0 0 9px gray;
width: 400px;
background-color: white;">
</div>
  ${randomWord}
  <button onclick="render()">X</button>
  
</div>

`;
}

function getRandomVerticalPosition() {
  // Get the height of the display area
  const displayHeight = window.innerHeight;

  // Calculate random vertical positions for the buttons within the display area
  const randomY = Math.floor(Math.random() * (displayHeight - 100)); // Adjust the button height if needed

  return randomY;
}

function render() {
  document.getElementById("first-slide").innerHTML = `
  <div>
      <button class="letter-button A" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration1()">A</button>
      <button class="letter-button R" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration2()">P</button>
      <button class="letter-button I" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration3()">N</button>
      <button class="letter-button N" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration4()">H</button>
      <button class="letter-button A" style="top: ${getRandomVerticalPosition()}px;" onclick="wordGeneration5()">A</button>


  </div>
  <button class="skip-btn" onclick="next3()">SKIP</button>

  `;
}
