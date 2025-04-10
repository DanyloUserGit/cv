import { useState } from "react";
import { IconChevron } from "./svg/IconChevron";
import { IconFile } from "./svg/IconFile";
import { IconTelegram } from "./svg/IconTelegram";
import { IconGithub } from "./svg/IconGithub";
import { IconGmail } from "./svg/IconGmail";

function App() {
  const [firstProject, setFirstProject] = useState(false);
  const [secondProject, setSecondProject] = useState(false);
  const [thirdProject, setThirdProject] = useState(false);
  const [_4Project, set_4Project] = useState(false);

  return (
    <div className="page">
        <div className="container">
          <div className="container__header">
            <h1>Мануляк Данило</h1>
            <h2>Fullstack developer</h2>
            <span>Пишу продуманий і підтримуваний код. Розробляю API, інтеграції та фронт, який не зламається завтра.</span>
          </div>
          <div className="container__body">
            <div className="container__body-skills">
              <h3>Hard Skills</h3>
              <span>Backend</span>
              <ul className="container__body-skills-list">
                <li>Node.js</li>
                <li>NestJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
              <span>Frontend</span>
              <ul className="container__body-skills-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Redux</li>
                <li>Scss</li>
                <li>HTML/Css</li>
              </ul>
              <span>Testing</span>
              <ul className="container__body-skills-list">
                <li>K6</li>
                <li>Vite</li>
                <li>Jest</li>
              </ul>
              <h3>Softskills</h3>
              <ul className="container__body-skills-list">
                <li>Комунікація</li>
                <li>Робота в команді</li>
                <li>Самоорганізація</li>
                <li>Тайм-менеджмент</li>
                <li>Адаптивність</li>
              </ul>
            </div>
            <div className="container__body-projects">
              <h3>Останні проекти</h3>
              <div className={!firstProject ? "container__body-projects-item-handler" : "container__body-projects-item-handler hidden"}
                onClick={()=>setFirstProject(!firstProject)}
              >
                <IconChevron />
                <span>Бекенд для генерації pdf-файлу з астрологічними даними ( <a href="https://github.com/DanyloUserGit/astrology-server">astrology-server</a> )</span>
              </div>
              <div className={firstProject ? "container__body-projects-item active" : "container__body-projects-item"}>
                <p className="container__body-projects-item-text">
                  <a href="https://drive.google.com/file/d/1pY0Jh4mdmTvic6ATz1QNAzBCOZaHtNUF/view?usp=sharing"><IconFile /> <span>Приклад згенерованого pdf-файлу</span></a>
                  <h6>
                  Розробка бекенду для астрологічного PDF-сервісу (NestJS, TypeScript, REST API, Puppeteer, PayPal)
У рамках проєкту створив повноцінний бекенд для онлайн-сервісу, який дозволяє користувачам генерувати індивідуальні астрологічні звіти у вигляді красиво оформлених PDF-файлів. Основний акцент було зроблено на гнучкість, кастомізацію та зручність інтеграції з зовнішніми джерелами астрологічних даних.

Головна функція сервісу — генерація синастричної карти (сумісність між двома людьми на основі натальних карт), а також окремих натальних карт для кожного користувача, включно з детальними описами знаків зодіаку, розташуванням планет та іншими аспектами.

PDF-файли генеруються за допомогою Puppeteer — на основі динамічно створених HTML/CSS шаблонів, що дозволяє досягти максимальної гнучкості в дизайні та точного відтворення стилів. Дизайн орієнтований на формат друкованої брошури: типографіка, кольори, SVG-іконки знаків, структуровані блоки тексту.

Реалізовано окремі REST-ендпоінти:

для генерації кастомної натальної карти на основі даних, отриманих з Astrologger API;

для отримання інформації про конкретний знак зодіаку, включаючи SVG-іконку та опис.

Для монетизації інтегрував платіжну систему PayPal, що дозволяє здійснювати безпечні транзакції безпосередньо через вебінтерфейс.

Архітектура проєкту побудована на NestJS, із чітким поділом логіки за модулями, що забезпечує зручність підтримки й масштабування (наприклад, додавання нових типів карт або звітів).

Забезпечив повноцінну обробку вхідних параметрів, валідацію даних, захист ендпоінтів, обробку помилок, а також стабільну генерацію PDF навіть у разі нетипових сценаріїв (наприклад, рідкісні або неповні астрологічні конфігурації).

Сервіс орієнтований як на ентузіастів астрології, так і на практикуючих спеціалістів, які хочуть швидко отримувати кастомізовані аналітичні звіти у професійному форматі.
                  </h6>
                </p>
              </div>
              <div className={!secondProject ? "container__body-projects-item-handler" : "container__body-projects-item-handler hidden"}
                onClick={()=>setSecondProject(!secondProject)}
              >
                  <IconChevron />
                  <span>Discord бот-парсер для купівлі товарів на площадках ( <a href="https://github.com/DanyloUserGit/discord-buy-bot">discord-buy-bot</a> ) </span>
              </div>
              <div className={secondProject ? "container__body-projects-item active" : "container__body-projects-item"}>
                <p className="container__body-projects-item-text">
                  <h6>
                  Discord-бот для парсингу товарів з маркетплейсів (Node.js, TypeScript, Puppeteer, Discord.js, Winston)
Розробив високопродуктивного Discord-бота для моніторингу та оперативного сповіщення про нові товари з популярних онлайн-платформ — Vinted (підтримка регіонів PL, GE, EN), OLX та Shafa. Проєкт орієнтований на реселерів та користувачів, які хочуть першими отримувати інформацію про нові цікаві пропозиції.

Основна задача — парсинг нових товарів у режимі майже реального часу. В середньому, повна обробка нової карточки товару (від появи на сайті до доставки в Discord) займає 5–6 секунд.

Парсинг реалізований через Puppeteer, що дозволяє емітувати поведінку реального користувача та обійти обмеження API/бот-захисту на сайтах. Забезпечено підтримку асинхронної обробки та ефективну чергу запитів.

Зібрані товари форматуються в структуровані картки з фото, ціною, описом та посиланням, які автоматично надсилаються у відповідні Discord-канали через discord.js.

Для зручності користувачів реалізовано групування карток по категоріях або брендах, а також логіку фільтрації/відсіву небажаних товарів.

Проєкт побудований на Node.js + TypeScript з чітким розділенням логіки по модулях (парсинг, форматування, відправка, логування), що значно спрощує масштабування і підтримку.

Реалізоване розширене логування через Winston: логуються всі ключові події — старт парсингу, помилки, затримки, повідомлення в Discord — з подальшою можливістю моніторингу в продакшн-середовищі.

Рішення орієнтоване на автоматизацію пошуку вигідних пропозицій, економію часу користувачів та підвищення шансів бути першими, хто відреагує на новий товар.
                  </h6>
                </p>
              </div>
              <div className={!thirdProject ? "container__body-projects-item-handler" : "container__body-projects-item-handler hidden"}
                onClick={()=>setThirdProject(!thirdProject)}
              >
                  <IconChevron />
                  <span>Верстка головної сторінки інтернет-магазину ( <a href="https://github.com/DanyloUserGit/kosher-brodsky">kosher-brodsky</a> )</span>
              </div>
              <div className={thirdProject ? "container__body-projects-item active" : "container__body-projects-item"}>
                  <p className="container__body-projects-item-text">
                    <h6>
                    Реалізував адаптивну верстку головної сторінки для онлайн-магазину з продажу продуктів харчування. Сторінка стала візитівкою бренду та ключовим елементом залучення нових клієнтів.

Розроблено інтуїтивно зрозумілий та візуально привабливий інтерфейс, з урахуванням сучасних UI/UX практик для e-commerce.

В основі верстки — мобільно-орієнтований дизайн (mobile-first) з коректною адаптацією під планшети та десктопи.

Додано інтерактивні елементи за допомогою TypeScript/JavaScript — наприклад, динамічний банер, анімації при скролі, карусель з акційними товарами.

Особливу увагу приділено оптимізації швидкості завантаження сторінки: використано оптимізовані зображення, lazy-loading, мінімізацію ресурсів.

Весь код структуровано та підготовлено для подальшої інтеграції з backend-частиною (CMS або кастомним API).

Сторінка розроблена з урахуванням потреб кінцевого користувача — простої навігації, швидкого доступу до популярних категорій, та акценту на вигідні пропозиції.
                    </h6>
                  </p>
              </div>
              <div className={!_4Project ? "container__body-projects-item-handler" : "container__body-projects-item-handler hidden"}
                onClick={()=>set_4Project(!_4Project)}
              >
                  <IconChevron />
                  <span>Бекенд для медичного сервісу: аналіз шкіри ( <a href="https://github.com/DanyloUserGit/medstar-server">medstar-server</a> )</span>
              </div>
              <div className={_4Project ? "container__body-projects-item active" : "container__body-projects-item"}>
                  <p className="container__body-projects-item-text">
                    <h6>
                    Бекенд для медичного сервісу з аналізу шкіри (NestJS, MongoDB, JWT, WebSockets)
Розробив серверну частину для медичного онлайн-сервісу, що надає послуги аналізу шкіри на основі фотографій. Проєкт має функціонал для пацієнтів та лікарів, орієнтуючись на зручність використання та безпеку даних.

JWT-авторизація для захищеного доступу до персональних даних пацієнтів та лікарів, з підтримкою реєстрації та аутентифікації користувачів.

Реалізовано стрічку новин про шкіру, де пацієнти можуть отримувати корисні рекомендації, новини та поради по догляду за шкірою.

Аналіз шкіри за допомогою фотографій — користувачі завантажують фото, а система здійснює попередній аналіз стану шкіри, результати якого зберігаються в MongoDB для подальшого доступу та моніторингу змін.

Чат через WebSockets для взаємодії лікарів і пацієнтів, що дозволяє обмінюватися повідомленнями в реальному часі, з функцією збереження історії чату.

Функція редагування профілю, де пацієнти можуть змінювати свої особисті дані, контактну інформацію та завантажувати нові фотографії для аналізу.

Інтерактивна карта з місцерозташуванням пацієнтів для лікарів, що дозволяє знаходити пацієнтів в залежності від географічного розташування, що зручно для огляду і консультування.

Реалізація архітектури на основі NestJS з чітким розподілом логіки по модулях, що полегшує підтримку та розширення функціоналу проєкту.

Проєкт забезпечує безпечне зберігання даних, швидку взаємодію між лікарем та пацієнтом, а також зручний доступ до історії медичних аналізів шкіри.


                    </h6>
                  </p>
              </div>
            </div>
          </div>
          <div className="container__footer">
              <h2>Контакти</h2>
              <ul className="container__footer-contacts">
                <li><IconTelegram /> <span>066-624-10-03</span></li>
                <li><IconGithub /> <span><a href="https://github.com/DanyloUserGit">DanyloUserGit</a></span></li>
                <li><IconGmail /> <span>danilomanuliak@gmail.com</span></li>
              </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
