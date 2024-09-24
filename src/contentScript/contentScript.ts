//this is for nytimes.com

const observer = new MutationObserver(() => {
    const wrapper = document.getElementById('dfp-ad-top')
    const wrapper2 = document.getElementById('after-dfp-ad-top')
  
    if (wrapper) {
      wrapper.remove()  // Remove the first ad
    }
    
    if (wrapper2) {
      wrapper2.remove()  // Remove the second ad
    }
  });
  
  // Observe changes to the DOM
  observer.observe(document.body, { childList: true, subtree: true });
  