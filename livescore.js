(function() {
'use strict';

  /* =========================================
   ALLOWED DOMAIN CHECK & REDIRECT
========================================= */
(function() {
  const ALLOWED_DOMAINS = [
    'https://dfwrfsaq.blogspot.com',
    'www.b4xsports.xyz',
    'yourdomain.com'
  ];

  const REDIRECT_URL = 'https://yourblog.blogspot.com/p/access-denied.html'; // allenkil vere oru URL

  const currentHost = (window.location.hostname || '').toLowerCase().replace(/^www\./, '');
  const normalizedAllowed = ALLOWED_DOMAINS.map(d => d.toLowerCase().replace(/^www\./, ''));

  // Local testing-nu venamenkil 'localhost' / '127.0.0.1' koodi cherthaal mathi
  const isAllowed = normalizedAllowed.includes(currentHost);

  if (!isAllowed) {
    // Page-il ulla content hide cheyyukayum redirect cheyyukayum cheyyunnu
    if (document.documentElement) {
      document.documentElement.style.display = 'none';
    }
    window.location.replace(REDIRECT_URL);
    throw new Error('Unauthorized domain access blocked');
  }
})();

/* =========================================
   INJECT CSS STYLES
========================================= */
const styles = `
...

/* =========================================
   INJECT CSS STYLES
========================================= */
const styles = `
.b4xsocial ul.social-icons {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  margin: 10px;
}
.b4xsocial .social-icons li {
  display: block;
  margin: 0;
}
.b4xsocial .social-icons a {
  position: relative;
  height: 40px;
  overflow: hidden;
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 40px;
}
.b4xsocial .social-icons a:before {
  display: flex;
  width: 40px;
  height: 100%;
  background-color: rgba(255,255,255,0.15);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.b4xsocial .social-icons span {
  font-size: 16px;
  padding: 0 20px;
}
.b4xsocial .social-icons a:hover {
  opacity: .9;
}
.post-body a {
  color: #ff0000;
}
.post-body ul li:before {
  display: table-column;
  content: '\\2022';
  margin: 0;
}
#matches-wrapper {
  width: 100%;
}
#matches-wrapper .custom-status,
#matches-wrapper [id^="live-statusText-"] {
  text-transform: none !important;
}
#match-details-page {
  display: none;
  --mds-bg: #f1f5f9;
  --mds-card: #ffffff;
  --mds-card2: #f8fafc;
  --mds-border: #e2e8f0;
  --mds-text: #0f172a;
  --mds-sub: #64748b;
  --mds-accent: #16a34a;
  --mds-accent2: #16a34a;
  --mds-home: #16a34a;
  --mds-away: #dc2626;
  --mds-btn-bg: #111827;
  --mds-btn-text: #ffffff;
  --mds-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  background: var(--mds-bg);
  color: var(--mds-text);
  padding: 16px;
  border-radius: 18px;
  margin: 15px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  box-sizing: border-box;
  transition: background 0.25s ease, color 0.25s ease;
}
#match-details-page.mds-dark {
  --mds-bg: #0f1115;
  --mds-card: #181b21;
  --mds-card2: #22262f;
  --mds-border: #2a2f3a;
  --mds-text: #f3f4f6;
  --mds-sub: #9ca3af;
  --mds-accent: #22c55e;
  --mds-accent2: #22c55e;
  --mds-home: #22c55e;
  --mds-away: #ef4444;
  --mds-btn-bg: #262b36;
  --mds-btn-text: #f3f4f6;
  --mds-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
}
#match-details-page *,
#match-details-page *::before,
#match-details-page *::after {
  box-sizing: border-box;
}
#match-details-page .stats-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 10px;
}
#match-details-page .stats-back {
  background: var(--mds-btn-bg);
  color: var(--mds-btn-text);
  border: 1px solid var(--mds-border);
  padding: 9px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: opacity 0.15s ease;
}
#match-details-page .stats-back:hover {
  opacity: 0.88;
}
#match-details-page .mds-loading,
#match-details-page .mds-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  gap: 12px;
  color: var(--mds-sub);
  text-align: center;
  padding: 20px;
}
#match-details-page .mds-spinner {
  width: 34px;
  height: 34px;
  border: 3px solid var(--mds-border);
  border-top-color: var(--mds-accent2);
  border-radius: 50%;
  animation: b4x-mds-spin 0.8s linear infinite;
}
@keyframes b4x-mds-spin {
  to { transform: rotate(360deg); }
}
#match-details-page .mds-error {
  color: #ef4444;
}
#match-details-page .mds-header {
  padding: 8px 0 6px;
  text-align: center;
}
#match-details-page .mds-competition {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: var(--mds-sub);
  margin-bottom: 10px;
  background: var(--mds-card);
  border: 1px solid var(--mds-border);
  padding: 6px 12px;
  border-radius: 999px;
  box-shadow: var(--mds-shadow);
}
#match-details-page .mds-competition img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 4px;
}
#match-details-page .mds-competition span {
  color: var(--mds-text);
  font-weight: 700;
}
#match-details-page .mds-scoreboard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--mds-card);
  border: 1px solid var(--mds-border);
  border-radius: 20px;
  padding: 22px 16px;
  box-shadow: var(--mds-shadow);
}
#match-details-page .mds-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 34%;
}
#match-details-page .mds-team img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 8px;
  background: var(--mds-card2);
  padding: 4px;
}
#match-details-page .mds-team-name {
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  color: var(--mds-text);
  overflow-wrap: anywhere;
}
#match-details-page .mds-score-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 92px;
}
#match-details-page .mds-score {
  font-size: 36px;
  font-weight: 800;
  color: var(--mds-text);
  line-height: 1.1;
}
#match-details-page .mds-status {
  font-size: 12px;
  color: var(--mds-accent);
  font-weight: 700;
}
#match-details-page .mds-status.mds-live {
  color: #ef4444;
}
#match-details-page .mds-kickoff {
  font-size: 11px;
  color: var(--mds-sub);
  text-align: center;
}
#match-details-page .mds-scorers {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
  font-size: 12px;
  color: var(--mds-sub);
  padding: 0 6px;
}
#match-details-page .mds-scorers .mds-side {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
#match-details-page .mds-scorers .mds-side.mds-right {
  align-items: flex-end;
  text-align: right;
}
#match-details-page .mds-scorers .mds-goal {
  display: flex;
  align-items: center;
  gap: 4px;
}
#match-details-page .mds-scorers .mds-side.mds-right .mds-goal {
  flex-direction: row-reverse;
}
#match-details-page .mds-venue-row {
  display: flex;
  justify-content: center;
  font-size: 11px;
  color: var(--mds-sub);
  margin: 10px 0 14px;
  padding: 0 4px;
  flex-wrap: wrap;
  gap: 6px;
}
#match-details-page .mds-card {
  background: var(--mds-card);
  border: 1px solid var(--mds-border);
  border-radius: 18px;
  padding: 16px 18px;
  margin-bottom: 14px;
  box-shadow: var(--mds-shadow);
}
#match-details-page .mds-card:last-child {
  margin-bottom: 0;
}
#match-details-page .mds-card h3 {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--mds-text);
}
#match-details-page .mds-stat-row {
  margin-bottom: 12px;
}
#match-details-page .mds-stat-row:last-child {
  margin-bottom: 0;
}
#match-details-page .mds-stat-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-bottom: 6px;
  gap: 8px;
}
#match-details-page .mds-stat-labels .mds-val {
  font-weight: 700;
  min-width: 36px;
  color: var(--mds-text);
}
#match-details-page .mds-stat-labels .mds-val.mds-away {
  text-align: right;
}
#match-details-page .mds-stat-labels .mds-name {
  color: var(--mds-sub);
  flex: 1;
  text-align: center;
}
#match-details-page .mds-bar {
  display: flex;
  height: 7px;
  border-radius: 999px;
  overflow: hidden;
  background: var(--mds-border);
}
#match-details-page .mds-bar .mds-home-fill {
  background: var(--mds-home);
  height: 100%;
}
#match-details-page .mds-bar .mds-away-fill {
  background: var(--mds-away);
  height: 100%;
}
#match-details-page .mds-event {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 13px;
  border-bottom: 1px solid var(--mds-border);
}
#match-details-page .mds-event:last-child {
  border-bottom: none;
}
#match-details-page .mds-event .mds-minute {
  color: var(--mds-sub);
  min-width: 40px;
  font-weight: 700;
  font-size: 12px;
}
#match-details-page .mds-event .mds-icon {
  width: 20px;
  text-align: center;
  font-size: 14px;
}
#match-details-page .mds-event .mds-desc {
  flex: 1;
  font-weight: 600;
  color: var(--mds-text);
}
#match-details-page .mds-event .mds-desc small {
  display: block;
  color: var(--mds-sub);
  font-size: 11px;
  font-weight: 400;
  margin-top: 2px;
}
#match-details-page .mds-event.mds-away-event {
  flex-direction: row-reverse;
  text-align: right;
}
#match-details-page .mds-event.mds-away-event .mds-desc {
  text-align: right;
}
#match-details-page .mds-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding: 9px 0;
  border-bottom: 1px solid var(--mds-border);
  gap: 12px;
}
#match-details-page .mds-info-row:last-child {
  border-bottom: none;
}
#match-details-page .mds-info-row .mds-info-label {
  color: var(--mds-sub);
  display: flex;
  align-items: center;
  gap: 6px;
}
#match-details-page .mds-info-row .mds-info-value {
  font-weight: 600;
  text-align: right;
  color: var(--mds-text);
}
#match-details-page .mds-lineup-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
#match-details-page .mds-lineup-col-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--mds-text);
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--mds-border);
}
#match-details-page .mds-lineup-section-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--mds-sub);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin: 10px 0 6px;
}
#match-details-page .mds-lineup-player {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  font-size: 12px;
  border-bottom: 1px solid var(--mds-border);
}
#match-details-page .mds-lineup-player:last-child {
  border-bottom: none;
}
#match-details-page .mds-lineup-num {
  min-width: 22px;
  font-weight: 700;
  color: var(--mds-sub);
  font-size: 11px;
}
#match-details-page .mds-lineup-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--mds-card2);
  flex-shrink: 0;
}
#match-details-page .mds-lineup-name {
  font-weight: 600;
  color: var(--mds-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#match-details-page .mds-h2h-summary {
  display: flex;
  justify-content: space-around;
  gap: 12px;
  margin-bottom: 14px;
  padding: 12px;
  background: var(--mds-card2);
  border-radius: 14px;
  text-align: center;
}
#match-details-page .mds-h2h-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
#match-details-page .mds-h2h-stat .mds-num {
  font-size: 20px;
  font-weight: 800;
  color: var(--mds-text);
}
#match-details-page .mds-h2h-stat .mds-lbl {
  font-size: 11px;
  color: var(--mds-sub);
}
#match-details-page .mds-h2h-match {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 9px 0;
  border-bottom: 1px solid var(--mds-border);
  gap: 8px;
}
#match-details-page .mds-h2h-match:last-child {
  border-bottom: none;
}
#match-details-page .mds-h2h-date {
  color: var(--mds-sub);
  font-size: 11px;
  min-width: 68px;
}
#match-details-page .mds-h2h-teams {
  flex: 1;
  text-align: center;
  color: var(--mds-text);
  font-weight: 500;
}
#match-details-page .mds-h2h-score {
  font-weight: 700;
  min-width: 48px;
  text-align: center;
  background: var(--mds-card2);
  padding: 3px 8px;
  border-radius: 6px;
  color: var(--mds-text);
}
#match-details-page .mds-empty-msg {
  color: var(--mds-sub);
  font-size: 13px;
  text-align: center;
  padding: 16px 0;
}
@media (max-width: 520px) {
  #match-details-page {
    padding: 10px;
  }
  #match-details-page .mds-scoreboard {
    padding: 16px 10px;
  }
  #match-details-page .mds-team img {
    width: 42px;
    height: 42px;
  }
  #match-details-page .mds-score {
    font-size: 28px;
  }
  #match-details-page .mds-lineup-grid {
    grid-template-columns: 1fr;
  }
}
`;

const styleTag = document.createElement('style');
styleTag.id = 'b4x-livescore-injected-css';
styleTag.textContent = styles;
document.head.appendChild(styleTag);

/* =========================================
   INJECT HTML LAYOUT INTO TARGET ELEMENT
========================================= */
const targetRoot =
  document.getElementById('b4x-livescore-root') ||
  document.querySelector('.widget.Blog') ||
  document.body;

const layoutHtml = `
<div class="container">
  <div class="panel panel-default">
    <div class="tab-pane">
      <div class="box-title">
        <h2 class="boxstitle"><strong>Indian Time</strong></h2>
        <ul class="nav-tabs">
          <li class="yema">
            <a href="https://wpjoinlink123.blogspot.com/"><strong>Join Us</strong></a>
          </li>
          <li class="active">
            <a href="/"><strong>Today</strong></a>
          </li>
          <li>
            <a href="/p/standings.html"><strong>Table</strong></a>
          </li>
        </ul>
      </div>

      <div class="sltz hide" id="sltz"></div>

      <div class="b4xsocial ul social-icons">
        <ul class="social-icons social social-bg">
          <li class="whatsapp link-0">
            <a alt="whatsapp-f" class="whatsapp-f btn"
               href="https://wpjoinlink123.blogspot.com//"
               rel="noopener noreferrer" target="_blank"
               title="whatsapp-f">
              <span class="text">Join WhatsApp Group</span>
            </a>
          </li>
          <li class="telegram link-0">
            <a alt="telegram-f" class="telegram-f btn"
               href="https://t.me/+D_awaliwgPIxZGM1"
               rel="noopener noreferrer" target="_blank"
               title="telegram-f">
              <span class="text"> Join Telegram Channel</span>
            </a>
          </li>
        </ul>
      </div>

      <div id="matches-wrapper"></div>

      <div id="match-details-page">
        <div class="stats-top-bar">
          <button class="stats-back" id="stats-back-button" type="button">
            ← Back to Matches
          </button>
        </div>
        <div id="match-stats-content"></div>
      </div>
    </div>
  </div>
</div>
`;

if (targetRoot === document.body) {
  const containerDiv = document.createElement('div');
  containerDiv.innerHTML = layoutHtml;
  document.body.prepend(containerDiv);
} else {
  targetRoot.innerHTML = layoutHtml;
}

/* =========================================
   CONFIGURATION
========================================= */

const JSON_URL =
'https://abhigames16.github.io/sports/matchday.json';

const BASE = 'https://webws.365scores.com/web';

const APP_TYPE_ID = 5;
const LANG_ID = 1;
const TIMEZONE_NAME =
Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';

const IMG_BASE =
'https://imagescache.365scores.com/image/upload/w_100,h_100,c_limit,f_webp,q_90,d_Competitors:default1.png/Competitors';

const COMP_IMG_BASE =
'https://imagescache.365scores.com/image/upload/w_60,h_60,c_limit,f_webp,q_90,d_Competitions:default1.png/Competitions';

const ATHLETE_IMG_BASE =
'https://imagescache.365scores.com/image/upload/w_80,h_80,c_limit,f_webp,q_90,d_Athletes:default1.png/Athletes';

const wrapper = document.getElementById('matches-wrapper');
const detailsPage = document.getElementById('match-details-page');
const detailsContent = document.getElementById('match-stats-content');

window.MATCH_LIST = [];
window.MATCH_GAME_DATA = {};
window.NN = 'Blogger,Template,TemplateIfy,Colorify_Crack,Colorify_v1.0.0';

let currentStatsId = null;

/* =========================================
   THEME SYNC (STRICTLY FOLLOWS THEME TOGGLE)
========================================= */

function isElementDark(el) {
  if (!el) return false;
  const cls = (el.className && typeof el.className === 'string') ? el.className.toLowerCase() : '';
  const dataTheme = (el.getAttribute('data-theme') || '').toLowerCase();
  const darkModeAttr = (el.getAttribute('data-dark-mode') || '').toLowerCase();

  if (dataTheme === 'dark' || darkModeAttr === 'true' || darkModeAttr === 'dark') return true;
  if (dataTheme === 'light' || darkModeAttr === 'false' || darkModeAttr === 'light') return false;

  if (/\b(dark|dark-mode|darkmode|night|theme-dark|is-dark)\b/.test(cls)) return true;
  if (/\b(light|light-mode|lightmode|day|theme-light|is-light)\b/.test(cls)) return false;

  return false;
}

function syncThemeMode() {
  if (!detailsPage) return;

  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  let darkActive = false;

  if (isElementDark(htmlEl) || isElementDark(bodyEl)) {
    darkActive = true;
  } else {
    let parent = detailsPage.parentElement;
    while (parent && parent !== document.body) {
      if (isElementDark(parent)) {
        darkActive = true;
        break;
      }
      parent = parent.parentElement;
    }
  }

  if (darkActive) {
    detailsPage.classList.add('mds-dark');
  } else {
    detailsPage.classList.remove('mds-dark');
  }
}

syncThemeMode();
const themeObserver = new MutationObserver(syncThemeMode);
themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class', 'data-theme', 'data-dark-mode']
});
if (document.body) {
  themeObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['class', 'data-theme', 'data-dark-mode']
  });
}

/* =========================================
   COMMON FUNCTIONS
========================================= */

function safe(value) {
  return String(value ?? '').replace(/[&<>"']/g, function(c) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c];
  });
}

function toNormalTitleCase(str) {
  const cleaned = String(str || '').trim();
  if (!cleaned) return '';
  return cleaned
    .toLowerCase()
    .replace(/\b([a-z])/g, function(_, ch) {
      return ch.toUpperCase();
    });
}

function isCustomMatchEntry(match) {
  if (!match || typeof match !== 'object') return false;
  return Boolean(
    match.isCustom === true ||
    match.leftTeamName ||
    match.rightTeamName ||
    match.dataStart ||
    match.timeText
  );
}

function canOpenCustomMatchLink(match) {
  if (!match || !match.link || match.link === '#') return false;

  const now = Date.now();
  const startRaw = match.dataStart ? String(match.dataStart).trim() : '';
  const endRaw = match.dataGameEnds ? String(match.dataGameEnds).trim() : '';

  const startMs = startRaw ? Date.parse(startRaw) : NaN;
  const endMs = endRaw ? Date.parse(endRaw) : NaN;

  if (startRaw && !Number.isFinite(startMs)) return false;
  if (endRaw && !Number.isFinite(endMs)) return false;
  if (Number.isFinite(startMs) && now < (startMs - 30 * 60000)) return false;
  if (Number.isFinite(endMs) && now > (endMs + 60 * 60000)) return false;

  if (Number.isFinite(startMs) && !Number.isFinite(endMs)) {
    if (now > (startMs + 180 * 60000)) return false;
  }

  if (!Number.isFinite(startMs) && !Number.isFinite(endMs)) return false;

  return true;
}

function isMatchScheduled(game) {
  if (!game) return true;
  const home = game.homeCompetitor || {};
  const away = game.awayCompetitor || {};
  const homeScore = (home.score == null || home.score < 0) ? null : home.score;
  const awayScore = (away.score == null || away.score < 0) ? null : away.score;

  return game.statusGroup === 1 || homeScore === null || awayScore === null;
}

function extractLiveMinute(game) {
  const candidates = [
    game.gameTimeDisplay,
    game.gameTime,
    game.currentTime,
    game.time
  ];

  for (const val of candidates) {
    if (val === null || val === undefined || val === '') continue;
    const rawStr = String(val).replace(/<[^>]*>/g, '').trim();
    const numMatch = rawStr.match(/\d+/);
    if (numMatch) {
      const minuteNum = parseInt(numMatch[0], 10);
      if (Number.isFinite(minuteNum) && minuteNum >= 0 && minuteNum <= 130) {
        return {
          minuteNum: minuteNum,
          display: rawStr.includes('"') || rawStr.includes("'") ? rawStr : `${minuteNum}"`
        };
      }
    }
  }

  return null;
}

function getCleanStatusText(game) {
  if (!game) return 'Scheduled';
  if (isMatchScheduled(game)) return 'Scheduled';
  if (game.statusGroup === 4) return 'Full Time';

  const rawStatus = String(game.shortStatusText || '')
    .replace(/<[^>]*>/g, '')
    .trim();

  const isActualHalfTime =
    /^(ht|half[\s-]?time)$/i.test(rawStatus) && game.statusGroup === 3;

  if (isActualHalfTime) return 'Half Time';

  const liveMin = extractLiveMinute(game);
  if (liveMin) {
    const halfLabel = liveMin.minuteNum > 45 ? '2nd half' : '1st half';
    return `${liveMin.display} ${halfLabel}`;
  }

  if (/^ht$/i.test(rawStatus) || /half/i.test(rawStatus)) return 'Half Time';

  if (rawStatus && /^[a-zA-Z0-9\s'+-]+$/.test(rawStatus) && !/pwn/i.test(rawStatus)) {
    return toNormalTitleCase(rawStatus);
  }

  return 'Live';
}

function getCompetitionLogoUrl(game) {
  const compId =
    game.competitionId ||
    (game.competition && game.competition.id) ||
    (game.league && game.league.id) ||
    '';

  if (!compId) return '';
  return `${COMP_IMG_BASE}/${compId}`;
}

function resolveRoundDisplay(game) {
  if (!game) return '';

  const textCandidates = [
    game.roundName,
    game.stageRoundName,
    game.phaseName,
    game.stageDisplayName,
    game.stageName,
    game.stage && (game.stage.roundName || game.stage.displayName || game.stage.name),
    game.competition && (game.competition.roundName || game.competition.phaseName || game.competition.stageName)
  ];

  for (const cand of textCandidates) {
    if (typeof cand !== 'string') continue;
    const t = cand.trim();
    if (!t) continue;

    if (/^round\s*\d+/i.test(t) || /^(semi[\s-]?final|quarter[\s-]?final|final|round of \d+|play[\s-]?off|third[\s-]?place|group\s+[a-z0-9]+)$/i.test(t)) {
      return game.groupName ? `${t} · ${game.groupName}` : t;
    }
  }

  const numCandidates = [
    game.roundNumber,
    game.roundNum,
    game.roundNo,
    game.currentRound,
    game.stageRound,
    game.matchday,
    game.week,
    game.round && (typeof game.round === 'object' ? (game.round.number || game.round.value || game.round.name) : game.round),
    game.stage && (game.stage.roundNumber || game.stage.roundNum),
    game.competition && (game.competition.roundNumber || game.competition.roundNum)
  ];

  for (const cand of numCandidates) {
    if (cand === null || cand === undefined || cand === '') continue;
    if (typeof cand === 'string' && /^round\s*\d+/i.test(cand.trim())) {
      const baseRound = cand.trim();
      return game.groupName ? `${baseRound} · ${game.groupName}` : baseRound;
    }
    const m = String(cand).match(/\d+/);
    if (m && m[0]) {
      const roundStr = 'Round ' + m[0];
      return game.groupName ? `${roundStr} · ${game.groupName}` : roundStr;
    }
  }

  for (const cand of textCandidates) {
    if (typeof cand === 'string' && cand.trim()) {
      const t = cand.trim();
      return game.groupName ? `${t} · ${game.groupName}` : t;
    }
  }

  return '';
}

function getGameUrl(id) {
  return BASE + '/game/?' + new URLSearchParams({
    appTypeId: APP_TYPE_ID,
    langId: LANG_ID,
    timezoneName: TIMEZONE_NAME,
    userCountryId: 80,
    gameId: id
  }).toString();
}

function getStatsUrl(id) {
  return BASE + '/game/stats/?' + new URLSearchParams({
    appTypeId: APP_TYPE_ID,
    langId: LANG_ID,
    timezoneName: TIMEZONE_NAME,
    userCountryId: 80,
    games: id,
    onlyIsMajor: 'true'
  }).toString();
}

function getLineupsUrl(id) {
  return BASE + '/athletes/games/lineups?' + new URLSearchParams({
    appTypeId: APP_TYPE_ID,
    langId: LANG_ID,
    timezoneName: TIMEZONE_NAME,
    userCountryId: 80,
    gameId: id
  }).toString();
}

function getH2HUrl(gameId, matchupId) {
  return BASE + '/games/h2h/?' + new URLSearchParams({
    appTypeId: APP_TYPE_ID,
    langId: LANG_ID,
    timezoneName: TIMEZONE_NAME,
    userCountryId: 80,
    gameId: gameId,
    matchupId: matchupId
  }).toString();
}

function formatKickoff(isoString) {
  try {
    const d = new Date(isoString);
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: TIMEZONE_NAME,
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(d).replace(/\b(am|pm)\b/gi, m => m.toUpperCase());
  } catch (e) {
    return isoString || '';
  }
}

/* =========================================
   LOAD MATCH JSON FROM GITHUB
========================================= */

async function loadMatches() {
  try {
    const response = await fetch(JSON_URL + '?t=' + Date.now());
    if (!response.ok) throw new Error('JSON loading failed: ' + response.status);

    const matches = await response.json();
    if (!Array.isArray(matches)) throw new Error('Invalid JSON format');

    window.MATCH_LIST = matches;

    if (!matches.length) {
      wrapper.textContent = 'No matches found.';
      return;
    }

    createMatchCards();
    handleHash();
  } catch (error) {
    console.error('Match JSON error:', error);
    wrapper.textContent = 'Unable to load matches. Please check matchday.json.';
  }
}

/* =========================================
   CREATE MATCH CARDS
========================================= */

function createMatchCards() {
  wrapper.innerHTML = '';

  window.MATCH_LIST.forEach(function(matchConfig, index) {
    const mNum = index + 1;
    const gameId = matchConfig.id;
    const isCustom = isCustomMatchEntry(matchConfig);

    const html = `
      <div class="containermatch container-custom responsive-match-container"
           data-custom="${isCustom ? 'true' : 'false'}"
           data-status="0"
           data-index="${mNum}"
           id="match-container-${mNum}">

        <a href="${isCustom ? '#custom-match-' + safe(gameId) : '#match-' + safe(gameId)}"
           title="Match ${mNum}"
           id="live-link-m${mNum}">

          <div class="col-md-4">
            <div class="matchlogo left">
              <img alt=""
                   class="col-img left"
                   height="70"
                   width="70"
                   id="live-homeLogo-m${mNum}"
                   src="${isCustom && matchConfig.leftTeamLogo ? safe(matchConfig.leftTeamLogo) : 'https://imagescache.365scores.com/image/upload/Competitors/default1.png'}">
            </div>
            <div class="matchname left"
                 id="live-homeName-m${mNum}">${isCustom ? safe(matchConfig.leftTeamName || 'Home') : 'Loading...'}</div>
          </div>

          <div class="col-md-4">
            <div class="matchTime">
              <span class="match-clock"></span>
              <div class="stsrt"
                   id="live-scoreText-m${mNum}"
                   style="font-size:18px;font-weight:800;letter-spacing:normal;">
                ${isCustom ? safe(matchConfig.timeText || 'VS') : '-- : --'}
              </div>
              <div class="date style colorDefinition size_sm custom-status"
                   id="live-statusText-m${mNum}"
                   ${isCustom && matchConfig.dataStart ? `data-start="${safe(matchConfig.dataStart)}"` : ''}
                   ${isCustom && matchConfig.dataGameEnds ? `data-gameends="${safe(matchConfig.dataGameEnds)}"` : ''}
                   ${isCustom ? `id-custom="${safe(gameId)}"` : ''}>
                Connecting...
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="matchlogo right">
              <img alt=""
                   class="col-img right"
                   height="70"
                   width="70"
                   id="live-awayLogo-m${mNum}"
                   src="${isCustom && matchConfig.rightTeamLogo ? safe(matchConfig.rightTeamLogo) : 'https://imagescache.365scores.com/image/upload/Competitors/default1.png'}">
            </div>
            <div class="matchname right"
                 id="live-awayName-m${mNum}">${isCustom ? safe(matchConfig.rightTeamName || 'Away') : 'Loading...'}</div>
          </div>

          <div class="col-md-4 info">
            <ul>
              <li>
                <span id="live-roundName-m${mNum}">${isCustom ? safe(matchConfig.round || 'Match') : 'Loading round...'}</span>
              </li>
              <li><span><b>B4X SPORTS</b></span></li>
              <li>
                <span class="lgnm"
                      id="live-competitionName-m${mNum}">
                  ${isCustom ? safe(matchConfig.league || 'Custom Match') : 'International Match'}
                </span>
              </li>
            </ul>
          </div>

          <div class="overlayMatch2">
            <div class="textMatch"></div>
          </div>

        </a>
      </div>
    `;

    wrapper.insertAdjacentHTML('beforeend', html);

    if (isCustom) {
      updateCustomCard(matchConfig, mNum);
    } else {
      fetchLiveUpdate(gameId, mNum);
    }
  });
}

/* =========================================
   CUSTOM MATCH LIVE / COUNTDOWN HANDLER
========================================= */

function updateCustomCard(matchConfig, mNum) {
  const scoreEl = document.getElementById('live-scoreText-m' + mNum);
  const statusEl = document.getElementById('live-statusText-m' + mNum);
  const container = document.getElementById('match-container-' + mNum);
  const roundEl = document.getElementById('live-roundName-m' + mNum);
  const compEl = document.getElementById('live-competitionName-m' + mNum);

  if (!scoreEl || !statusEl || !container) return;

  if (roundEl && matchConfig.round) roundEl.textContent = matchConfig.round;
  if (compEl && matchConfig.league) compEl.textContent = matchConfig.league;

  if (scoreEl && matchConfig.timeText) {
    scoreEl.textContent = String(matchConfig.timeText).replace(/\b(am|pm)\b/gi, m => m.toUpperCase());
  }

  if (statusEl._countdown) {
    clearInterval(statusEl._countdown);
    statusEl._countdown = null;
  }

  const startMs = matchConfig.dataStart ? Date.parse(String(matchConfig.dataStart).trim()) : NaN;
  const endMs = matchConfig.dataGameEnds ? Date.parse(String(matchConfig.dataGameEnds).trim()) : NaN;

  function tickCustomStatus() {
    const now = Date.now();
    statusEl.style.textTransform = 'none';
    statusEl.classList.remove('live');

    if (Number.isFinite(endMs) && now >= endMs) {
      container.setAttribute('data-status', '4');
      container.classList.remove('match-live');
      statusEl.textContent = 'Full Time';
      statusEl.style.background = '#c10707';
      clearInterval(statusEl._countdown);
      sortContainers();
      return;
    }

    if (Number.isFinite(startMs) && now >= startMs) {
      container.setAttribute('data-status', '2');
      container.classList.add('match-live');
      statusEl.textContent = 'Live Now';
      statusEl.style.background = '#b91010';
      sortContainers();
      return;
    }

    if (Number.isFinite(startMs)) {
      container.setAttribute('data-status', '1');
      container.classList.remove('match-live');
      statusEl.style.background = '#0f6f37';
      const distance = startMs - now;
      const hours = Math.floor(distance / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      statusEl.textContent = hours + 'h ' + minutes + 'm ' + seconds + 's';
    } else {
      container.setAttribute('data-status', '2');
      container.classList.add('match-live');
      statusEl.textContent = 'Live Now';
      statusEl.style.background = '#b91010';
    }
  }

  tickCustomStatus();
  statusEl._countdown = setInterval(tickCustomStatus, 1000);
  sortContainers();
}

/* =========================================
   FETCH 365SCORES GAME DATA
========================================= */

async function fetchLiveUpdate(gameId, mNum) {
  try {
    const response = await fetch(getGameUrl(gameId));
    if (!response.ok) return;

    const data = await response.json();
    if (data && data.game) {
      window.MATCH_GAME_DATA[String(gameId)] = data.game;
      updateContainer(data.game, gameId, mNum);
    }
  } catch (error) {
    console.log('Match update error:', gameId, error);
  }
}

/* =========================================
   COUNTDOWN
========================================= */

function startCountdown(startTime, element) {
  if (element._countdown) {
    clearInterval(element._countdown);
  }

  const start = new Date(startTime).getTime();
  if (!Number.isFinite(start)) return;

  function update() {
    const distance = start - Date.now();
    if (distance <= 0) {
      element.textContent = 'Starting...';
      clearInterval(element._countdown);
      return;
    }

    const hours = Math.floor(distance / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    element.textContent = hours + 'h ' + minutes + 'm ' + seconds + 's';
  }

  update();
  element._countdown = setInterval(update, 1000);
}

/* =========================================
   ROUND / STAGE
========================================= */

function updateRoundLabel(game, mNum) {
  const roundEl = document.getElementById('live-roundName-m' + mNum);
  if (!roundEl) return;

  const stageCandidates = [
    game.phaseName,
    game.stageDisplayName,
    game.stageName,
    game.stage && (game.stage.displayName || game.stage.name),
    game.competition && (game.competition.phaseName || game.competition.stageName),
    game.roundName
  ];

  const knockoutPattern =
    /^(semi[\s-]?final|quarter[\s-]?final|final|round of \d+|play[\s-]?off|third[\s-]?place)$/i;

  for (const candidate of stageCandidates) {
    if (typeof candidate !== 'string') continue;
    const label = candidate.trim();
    if (!label) continue;

    if (knockoutPattern.test(label)) {
      roundEl.textContent = '';
      return;
    }

    if (/^round\s*\d*$/i.test(label) || /^\d+$/.test(label)) {
      continue;
    }

    roundEl.textContent = label;
    return;
  }

  const numericCandidates = [
    game.roundNum,
    game.roundNumber,
    game.roundNo,
    game.currentRound,
    game.stageRound,
    game.round && (game.round.number || game.round.value),
    game.stage && (game.stage.roundNumber || game.stage.roundNum),
    game.competition && (game.competition.roundNumber || game.competition.roundNum),
    typeof game.round === 'number' || typeof game.round === 'string' ? game.round : null
  ];

  for (const candidate of numericCandidates) {
    if (candidate === null || candidate === undefined || candidate === '') continue;
    const found = String(candidate).match(/\d+/);
    if (found) {
      roundEl.textContent = 'Round ' + found[0];
      return;
    }
  }

  roundEl.textContent = 'Match';
}

/* =========================================
   CLEAN LEAGUE NAME
========================================= */

function cleanLeagueName(value) {
  if (value === null || value === undefined) return '';
  let name = String(value).trim();

  const regions = [
    'England', 'Scotland', 'Wales', 'Northern Ireland',
    'United Kingdom', 'Spain', 'Germany', 'Italy', 'France',
    'Portugal', 'Netherlands', 'Belgium', 'Turkey', 'Türkiye',
    'Greece', 'Russia', 'Ukraine', 'Switzerland', 'Austria',
    'Denmark', 'Sweden', 'Norway', 'Finland', 'Poland',
    'Croatia', 'Serbia', 'Czech Republic', 'Czechia',
    'Slovakia', 'Slovenia', 'Romania', 'Bulgaria', 'Hungary',
    'Ireland', 'Iceland', 'Cyprus', 'Israel', 'United States',
    'USA', 'Mexico', 'Brazil', 'Argentina', 'Uruguay', 'Chile',
    'Colombia', 'Japan', 'South Korea', 'Korea Republic',
    'Australia', 'India', 'Saudi Arabia', 'Qatar',
    'United Arab Emirates', 'UAE', 'Egypt', 'Morocco',
    'South Africa', 'Africa', 'Asia', 'Europe', 'World', 'International'
  ];

  for (const region of regions) {
    const escaped = region.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefix = new RegExp('^' + escaped + '\\s*(?:,|:|\\||[-–—])\\s*', 'i');
    if (prefix.test(name)) {
      name = name.replace(prefix, '').trim();
      break;
    }
  }

  if (!name || regions.some(r => name.toLowerCase() === r.toLowerCase())) {
    return '';
  }

  return name;
}

/* =========================================
   UPDATE MATCH CARD
========================================= */

function updateContainer(game, gameId, mNum) {
  updateRoundLabel(game, mNum);

  const home = game.homeCompetitor || {};
  const away = game.awayCompetitor || {};

  const homeLogo = document.getElementById('live-homeLogo-m' + mNum);
  const awayLogo = document.getElementById('live-awayLogo-m' + mNum);
  const homeName = document.getElementById('live-homeName-m' + mNum);
  const awayName = document.getElementById('live-awayName-m' + mNum);

  if (homeLogo && away.id) homeLogo.src = IMG_BASE + '/' + away.id;
  if (awayLogo && home.id) awayLogo.src = IMG_BASE + '/' + home.id;

  if (homeName) homeName.textContent = away.name || '';
  if (awayName) awayName.textContent = home.name || '';

  const competitionEl = document.getElementById('live-competitionName-m' + mNum);

  const leagueCandidates = [
    game.leagueName,
    game.league && (game.league.name || game.league.displayName),
    game.competition && (game.competition.name || game.competition.displayName),
    game.competitionName,
    game.competitionDisplayName,
    game.competition && game.competition.shortName
  ];

  let leagueName = '';
  for (const candidate of leagueCandidates) {
    leagueName = cleanLeagueName(candidate);
    if (leagueName) break;
  }

  if (competitionEl) competitionEl.textContent = leagueName;

  const scoreEl = document.getElementById('live-scoreText-m' + mNum);
  const statusEl = document.getElementById('live-statusText-m' + mNum);
  const container = document.getElementById('match-container-' + mNum);

  if (!scoreEl || !statusEl || !container) return;

  container.setAttribute('data-status', game.statusGroup ?? 0);

  const homeScore = home.score;
  const awayScore = away.score;

  if (isMatchScheduled(game)) {
    container.classList.remove('match-live');

    try {
      scoreEl.textContent =
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date(game.startTime)).toUpperCase();
    } catch (e) {
      scoreEl.textContent = 'VS';
    }

    statusEl.style.background = '#0f6f37';
    statusEl.style.textTransform = 'none';
    startCountdown(game.startTime, statusEl);
  } else {
    if (statusEl._countdown) {
      clearInterval(statusEl._countdown);
      statusEl._countdown = null;
    }

    scoreEl.textContent = (homeScore ?? '-') + ' - ' + (awayScore ?? '-');
    statusEl.style.textTransform = 'none';

    if (game.statusGroup === 4) {
      container.classList.remove('match-live');
      statusEl.textContent = 'Full Time';
      statusEl.style.background = '#c10707';
    } else {
      container.classList.add('match-live');
      statusEl.textContent = getCleanStatusText(game);
      statusEl.style.background = '#b91010';
    }
  }

  sortContainers();
}

/* =========================================
   SORT MATCH CARDS
========================================= */

function sortContainers() {
  const elements = Array.from(wrapper.querySelectorAll('.responsive-match-container'));

  elements.sort(function(a, b) {
    const statusA = Number(a.getAttribute('data-status')) || 0;
    const statusB = Number(b.getAttribute('data-status')) || 0;

    if (statusA === 4 && statusB !== 4) return 1;
    if (statusB === 4 && statusA !== 4) return -1;

    return Number(a.dataset.index) - Number(b.dataset.index);
  });

  elements.forEach(el => wrapper.appendChild(el));
}

/* =========================================
   MATCH LINK TIME CONTROL
========================================= */

function getMatchEndTime(game) {
  const candidates = [
    game.endTime,
    game.actualEndTime,
    game.gameEndTime,
    game.endDateTime
  ];

  for (const value of candidates) {
    if (!value) continue;
    const time = new Date(value).getTime();
    if (Number.isFinite(time)) return time;
  }

  return new Date(game.startTime).getTime() + 150 * 60000;
}

function canOpenCustomLink(game) {
  if (!game || !game.startTime) return false;
  const start = new Date(game.startTime).getTime();
  const end = getMatchEndTime(game);
  const now = Date.now();

  if (!Number.isFinite(start) || !Number.isFinite(end)) return false;
  return now >= start - 30 * 60000 && now <= end + 30 * 60000;
}

async function getFreshGame(id) {
  const response = await fetch(getGameUrl(id));
  if (!response.ok) throw new Error('Unable to load match');

  const data = await response.json();
  if (!data.game) throw new Error('Match data unavailable');

  window.MATCH_GAME_DATA[String(id)] = data.game;
  return data.game;
}

/* =========================================
   MATCH CARD CLICK
========================================= */

wrapper.addEventListener('click', async function(event) {
  const link = event.target.closest('a');
  if (!link) return;

  const container = link.closest('.responsive-match-container');
  if (!container) return;

  event.preventDefault();
  event.stopPropagation();

  const index = Number(container.dataset.index) - 1;
  const match = window.MATCH_LIST[index];
  if (!match) return;

  const id = String(match.id);

  if (isCustomMatchEntry(match)) {
    if (canOpenCustomMatchLink(match)) {
      window.location.href = match.link;
    }
    return;
  }

  try {
    const game = window.MATCH_GAME_DATA[id] || await getFreshGame(id);
    if (canOpenCustomLink(game) && match.link && match.link !== '#') {
      window.location.href = match.link;
    } else {
      window.location.hash = 'match-' + id;
    }
  } catch (error) {
    console.error(error);
    window.location.hash = 'match-' + id;
  }
}, true);

/* =========================================
   MATCH STATISTICS & DETAILS RENDERERS
========================================= */

function buildPlayerLookup(lineupsData) {
  const lookup = {};
  const members = (lineupsData && Array.isArray(lineupsData.members)) ? lineupsData.members : [];
  members.forEach(function(m) {
    if (m.id != null) {
      lookup[m.id] = {
        name: m.shortName || m.name || 'Player',
        athleteId: m.athleteId,
        competitorNum: m.competitorNum
      };
    }
  });
  return lookup;
}

function buildHeaderHtml(game) {
  const home = game.homeCompetitor || {};
  const away = game.awayCompetitor || {};

  const isScheduled = isMatchScheduled(game);
  const isLive = !isScheduled && game.statusGroup !== 4;

  const homeScore = isScheduled ? null : home.score;
  const awayScore = isScheduled ? null : away.score;

  const scoreText = isScheduled ? 'vs' : `${homeScore} - ${awayScore}`;
  const statusText = getCleanStatusText(game);

  const events = (game.chartEvents && Array.isArray(game.chartEvents.events))
    ? game.chartEvents.events
    : [];

  return {
    home,
    away,
    homeScore,
    awayScore,
    isScheduled,
    isLive,
    scoreText,
    statusText,
    events
  };
}

function buildScorersHtml(events, playerLookup) {
  const goalEvents = events.filter(e => e.outcome && e.outcome.id === 0);
  if (!goalEvents.length) return '';

  const homeGoals = [];
  const awayGoals = [];

  goalEvents.forEach(function(ev) {
    const player = playerLookup[ev.playerId];
    const name = player ? player.name : 'Goal';
    const time = ev.time ? safe(ev.time) : '';
    const label = `${safe(name)} ${time}`.trim();

    if (ev.competitorNum === 1) {
      homeGoals.push(`<div class="mds-goal"><span>⚽</span><span>${label}</span></div>`);
    } else if (ev.competitorNum === 2) {
      awayGoals.push(`<div class="mds-goal"><span>${label}</span><span>⚽</span></div>`);
    }
  });

  if (!homeGoals.length && !awayGoals.length) return '';

  return `
    <div class="mds-scorers">
      <div class="mds-side">${homeGoals.join('')}</div>
      <div class="mds-side mds-right">${awayGoals.join('')}</div>
    </div>
  `;
}

function buildEventsHtml(events, playerLookup) {
  const notable = events
    .filter(e =>
      (e.outcome && (e.outcome.id === 0 || e.outcome.id === 2)) &&
      parseFloat(e.xg || 0) >= 0.04
    )
    .sort((a, b) => {
      const ta = parseInt(String(a.time || '0').replace(/[^0-9]/g, ''), 10) || 0;
      const tb = parseInt(String(b.time || '0').replace(/[^0-9]/g, ''), 10) || 0;
      return ta - tb;
    });

  if (!notable.length) {
    return '<div class="mds-empty-msg">No notable chances recorded</div>';
  }

  return notable.map(function(ev) {
    const isAway = ev.competitorNum === 2;
    const player = playerLookup[ev.playerId];
    const playerName = player ? player.name : 'Unknown player';
    const isGoal = ev.outcome && ev.outcome.id === 0;
    const icon = isGoal ? '⚽' : '🎯';
    const subtitle = isGoal
      ? `Goal${ev.bodyPart ? ' · ' + ev.bodyPart : ''}${ev.goalDescription ? ' · ' + ev.goalDescription : ''}`
      : `${ev.outcome && ev.outcome.name ? ev.outcome.name : 'Shot'} · xG ${ev.xg || '0'}`;

    return `
      <div class="mds-event ${isAway ? 'mds-away-event' : ''}">
        <div class="mds-minute">${safe(ev.time || '')}</div>
        <div class="mds-icon">${icon}</div>
        <div class="mds-desc">
          ${safe(playerName)}
          <small>${safe(subtitle)}</small>
        </div>
      </div>
    `;
  }).join('');
}

function buildStatsHtml(statsResponse, game) {
  let gameStats = null;

  if (statsResponse && Array.isArray(statsResponse.statistics)) {
    gameStats = statsResponse.statistics;
  } else if (Array.isArray(statsResponse)) {
    const entry = statsResponse.find(s => Array.isArray(s.statistics));
    gameStats = entry ? entry.statistics : null;
  }

  if (!gameStats || !gameStats.length) {
    return '<div class="mds-empty-msg">Stats not available for this match</div>';
  }

  const homeId = game.homeCompetitor && game.homeCompetitor.id;
  const awayId = game.awayCompetitor && game.awayCompetitor.id;
  const grouped = {};

  gameStats.forEach(function(s) {
    const name = s.name || s.statName || s.displayName || 'Statistic';
    if (!grouped[name]) grouped[name] = {};
    grouped[name][s.competitorId] = s.value;
  });

  const rows = Object.keys(grouped).map(function(name) {
    const homeRaw = grouped[name][homeId];
    const awayRaw = grouped[name][awayId];

    const homeVal = parseFloat(String(homeRaw ?? '0').replace('%', '')) || 0;
    const awayVal = parseFloat(String(awayRaw ?? '0').replace('%', '')) || 0;
    const total = homeVal + awayVal;

    const homePct = total > 0 ? (homeVal / total) * 100 : 50;
    const awayPct = total > 0 ? (awayVal / total) * 100 : 50;

    return `
      <div class="mds-stat-row">
        <div class="mds-stat-labels">
          <span class="mds-val mds-home">${safe(homeRaw ?? 0)}</span>
          <span class="mds-name">${safe(name)}</span>
          <span class="mds-val mds-away">${safe(awayRaw ?? 0)}</span>
        </div>
        <div class="mds-bar">
          <div class="mds-home-fill" style="width:${homePct}%"></div>
          <div class="mds-away-fill" style="width:${awayPct}%"></div>
        </div>
      </div>
    `;
  });

  return rows.length
    ? rows.join('')
    : '<div class="mds-empty-msg">Stats not available for this match</div>';
}

function buildMatchInfoHtml(game) {
  const rows = [];

  if (game.startTime) {
    rows.push({ icon: '🕒', label: 'Kick-off', value: formatKickoff(game.startTime) });
  }

  const venue = game.venue;
  if (venue && venue.name) {
    rows.push({
      icon: '🏟️',
      label: 'Stadium',
      value: venue.city ? `${venue.name}, ${venue.city}` : venue.name
    });
  }

  let referees = [];
  if (Array.isArray(game.judges)) {
    referees = game.judges.map(j => j.name).filter(Boolean);
  } else if (game.referee && game.referee.name) {
    referees = [game.referee.name];
  }
  if (referees.length) {
    rows.push({ icon: '🟨', label: 'Referee', value: referees.join(', ') });
  }

  if (game.competitionDisplayName) {
    rows.push({ icon: '🏆', label: 'Competition', value: game.competitionDisplayName });
  }

  const resolvedRound = resolveRoundDisplay(game);
  if (resolvedRound) {
    rows.push({ icon: '📋', label: 'Round', value: resolvedRound });
  }

  if (!rows.length) {
    return '<div class="mds-empty-msg">No additional match information available</div>';
  }

  return rows.map(function(r) {
    return `
      <div class="mds-info-row">
        <div class="mds-info-label"><span>${r.icon}</span><span>${safe(r.label)}</span></div>
        <div class="mds-info-value">${safe(r.value)}</div>
      </div>
    `;
  }).join('');
}

function renderClassicPlayerRow(m) {
  const num = m.jerseyNumber ?? '-';
  const name = m.shortName || m.name || 'Player';
  const photo = m.athleteId ? `${ATHLETE_IMG_BASE}/${m.athleteId}` : '';

  return `
    <div class="mds-lineup-player">
      <span class="mds-lineup-num">${safe(num)}</span>
      ${photo
        ? `<img class="mds-lineup-avatar" src="${safe(photo)}" alt="" onerror="this.style.display='none'">`
        : ''}
      <span class="mds-lineup-name" title="${safe(name)}">${safe(name)}</span>
    </div>
  `;
}

function buildLineupsHtml(lineupsData, game) {
  const members = (lineupsData && Array.isArray(lineupsData.members)) ? lineupsData.members : [];
  const startersAll = members.filter(m => m.status === 1);
  const validPlayers = members.filter(p => p.name || p.shortName);

  if (!members.length || !startersAll.length || !validPlayers.length) {
    return `
      <div class="mds-card">
        <h3>Lineups</h3>
        <div class="mds-empty-msg">📋 Lineups have not been announced yet</div>
      </div>
    `;
  }

  const homeId = game.homeCompetitor && game.homeCompetitor.id;
  const awayId = game.awayCompetitor && game.awayCompetitor.id;
  const homeName = (game.homeCompetitor && game.homeCompetitor.name) || 'Home';
  const awayName = (game.awayCompetitor && game.awayCompetitor.name) || 'Away';

  function getTeamMembers(teamNum, compId) {
    return members.filter(function(m) {
      if (m.competitorNum != null && Number(m.competitorNum) === Number(teamNum)) return true;
      if (compId != null && m.competitorId != null && String(m.competitorId) === String(compId)) return true;
      return false;
    });
  }

  const homeMembers = getTeamMembers(1, homeId);
  const awayMembers = getTeamMembers(2, awayId);

  const homeStarters = homeMembers.filter(m => m.status === 1);
  const homeSubs = homeMembers.filter(m => m.status === 2);

  const awayStarters = awayMembers.filter(m => m.status === 1);
  const awaySubs = awayMembers.filter(m => m.status === 2);

  function renderTeamColumn(teamTitle, starters, subs) {
    return `
      <div>
        <div class="mds-lineup-col-title">${safe(teamTitle)}</div>
        <div class="mds-lineup-section-label">Starting XI</div>
        ${starters.length
          ? starters.map(renderClassicPlayerRow).join('')
          : '<div class="mds-empty-msg">Not available</div>'}
        ${subs.length
          ? `<div class="mds-lineup-section-label">Substitutes</div>
             ${subs.map(renderClassicPlayerRow).join('')}`
          : ''}
      </div>
    `;
  }

  return `
    <div class="mds-card">
      <h3>Lineups</h3>
      <div class="mds-lineup-grid">
        ${renderTeamColumn(homeName, homeStarters, homeSubs)}
        ${renderTeamColumn(awayName, awayStarters, awaySubs)}
      </div>
    </div>
  `;
}

function buildH2HHtml(h2hData, game) {
  let games = null;

  if (h2hData && h2hData.h2h && Array.isArray(h2hData.h2h.games) && h2hData.h2h.games.length > 0) {
    games = h2hData.h2h.games;
  } else if (h2hData && Array.isArray(h2hData.games) && h2hData.games.length > 0) {
    games = h2hData.games;
  }

  if (!games || !games.length) {
    const homeRecent = (game.homeCompetitor && Array.isArray(game.homeCompetitor.recentGames) ? game.homeCompetitor.recentGames : [])
      .filter(g => g.id !== game.id).slice(0, 5);
    const awayRecent = (game.awayCompetitor && Array.isArray(game.awayCompetitor.recentGames) ? game.awayCompetitor.recentGames : [])
      .filter(g => g.id !== game.id).slice(0, 5);

    if (!homeRecent.length && !awayRecent.length) return '';

    function renderFormList(teamName, recentGames) {
      if (!recentGames.length) return '';
      const rows = recentGames.map(function(g) {
        let dateStr = '';
        try {
          dateStr = new Intl.DateTimeFormat('en-GB', {
            timeZone: TIMEZONE_NAME,
            day: '2-digit',
            month: 'short'
          }).format(new Date(g.startTime));
        } catch (e) {}

        return `
          <div class="mds-h2h-match">
            <div class="mds-h2h-date">${safe(dateStr)}</div>
            <div class="mds-h2h-teams">${safe(g.homeCompetitor.name)} vs ${safe(g.awayCompetitor.name)}</div>
            <div class="mds-h2h-score">${safe(g.homeCompetitor.score ?? '-')} - ${safe(g.awayCompetitor.score ?? '-')}</div>
          </div>
        `;
      }).join('');

      return `
        <div style="margin-bottom:14px;">
          <div style="font-size:12px;color:var(--mds-sub);font-weight:700;margin-bottom:6px;">
            ${safe(teamName)} — Recent Form
          </div>
          ${rows}
        </div>
      `;
    }

    return `
      <div class="mds-card">
        <h3>Recent Form</h3>
        ${renderFormList(game.homeCompetitor.name, homeRecent)}
        ${renderFormList(game.awayCompetitor.name, awayRecent)}
      </div>
    `;
  }

  const homeId = game.homeCompetitor && game.homeCompetitor.id;
  let homeWins = 0;
  let awayWins = 0;
  let draws = 0;

  games.forEach(function(g) {
    const hs = Number(g.homeCompetitor && g.homeCompetitor.score);
    const as = Number(g.awayCompetitor && g.awayCompetitor.score);
    if (!Number.isFinite(hs) || !Number.isFinite(as)) return;

    if (hs === as) {
      draws++;
    } else {
      const winnerId = hs > as ? g.homeCompetitor.id : g.awayCompetitor.id;
      if (winnerId === homeId) homeWins++;
      else awayWins++;
    }
  });

  const matchesHtml = games.slice(0, 8).map(function(g) {
    let dateStr = '';
    try {
      dateStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: TIMEZONE_NAME,
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(new Date(g.startTime));
    } catch (e) {}

    return `
      <div class="mds-h2h-match">
        <div class="mds-h2h-date">${safe(dateStr)}</div>
        <div class="mds-h2h-teams">${safe(g.homeCompetitor.name)} vs ${safe(g.awayCompetitor.name)}</div>
        <div class="mds-h2h-score">${safe(g.homeCompetitor.score ?? '-')} - ${safe(g.awayCompetitor.score ?? '-')}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="mds-card">
      <h3>Head-to-Head (H2H)</h3>
      <div class="mds-h2h-summary">
        <div class="mds-h2h-stat">
          <div class="mds-num" style="color:var(--mds-home);">${homeWins}</div>
          <div class="mds-lbl">${safe(game.homeCompetitor.name)} wins</div>
        </div>
        <div class="mds-h2h-stat">
          <div class="mds-num">${draws}</div>
          <div class="mds-lbl">Draws</div>
        </div>
        <div class="mds-h2h-stat">
          <div class="mds-num" style="color:var(--mds-away);">${awayWins}</div>
          <div class="mds-lbl">${safe(game.awayCompetitor.name)} wins</div>
        </div>
      </div>
      <div>${matchesHtml}</div>
    </div>
  `;
}

async function loadMatchStats(id) {
  currentStatsId = String(id);
  syncThemeMode();

  detailsContent.innerHTML = `
    <div class="mds-loading">
      <div class="mds-spinner"></div>
      <div>Loading match statistics...</div>
    </div>
  `;

  try {
    let game = window.MATCH_GAME_DATA[String(id)];
    if (!game) game = await getFreshGame(id);

    if (currentStatsId !== String(id)) return;

    const matchupId = (game.homeCompetitor && game.awayCompetitor && game.competitionId)
      ? `${game.homeCompetitor.id}-${game.awayCompetitor.id}-${game.competitionId}`
      : '';

    const [statsRes, lineupsRes, h2hRes] = await Promise.allSettled([
      fetch(getStatsUrl(id)).then(r => r.ok ? r.json() : null),
      fetch(getLineupsUrl(id)).then(r => r.ok ? r.json() : null),
      matchupId ? fetch(getH2HUrl(id, matchupId)).then(r => r.ok ? r.json() : null) : Promise.resolve(null)
    ]);

    if (currentStatsId !== String(id)) return;

    const statsData = statsRes.status === 'fulfilled' ? statsRes.value : null;
    const lineupsData = lineupsRes.status === 'fulfilled' ? lineupsRes.value : null;
    const h2hData = h2hRes.status === 'fulfilled' ? h2hRes.value : null;
    const playerLookup = buildPlayerLookup(lineupsData);

    const headerInfo = buildHeaderHtml(game);
    const home = headerInfo.home;
    const away = headerInfo.away;
    const compLogo = getCompetitionLogoUrl(game);

    detailsContent.innerHTML = `
      <div class="mds-header">
        <div class="mds-competition">
          ${compLogo
            ? `<img src="${safe(compLogo)}" alt="" onerror="this.style.display='none'">`
            : ''}
          <span>${safe(game.competitionDisplayName || 'Match Details')}</span>
        </div>

        <div class="mds-scoreboard">
          <div class="mds-team">
            <img src="${safe(home.id ? IMG_BASE + '/' + home.id : '')}"
                 onerror="this.style.visibility='hidden'"
                 alt="">
            <div class="mds-team-name">${safe(home.name || 'Home Team')}</div>
          </div>

          <div class="mds-score-block">
            <div class="mds-score">${safe(headerInfo.scoreText)}</div>
            <div class="mds-status ${headerInfo.isLive ? 'mds-live' : ''}">
              ${safe(headerInfo.statusText)}
            </div>
            <div class="mds-kickoff">${safe(formatKickoff(game.startTime))}</div>
          </div>

          <div class="mds-team">
            <img src="${safe(away.id ? IMG_BASE + '/' + away.id : '')}"
                 onerror="this.style.visibility='hidden'"
                 alt="">
            <div class="mds-team-name">${safe(away.name || 'Away Team')}</div>
          </div>
        </div>

        ${buildScorersHtml(headerInfo.events, playerLookup)}

        <div class="mds-venue-row">
          <div>🕒 Times shown in ${safe(TIMEZONE_NAME.replace('_', ' '))}</div>
        </div>
      </div>

      <div class="mds-card">
        <h3>Key shots & goals</h3>
        <div>${buildEventsHtml(headerInfo.events, playerLookup)}</div>
      </div>

      <div class="mds-card">
        <h3>Match statistics</h3>
        <div>${buildStatsHtml(statsData, game)}</div>
      </div>

      ${buildH2HHtml(h2hData, game)}

      <div class="mds-card">
        <h3>Match information</h3>
        <div>${buildMatchInfoHtml(game)}</div>
      </div>

      ${buildLineupsHtml(lineupsData, game)}

      <p style="text-align:center;color:var(--mds-sub);font-size:11px;margin-top:12px;">
        Match live data by b4xsports
      </p>
    `;
  } catch (error) {
    console.error('Statistics error:', error);

    detailsContent.innerHTML = `
      <div class="mds-error">
        <div>Unable to load match statistics. Please try again later.</div>
        <button class="stats-back" type="button" onclick="location.reload()">
          Retry
        </button>
      </div>
    `;
  }
}

/* =========================================
   OPEN MATCH DETAILS BY URL HASH
========================================= */

function handleHash() {
  const found = location.hash.match(/^#match-(\d+)$/);

  if (found) {
    const id = found[1];
    syncThemeMode();
    wrapper.style.display = 'none';
    detailsPage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadMatchStats(id);
  } else {
    detailsPage.style.display = 'none';
    wrapper.style.display = '';
    currentStatsId = null;
  }
}

window.addEventListener('hashchange', handleHash);

/* =========================================
   BACK BUTTON
========================================= */

document.getElementById('stats-back-button')
.addEventListener('click', function() {
  currentStatsId = null;
  history.pushState(null, '', location.pathname + location.search);
  handleHash();
});

/* =========================================
   AUTO UPDATE EVERY 45 SECONDS
========================================= */

async function refreshMatches() {
  if (!window.MATCH_LIST.length) return;

  for (let i = 0; i < window.MATCH_LIST.length; i++) {
    const match = window.MATCH_LIST[i];
    if (isCustomMatchEntry(match)) {
      updateCustomCard(match, i + 1);
    } else {
      await fetchLiveUpdate(match.id, i + 1);
    }
  }
}

loadMatches();
setInterval(refreshMatches, 45000);

})();
