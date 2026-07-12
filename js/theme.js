(function() {
  const body = document.body;

  const savedTheme = localStorage.getItem('cpb-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  const savedFontSize = localStorage.getItem('cpb-font-size');
  if (savedFontSize) {
    document.documentElement.style.setProperty('--font-size', savedFontSize + 'px');
  }

  window.cpbTheme = {
    toggleDarkMode: function() {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      localStorage.setItem('cpb-theme', isDark ? 'dark' : 'light');
    },
    isDarkMode: function() {
      return body.classList.contains('dark');
    },
    setFontSize: function(size) {
      document.documentElement.style.setProperty('--font-size', size + 'px');
      localStorage.setItem('cpb-font-size', size);
    },
    getFontSize: function() {
      const val = getComputedStyle(document.documentElement).getPropertyValue('--font-size').trim();
      return parseInt(val);
    }
  };
})();
