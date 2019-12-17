var questions = [
   {
      "question":"1. В-канал з комутацією сигналів служить для",
      "answer":"Цей режим еквівалентний існуючій зараз послузі надання цифрової лінії, що комутується. Користувач надсилає запит і мережа встановлює з\u0027єднання, що комутується, з комутацією каналів з іншим користувачем мережі. Необхідно відмітити, що діалог установки з\u0027єднання проходить не по В-каналу, а по D-каналу;"
   },
   {
      "question":"2. В-канал з пакетною комутацією сигналів служить для",
      "answer":"користувач підключається до вузла комутації пакетів і обмінюється даними з іншими користувачами по протоколу Х.25;"
   },
   {
      "question":"3. В-канал кадровий режим служить для",
      "answer":"Користувач з\u0027єднується з вузлом ретрансляції кадрів і обмінюється даними з іншими користувачами по протоколу LAPF."
   },
   {
      "question":"4. D-канал служить для",
      "answer":"служить двом цілям. По-перше, він передає сигнальну інформацію для керування з\u0027єднаннями, що комутуються, у В-каналах, що він обслуговує. По-друге, D-канал може використовуватися для пакетної комутації чи низькошвидкісної (наприклад, 100 біт/с) телеметрії в моменти, коли не очікується сигнальна інформація."
   },
   {
      "question":"5. H-канал служить для",
      "answer":"призначені для передавання користувальницької інформації з більш високими швидкостями"
   },
   {
      "question":"6. Mainframe в структурі типової СПД відноситься до",
      "answer":"КОСПД міжнародний термін - DTE (Data Terminal Equipment"
   },
   {
      "question":"7. Абсолютною шириною смуги сигналу називається",
      "answer":"ширина його спектра."
   },
   {
      "question":"8. Алгоритм DMТ",
      "answer":"На відміну від них, даний алгоритм використовує не одну частоту, а групу несучих частот. При використанні цього алгоритму модуляції весь розрахунковий діапазон частот лінії поділяється на декілька ділянок шириною по 4,3125 кГц. Кожна з цих ділянок використовується для організації незалежного каналу передавання даних"
   },
   {
      "question":"9. Алгоритм модуляції OFDM є спрощеним варіантом алгоритму",
      "answer":"DMT"
   },
   {
      "question":"10. Алгоритм стиснення даних LZ77 створений в",
      "answer":"1977 році."
   },
   {
      "question":"11. Амплітудна модуляція більш завадостійка чим фазова",
      "answer":"Ні"
   },
   {
      "question":"12. Апаратура каналу прередавання даних СПД в іноземній літературі позначається абреваіатурою",
      "answer":"DCE (Data Communications Equipment)"
   },
   {
      "question":"13.Багатоканальні системи з часовим розділенням канальних сигналів широко застосовують для передавання",
      "answer":"як аналогової, так і дискретної інформації."
   },
   {
      "question":"14. ISDN В-канал може служити для",
      "answer":"Він може служити для передавання цифрових даних, оцифрованого звуку чи змішаного низькошвидкісного трафіка, що містить цифрові дані та оцифрований звук, який закодований з частотою меншою 64 Кбіт/с."
   },
   {
      "question":"15. ISDN основним користувальницьким каналом є канал",
      "answer":"В-канал"
   },
   {
      "question":"16. В загальному випадку синусоїдальну хвилю можна задати",
      "answer":"хвилю можна задати трьома параметрами, максимальною амплітудою  , частотою   і фазою."
   },
   {
      "question":"17. В основі мтематичного опису сигналів лежать методи",
      "answer":"теорії ймовірностей, теорії випадкових функцій і математичної статистики"
   },
   {
      "question":"18. В чому полягає головна відміність між блоковим та згортковим  кодуванням",
      "answer":"Блокове кодування зручно використовувати в тих випадках, коли вихідні дані по своїй природі уже згруповані в які-небудь блоки чи масиви.  При передаванні по радіоканалах частіше використовується згорткове кодування, що краще пристосоване до побітового передавання даних."
   },
   {
      "question":"19. Вибір способу представлення дискретної інформації у вигляді сигналів , що подаються в лінії зв’язку називається",
      "answer":"фізичним чи лінійним кодуванням."
   },
   {
      "question":"20. Від обраного способу кодування",
      "answer":"залежить спектр сигналів і, відповідно, пропускна здатність лінії"
   },
   {
      "question":"21. Відношення сигнал/шумдля квантового шуму дано в роботі Gibson J. “Principles of Digital and Analog”",
      "answer":"Communications” (USA, 1993 р.) і складає."
   },
   {
      "question":"22. Відображення повідомлення забезпечується",
      "answer":"зміною якої-небудь фізичної величини, що характеризує процес"
   },
   {
      "question":"23. Детерміновані процеси, як правило використовуються як моделі",
      "answer":"вузькосмугових сигналів-носіїв і перешкод, а випадкові процеси – як моделі корисних сигналів, шумоподібних, вузькосмугових і широкосмугових сигналів-носіїв і перешкод, модульованих сигналів."
   },
   {
      "question":"24. Дискретний сигнал",
      "answer":"характеризується кінцевим числом значень інформаційного параметра"
   },
   {
      "question":"25. Для деяких сигналів, що добре описуються аналітично. Для деяких сигналів, що добре описуються аналітично (наприклад, для  послідовності прямокутних імпульсів однакової тривалості й амплітуди), спектр легко обчислюється на підставі формул",
      "answer":"Фур\u0027є."
   },
   {
      "question":"26. Для ефективного розділення канальних сигналів необхідно, щоб виконувалися дві умови",
      "answer":"частоти сигналів-носіїв повинні бути різні і рознесені на інтервал, який більший чи дорівнює ширині спектра модульованого сигналу; відхилення реальних характеристик смугових фільтрів від ідеальних не повинно впливати на якість розділення, тому необхідно залишати захисний інтервал частот між каналами."
   },
   {
      "question":"27. Для направляємого середовища зменшення інтенсивності у загальному випадку",
      "answer":"логарифмічне і, як правило, виражається як постійне число децибелів на одиницю відстані."
   },
   {
      "question":"28. Для передавання неперервних повідомлень дискретними сигналами необхідно здійснити",
      "answer":"квантування повідомлень, тобто перехід від неперервного ряду значень функції х(t) до кінцевого ряду значень."
   },
   {
      "question":"29. Для сигналу в якого спектр лежить в області частот від  до ширина смуги дорівнює",
      "answer":"."
   },
   {
      "question":"30. Для сигналу з обмеженим діапазоном частот швидкість наближається до максимальної біля",
      "answer":"центральної частоти діапазону і знижується в міру видалення від неї в обидва боки."
   },
   {
      "question":"31. Друге покоління ISDN було орієнтовано",
      "answer":"на комутацію пакетів"
   },
   {
      "question":"32. Друге покоління ISDN називають",
      "answer":"широкосмуговим ."
   },
   {
      "question":"33. З теорії гармонійного аналізу відомо, що будь-який періодичний процес можна представити у вигляді",
      "answer":"суми синусоїдальних коливань різних частот і різних амплітуд."
   },
   {
      "question":"34. За своїм походженням завади діляться на",
      "answer":"атмосферні, промислові і завади, пов’язані з випадковими змінами параметрів каналу зв\u0027язку"
   },
   {
      "question":"35. Зв\u0027язок з розширеним спектром (з використанням методу перескоку частоти) був винайдений в",
      "answer":"1940 р."
   },
   {
      "question":"36. Зв\u0027язок між смугою пропускання каналу і його максимально можливою пропускною здатністю, що не залежить від прийнятого способу фізичного кодування, встановлює вираз",
      "answer":", де С – максимальна пропускна здатність лінії в бітах за секунду, F – ширина смуги пропуску лінії в герцах, Рс – потужність сигналу, Рш – потужність шуму."
   },
   {
      "question":"37. Зв\u0027язок між смугою пропускання каналу і його максимально можливою пропускною здатністю, що не залежить від прийнятого способу фізичного кодування, встановив",
      "answer":"Клод Шеннон"
   },
   {
      "question":"38. з’єднання між апаратурою каналу передавання даних і каналом передавання даних здійснюється через інтерфейс",
      "answer":"С1"
   },
   {
      "question":"39. з’єднання між кінцевим обладнанням СПД і апаратурою каналу передавання даних здійснюється через",
      "answer":"інтерфес С2"
   },
   {
      "question":"40. Імпульсно-кодова модуляція спирається на теорему про",
      "answer":"дискретне представлення, що формулюється в такий спосіб. Якщо із сигналу f(t) через постійні проміжки часу здійснюється вибірка, причому швидкість вибірки більша, ніж подвоєна максимальна частота сигналу, то такі вибірки містять всю інформацію про вихідний сигнал. Відновити функцію f(t) з вибірок можна за допомогою фільтра низьких частот."
   },
   {
      "question":"41. Інтермодуляційні завади створюються при наявності в приймачі, передавачі чи проміжній передавальній системі",
      "answer":"якоїсь нелінійності."
   },
   {
      "question":"42. Кабельні лінії зв’язку являють собою",
      "answer":"досить складну конструкцію. Кабель складається з провідників, укладених у кілька шарів ізоляції, електричної, електромагнітної, механічної, а також, можливо, кліматичної. Крім того, кабель може бути оснащений роз\u0027ємами, що дозволяють швидко виконувати приєднання до нього різного устаткування."
   },
   {
      "question":"43. Кабельною цифровою лінією",
      "answer":"є бітовим трактом з цифровим (імпульсним) сигналом на вході і виході лінії."
   },
   {
      "question":"44. Кількість змін інформаційного параметра несучого періодичного сигналу в секунду виміряється у",
      "answer":"бодах"
   },
   {
      "question":"45. Кінцеве обладнання СПД",
      "answer":"це узагальнене поняття, яке використовується для опису кінцевого приладу чи його частини (може бути джерелом інформації, її одержувачем чи тим і іншим одночасно)."
   },
   {
      "question":"46. Кінцеве обладнання СПД в іноземній літературі позначається абреваіатурою",
      "answer":"DТE (Data Communications Equipment)"
   },
   {
      "question":"47. Кожен додатковий біт, використовуваний для оцифровування, збільшує відношення сигнал/шум приблизно в",
      "answer":"4 рази."
   },
   {
      "question":"48. Кожен додатковий біт, використовуваний для оцифровування, збільшує відношення сигнал/шум приблизно на",
      "answer":"6 дБ."
   },
   {
      "question":"49. Крок квантування вибирається виходячи з",
      "answer":"допустимої похибки вимірювання   і потужності шуму в каналі зв\u0027язку. Якщо допустима похибка задана, то . ."
   },
   {
      "question":"50. Крок квантування повинен бути",
      "answer":"в декілька разів більше від можливого пікового значення завад."
   },
   {
      "question":"51. Метою математичного опису сигналів є",
      "answer":"розробка математичних моделей сигналів необхідних для аналізу, синтезу і оптимізації об\u0027єктів інформаційної техніки."
   },
   {
      "question":"52. Модем в структурі типової схеми систем передавання даних відноситься до",
      "answer":"апаратур каналу передавання даних СПД."
   },
   {
      "question":"53. Модеми, розроблені в 60 – 70-х роках",
      "answer":"хз"
   },
   {
      "question":"54. На якій модуляції базується алгоритм CAP",
      "answer":"Алгоритм амплітудно-фазової модуляції з придушенням несучої carrier"
   },
   {
      "question":"55. На якому рівні моделі ISO/OSI реалізований протокол LAPB в ISDN",
      "answer":"Канальний"
   },
   {
      "question":"56. На якому рівні моделі ISO/OSI реалізований протокол LAPD в ISDN",
      "answer":"Канальний"
   },
   {
      "question":"57. На якому рівні моделі ISO/OSI реалізований протокол X.25 в ISDN",
      "answer":"Мереживий"
   },
   {
      "question":"58. На якому рівні моделі ISO/OSI реалізовані інтерфейси L430 та L431 в ISDN",
      "answer":"Фізичний"
   },
   {
      "question":"59. Найбільш значні спотворення",
      "answer":"• згасання й амплітудне спотворення; • спотворення від запізнювання; • завади."
   },
   {
      "question":"60. Найбільш простий періодичний сигнал",
      "answer":"синусоїдальна хвиля."
   },
   {
      "question":"61. Найпростішою формою модуляції є",
      "answer":"амплітудна"
   },
   {
      "question":"62. Недоліками алгоритма 2B1Q є",
      "answer":"дуже низька спектральна ефективність і, відповідно, є обмежені властивості для передавання інформаційного сигнала  на зашумлених лініях з великим затуханням."
   },
   {
      "question":"63. Недоліками алгоритма DMT є",
      "answer":"його громіздкість і недостатню технологічність. Алгоритм DMT є найбільш складним для апаратної реалізації серед всіх алгоритмів, що у даний час використовуються для формування лінійного коду пристроїв DSL."
   },
   {
      "question":"64. Неперервний сигнал",
      "answer":"як правило,  називають аналоговим."
   },
   {
      "question":"65. Неперіодичні сигнали можна представити у вигляді",
      "answer":"інтеграла синусоїдальних сигналів з неперервним спектром частот."
   },
   {
      "question":"66. Обладнання лінії зв’язку",
      "answer":"модем, мультиплексор, демультиплексор, підсилювач, комутатор."
   },
   {
      "question":"67. Основна частина сигналу зосереджена біля",
      "answer":"власної чи частоти швидкості передавання сигналу."
   },
   {
      "question":"68. . Основним фактором, що стримує ріст числа одночасно працюючих абонентів при кодовому розділені канальних",
      "answer":"є збільшення рівня взаємних перешкод."
   },
   {
      "question":"69. Основні недоліки систем з часовим розділенням канальних сигналів",
      "answer":"необхідність забезпечення синхронної роботи комутаторів каналів передавача і приймача, відносна складність виготовлення апаратури на велику кількість каналів, ріст смуги займаних частот зі збільшенням числа каналів, що обумовлено зменшенням тривалості переданих канальних імпульсів."
   },
   {
      "question":"70. Основні недоліки частотного розділення канальних сигналів",
      "answer":"неминуче розширення смуги використовуваних системою частот при збільшенні числа каналів, відносно низька ефективність використання смуги частот лінії через втрати на «відфільтровування», громіздкість і висока вартість апаратури, обумовлені в основному великою кількістю фільтрів."
   },
   {
      "question":"71. Основні переваги частотного розділення канальних сигналів",
      "answer":"простота технічної реалізації, висока завадостійкість, можливість організації будь-якого числа каналів, а також наступного його збільшення, якщо дозволяє загальна смуга пропуску лінії зв\u0027язку."
   },
   {
      "question":"72. Основною областю використання алгоритму CAP є",
      "answer":"для побудови ефективних і економічних приймально-передавальних пристроїв широкого спектра технологій DSL - від SDSL до VDSL."
   },
   {
      "question":"73. Основною областю використання алгоритма лінійного кодування 2B1Q є",
      "answer":"ISDN."
   },
   {
      "question":"74. Пасивні завади",
      "answer":"інтермодуляційні"
   },
   {
      "question":"75. Переваги систем з кодовим розділенням ліній зв’язку",
      "answer":"висока ефективність і надійність зв\u0027язку, більш низька вартість апаратури в порівнянні із системами частотного розділення і висока завадостійкість."
   },
   {
      "question":"76. Перевагою алгоритма 2B1Q",
      "answer":"простота та економічність (дешевизна) його реалізації."
   },
   {
      "question":"77. Перевагою алгоритма CAP",
      "answer":"відносна простота реалізації і висока енергетична ефективність формованого сигналу."
   },
   {
      "question":"78. Перевагою алгоритма DMT",
      "answer":"можливість оперативної і точної адаптації приймально-передавальних пристроїв до характеристик лінії і практично повсюдне визнання цього алгоритму стандартизуючими організаціями"
   },
   {
      "question":"79. Персональний комп’ютер в структурі типової системи передавання даних відноситься до",
      "answer":"DTE, КОСПД."
   },
   {
      "question":"80. Перше покоління ISDN було орінтовано на комутацію",
      "answer":"каналів"
   },
   {
      "question":"81. Перше покоління ISDN називають",
      "answer":"вузькосмуговим."
   },
   {
      "question":"82. Практично  всі  словникові  методи  кодування  належать",
      "answer":"родині алгоритмів з найкової роботи двох ізраїльських учених - Зіва і Лемпела, яка була опублікована в 1977 році."
   },
   {
      "question":"83. При використаннф алгоритму DMT в каналі передавання даних дані передаються за допомогою",
      "answer":"групи несучих частот"
   },
   {
      "question":"84. При використанні сигнально-кодових конструкцій у СПД в процесі демодуляції здійснюється декодування",
      "answer":"прийнятого сигналу по алгоритму Вітербі"
   },
   {
      "question":"85. При викристанні якого методц кожен біт вихідного сигналу представляється декількома бітами переданого сигналу, який називається роздробленим кодом",
      "answer":"Метод прямої послідовності."
   },
   {
      "question":"86. При досить типовому вихідному відношенні потужності сигналу до потужності шуму в 100 разів підвищення потужності передавача в 2 рази дасть збільшення пропускної здатності лінії на",
      "answer":"15% ."
   },
   {
      "question":"87. При квантуванні  неперервних сигналів враховують теорему",
      "answer":"Котельникова"
   },
   {
      "question":"88. При кодовому розділені канальних сигналів зв’язок між будь-якими двома абонентами може здійснюватися",
      "answer":"в будь-який час і поза залежністю від використання лінії в цей час іншими абонентами."
   },
   {
      "question":"89. При кодовому розділені канальних сигналів",
      "answer":"кожному абоненту (станції) привласнюється адреса, що представляє визначену кодову послідовність, яка відома всім абонентам системи."
   },
   {
      "question":"90. При кодуванні нерівномірних повідомлень рівномірні коди мають",
      "answer":"мають велику надмірність"
   },
   {
      "question":"91. При модуляції QAM змінюється",
      "answer":"як фаза, так і амплітуда сигналу, що дозволяє збільшити кількість кодованих біт і при цьому істотно підвищити завадостійкість."
   },
   {
      "question":"92. При передаванні через передавальне середовище сигналів різних частот  і  можуть виникнути",
      "answer":"інтермодуляційні завади"
   },
   {
      "question":"93. При фазовій модуляції фаза пропорційна",
      "answer":"модулюючому сигналу"
   },
   {
      "question":"94. При часовому розділенні канальних сигналів частоту F повторення канальних сигналів (величина, зворотна періоду підключеннядо лінії одного каналу) вибирають відповідно до теореми",
      "answer":"Котельникова"
   },
   {
      "question":"95. При частотній модуляції модулюючому сигналу пропорційна",
      "answer":"похідна фази"
   },
   {
      "question":"96. При частотному розділенні канальних сигналів виділення канальних сигналів у приймачі виробляється за",
      "answer":"допомогою смугових фільтрів"
   },
   {
      "question":"97. При якому передаванні даних в кожен момент часу може передавати тільки одна з двох станцій двоточкової лінії",
      "answer":"напівдуплексному."
   },
   {
      "question":"98. При якому передаванні даних дві станції можуть одночасно посилати й одержувати дані одна від другої",
      "answer":"дуплексному."
   },
   {
      "question":"99. Провідні лінії зв’язку являють собою",
      "answer":"екранований провід без якої-небудь ізоляції чи обмотки, який прокладають між стовпами та який висить в повітрі."
   },
   {
      "question":"100. Проміжне обладнання лінії зв’язку",
      "answer":"підстлювач, мультиплексор, демультиплексор, комутатор."
   },
   {
      "question":"101. Пропускна здатність вимірюється в",
      "answer":"бітах у секунду (біт/с"
   },
   {
      "question":"102. Пропускна здатність каналу зв’язку характеризує",
      "answer":"максимально можливу швидкість передавання даних по каналу зв\u0027язку."
   },
   {
      "question":"103. Пропускна здатність лінії зв\u0027язку залежить від",
      "answer":"її характеристик, таких як амплітудно-частотна характеристика, але і від спектра сигналів, що передаються"
   },
   {
      "question":"104. Рівень теплового шуму для ширини смуги 1 Гц будь-якого пристрою чи провідника визначається в такий спосіб",
      "answer":"(Вт/Гц),"
   },
   {
      "question":"105. Середовище передавання даних “вита пара” є",
      "answer":"кабелі на основі скручених пар мідних проводів"
   },
   {
      "question":"106. Середовище передавання даних “оптоволкно” є",
      "answer":"волоконно-оптичний кабель (optical fiber) складається з тонких (5-60 мікрон) волокон, по яких поширюються світлові сигнали."
   },
   {
      "question":"107. Середовище передавання даних “супутникові канали” є",
      "answer":"створюються за допомогою передавача і приймача радіохвиль."
   },
   {
      "question":"108. Сигнал це",
      "answer":"це фізичний процес, що відображає передане повідомлення."
   },
   {
      "question":"109. Сигнал",
      "answer":"Є періодичним"
   },
   {
      "question":"110. Сигнально-кодові конструкції базуються на модуляції",
      "answer":"трелліс-модуляцією."
   },
   {
      "question":"111. Системи з часовим розділенням канальних сигналів широко",
      "answer":"застосовують для передавання"
   },
   {
      "question":"112. Скільки бітів передається за один такт при використанні коду 2B1Q",
      "answer":"2"
   },
   {
      "question":"113. Скільки загальних однакових властивостей є у різних схем кодування",
      "answer":"2"
   },
   {
      "question":"114. Скільки існує великих класів коригуючих кодів",
      "answer":"2"
   },
   {
      "question":"115. Скільки методів множинного доступу Вам відомі",
      "answer":"3"
   },
   {
      "question":"116. Скільки методів розширення спектру відомі в даний час",
      "answer":"2"
   },
   {
      "question":"117. Скільки основних видів імпульсної модуляції можна утворити, якщо носієм інформації є періодична послідовність",
      "answer":"4"
   },
   {
      "question":"118. Скільки послуг надає B-ISDN",
      "answer":"2"
   },
   {
      "question":"119. Скільки станів має сигнал, що передається за один такт при використанні коду 2B1Q",
      "answer":"4"
   },
   {
      "question":"120. Скільки умов повинні виконуватися для ефективного розділення канальних сигналів при частотному розділені",
      "answer":"2"
   },
   {
      "question":"121. спектральним розкладом вихідного сигналу називають",
      "answer":"набір усіх гармонік"
   },
   {
      "question":"122. Спектром сигналу називається",
      "answer":"діапазон частот, що складають даний сигнал"
   },
   {
      "question":"123. Спотворення від запізнювання особливо шкідливе",
      "answer":"для цифрових даних"
   },
   {
      "question":"124. Спотворення, викликане запізнюванням, являє собою явище, властиве передавальному середовищу, що",
      "answer":"направляється."
   },
   {
      "question":"125. Спочатку розроблювачі зупинили свій вибір модуляції",
      "answer":"фазовій, оскільки її завадостійкість виявилася вище інших типів модуляції."
   },
   {
      "question":"126. Структуруа каналу ISDN при базовій послузі (1,544) використовується в",
      "answer":"США, Канаді і Японії"
   },
   {
      "question":"127. Структуруа каналу ISDN при базовій послузі (1,544)",
      "answer":"структура каналів для швидкості 1,544 Мбіт/с містить 23 В-канали й один D-канал на 64 Кбіт/с,"
   },
   {
      "question":"128. Структуруа каналу ISDN при базовій послузі (2,048) використовується в",
      "answer":"Європі"
   },
   {
      "question":"129. Структуруа каналу ISDN при базовій послузі(2,048)",
      "answer":"30 В-каналів і один D-канал на 64 Кбіт/с."
   },
   {
      "question":"130. Структуруа каналу ISDN при номінальній послузі",
      "answer":"структура складається з двох дуплексних В-каналів по 64 Кбіт/с і дуплексного D-каналу на 16 Кбіт/с."
   },
   {
      "question":"131. Структура передавання будь-якої цфрової магістралі ISDN складена з каналів наступних типів",
      "answer":"B D H"
   },
   {
      "question":"132. Теорема Шеннона для каналу з завадами стверджує",
      "answer":"де – максимальна швидкість передавання; –  співвідношення сигнал-шум у каналі; – ширина пропускної смуги каналу в Гц."
   },
   {
      "question":"132. Технічною основою другого покоління ISDN",
      "answer":"технологія відома як ретрансляція комірок."
   },
   {
      "question":"133. Технічною основою першого покоління ISDN",
      "answer":"технологія ретрансляції кадрів (Frame Relay)"
   },
   {
      "question":"134. У залежності від середовища передавання дані лінії зв\u0027язку розділяються на",
      "answer":"провідні, кабельні, радіоканали наземного і підземного зв’язку."
   },
   {
      "question":"135. У нерівномірних кодах тривалість кодових комбінацій погоджена",
      "answer":"з ймовірністю появи різних літер."
   },
   {
      "question":"136. У систем з кодовим розділенням канальних сигналів чи в систем з частотним розділенням канальних сигналів",
      "answer":"хз"
   },
   {
      "question":"137. У систем з часовим розділенням канальних сигналів чи в систем з частотним розділенням канальних сигналів",
      "answer":"хз"
   },
   {
      "question":"138. фазова модуляція вимагає більшої смуги чим амплітудна",
      "answer":"Фазова"
   },
   {
      "question":"139. Фазова модуляція є окремим випадком",
      "answer":"кутової модуляції"
   },
   {
      "question":"140. Хто винайшов зв\u0027язок з розширеним спектром (з використанням методу перескоку частоти)",
      "answer":"Хеді Ламар."
   },
   {
      "question":"141. Часове розділення може застосовуватися тільки при",
      "answer":"імпульсній модуляції, коли між імпульсами одного каналу утворюється великий інтервал часу, у якому можна розмістити імпульси інших каналів."
   },
   {
      "question":"142. Частотна модуляція більш завадостійка ніж амплітудна",
      "answer":"Так"
   },
   {
      "question":"143. Частотна модуляція вимагає більшої смуги чим амплітудна",
      "answer":"Так"
   },
   {
      "question":"144. Частотна модуляція є окремим випалком",
      "answer":"кутової модуляції"
   },
   {
      "question":"145. Частотна модуляція застосовується в високошвидкісних чи низькошвидкісних протоколах",
      "answer":"низькршвидкісних."
   },
   {
      "question":"146. Через скільки основних компонентів може бути описана СПД",
      "answer":"3"
   },
   {
      "question":"147. Через які основні компоненти може бути описана СПД",
      "answer":"Передавач, лінія передавання даних, приймач."
   },
   {
      "question":"148. Чи можна по формі синусоїдального сигналу відрізнити де з частотною а де з фазовою",
      "answer":"Так"
   },
   {
      "question":"149. Швидкість передавання даних по D-каналу магістралі ISDN",
      "answer":"16 чи 64 Кбіт/с;"
   },
   {
      "question":"150. Швидкість передавання даних по H-каналу магістралі ISDN",
      "answer":"384 , 1536  і 1920 Кбіт/с"
   },
   {
      "question":"151. Швидкість передавання даних по B-каналу магістралі ISDN",
      "answer":"64 Кбіт/с;"
   },
   {
      "question":"152. Щоб передати цифрову інформацію по аналогових каналах зв\u0027язку, її спочатку потрібно",
      "answer":"закодувати"
   },
   {
      "question":"153. Щоб передати цифрову інформацію по аналогових каналах зв\u0027язку, як правило використовують модуляцію",
      "answer":"амплітудну (АМ), частотну (ЧМ) чи фазову (ФМ)"
   },
   {
      "question":"154. Яка максимально можлива реальна кількість комбінацій сигналу при QAM-модуляції з кодами Треллісв",
      "answer":"6, 7 чи 8"
   },
   {
      "question":"155. Яка максимально можлива теоретична кількість комбінацій сигналу при QAM-модуляції",
      "answer":"32"
   },
   {
      "question":"156. Яка модуляція використовується в асиметричних цифрових абонетських лініях",
      "answer":"Квадратурна амплітудна модуляція"
   },
   {
      "question":"157. Яка напруга відповідає передачі парі біт 00 за допомогою коду 2B1Q",
      "answer":"-2,5 В"
   },
   {
      "question":"158. Яка напруга відповідає передачі парі біт 01 за допомогою коду 2B1Q",
      "answer":"-0,833"
   },
   {
      "question":"159. Яка напруга відповідає передачі парі біт 10 за допомогою коду 2B1Q",
      "answer":"+2,5"
   },
   {
      "question":"160. Яка напруга відповідає передачі парі біт 11 за допомогою коду 2B1Q",
      "answer":"+0,833"
   },
   {
      "question":"161. Яке завадостійке кодування частіше використовується при передаванні по радіоканалах",
      "answer":"згорткове"
   },
   {
      "question":"162. Яке завадостійке кодування частіше використовується при побітовому передаванні даних",
      "answer":"згорткове"
   },
   {
      "question":"163. Яке кодування відбувається раніше фізичне чи логічне",
      "answer":"логічне"
   },
   {
      "question":"164. Який метод розширення спектру вам Відомі",
      "answer":"Метод перескоку часто, метод прямої послідовності."
   },
   {
      "question":"165. Яких видів можна встановлюват підключенн через канал B-ISDN",
      "answer":"з комутацією каналів,з пакетною комутацією, кадровий режим, напівпостійне з’єднання."
   },
   {
      "question":"166. Які класи коригуючих кодів вам відомі",
      "answer":"Блокові та згорткові."
   },
   {
      "question":"167. Які методи множинного доступу вам відомі",
      "answer":"Частотне, часове і кодове розділення."
   },
   {
      "question":"168. Які основні види імпульсної модуляції можна утворити , якщо носієм є періодична послідовність",
      "answer":"амплітудно-імпульсну (АІМ), широтно-імпульсну (ШІМ), фазо-імпульсну (ФІМ) і частотно-імпульсну (ЧІМ)."
   },
   {
      "question":"169. Які рівні моделі ISO/OSI реалізовані в ISDN",
      "answer":"Фізичний, канальний, мережевий, транспортний, сеансовий"
   },
   {
      "question":"170. Яку модуляцію використовують для передавання даних радіоканалами в діапазоеі коротких, середніх, довгих",
      "answer":"Амплітудну"
   },
   {
      "question":"171. Яку модуляцію використовують для передавання даних радіоканалами в діапазоні ультракоротких",
      "answer":"Частотна."
   },
   {
      "question":"172. Яку послугу не надає ISDN",
      "answer":"хз"
   },
   {
      "question":"173.Яку частоту придушують при використанны алгоритма CAP",
      "answer":"несучу"
   },
   {
      "question":"174. Якщо всі частотні складові сигналу кратні одній частоті, то як вона називається",
      "answer":"остання називається власною частотою."
   },
   {
      "question":"175. Якщо мовна інформація обмежена частотами,що лежать нижче 2000Гц, то скільки вибірок у секунду буде доситьдля повного відображення мовного сигналу",
      "answer":"4000"
   },
   {
      "question":"176. Якщо мовна інформація обмежена частотами,що лежать нижче 4000Гц, то скільки вибірок у секунду буде доситьдля повного відображення мовного сигналу",
      "answer":"8000"
   },
   {
      "question":"177. Якщо мовна інформація обмежена частотами,що лежать нижче 8000Гц, то скільки вибірок у секунду буде досить для повного відображення мовного сигналу",
      "answer":"16000"
   },
   {
      "question":"178. Якщо не виконується умовa s(t+T) \u003d s(t)",
      "answer":"аперіодичний."
   },
   {
      "question":"179. Якщо питання згасання розглядається інженером-зв\u0027язківцем, то до уваги приймаються три наступні моменти",
      "answer":"По-перше, прийнятий сигнал повинен мати інтенсивність, яка достатня для його виявлення електронною схемою приймача. По-друге, щоб даний сигнал був прийнятий без помилок, його рівень повинен підтримуватися значно вище рівня перешкод. І по-третє, інтенсивність згасання росте з частотою."
   },
   {
      "question":"180. Якщо сигнал змінюється так, що можна розрізнити тільки два його стани, то будь-яка його зміна буде відповідати",
      "answer":"найменшій одиниці інформації – біту"
   }
];

var i = 0;
var questionsIndex = new Array(24); 

var numberOfRight = 0;

function setUp() {
	generateRandomQuestions();
	loadQuestion();
}

function generateRandomQuestions() {
	for (var i = 0; i < questionsIndex.length; i++) {
		questionsIndex[i] = getRandom(1, 179);
	}
}

function loadQuestion() {
	var currentQuestion = questionsIndex[i];
	setNewQuestion(currentQuestion);
	setNewAnswers(currentQuestion);
}

function loadNextQuestion() {
	i++;
	loadQuestion();
}

function handleNext() {
	var selected = getSelected();
	if(checkIfTrue(questionsIndex[i], selected)) {
		numberOfRight++;
	}

	if (!isOutOfQuestions()) {
		loadNextQuestion();
	} else {
		document.getElementById('stat').innerText= numberOfRight+'/'+questionsIndex.length;
		var next = document.getElementById('next');
		next.onclick = refreshPage;
		next.innerText = 'Refresh';
	}
}

function checkIfTrue(currentQuestion, value) {
	return questions[currentQuestion].answer === value;
}

function getSelected() {
	return document.querySelector('.answer:checked').value;
}

function isOutOfQuestions() {
	return i >= 1;
}

function refreshPage(){
    window.location.reload();
} 

function setNewAnswers(i) {
	var a = questions[i].answer;
	var arr = randomThreeAnswers(i);
	arr.push(a);
	
	var answers = document.getElementById('answers');
	answers.innerText = '';
	for (var i = 0; i < arr.length; i++) {
		var li = document.createElement('li');
		var input = document.createElement('input');
		input.value = arr[i];
		input.className = 'answer';
		input.type = 'checkbox';
		var text = document.createTextNode(arr[i]);
		li.appendChild(input);
		li.appendChild(text);
		answers.appendChild(li);
	}
}

function setNewQuestion(i) {
	var s = questions[i].question;
 	document.getElementById('question').innerText=s;
}

function getQuestion(n) {
	return questionp[n];
}

function getRandom(min, max) {
   min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomAnswer(except) {
	var i = getRandom(1, 160);
	if (i != except) {
		return questions[i].answer;		
	} else {
		return getRandomAnswer(except);
	}
}

function randomThreeAnswers(except) {
	var arr = ['a', 'b', 'c'];
	for (var i =  0; i < 3; i++) {
		arr[i] = getRandomAnswer();
	}
	return arr;
}
