const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
const H2 = document.getElementById('cardH2')
const P = document.getElementById('cardP')
let h2 = ["Яна Федорова", "Галина Тумергова", "Ирина Карасава", "Юлия Морозова", "Анна Ильдебаева", "Марина Бронская", "Татьяна Меркелло", "Екатерина Федотовских"];
let p = ["Дашенька, спасибо огромное за нежный и вкусный солевой скраб! Пахнет божественно, моей любимой лавандой! Я подсела на Ваши товары еще в прошлом году – была летняя ярмарка «Бал фей», с тех пор я Ваш фанат! Кстати, скраб очень деликатно очищает кожу и мои ножки стали очень мягкими.",
    "Доброго дня! Заказывала у Вас яркие бомбочки для ванны в подарок своим подружкам на девичник, все остались довольны, за опт еще и скидочку получила, очень приятно) Я и себе оставила бомбочку на вечер, могу сказать, что аромат в ванной просто потрясающий, не резкий, не бьет в нос, не испаряется за секунду как магазинные бомбочки. Ванна приобрела приятный оттенок голубой воды, не окрасилась. Буду заказывать еще)",
    "Заказывала в подарок набор с мылом, бомбочкой и свечкой, все выполнено очень красиво и с невероятным запахом, сразу же не удержалась и заказала для себя такую же свечку с ароматом «Французское печенье», пахнет невероятно, спасибо!", 
    "Свечи в баночках просто фантастические, особенно по душе пришелся аромат глинтвейн, запах чувствуется даже в соседних комнатах. Я очень довольна, жаль мало заказала",
    "Брала два скраба: рафаэлло и поцелуй русалки- очень классные, теперь буду брать только у вас! Свечи массажные и свечи с ароматом вообще восторг, пользуюсь постоянно!Спасибо за качественную продукцию!",
    "Дарья, то что я заказала и распаковала - невероятной красоты, потрясающие изделия! Это просто услада для глаз! А запах свечи в молочнике - что-то восхитительное Благодарю сто тысяч раз! Моё сердце навсегда покорили Ваши творения Я теперь поклонница Вашего творчества",
    "Доброго вечера! Хотелось бы еще раз сказать спасибо за такие классные продукты! Очень классно все упаковано, видно, что с душой. Заказывала набор со свечой, аромадиффузором, баттером для тела. Я просто в восторге от ароматов, свечу с ароматом попкорна я поставила на работе (не зажигаю, но и так открытая баночка орет), диффузор поставила дома в коридоре – аромат «Восточный базар» на три комнаты, а баттер.. теперь моя отдельная любовь, такой нежный и шелковый, прям тает на коже. Буду брать еще!", 
    "Спешу к тебе с отзывом! У нас нет горячей воды и я пошла с тазиками и скрабом в душ. Насладилась текстурой – у меня кожа реагирует на все новое очень резко, а здесь приятные мелкие частички и нет масляной пленки! Аромат я выбрала «Восточный базар», на коже раскрылся потрясающе. Сижу довольная и благоухающая!"
];

let coynt =0;

rightbtn.addEventListener("click", ()=>{
    coynt++
    if(coynt > 7)
        coynt=7;
    H2.textContent=h2[coynt];
    P.textContent=p[coynt];
});

leftbtn.addEventListener("click", ()=>{
    coynt--
    if(coynt <0)
        coynt=0;
    H2.textContent=h2[coynt];
    P.textContent=p[coynt];
});