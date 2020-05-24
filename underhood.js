const name = "mobileunderhood"
const site = "mobileunderhood.ru"

const description = "Коллективный твиттер-аккаунт для мобильных разработчиков с новым автором каждую неделю"

module.exports = {
  "underhood": {
    name,
    description
  },
  "github": {
    user: "mobileunderhood",
    repo: "mobileunderhood"
  },
  "curator": {
    email: "igrekde@gmail.com",
    twitter: "igrekde",
  },
  "site": {
    "title": "Сайт @" + name,
    "description": description,
    // TODO: RSS "feed_url": "https://" + site + "/rss.xml",
    "site_url": "https://" + site + "/",
  }
}
