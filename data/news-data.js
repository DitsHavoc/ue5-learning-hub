window.UE5_NEWS_DATA = {
  version: '3.33.1',
  proxy: 'https://api.rss2json.com/v1/api.json?rss_url=',
  cacheMinutes: 10,
  sources: [
    {
      id: 'unreal',
      name: 'Unreal Engine',
      feed: 'https://www.unrealengine.com/rss?lang=en-US',
      site: 'https://www.unrealengine.com/',
      category: 'development',
      badge: 'UE'
    },
    {
      id: 'gamedeveloper',
      name: 'Game Developer',
      feed: 'https://www.gamedeveloper.com/rss.xml',
      site: 'https://www.gamedeveloper.com/',
      category: 'development',
      badge: 'DEV'
    },
    {
      id: 'gamesindustry',
      name: 'GamesIndustry.biz',
      feed: 'https://www.gamesindustry.biz/rss/gamesindustry_news_feed.rss',
      site: 'https://www.gamesindustry.biz/',
      category: 'industry',
      badge: 'BIZ'
    },
    {
      id: 'pcgamer',
      name: 'PC Gamer',
      feed: 'https://www.pcgamer.com/rss/',
      site: 'https://www.pcgamer.com/',
      category: 'games',
      badge: 'PC'
    },
    {
      id: 'eurogamer',
      name: 'Eurogamer',
      feed: 'https://www.eurogamer.net/feed',
      site: 'https://www.eurogamer.net/',
      category: 'games',
      badge: 'EG'
    },
    {
      id: 'rps',
      name: 'Rock Paper Shotgun',
      feed: 'https://www.rockpapershotgun.com/feed',
      site: 'https://www.rockpapershotgun.com/',
      category: 'games',
      badge: 'RPS'
    },
    {
      id: 'gamedeveloper-podcast',
      name: 'Game Developer Podcast',
      feed: 'https://feed.podbean.com/gamedeveloper/feed.xml',
      site: 'https://gamedeveloper.podbean.com/',
      category: 'podcast',
      badge: 'POD'
    }
  ],
  categories: [
    {id:'all',label:'All stories',icon:'◫'},
    {id:'development',label:'Development',icon:'🛠'},
    {id:'industry',label:'Industry',icon:'💼'},
    {id:'games',label:'Games',icon:'🎮'},
    {id:'trailer',label:'Trailers & reveals',icon:'▶'},
    {id:'podcast',label:'Podcasts',icon:'🎙'},
    {id:'saved',label:'Read later',icon:'★'}
  ]
};
