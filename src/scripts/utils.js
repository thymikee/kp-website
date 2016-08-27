/*
 * @see https://developers.google.com/web/updates/2015/08/using-requestidlecallback
 */
export const requestIdleCallback = window.requestIdleCallback ||
  function (cb) {
    return setTimeout(function () {
      var start = Date.now();
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  }

export const cancelIdleCallback = window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  }


export const applyPassive = () => {
  // feature detect
  let isSupported = false;
  try {
    document.addEventListener('test', null, { get passive () { isSupported = true; } });
  } catch (e) { }

  return isSupported ? { passive: true } : false;
}
