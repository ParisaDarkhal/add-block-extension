chrome.webRequest.onBeforeRequest.addListener(
  (delails) => {
    const url = delails.url
    const filters = [
      'googleadservices',
      'googlesyndication',
      'g.doubleclick',
      'ads',
      'tracker',
      'youtube.com',
    ]
    for (const filter of filters) {
      if (url.indexOf(filter) != -1) {
        console.log(url)
        return {
          cancel: true,
        }
      }
    }
    return {
      cancel: false,
    }
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking']
)
