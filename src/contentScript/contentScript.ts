//this is for nytimes.com => The issue might be due to the ad elements (wrapper and wrapper2) not being available in the DOM at the time the script runs. The ads could be dynamically loaded after your script executes. To handle this, you can either delay the script execution or observe changes to the DOM and remove the ad elements once they are present.

const rules: { [url: string]: () => void } = {
  'nytimes.com': filterNYT,
}

function filterNYT() {
  return //just because we want to use ad block by class ad
  const observer = new MutationObserver(() => {
    const wrapper = document.getElementById('dfp-ad-top')
    const wrapper2 = document.getElementById('after-dfp-ad-top')

    if (wrapper) {
      console.log('Removing ad wrapper:', wrapper)
      wrapper.remove() // Remove the first ad
    }

    if (wrapper2) {
      console.log('Removing ad wrapper2:', wrapper2)
      wrapper2.remove() // Remove the second ad
    }

    // Keep the observer running if the ads still appear.
    if (!wrapper && !wrapper2) {
      console.log('No more ads to remove, disconnecting observer.')
      observer.disconnect() // Stop the observer once the ads are removed
    }
  })

  // Observe changes to the DOM with a slight delay to ensure elements are added.
  setTimeout(() => {
    observer.observe(document.body, { childList: true, subtree: true })
    console.log('Started observing DOM for ad elements.')
  }, 1000) // Start observing after a 1-second delay
    
    
}


function filterNYTbyClass() {
    const observer = new MutationObserver(() => {
      const divs = document.getElementsByTagName('div')
      for (const div of Array.from(divs)) {  
        if (div.classList.contains('ad')) {
          div.style.display = 'none'
        }
      }
    })
  
    // Start observing changes in the body
    observer.observe(document.body, {
      childList: true,
      subtree: true,  // Observe all changes in the DOM tree, not just direct children
    })
  
    console.log('Started observing DOM for ad elements.')
  }
  
  // Call the function to start filtering ads by class
  filterNYTbyClass()
  
  



// Match the domain more flexibly using `includes`
if (Object.keys(rules).some((rule) => document.URL.includes(rule))) {
  console.log('document.URL :>> ', document.URL)
  const matchedRule = Object.keys(rules).find((rule) =>
    document.URL.includes(rule)
  )
  if (matchedRule) {
    rules[matchedRule]!()
  }
}
