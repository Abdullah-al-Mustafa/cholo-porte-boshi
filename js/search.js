const dummyData = [
  { type: 'article', title: 'বীজগণিতের প্রাথমিক ধারণা', class: '৬', subject: 'গণিত', chapter: 'বীজগণিত' },
  { type: 'video', title: 'আলোর প্রতিফলন - ইউটিউব', class: '৯', subject: 'পদার্থবিজ্ঞান', chapter: 'আলো' },
  { type: 'article', title: 'বাংলা সাহিত্যের ইতিহাস', class: '১০', subject: 'বাংলা', chapter: 'সাহিত্য' },
  { type: 'mcq', title: 'রসায়ন MCQ সেট ১', class: '৯', subject: 'রসায়ন', chapter: 'পর্যায় সারণি' },
  { type: 'article', title: 'ইংরেজি গ্রামার: Tense', class: '৮', subject: 'ইংরেজি', chapter: 'Tense' },
  { type: 'video', title: 'জীবকোষ ও এর গঠন', class: '৯', subject: 'জীববিজ্ঞান', chapter: 'কোষ' },
  { type: 'cq', title: 'সৃজনশীল প্রশ্ন: সমাজবিজ্ঞান', class: '১০', subject: 'সমাজবিজ্ঞান', chapter: 'সমাজকাঠামো' },
];

const searchInput = document.getElementById('searchInput');
const resultsArea = document.getElementById('results');

searchInput.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  resultsArea.innerHTML = '';

  if (query.length === 0) return;

  const filtered = dummyData.filter(item => {
    return (
      item.title.toLowerCase().includes(query) ||
      item.class.includes(query) ||
      item.subject.toLowerCase().includes(query) ||
      item.chapter.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    resultsArea.innerHTML = '<p style="text-align:center;color:#888;">কিছু পাওয়া যায়নি</p>';
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `
      <strong>[${item.type.toUpperCase()}]</strong> ${item.title}
      <br><small>ক্লাস: ${item.class} | বিষয়: ${item.subject} | অধ্যায়: ${item.chapter}</small>
    `;
    resultsArea.appendChild(div);
  });
});
