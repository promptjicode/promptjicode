/*
 * Anonymous visit counter for the PromptjiCode demo pages.
 * Sends page views, time on page and button clicks to the PromptjiCode dashboard.
 * No cookies, no names: a random id in localStorage and one in sessionStorage.
 */
(function () {
  if (location.hostname !== 'promptjicode.github.io') return;
  var API = 'https://interview.promptjicode.com/api/track';
  var IDLE = 30 * 60 * 1000;
  function id() { return (window.crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random()).replace(/[^\w-]/g, ''); }
  function get(s, k) { try { return s.getItem(k); } catch (e) { return null; } }
  function put(s, k, v) { try { s.setItem(k, v); } catch (e) { /* private mode */ } }

  var isNew = false;
  var vid = get(localStorage, 'pcg_vid');
  if (!vid) { vid = id(); isNew = true; put(localStorage, 'pcg_vid', vid); }
  var sid = get(sessionStorage, 'pcg_sid');
  var last = Number(get(sessionStorage, 'pcg_last') || 0);
  if (!sid || Date.now() - last > IDLE) { sid = id(); put(sessionStorage, 'pcg_sid', sid); }

  var utm = new URLSearchParams(location.search).get('utm_source');
  var ref = document.referrer || null;
  var path = location.pathname.replace(/^\/promptjicode/, '') || '/';

  function send(type, data) {
    put(sessionStorage, 'pcg_last', String(Date.now()));
    var body = { type: type, sid: sid, vid: vid, isNew: isNew, ref: ref, utm: utm, path: path, locale: 'ar', site: 'github' };
    for (var k in data) body[k] = data[k];
    var json = JSON.stringify(body);
    if (navigator.sendBeacon && navigator.sendBeacon(API, json)) return;
    try { fetch(API, { method: 'POST', body: json, keepalive: true, mode: 'no-cors', headers: { 'content-type': 'text/plain' } }); } catch (e) { /* ignore */ }
  }

  send('pageview', {});
  setInterval(function () { if (document.visibilityState === 'visible') send('heartbeat', {}); }, 30000);

  // Which buttons and links people use on the page
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('button, a[href]');
    if (!el) return;
    var label;
    if (el.tagName === 'A') {
      var host = '';
      try { host = new URL(el.href).hostname.replace(/^www\./, ''); } catch (err) { /* ignore */ }
      label = 'link:' + (host || 'page');
    } else {
      label = 'btn:' + (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40);
    }
    send('click', { label: label.slice(0, 60) });
  }, true);
})();
