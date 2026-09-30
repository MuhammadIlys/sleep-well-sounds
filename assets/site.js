
document.documentElement.classList.add('js');
// Replace with the real Google Play listing URL when available.
const PLAY_URL = "https://play.google.com/store/search?q=Sleep%20Well%20Sounds&c=apps";

const LOGO = '<img src="assets/logo.png" alt="" width="34" height="34">';

const META = {
  home:{t:"Sleep Well Sounds | Relax, Unwind & Sleep",d:"Create your perfect relaxing soundscape with rain, breeze, thunder and more. Mix sounds, set a sleep timer, and enjoy a peaceful atmosphere."},
  about:{t:"About Sleep Well Sounds | Ambient Sound Mixer for Relaxation",d:"Learn about Sleep Well Sounds, a simple ambient sound mixer for creating your own calming soundscape with rain, breeze and thunder."},
  "privacy-policy":{t:"Privacy Policy | Sleep Well Sounds",d:"How Sleep Well Sounds handles information. No account required, no microphone recording, and core sounds that work on your device."},
  terms:{t:"Terms & Conditions | Sleep Well Sounds",d:"Terms and conditions for using the Sleep Well Sounds relaxation and ambient sound application."}
};

/* ---------- seeded random ---------- */
function rng(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}

/* ---------- landscape scene ---------- */
function scene(uid,stars,opts={}){
  const r=rng(uid.length*97+13);
  let s='';
  for(let i=0;i<stars;i++){
    const x=r()*1600,y=r()*520,rad=(r()*1.3+.4).toFixed(2),d=(r()*6).toFixed(1);
    s+=`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${rad}" style="animation-delay:-${d}s"/>`;
  }
  return `<svg class="scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="sky${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A0912"/><stop offset=".45" stop-color="#16213A"/><stop offset=".8" stop-color="#2a2f5a"/><stop offset="1" stop-color="#3a3768"/></linearGradient>
    <radialGradient id="moon${uid}"><stop offset="0" stop-color="#DDEBFF" stop-opacity=".55"/><stop offset=".35" stop-color="#8B7CC8" stop-opacity=".18"/><stop offset="1" stop-color="#8B7CC8" stop-opacity="0"/></radialGradient>
    <linearGradient id="lake${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2650"/><stop offset="1" stop-color="#0A0912"/></linearGradient>
    <linearGradient id="mist${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8c6ef" stop-opacity="0"/><stop offset=".5" stop-color="#b8c6ef" stop-opacity=".16"/><stop offset="1" stop-color="#b8c6ef" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky${uid})"/>
  <g class="stars">${s}</g>
  <circle cx="1180" cy="200" r="260" fill="url(#moon${uid})"/>
  <circle cx="1180" cy="200" r="44" fill="#DDEBFF"/>
  <circle cx="1166" cy="190" r="44" fill="#c6d7f2" opacity=".35"/>
  <ellipse class="cloud" cx="400" cy="250" rx="260" ry="34"/>
  <ellipse class="cloud b" cx="1000" cy="330" rx="320" ry="30"/>
  <ellipse class="cloud" cx="1350" cy="140" rx="200" ry="22"/>
  <path d="M0 560 L140 470 L260 520 L420 400 L560 500 L700 430 L860 520 L1020 410 L1180 500 L1330 440 L1480 520 L1600 470 V900 H0Z" fill="#232c58"/>
  <rect y="480" width="1600" height="120" fill="url(#mist${uid})"/>
  <path d="M0 640 L180 540 L320 600 L520 500 L700 610 L880 540 L1060 620 L1240 520 L1420 610 L1600 560 V900 H0Z" fill="#161e40"/>
  <rect y="580" width="1600" height="120" fill="url(#mist${uid})"/>
  <path d="M0 720 L200 650 L400 710 L620 640 L820 720 L1040 660 L1260 730 L1440 670 L1600 720 V900 H0Z" fill="#0d1226"/>
  <rect y="760" width="1600" height="140" fill="url(#lake${uid})"/>
  <ellipse cx="1180" cy="800" rx="34" ry="120" fill="#DDEBFF" opacity=".12"/>
  <ellipse cx="1180" cy="810" rx="14" ry="90" fill="#DDEBFF" opacity=".14"/>
  <rect y="730" width="1600" height="80" fill="url(#mist${uid})"/>
  </svg>`;
}

/* ---------- small art tiles ---------- */
function art(kind){
  const bg=`<defs><linearGradient id="a${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2550"/><stop offset="1" stop-color="#0d1226"/></linearGradient></defs><rect width="120" height="96" fill="url(#a${kind})"/>`;
  if(kind==='rain'){let l='';const r=rng(7);for(let i=0;i<16;i++){const x=r()*120,y=r()*70;l+=`<path d="M${x.toFixed(0)} ${y.toFixed(0)}l-3 12" stroke="#9fc2ea" stroke-width="1.2" stroke-linecap="round" opacity=".7"/>`}return `<svg viewBox="0 0 120 96" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${bg}<ellipse cx="60" cy="24" rx="46" ry="14" fill="#3a4573"/><ellipse cx="40" cy="26" rx="26" ry="11" fill="#46528a"/>${l}<path d="M0 90q30-8 60 0t60 0V96H0z" fill="#16213A"/></svg>`}
  if(kind==='breeze'){return `<svg viewBox="0 0 120 96" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${bg}<circle cx="92" cy="22" r="9" fill="#DDEBFF" opacity=".85"/><g fill="none" stroke="#a9c6ee" stroke-linecap="round" stroke-width="2"><path d="M12 40h58a8 8 0 1 0-8-8"/><path d="M22 56h70a9 9 0 1 1-9 9" opacity=".7"/><path d="M8 72h40" opacity=".5"/></g><path d="M0 92l30-16 26 12 30-18 34 20V96H0z" fill="#16213A"/></svg>`}
  return `<svg viewBox="0 0 120 96" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${bg}<ellipse cx="60" cy="30" rx="50" ry="18" fill="#3b3f78"/><ellipse cx="84" cy="34" rx="30" ry="14" fill="#4a4c8c"/><path d="M66 38l-8 16h8l-6 16 16-22h-9l6-10z" fill="#e9defc" opacity=".8"/><path d="M0 92l24-14 28 10 26-16 42 18V96H0z" fill="#16213A"/></svg>`;
}

/* ---------- phone mockups ---------- */
function phone(kind,cls){
  let body='';
  const top=`<div class="app-top"><span>Sleep Well Sounds</span><small>Now playing</small></div>`;
  const chan=(n,v)=>`<div class="chan"><div class="r"><span>${n}</span><span>${v}%</span></div><div class="track"><b style="width:${v}%"></b></div></div>`;
  if(kind==='mixer'){
    body=top+chan('Rainfall',70)+chan('Breeze',35)+chan('Thunder',20)+`<div class="app-foot"><div class="t"><span>Sleep timer</span><strong>30 min</strong></div><div class="playbtn" aria-hidden="true"></div></div>`;
  }else if(kind==='controls'){
    body=top+`<div class="vbig"><div style="font-weight:600">Rainfall</div><div class="vbar"><b></b></div><div class="vnum">72%</div><div style="color:var(--muted)">Volume</div></div><div class="app-foot"><div class="t"><span>Mix</span><strong>3 sounds</strong></div><div class="playbtn" aria-hidden="true"></div></div>`;
  }else{
    body=top+`<div class="big-ring"><svg viewBox="0 0 200 200" width="150" height="150" style="transform:rotate(-90deg)"><circle cx="100" cy="100" r="88" fill="none" stroke="rgba(221,235,255,.1)" stroke-width="9"/><circle cx="100" cy="100" r="88" fill="none" stroke="#8B7CC8" stroke-width="9" stroke-linecap="round" stroke-dasharray="553" stroke-dashoffset="180"/></svg><div class="ct">30:00<small>remaining</small></div></div><div class="chips"><span>15</span><span class="on">30</span><span>45</span><span>60</span></div><div class="app-foot" style="margin-top:auto"><div class="t"><span>Stops automatically</span><strong>Sleep timer</strong></div><div class="playbtn" aria-hidden="true"></div></div>`;
  }
  return `<div class="phone ${cls||''}" role="img" aria-label="Sleep Well Sounds app screen"><div class="notch"></div><div class="screen">${body}</div></div>`;
}

/* ---------- feature + faq data ---------- */
const IC={
  mix:'<path d="M3 12c3-6 6-6 9 0s6 6 9 0"/><path d="M3 18c3-6 6-6 9 0s6 6 9 0" opacity=".5"/>',
  vol:'<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="8" cy="17" r="2"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 3h6"/>',
  bg:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
  off:'<path d="M3 3l18 18M8.5 16.4a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 3.2-2M12 20h.01M10.7 5.1A15 15 0 0 1 22 9M2 9a15 15 0 0 1 4-2.7"/>',
  moon:'<path d="M20 14.5A8 8 0 1 1 9.500 4a6.500 6.500 0 0 0 10.500 10.500z"/>',
  tap:'<path d="M9 11V5a2 2 0 1 1 4 0v6M13 10a2 2 0 1 1 4 0v3a6 6 0 0 1-6 6H10a5 5 0 0 1-4-2l-2-3a2 2 0 0 1 3-2l2 2"/>',
  grow:'<path d="M12 21v-9M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 15c0-3-2-5-6-5 0 3 2 5 6 5z"/>'
};
const FEATURES=[
  ['mix','Mix Multiple Sounds','Combine up to three ambient sounds at the same time.'],
  ['vol','Individual Volume Control','Adjust every sound independently.'],
  ['timer','Sleep Timer','Choose 15, 30, 45, or 60 minutes.'],
  ['bg','Background Playback','Keep your soundscape playing while using other apps or when your screen is locked.'],
  ['off','Offline-First','Core sounds are bundled with the app so the main sound experience does not depend on an internet connection.'],
  ['moon','Night-Friendly Interface','A dark interface designed for comfortable nighttime use.'],
  ['tap','Simple Controls','Start your soundscape quickly without complicated setup.'],
  ['grow','Growing Sound Library','More relaxing sounds and features can be introduced in future updates.']
];
const FAQ=[
  ['What is Sleep Well Sounds?','Sleep Well Sounds is an ambient sound mixer designed to help users create relaxing soundscapes for sleep, relaxation, focus, and quiet time.'],
  ['What sounds are available?','The app currently includes rainfall, breeze, and thunder, with more sounds planned for future updates.'],
  ['Can I mix multiple sounds?','Yes. You can mix up to three sounds simultaneously and control each sound independently.'],
  ['Does it work offline?','The core sound experience is designed to work offline because the main sounds are bundled with the app.'],
  ['Does the app have a sleep timer?','Yes. You can choose 15, 30, 45, or 60 minutes.'],
  ['Can sounds play when my phone is locked?','The app supports background playback so your soundscape can continue when the screen is locked.'],
  ['Does Sleep Well Sounds record my microphone?','No. The app does not use the microphone to record or upload surrounding sounds.'],
  ['Is an account required?','No account is required for the core app experience.']
];

/* ---------- router ---------- */
const main=document.getElementById('main');
let io;
function hydrate(root){
  root.querySelectorAll('[data-scene]').forEach((el,i)=>{el.outerHTML=scene(el.dataset.scene+i,+el.dataset.stars||60)});
  root.querySelectorAll('[data-phone]').forEach(el=>{el.outerHTML=phone(el.dataset.phone,el.dataset.cls)});
  root.querySelectorAll('[data-art]').forEach(el=>{el.innerHTML=art(el.dataset.art)});
  root.querySelectorAll('[data-features]').forEach(el=>{el.innerHTML=FEATURES.map(f=>`<div class="feat reveal"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[f[0]]}</svg></div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('')});
  root.querySelectorAll('[data-faq]').forEach(el=>{el.innerHTML=FAQ.map(q=>`<details class="reveal"><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')});
  root.querySelectorAll('[data-particles]').forEach(el=>{const r=rng(31);let h='';for(let i=0;i<26;i++){h+=`<i style="left:${(r()*100).toFixed(1)}%;animation-duration:${(24+r()*30).toFixed(0)}s;animation-delay:-${(r()*40).toFixed(0)}s;transform:scale(${(.6+r()).toFixed(2)})"></i>`}el.innerHTML=h});
  root.querySelectorAll('[data-logo]').forEach(el=>{el.innerHTML=LOGO});
  root.querySelectorAll('[data-play]').forEach(a=>{a.href=PLAY_URL});
  // timer
  const arc=root.querySelector('#arc');
  if(arc){
    const tn=root.querySelector('#tnum'),C=553;
    root.querySelectorAll('.tchips button').forEach(b=>b.addEventListener('click',()=>{
      root.querySelectorAll('.tchips button').forEach(x=>x.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true');
      const m=+b.dataset.m;tn.textContent=m;arc.style.strokeDashoffset=C*(1-m/60);
    }));
    arc.style.strokeDashoffset=C*(1-45/60);
  }
  // reveal
  if(io)io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  root.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
/* ---------- header ---------- */
const hdr=document.getElementById('hdr'),mb=document.getElementById('menuBtn'),menu=document.getElementById('menu');
function closeMenu(){menu.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu')}
mb.addEventListener('click',()=>{const o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>30),{passive:true});
document.querySelectorAll('[data-play]').forEach(a=>a.href=PLAY_URL);
document.querySelectorAll('[data-logo]').forEach(el=>el.innerHTML=LOGO);
hydrate(document);
const pg=document.body.dataset.page;
document.querySelectorAll('#menu a[data-r]').forEach(a=>{if(a.dataset.r===pg)a.setAttribute('aria-current','page')});
