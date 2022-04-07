let page;

beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
  page = await browser.newPage();
});

afterEach(() => { // этот блок запускается после каждого теста
  page.close(); // закрываем вкладку
});

describe("Go to the cinema test", () => {
  // test("Choose a date", async () => { // выбираем дату
  //   await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
  //   await page.$('a.page-nav__day.page-nav__day_chosen').click; // кликаем по вкладке "Пт, 11"
  //   actual = await page.$eval('div.movie-seances__hall > ul > li > a', text => text.textContent); // выбираем время (document.querySelector('div.movie-seances__hall > ul > li > a')
  //   expect(actual).toContain('19:00');
  // });

  test("Check the selected time", async () => { // проверяем что ссылка ведёт на нужную страницу
    await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
    timeLink = await page.$('div.movie-seances__hall > ul > li > a').click;
    actual = await page.$eval('div.movie-seances__hall > ul > li', text => text.textContent);
    expect(actual).toContain('19:00');
  });

  test("Сhoosing seats", async () => { // выбираем места
    await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу тестированя
    firstSeat = await page.$('div:nth-child(7) > span:nth-child(5)').click; // кликаем по выбранному месту
    secondSeat = await page.$('div:nth-child(7) > span:nth-child(6)').click; // кликаем по выбранному месту
    button = await page.$('button').click; // кликаем по кнопке "Забронировать"
    await page.waitForNavigation("http://qamid.tmweb.ru/client/payment.php");
    await page.waitForSelector("h1");
    actual = await page.$eval('p:nth-child(2) > span', link => link.textContent);
    expect(actual).toContain('7/5, 7/6');
  })

  test("No seat selected", async () => { // выбираем место
    await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу тестированя
    mySeat = await page.$('div:nth-child(2) > span:nth-child(7)').click; // кликаем по выбранному месту
    mySeat = await page.$('div:nth-child(2) > span:nth-child(7)').click; // кликаем по выбранному месту
    button = await page.$('button').click; // кликаем по кнопке "Забронировать"
    await page.waitForNavigation("http://qamid.tmweb.ru/client/payment.php");
    await page.waitForSelector("h1");
    actual = await page.$eval('p:nth-child(2) > span', link => link.textContent);
    expect(actual).toContain('2/7');
  })
})

// вызов теста
// npm test