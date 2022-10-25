const questionsList = [
	{
		question: "Чим згідно прислівя не махають після бійки?",
		id: "Чим згідно прислівя не махають після бійки?",
		correct: "Кулаками",
		answers: ['Кулаками', 'Ногами', 'Палками', 'Телефоном']
	},
	{
		question: "Хто створим кюпюру з принцесою Діаною?",
		id: "Хто створим кюпюру з принцесою Діаною?",
		correct: "Бенксі",
		answers: ['Бенксі', 'Тетчер', 'Черчель', 'Джонсон']
	},
	{
		question: "Куди 'я щас пригну'?",
		id: "Куди 'я щас пригну'?",
		correct: "на гараж",
		answers: ['на бутилку', 'на гараж', 'на тебе', 'на стул']
	},
	{
		question: "Найбільших призових фондів в історії кіберспорту?",
		id: "Найбільших призових фондів в історії кіберспорту?",
		correct: "34 330 068$",
		answers: ['28 199 394$', '31 847 982$', '34 330 068$', '37 234 023$']
	},
	{
		question: "Перший президент США?",
		id: "Перший президент США?",
		correct: "Джордж Вашингтон",
		answers: ['Теодор Рузвельт', 'Джордж Вашингтон', 'Бенджамін Франклін', 'Франклін Делано Рузвельт']
	},
	{
		question: "Перші брати в кіно?",
		id: "Перші брати в кіно?",
		correct: "Брати Люм'єр",
		answers: ['Брати Люм\'єр', 'Брати Вачовські', 'Брати Коен', 'Брати Райт']
	},
	{
		question: "Які кольори потрібно змішати щоб вийшов фіолетовий?",
		id: "Які кольори потрібно змішати щоб вийшов фіолетовий?",
		correct: "Синій і червоний",
		answers: ['Синій і жовтий', 'Зелений і червоний', 'Синій і зелений', 'Синій і червоний']
	},
	{
		question: "Перший елемент періодичної системи елементів?",
		id: "Перший елемент періодичної системи елементів?",
		correct: "Водень (Н)",
		answers: ['Водень (Н)', 'Гелій (He)', 'Кисень (О)', 'Натрій (Na)']
	},
	{
		question: "Якого ключа НЕ існує?",
		id: "Якого ключа НЕ існує?",
		correct: "Гитарний ключ",
		answers: ['Скрипковий ключ', 'Басовий ключ', 'Старофранцузький ключ', 'Гитарний ключ']
	},
	{
		question: "В честь якого міста названий один з періодів палеозойської ери?",
		id: "В честь якого міста названий один з періодів палеозойської ери?",
		correct: "Перм",
		answers: ['Перм', 'Кемпбридж', 'Київ', 'Улан-Батор']
	},
	{
		question: "Хто є автором Node.js?",
		id: "Хто є автором Node.js?",
		correct: "Раян Дал",
		answers: ['Білл Гейтс', 'Раян Дал', 'Раян Хьорст', 'Лінус Торвальдс']
	},
	{
		question: "Перший інтернет браузер?",
		id: "Перший інтернет браузер?",
		correct: "WorldWideWeb",
		answers: ['WorldWideWeb', 'MOSAIC', 'NETSCAPE NAVIGATOR', 'OPERA']
	},
	{
		question: "Який маршрушт 12 тролейбуса в Полтаві?",
		id: "Який маршрушт 12 тролейбуса в Полтаві?",
		correct: "Інтститут Звязку - Левада",
		answers: ['Кільцевий', 'Полтава Київська - Полтава Південна', 'ГРЛ - Левада', 'Інтститут Звязку - Левада']
	},
	{
		question: "Що спільного у буддизму і тваринного світу Землі?",
		id: "Що спільного у буддизму і тваринного світу Землі?",
		correct: "Лама",
		answers: ['Орел', 'Лама', 'Тигр', 'Слон']
	},
	{
		question: "Кого з цих комах в англомовних країнах можна назвати 'Buzzing pollinator'",
		id: "Кого з цих комах в англомовних країнах можна назвати 'Buzzing pollinator'",
		correct: "Бджола",
		answers: ['Терміт', 'Бджола', 'Мураха', 'Комар']
	},
	{
		question: "Хто розбив військо Спартака?",
		id: "Хто розбив військо Спартака?",
		correct: "Марк Ліциній Красс",
		answers: ['Марк Ту́ллій Цицеро́н', 'Гней Помпей', 'Гай Юлій Цезарь', 'Марк Ліциній Красс']
	},
	{
		question: "Яке з цих імен ніколи НЕ носив ні один з Королів Великої Британії?",
		id: "Яке з цих імен ніколи НЕ носив ні один з Королів Великої Британії?",
		correct: "Бенджамін",
		answers: ['Бенджамін', 'Артур', 'Річард', 'Генгіх']
	},
	{
		question: "Золота рибка України?",
		id: "Золота рибка України?",
		correct: "Яна Клочкова",
		answers: ['Оксана Баюл', 'Олена Зубрилова', 'Аліна Максименко', 'Яна Клочкова']
	},
	{
		question: "Пуд якого продукту потрібно з\'їсти разом з людиною, щоб добре упізнати її?",
		id: "Пуд якого продукту потрібно з\'їсти разом з людиною, щоб добре упізнати її?",
		correct: "Солі",
		answers: ['Солі', 'Цукру', 'Гороху', 'Борошна']
	},
	{
		question: "Який континент складається тільки з однієї країни?",
		id: "Який континент складається тільки з однієї країни?",
		correct: "Австралія",
		answers: ['Австралія', 'Африка', 'Китай', 'Азія']
	},
	{
		question: "Герой оповідань Р.Кіплінга?",
		id: "Герой оповідань Р.Кіплінга?",
		correct: "Мауглі",
		answers: ['Червона шапочка', 'Мауглі', 'Гидке каченя', 'Буратіно']
	},
	{
		question: "Що допомагає дорослій черепасі захищатися від своїх ворогів?",
		id: "Що допомагає дорослій черепасі захищатися від своїх ворогів?",
		correct: "Панцир",
		answers: ['Дах', 'Шкаралупа', 'Панцир', 'Броня']
	},
	{
		question: "За версією Сасорі мистецтво це?",
		id: "За версією Сасорі мистецтво це?",
		correct: "Вічність",
		answers: ['Вічність', 'Вибух', 'Музика', 'Тупор']
	},
	{
		question: "З якої гри походить мем \"Press F to pay respects\"?",
		id: "З якої гри походить мем \"Press F to pay respects\"?",
		correct: "Call of Duty: Advanced Warfare",
		answers: ['Call of Duty: Advanced Warfare', 'Metal Gear Solid', 'Battlefield 2042', 'battlefront 2']
	},
	{
		question: "На скільки областей поділена Україна?",
		id: "На скільки областей поділена Україна?",
		correct: "25",
		answers: ['25', '21', '29', '19']
	},
	{
		question: "1111 в квадраті?",
		id: "1111 в квадраті?",
		correct: "1 234 321",
		answers: ['1 234 421', '1 234 321', '1 234 123', '1 234 311']
	},
	{
		question: "Синус гострого кута в контексті прямокутного трикутника визначається як відношення",
		id: "Синус гострого кута в контексті прямокутного трикутника визначається як відношення",
		correct: "довжини катета, що є протилежним даному куту, до довжини гіпотенузи",
		answers: ['довжини катета, що є протилежним даному куту, до довжини гіпотенузи', 'довжини гіпотенузи, до довжини катета, що є протилежним даному куту', 'довжини гіпотенузи, до довжини катета, що є прилеглим до даного кута', 'довжини катета, що є прилеглим до даного кута, до довжини гіпотенузи']
	},
	{
		question: "Найдовша річка світу?",
		id: "Найдовша річка світу?",
		correct: "Амазонка",
		answers: ['Амазонка', 'Hiл', 'Янцзи', 'Міссурі']
	},
	{
		question: "Найбільший острів світу?",
		id: "Найбільший острів світу?",
		correct: "Гренландія",
		answers: ['Гренландія', 'Нова Гвінея', 'Калімантан', 'Мадагаскар']
	},
	{
		question: "Кільце якого кольору ВІДСУТНЄ на Олімпійській емблемі?",
		id: "Кільце якого кольору ВІДСУТНЄ на Олімпійській емблемі?",
		correct: "Фіолетового",
		answers: ['Червоного', 'Фіолетового', 'Синього', 'Чорного']
	},
	{
		question: "Скільки рівнів є у моделі OSI?",
		id: "Скільки рівнів є у моделі OSI?",
		correct: "7",
		answers: ['3', '7', '9', '12']
	},
	{
		question: "Який з цих плодів є в логотипові браузера Tor?",
		id: "Який з цих плодів є в логотипові браузера Tor?",
		correct: "Цибуля",
		answers: ['Огірок', 'Горох', 'Морква', 'Цибуля']
	},
	{
		question: "В якому році відбулася подія нині відома як Карибська криза?",
		id: "В якому році відбулася подія нині відома як Карибська криза?",
		correct: "1962",
		answers: ['1952', '1962', '1972', '1982']
	},
	{
		question: "Офіційний талісман Linux?",
		id: "Офіційний талісман Linux?",
		correct: "Пінгвін Tux",
		answers: ['Тигр Rux', 'Пінгвін Tux', 'Тасманський диявол Tuz', 'Єнот Lux']
	},
	{
		question: "Що хотів показати їм Хрущов?",
		id: "Що хотів показати їм Хрущов?",
		correct: "Кузькіну мать",
		answers: ['Пеніс', 'Жопу', 'Кузькіну мать', 'Твою мать']
	},
	{
		question: "Якого інгрідієнту не було в першій версії (1516 року) Райнгайтсґеботу (Німецький закон про чистоту пива)?",
		id: "Якого інгрідієнту не було в першій версії (1516 року) Райнгайтсґеботу (Німецький закон про чистоту пива)?",
		correct: "Дріжджі",
		answers: ['Вода', 'Ячмінь', 'Хміль', 'Дріжджі']
	},
	{
		question: "Якому поету встановлено найбільше пам ятників?",
		id: "Якому поету встановлено найбільше пам ятників?",
		correct: "Тарас Шевчено",
		answers: ['Тарас Шевчено', 'Олександр Пушкін', 'Оскар Уайльд', 'Анна Ахматова']
	},
	{
		question: "Що не роблять мертві бджоли?",
		id: "Що не роблять мертві бджоли?",
		correct: "Не гудуть",
		answers: ['Не гудуть', 'Не клюють', 'Не блюють', 'Не плюють']
	},
	{
		question: "Острів, на якому доживав свої останні дні Наполеон?",
		id: "Острів, на якому доживав свої останні дні Наполеон?",
		correct: "Святої Олени",
		answers: ['Кріт', 'Ельба', 'Сицилія', 'Святої Олени']
	},
	{
		question: "Яка шахова фігура ходить буквою 'L'?",
		id: "Яка шахова фігура ходить буквою 'L'?",
		correct: "Кінь",
		answers: ['Кінь', 'Слон', 'Ферзь', 'Тура']
	},
	{
		question: "Кубік Рубіка може мати 43 252 003 274 489 856 000 комбінацій. Яка максимальна кількість рухів потрібна для того щоб розв'язати будь-яку з позицій?",
		id: "Кубік Рубіка може мати 43 252 003 274 489 856 000 комбінацій. Яка максимальна кількість рухів потрібна для того щоб розв'язати будь-яку з позицій?",
		correct: "20",
		answers: ['20', '15', '25', '30']
	},
	{
		question: "Як називається двомісний велосипед?",
		id: "Як називається двомісний велосипед?",
		correct: "Тандем",
		answers: ['Біплан', 'Тандем', 'Двоколка', 'Стереопед']
	},
	{
		question: "Які частинки атома мають позитивний заряд?",
		id: "Які частинки атома мають позитивний заряд?",
		correct: "Протони",
		answers: ['Кварки', 'Електрони', 'Протони', 'Нейтрони']
	},
	{
		question: "Чому за часів Діккенса дорівнювали 12 англійських пенсів?",
		id: "Чому за часів Діккенса дорівнювали 12 англійських пенсів?",
		correct: "Шилінг",
		answers: ['Шилінг', 'Пенні', 'Пенсо', 'Флорен']
	},
	{
		question: "Як звали головного героя у фільмі 'Один удома 2'",
		id: "Як звали головного героя у фільмі 'Один удома 2'",
		correct: "Кевін",
		answers: ['Енді', 'Степан', 'Джон', 'Кевін']
	},
	{
		question: "Який інструмент не відноситься до атрибутів пастушого життя?",
		id: "Який інструмент не відноситься до атрибутів пастушого життя?",
		correct: "Горн",
		answers: ['Ріжок', 'Горн', 'Сопілка', 'Дудка']
	},
	{
		question: "Як називається організм позбавлений забарвлення?",
		id: "Як називається організм позбавлений забарвлення?",
		correct: "Альбінос",
		answers: ['Альбуцид', 'Альбіон', 'Альбумін', 'Альбінос']
	},
	{
		question: "Яка частина гвоздичного дерева після сушки стає прянощами?",
		id: "Яка частина гвоздичного дерева після сушки стає прянощами?",
		correct: "Квіти",
		answers: ['Листя', 'Кора', 'Корені', 'Квіти']
	},
	{
		question: "Скільки років складає цикл Східного календаря?",
		id: "Скільки років складає цикл Східного календаря?",
		correct: "12",
		answers: ['10', '7', '12', '13']
	},
	{
		question: "Яка грошова одиниця Норвегії?",
		id: "Яка грошова одиниця Норвегії?",
		correct: "Крона",
		answers: ['Гульден', 'Крона', 'Франк', 'Марка']
	},
	{
		question: "Хто відкрив Південний Полюс?",
		id: "Хто відкрив Південний Полюс?",
		correct: "Амундсен",
		answers: ['Амундсен', 'Белінгаузен', 'Скотт', 'Лазарєв']
	},
	{
		question: "Столицею якої країни є місто Готхоб?",
		id: "Столицею якої країни є місто Готхоб?",
		correct: "Гренландія",
		answers: ['Іспанія', 'Гренландія', 'Данія', 'Північна Ірландія']
	},
	{
		question: "Хто в арабських казках зазвичай сидить в пляшці?",
		id: "Хто в арабських казках зазвичай сидить в пляшці?",
		correct: "Джин",
		answers: ['Джин', 'Муха', 'Зелений змій', 'Єврей']
	},
	{
		question: "У якому році розіпнули Ісуса Христа?",
		id: "У якому році розіпнули Ісуса Христа?",
		correct: "33 році н.е.",
		answers: ['33 році н.е.', '33 році до н.е.', '0 році', '1488 році']
	},
	{
		question: "Яку рослину називають дикою трояндою?",
		id: "Яку рослину називають дикою трояндою?",
		correct: "Шипшина",
		answers: ['Жасмин', 'Розмарин', 'Акація', 'Шипшина']
	},
]

export default questionsList;
