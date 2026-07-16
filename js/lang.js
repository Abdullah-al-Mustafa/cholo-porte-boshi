// Language system for পড়তে বসি
// Website name "পড়তে বসি" never changes
(function() {
  const translations = {
    bn: {
      home: 'হোম',
      exam: 'পরীক্ষা',
      ai: 'এআই',
      tools: 'টুলস',
      settings: 'সেটিংস',
      search: 'সার্চ',
      videoClass: 'ভিডিও ক্লাস',
      allVideos: 'সব ভিডিও →',
      noVideos: 'কোনো ভিডিও নেই',
      loadingVideos: 'ভিডিও লোড হচ্ছে...',
      english1st: 'English 1st Paper',
      english2nd: 'English 2nd Paper',
      bangla2nd: 'বাংলা ২য় পত্র',
      pdfBooks: 'PDF Books',
      guideBooks: 'Guide Books',
      modelTest: 'Model Test',
      singleTest: 'Single Test',
      fullModelTest: 'Full Model Test',
      mcqTest: 'MCQ Test',
      cqTest: 'CQ Test',
      sqTest: 'SQ Test',
      startTest: 'Start Test',
      tutor: 'Tutor',
      calculator: 'ক্যালকুলেটর',
      translator: 'অনুবাদক',
      contact: 'যোগাযোগ',
      about: 'আমাদের সম্পর্কে',
      version: 'ভার্সন',
      language: 'অ্যাপ ভাষা',
    },
    en: {
      home: 'Home',
      exam: 'Exam',
      ai: 'AI',
      tools: 'Tools',
      settings: 'Settings',
      search: 'Search',
      videoClass: 'Video Class',
      allVideos: 'All Videos →',
      noVideos: 'No videos',
      loadingVideos: 'Loading videos...',
      english1st: 'English 1st Paper',
      english2nd: 'English 2nd Paper',
      bangla2nd: 'Bangla 2nd Paper',
      pdfBooks: 'PDF Books',
      guideBooks: 'Guide Books',
      modelTest: 'Model Test',
      singleTest: 'Single Test',
      fullModelTest: 'Full Model Test',
      mcqTest: 'MCQ Test',
      cqTest: 'CQ Test',
      sqTest: 'SQ Test',
      startTest: 'Start Test',
      tutor: 'Tutor',
      calculator: 'Calculator',
      translator: 'Translator',
      contact: 'Contact',
      about: 'About Us',
      version: 'Version',
      language: 'App Language',
    }
  };

  window.getLang = function() {
    return localStorage.getItem('ui-language') || 'bn';
  };

  window.t = function(key) {
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
  };

  window.applyLanguage = function() {
    const lang = getLang();
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  };

  // Auto-apply on load
  document.addEventListener('DOMContentLoaded', function() {
    applyLanguage();
  });
})();
