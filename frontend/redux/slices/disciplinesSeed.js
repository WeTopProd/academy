const disciplines = [
    {
        id: 1,
        name: 'веб-дизайнер',
        type: DisciplinesTypes['web-designer'],
        name_sklonenie: 'веб-дизайну',
        ImageURL: '/Desciplines/web-designer',
        ImageType: '.png',
        description: 'Веб-дизайнер занимается созданием визуальных концепций для различных видов веб-страниц, включая лендинги, сайты компаний и интернет-магазины. Он также создает дизайн интерфейсов для интернет-сервисов и мобильных приложений, а также разрабатывает шаблоны для электронных рассылок и интернет-баннеров.',
        lesson_duration: '1,5 часа',

        skills: [
            'Научитесь проетировать удобные интерфейсы',
            'Разовьете вкус и насмотренность',
            'Освоите все необходимые программы и инструменты',
            'Научитесь быть внимательным к деталям',
            'Разберетесь со стилями, колористикой и типографией',
            'Раскроете свой потенциал через творчество'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 6 человек)',
                price: '2 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 30 занятий',
                price: '90 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '30'
    },
    {
        id: 2,
        name: 'ведущий',
        type: DisciplinesTypes['vedushii'],
        name_sklonenie: 'ведущих',
        ImageURL: '/Desciplines/vedushii',
        ImageType: '.png',
        description: 'Ведущий мероприятия осуществляет контакт с приглашенными гостями, генерирует и удерживает настроение, организует конкурсы и развлечения для аудитории. Он проводит активные развлекательные программы, шоу и презентации, присматривает за гостями, координирует музыкальное сопровождение мероприятий.',
        lesson_duration: '1,5 часа',

        skills: [
            'Научитесь вести развлекательную программу',
            'Будете составлять сценарии мероприятий',
            'Научитесь планировать программы мероприятия',
            'Поставите свою речь грамотно',
            'Перестанете бояться публики',
            'Научитесь импровизировать'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 8 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '60 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '20'
    },
    {
        id: 3,
        name: 'веб-разработчик',
        type: DisciplinesTypes['web-developer'],
        name_sklonenie: 'веб-разработки',
        ImageURL: '/Desciplines/web-developer',
        ImageType: '.png',
        ImageURLResize: resize.resize,
        description: 'Веб-разработчик — это специалист, который создает и поддерживает сайты и приложения. Он может работать как над внешним видом сайта, так и над его внутренней, серверной частью. Тестирование и поиск багов — хоть и не основная, но тоже одна из задач веб-программирования.',
        lesson_duration: '1,5 часа',

        skills: [
            'Научитесь разрабатывать веб-сайты и приложения',
            'Научитесь строить семантическую разметку сайтов',
            'Получите основные навыки работы GitHub',
            'Овладеете таблицей стилей',
            'Выберете подходящюю среду разработки',
            'Загрузите свой первый проект на хостинг'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 8 человек)',
                price: '2 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 40 занятий',
                price: '120 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '40'
    },
    {
        id: 4,
        name: 'пантомима',
        type: DisciplinesTypes['pantomima'],
        name_sklonenie: 'пантомимы',
        ImageURL: '/Desciplines/pantomima',
        ImageType: '.png',
        ImageURLResize: resize.resize,
        description: 'Вид сценического искусства, в котором основным средством создания художественного образа является пластика человеческого тела, без использования слов.',
        lesson_duration: '1,5 часа',

        skills: [
            'Научитесь создавать образ',
            'Научитесь доносить свои мысли с помощью мимики и жестов',
            'Снимите психическую зажатость и барьеры',
            'Разовьете равновесие, реакцию, станете более подвижным',
            'Перестанете бояться публики',
            'Познаете возможности своего тела'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 6 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '60 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '20'
    },
    {
        id: 5,
        name: 'степ',
        type: DisciplinesTypes['step'],
        name_sklonenie: 'степу',
        ImageURL: '/Desciplines/step',
        ImageType: '.png',
        description: 'Танец степ - это особый стиль танца, который характеризуется использованием стоп, пяток и пальцев ног для создания ритмичных звуков и мелодичных паттернов. Танец степ является не только творческим и энергичным искусством, но и физически активным занятием, требующим силы, гибкости, координации и музыкальности.',
        lesson_duration: '1 час',

        skills: [
            'Будете выражать своё настроение посредством танца',
            'Разовьёте ритм и координацию движений',
            'Поспособствуете развитию укреплению мышц всего тела',
            'Улучшите равновесие и стабильность, что поможет вам и в повседневной жизни',
            'Улучшите свою выносливость, силу и гибкость',
            'Улучшите свое настроение и избавитесь от стресса'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 6 человек)',
                price: '1 000 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '2 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 12 занятий',
                price: '24 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '12'
    },
    {
        id: 6,
        name: 'вокал',
        type: DisciplinesTypes['vokal'],
        name_sklonenie: 'по вокалу',
        ImageURL: '/Desciplines/vokal',
        ImageType: '.png',
        description: 'Вокал - это искусство пения, использования голоса в музыкальных произведениях или других вокальных выступлениях. Занятия вокалом могут включать различные аспекты, такие как техника дыхания, подготовка голоса, развитие музыкального слуха, исполнение разных стилей музыки, интерпретация текстов и многое другое.',
        lesson_duration: '1 час',
        skills: [
            'Разовьете музыкальный слух, чувства ритма, интонации и мелодической линии',
            'Изучите навыки сценического движения, работу над эмоциями и мимикой лица',
            'Расширите  ваш голосовой диапазон',
            'Разовьете разнообразие выразительности в вашем голосе',
            'Разовьете разнообразие выразительности в вашем голосе',
            'Разовьете свой репертуар и научиться эффективно интерпретировать различные стили и жанры музыки'
        ],
        cost: [
            {
                name: 'Индивидуально занятие',
                price: '2 500 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '50 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '20'
    },
    {
        id: 7,
        name: 'блогер',
        type: DisciplinesTypes['bloger'],
        name_sklonenie: 'по блогерству',
        ImageURL: '/Desciplines/bloger',
        ImageType: '.png',
        description: 'Блогер - это человек, который создает и публикует свое собственное онлайн-содержание на платформах, таких как блоги, социальные сети, YouTube, подкасты и другие медиа-ресурсы. Блогеры могут иметь разные цели: поделиться своими идеями и мнениями, предлагать советы и рекомендации, обмениваться опытом, развлекать аудиторию, зарабатывать на рекламе или спонсорских соглашениях, или просто строить сообщество единомышленников.',
        lesson_duration: '1,5 час',
        skills: [
            'Будете выражать своё настроение посредством танца',
            'Разовьёте ритм и координацию движений',
            'Поспособствуете развитию укреплению мышц всего тела',
            'Улучшите равновесие и стабильность, что поможет вам и в повседневной жизни',
            'Улучшите свою выносливость, силу и гибкость',
            'Улучшите свое настроение и избавитесь от стресса'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 10 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '60 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '20'
    },
    {
        id: 8,
        name: 'клоунада',
        type: DisciplinesTypes['clown'],
        name_sklonenie: 'театральной клоунады',
        ImageURL: '/Desciplines/clown',
        ImageType: '.png',
        description: 'Клоунада - это жанр комедийного театра, в котором актеры используют физические выразительные средства, такие как мимика, жесты, телодвижения, звуковые эффекты и импровизация, чтобы создать комические ситуации и взаимодействовать с аудиторией. Цель театральной клоунады - развлечь зрителей, вызвать у них смех и эмоциональные реакции, а также поразмышлять о жизни и человеческих отношениях через призму комических ситуаций, создаваемых клоунами на сцене.',
        lesson_duration: '1,5 час',
        skills: [
            'Разовьёте эмоциональную гибкость, осознаете свои эмоции и научитесь их выражать',
            'Разовьёте навыки творческого мышления, генерации идей, импровизации и создания собственных клоунских номеров',
            'Разовьёте свой индивидуальный стиль клоуна, подчеркнуть свою уникальность и подход к игре на сцене',
            'Разовьёте навыки быстрой реакции, спонтанности и креативности в импровизационных ситуациях',
            'Разовьёте гибкость, баланс, пластичность и координации движений.',
            'Изучение различные техники комического актерского мастерства'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 6 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '60 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '20'
    },

    {
        id: 9,
        name: 'Актерское мастерство',
        type: DisciplinesTypes.actor,
        name_sklonenie: 'Актерского мастерства',
        ImageURL: '/Desciplines/actor',
        ImageType: '.png',
        ImageURLResize: resize.resize,
        description: 'Актёрское искусство — профессиональная творческая деятельность в области исполнительских искусств, состоящая в создании сценических образов, вид исполнительского творчества. Исполняя определённую роль в театральном представлении, актёр как бы уподобляет себя лицу, от имени которого он действует в спектакле.',
        lesson_duration: '1,5 часа',
        cost: [
            {
                name: 'Групповое занятние (до 7 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 20 занятий',
                price: '60 000 руб.',
                type: type.course
            }
        ],
        skills: [
            'Снимите телесные и речевые зажимы, психологические блоки и неуверенность перед публикой',
            'Разовьете наблюдательность, внимание и память',
            'Научитесь работать в режиме импровизации и разовьете эмоциональный самоконтроль',
            'Получите навыки поведения в конфликтных ситуациях',
            'Проработаете лидерские качества в роли режиссера/организатора',
            'Раскроете свой потенциал через творчество'
        ],
        recomended_lesson_count: '20'
    },
    {
        id: 10,
        name: 'бильярд',
        type: DisciplinesTypes.billiards,
        name_sklonenie: 'по бильярду',
        ImageURL: '/Desciplines/billiards',
        ImageType: '.png',
        ImageURLResize: resize.resize,
        description: 'Бильярд - это настольная игра, в которую играют с использованием кия и шаров на специальном бильярдном столе. Бильярд является популярным развлечением, требующим точности, стратегического мышления и мастерства. Бильярд - это также игра стратегии, так как игроки могут использовать тактику, чтобы затруднить действия соперников и улучшить свои шансы на победу.',
        lesson_duration: '2 часа',
        cost: [
            {
                name: 'Индивидуально занятие',
                price: '4 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 10 занятий',
                price: '40 000 руб.',
                type: type.course
            }
        ],
        skills: [
            'Разовьёте точность, координацию движений, расчет силы удара и планирование стратегии',
            'Разовьёте социальные навыки, такие как коммуникация, работа в команде',
            'Поспособствуете тренировке мозговой активности, улучшению концентрации, памяти и принятия решений.',
            'Поспособствуете улучшению физической формы, координации движений, баланса и общего здоровья',
            'Расслабитесь и отдохнёте от повседневных забот',
            'Разовьёте творческое мышление и способности находить нестандартные решения'
        ],
        recomended_lesson_count: '10'
    },
    {
        id: 11,
        name: 'бармен',
        type: DisciplinesTypes['barmen'],
        name_sklonenie: 'барменов',
        ImageURL: '/Desciplines/barmen',
        ImageType: '.png',
        description: 'Бармен – это более чем просто тот, кто наливает напитки, это творческий специалист, который создает уникальные коктейли и обеспечивает высокий уровень обслуживания гостей. Главная функция бармена – это приготовление и подача напитков в соответствии с заказами гостей. Бармен должен знать различные рецепты коктейлей, уметь работать со спиртными и безалкогольными ингредиентами, правильно измерять и смешивать компоненты, а также оформлять напитки и декорировать их. ',
        lesson_duration: '1,5 час',
        skills: [
            'Научитесь основам смешивания ингредиентов',
            'Узнаете правила измерения и смешивания спиртных и безалкогольных компонентов',
            'Узнаете разнообразные рецепты коктейлей, включая классические и современные варианты',
            'Научитесь общаться с гостями, предлагать рекомендации, работать с жалобами и конфликтными ситуациями',
            'Изучите особенности сервировки различных видов напитков и коктейлей',
            'Научитесь создавать уникальные комбинации вкусов'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 8 человек)',
                price: '2 000 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 25 занятий',
                price: '75 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '25'
    },
    {
        id: 12,
        name: 'стендап',
        type: DisciplinesTypes['standup'],
        name_sklonenie: 'по стендапу',
        ImageURL: '/Desciplines/standup',
        ImageType: '.png',
        description: 'Стендап (англ. stand-up comedy) – это особый вид развлекательного выступления, где комик выступает перед публикой, стоя на сцене и представляет свою комедийную программу. В отличие от традиционных комедийных жанров, таких как сценки или сатира, стендап представляет собой одномановое выступление одного комика, который обычно рассказывает о своих личных опытах, наблюдениях, мнениях и анекдотах.',
        lesson_duration: '1,5 час',
        skills: [
            'Изучите различные техники создания комедийных шуток, анекдотов и рассказов',
            'Научитесь взаимодействовать с аудиторией и чувствовать реакцию зрителей',
            'Научитесь создавать свой собственный комедийный материал, исследовать свои личные опыты',
            'Разовьёте свои навыки импровизации и адаптирования к разным ситуациям',
            'Изучите процесс подготовки к выступлению, включая выбор материала, репетиции, подготовку сет-листов',
            'Разовьёте свой собственный уникальный стиль, чтобы выделиться среди других комиков'
        ],
        cost: [
            {
                name: 'Групповое занятние (до 6 человек)',
                price: '1 500 руб.',
                type: type.group
            },
            {
                name: 'Индивидуально занятие',
                price: '3 000 руб.',
                type: type.individual
            },
            {
                name: 'Курс 30 занятий',
                price: '90 000 руб.',
                type: type.course
            }
        ],
        recomended_lesson_count: '30'
    },

]

