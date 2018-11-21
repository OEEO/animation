function getScrollTop (sel) {
  if (sel) {
    return document.querySelector(sel).scrollTop
  }
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  return scrollTop
}

// 文档的总高度

function getScrollHeight (sel) {
  if (sel) {
    return document.querySelector(sel).scrollHeight
  }
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

// 浏览器视口的高度

function getWindowHeight (sel) {
  if (sel) {
    return document.querySelector(sel).clientHeight
  }
  var windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

function isReachBottom (sel) {
  if (sel) {
    return getScrollTop(sel) + getWindowHeight(sel) === getScrollHeight(sel)
  } else {
    return getScrollTop() + getWindowHeight() === getScrollHeight()
  }
}

export default {
  isReachBottom
}
