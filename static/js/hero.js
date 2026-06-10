(function () {
  const GIF_DURATION_MS = 5000;
  const media = document.getElementById('hero-media');
  const gif = document.getElementById('hero-gif');
  const avatar = document.getElementById('hero-avatar');

  if (!media || !gif || !avatar) return;

  let timeout = null;
  const gifSrc = gif.getAttribute('src').split('?')[0];

  function fadeToAvatar() {
    gif.classList.remove('is-visible');
    avatar.classList.add('is-visible');
  }

  function playGif() {
    if (timeout) clearTimeout(timeout);
    avatar.classList.remove('is-visible');
    gif.classList.add('is-visible');
    gif.src = gifSrc + '?t=' + Date.now();
    timeout = setTimeout(fadeToAvatar, GIF_DURATION_MS);
  }

  timeout = setTimeout(fadeToAvatar, GIF_DURATION_MS);
  media.addEventListener('mouseenter', playGif);
})();
