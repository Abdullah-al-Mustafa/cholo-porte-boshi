(function() {
  const body = document.body;

  const savedTheme = localStorage.getItem('cpb-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  } else if (savedTheme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) body.classList.add('dark');
  }

  window.cpbTheme = {
    toggleDarkMode: function() {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      localStorage.setItem('cpb-theme', isDark ? 'dark' : 'light');
    },
    isDarkMode: function() {
      return body.classList.contains('dark');
    }
  };
})();
