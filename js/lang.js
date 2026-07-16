(function() {
  const translations = {
    bn: {
      home: 'হোম', exam: 'পরীক্ষা', ai: 'এআই', tools: 'টুলস',
      settings: 'সেটিংস', search: 'সার্চ', version: 'ভার্সন',
      language: 'অ্যাপ ভাষা', currentLanguage: 'বর্তমান: বাংলা',
      about: 'আমাদের সম্পর্কে', aboutDesc: 'প্ল্যাটফর্ম সম্পর্কে জানুন',
      contact: 'যোগাযোগ', contactDesc: 'আমাদের সাথে যোগাযোগ করুন',
      yourName: 'আপনার নাম', email: 'ইমেইল',
      yourMessage: 'আপনার বার্তা লিখুন...', send: 'পাঠান',
      sent: 'পাঠানো হয়েছে!', sentDesc: 'আমরা শীঘ্রই যোগাযোগ করব।',
      heroTagline: 'পড়াশোনার সবকিছু এক জায়গায়',
      videoClass: 'ভিডিও ক্লাস', allVideos: 'সব ভিডিও →',
      noVideos: 'কোনো ভিডিও নেই', loadingVideos: 'ভিডিও লোড হচ্ছে...',
      videoError: 'ভিডিও লোড করতে সমস্যা হচ্ছে',
      english1st: 'English 1st Paper', english2nd: 'English 2nd Paper',
      bangla2nd: 'বাংলা ২য় পত্র', pdfBooks: 'PDF Books',
      guideBooks: 'Guide Books',
      modelTest: 'Model Test', singleTest: 'Single Test',
      fullModelTest: 'Full Model Test', comingSoon: 'শীঘ্রই আসছে',
      startTest: 'Start Test', mcqTest: 'MCQ Test',
      cqTest: 'CQ Test', sqTest: 'SQ Test',
      selectClass: 'ক্লাস নির্বাচন করুন', selectSubject: 'বিষয় নির্বাচন করুন',
      selectChapter: 'অধ্যায় (ঐচ্ছিক)',
      questionCount: 'টি প্রশ্ন', startExam: 'পরীক্ষা শুরু করুন',
      next: 'পরবর্তী →', submit: 'জমা দিন',
      tryAgain: 'আবার পরীক্ষা দিন', goBack: 'ফিরে যান',
      yourScore: 'আপনার স্কোর', score: 'সঠিক উত্তর',
      noQuestions: 'এই সিলেকশনে কোনো প্রশ্ন পাওয়া যায়নি',
      filterAll: 'All', class9_10: 'Class 9-10',
      class8: 'Class 8', class7: 'Class 7', class6: 'Class 6',
      calculator: 'ক্যালকুলেটর', translator: 'অনুবাদক',
      calcDesc: 'সাধারণ ও বৈজ্ঞানিক হিসাব',
      transDesc: 'একাধিক ভাষায় অনুবাদ',
      basic: 'সাধারণ', scientific: 'বৈজ্ঞানিক',
      algebra: 'বীজগণিত', geometry: 'জ্যামিতি',
      tutor: 'Tutor', tutorHello: 'হ্যালো! আমি তোমার Tutor AI',
      tutorAsk: 'আজ কী শিখতে চাও?',
      tutorPlaceholder: 'কিছু লিখুন...',
      completingStory: 'Completing Story', dialogue: 'Dialogue',
      paragraph: 'Paragraph', email2: 'Email', letter: 'Letter',
      application: 'Application', shortComposition: 'Short Composition',
      probondhoRochona: 'প্রবন্ধ রচনা', vabSomprosharon: 'ভাব সম্প্রসারণ',
      sarangsho: 'সারাংশ', sharmormo: 'সারমর্ম',
      chitipotro: 'চিঠিপত্র', songbaadProtibedon: 'সংবাদ প্রতিবেদন',
      onucchedRochona: 'অনুচ্ছেদ রচনা',
    },
    en: {
      home: 'Home', exam: 'Exam', ai: 'AI', tools: 'Tools',
      settings: 'Settings', search: 'Search', version: 'Version',
      language: 'App Language', currentLanguage: 'Current: English',
      about: 'About Us', aboutDesc: 'Learn about the platform',
      contact: 'Contact', contactDesc: 'Get in touch with us',
      yourName: 'Your name', email: 'Email',
      yourMessage: 'Write your message...', send: 'Send',
      sent: 'Sent!', sentDesc: 'We will contact you soon.',
      heroTagline: 'All your studies in one place',
      videoClass: 'Video Class', allVideos: 'All Videos →',
      noVideos: 'No videos', loadingVideos: 'Loading videos...',
      videoError: 'Error loading videos',
      english1st: 'English 1st Paper', english2nd: 'English 2nd Paper',
      bangla2nd: 'Bangla 2nd Paper', pdfBooks: 'PDF Books',
      guideBooks: 'Guide Books',
      modelTest: 'Model Test', singleTest: 'Single Test',
      fullModelTest: 'Full Model Test', comingSoon: 'Coming Soon',
      startTest: 'Start Test', mcqTest: 'MCQ Test',
      cqTest: 'CQ Test', sqTest: 'SQ Test',
      selectClass: 'Select Class', selectSubject: 'Select Subject',
      selectChapter: 'Chapter (optional)',
      questionCount: 'questions', startExam: 'Start Exam',
      next: 'Next →', submit: 'Submit',
      tryAgain: 'Try Again', goBack: 'Go Back',
      yourScore: 'Your Score', score: 'Correct Answers',
      noQuestions: 'No questions found for this selection',
      filterAll: 'All', class9_10: 'Class 9-10',
      class8: 'Class 8', class7: 'Class 7', class6: 'Class 6',
      calculator: 'Calculator', translator: 'Translator',
      calcDesc: 'Standard & scientific calculations',
      transDesc: 'Translate between 50+ languages',
      basic: 'Basic', scientific: 'Scientific',
      algebra: 'Algebra', geometry: 'Geometry',
      tutor: 'Tutor', tutorHello: "Hello! I'm your Tutor AI",
      tutorAsk: 'What do you want to learn today?',
      tutorPlaceholder: 'Ask anything...',
      completingStory: 'Completing Story', dialogue: 'Dialogue',
      paragraph: 'Paragraph', email2: 'Email', letter: 'Letter',
      application: 'Application', shortComposition: 'Short Composition',
      probondhoRochona: 'Bangla Essay', vabSomprosharon: 'Thought Expansion',
      sarangsho: 'Summary', sharmormo: 'Essence',
      chitipotro: 'Letter Writing', songbaadProtibedon: 'News Report',
      onucchedRochona: 'Paragraph Writing',
    }
  };

  window.getLang = function() { return localStorage.getItem('ui-language') || 'bn'; };
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
    document.querySelectorAll('[data-t-ph]').forEach(el => {
      const key = el.getAttribute('data-t-ph');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
    document.querySelectorAll('[data-t-html]').forEach(el => {
      const key = el.getAttribute('data-t-html');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  };
  document.addEventListener('DOMContentLoaded', function() { applyLanguage(); });
})();
