const foundationQuestions = [
  q('HTML', 'Beginner', 'Basic', 'What is the main job of HTML on a web page?', ['To give the page structure and content', 'To store user passwords', 'To make API calls faster', 'To host the website'], 0, 'HTML is the skeleton of a page. It describes headings, paragraphs, links, images, forms, and other content.'),
  q('CSS', 'Beginner', 'Basic', 'What is the main job of CSS?', ['To style and lay out the page', 'To create the database', 'To replace JavaScript', 'To send HTTP requests only'], 0, 'CSS controls visual presentation: colors, spacing, fonts, layout, responsive behavior, and animations.'),
  q('JavaScript', 'Beginner', 'Basic', 'What is the main job of JavaScript in the browser?', ['To add behavior and interactivity', 'To write HTML tags only', 'To register domain names', 'To compress images automatically'], 0, 'JavaScript lets the page react to clicks, input, network responses, timers, state changes, and other events.'),
  q('HTML', 'Beginner', 'Basic', 'Which element should usually be used for the most important heading on a page?', ['h1', 'div', 'span', 'br'], 0, 'The h1 element represents the main heading. A clear heading structure helps users, search engines, and assistive tools.'),
  q('HTML', 'Beginner', 'Basic', 'Which element should you use for a clickable action like submitting a form?', ['button', 'section', 'article', 'small'], 0, 'A button is built for actions. It supports keyboard use and accessibility better than a clickable div.'),
  q('CSS', 'Beginner', 'Basic', 'In the CSS box model, what does padding mean?', ['Space inside the element between content and border', 'Space outside the element', 'The width of the browser', 'The page URL'], 0, 'Padding is internal space. Margin is external space outside the border.'),
  q('CSS', 'Beginner', 'Basic', 'Which CSS tool is usually best for arranging items in one row or one column?', ['Flexbox', 'localStorage', 'JSON', 'DNS'], 0, 'Flexbox is great for one-dimensional layouts like rows, columns, nav bars, and centered content.'),
  q('CSS', 'Beginner', 'Basic', 'What does responsive design mean?', ['The page works well on different screen sizes', 'The page always uses dark mode', 'The page has no images', 'The page only works on desktop'], 0, 'Responsive design means the layout adapts to phones, tablets, laptops, and larger screens.'),
  q('JavaScript', 'Beginner', 'Basic', 'Which keyword declares a variable whose value can change later?', ['let', 'const', 'return', 'typeof'], 0, 'Use let when the variable needs to be reassigned. Use const when the variable binding should not change.'),
  q('JavaScript', 'Beginner', 'Basic', 'What does an event listener do?', ['Runs code when something like a click or input happens', 'Creates a new HTML file', 'Deletes CSS', 'Changes the domain name'], 0, 'Event listeners connect user or browser events to JavaScript functions.'),
  q('JavaScript', 'Beginner', 'Basic', 'What is an array usually used for?', ['Storing a list of values', 'Styling a button', 'Opening a server port', 'Writing a CSS selector'], 0, 'Arrays store ordered lists, such as users, products, todos, messages, or scores.'),
  q('Web Basics', 'Beginner', 'Basic', 'What does a browser do with an HTML file?', ['Reads it and renders a web page', 'Turns it into a database', 'Deletes all CSS', 'Creates a Git branch'], 0, 'The browser parses HTML, loads related files like CSS and JavaScript, and displays the page.'),
  q('Web Basics', 'Beginner', 'Basic', 'What is a URL?', ['The address of a resource on the web', 'A CSS color format', 'A JavaScript loop', 'A database table'], 0, 'A URL is the address used to locate a page, image, API endpoint, or other resource.'),
  q('Web Basics', 'Beginner', 'Basic', 'What does HTTP help with?', ['Communication between browser and server', 'Drawing icons only', 'Writing CSS classes', 'Creating folders'], 0, 'HTTP is the request-response protocol browsers and servers use to exchange web resources.'),
  q('APIs', 'Beginner', 'Basic', 'What is an API in web development?', ['A way for software pieces to communicate', 'A CSS animation', 'A browser bookmark', 'An HTML heading'], 0, 'An API lets your frontend ask another system for data or actions, such as login, products, or weather.'),
  q('APIs', 'Beginner', 'Basic', 'Which HTTP method is usually used to read data?', ['GET', 'POST', 'PATCH', 'DELETE'], 0, 'GET is generally used to request data without changing it.'),
  q('Git', 'Beginner', 'Basic', 'What is Git mainly used for?', ['Tracking code changes over time', 'Styling webpages', 'Running HTML in the browser', 'Creating images'], 0, 'Git helps developers track changes, collaborate, compare versions, and recover previous work.'),
  q('Git', 'Beginner', 'Basic', 'What does a commit represent?', ['A saved snapshot of changes', 'A CSS file', 'A server error', 'A web browser tab'], 0, 'A commit is a recorded set of changes with a message explaining what changed.'),
  q('Accessibility', 'Beginner', 'Basic', 'Why should images have useful alt text?', ['So screen readers and fallback UI can describe the image', 'So JavaScript runs faster', 'So CSS files become smaller', 'So passwords are safer'], 0, 'Alt text helps people using screen readers and also helps when images fail to load.'),
  q('AI Workflow', 'Beginner', 'Basic', 'If AI gives you code you do not understand, what is the best next move?', ['Ask it to explain, test it, and learn the concept before using it', 'Paste it blindly', 'Delete your project', 'Avoid reading the code'], 0, 'AI is useful, but your value grows when you understand, verify, and improve what it gives you.')
];

const practicalQuestions = [
  q('Browser Basics', 'Core', 'Scenario', 'A user enters https://shop.dev/products. Which step usually happens before the HTTP request reaches the server?', ['DNS lookup finds the server IP', 'React hydrates the page', 'The database creates indexes', 'The browser runs CORS preflight for every page load'], 0, 'The browser must resolve the domain to an IP address, then negotiate a connection, usually TLS for HTTPS, before sending the HTTP request.'),
  q('HTML', 'Core', 'Concept', 'Which choice is the strongest reason to use semantic HTML like main, nav, button, and section?', ['It improves accessibility, browser meaning, and SEO signals', 'It makes CSS unnecessary', 'It automatically prevents XSS', 'It makes every page load faster'], 0, 'Semantic HTML gives assistive tech, search engines, and browsers better structure. It also reduces custom ARIA work.'),
  q('CSS Layout', 'Core', 'Debug', 'A tooltip is absolutely positioned but appears relative to the whole page instead of its card. What is the likely missing CSS?', ['position: relative on the card', 'display: grid on body', 'z-index: 9999 on the tooltip', 'overflow: hidden on html'], 0, 'Absolutely positioned elements look for the nearest positioned ancestor. Setting position: relative on the card creates that reference.'),
  q('CSS Layout', 'Core', 'Scenario', 'You need a two-dimensional dashboard layout with rows and columns. Which layout tool is usually the best fit?', ['CSS Grid', 'Inline-block', 'Float', 'position: fixed'], 0, 'Grid is designed for rows and columns. Flexbox is excellent for one-dimensional alignment.'),
  q('JavaScript', 'Medium', 'Debug', 'Why can typeof null returning object be dangerous in real code?', ['It can make weak object checks accept null accidentally', 'It means null has methods', 'It makes null equal to every object', 'It breaks JSON.parse'], 0, 'A common bug is checking typeof value === object and then accessing properties without excluding null.'),
  q('JavaScript', 'Medium', 'Concept', 'What does debouncing help with in a search input?', ['It waits until typing settles before firing expensive work', 'It encrypts the query before sending', 'It caches every API response forever', 'It makes CSS transitions smoother'], 0, 'Debouncing prevents a function from running on every keystroke, reducing API calls and render work.'),
  q('React', 'Medium', 'Debug', 'A React component keeps refetching data forever after render. What should you inspect first?', ['The useEffect dependency array and changing values inside it', 'The CSS reset', 'The package-lock file', 'The image alt text'], 0, 'Infinite refetch loops often happen when an effect updates state that changes one of its own dependencies.'),
  q('React', 'Medium', 'Architecture', 'Which state should usually stay local instead of going into global state?', ['Whether one dropdown is open', 'Authenticated user session', 'Selected organization across the app', 'Feature flags loaded at startup'], 0, 'Global state is best for shared app-wide data. Local UI details are simpler and safer inside the component that owns them.'),
  q('APIs', 'Core', 'Concept', 'Which HTTP method is most appropriate for partially updating a user profile?', ['PATCH', 'GET', 'DELETE', 'TRACE'], 0, 'PATCH represents a partial update. PUT often replaces the whole resource.'),
  q('APIs', 'Medium', 'Debug', 'The browser blocks a frontend request with a CORS error. What is the correct place to allow the origin?', ['The API server response headers', 'The frontend package.json', 'The user browser settings', 'The database schema'], 0, 'CORS is enforced by browsers and permitted by server response headers such as Access-Control-Allow-Origin.'),
  q('Security', 'Medium', 'Debug', 'A comment field renders user input as raw HTML. What is the biggest risk?', ['Cross-site scripting', 'CORS failure', 'Slow DNS lookup', 'Unoptimized images'], 0, 'Rendering untrusted HTML can execute attacker-controlled scripts unless carefully sanitized.'),
  q('Performance', 'Medium', 'Scenario', 'A page has a huge JavaScript bundle and slow first load. What is one strong first move?', ['Analyze the bundle and code-split heavy routes/components', 'Add more global CSS', 'Move every component to context', 'Use bigger images so they cache better'], 0, 'Bundle analysis shows what costs the most. Code splitting can reduce initial JavaScript needed for first interaction.'),
  q('Testing', 'Medium', 'Scenario', 'Which test gives the best confidence that a checkout flow works from a user perspective?', ['End-to-end test covering the real flow', 'A snapshot of a button', 'A lint rule only', 'A test that checks package.json exists'], 0, 'Unit tests are useful, but critical user journeys often need integration or end-to-end coverage.'),
  q('AI Workflow', 'Medium', 'Scenario', 'An AI assistant generates code for authentication. What should you do before trusting it?', ['Review security assumptions, test edge cases, and compare against framework docs', 'Ship it if it compiles', 'Remove all comments', 'Ask the AI to promise it is secure'], 0, 'AI speeds up drafting, but you remain responsible for threat modeling, correctness, docs alignment, and tests.')
];

const modeSizes = { check: 12, fundamentals: 18, next: 12 };
const state = { mode: 'check', questions: [], index: 0, score: 0, streak: 0, seconds: 30, timer: null, answers: [] };

const $ = (selector) => document.querySelector(selector);
const introView = $('#introView');
const quizView = $('#quizView');
const resultView = $('#resultView');
const answersEl = $('#answers');
const feedbackPanel = $('#feedbackPanel');
const reviewDialog = $('#reviewDialog');

function q(zone, difficulty, type, question, answers, correct, explain) {
  return { zone, difficulty, type, question, answers, correct, explain };
}

document.querySelectorAll('.mode-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mode-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    state.mode = card.dataset.mode;
  });
});

$('#startBtn').addEventListener('click', startQuiz);
$('#nextBtn').addEventListener('click', nextQuestion);
$('#retryBtn').addEventListener('click', () => {
  resultView.classList.add('hidden');
  introView.classList.remove('hidden');
});
$('#reviewBtn').addEventListener('click', openReview);
$('#closeReviewBtn').addEventListener('click', () => reviewDialog.close());

function startQuiz() {
  state.questions = shuffle(getQuestionPool()).slice(0, modeSizes[state.mode]);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answers = [];
  introView.classList.add('hidden');
  resultView.classList.add('hidden');
  quizView.classList.remove('hidden');
  renderQuestion();
}

function getQuestionPool() {
  if (state.mode === 'check') return foundationQuestions;
  if (state.mode === 'fundamentals') return foundationQuestions.concat(practicalQuestions.filter((item) => item.difficulty === 'Core'));
  return practicalQuestions;
}

function renderQuestion() {
  clearInterval(state.timer);
  state.seconds = state.mode === 'next' ? 30 : 45;
  const current = state.questions[state.index];
  $('#zoneLabel').textContent = current.zone;
  $('#questionCounter').textContent = `Question ${state.index + 1} of ${state.questions.length}`;
  $('#scoreText').textContent = state.score;
  $('#streakText').textContent = state.streak;
  $('#timerText').textContent = state.seconds;
  $('#difficultyBadge').textContent = current.difficulty;
  $('#typeBadge').textContent = current.type;
  $('#questionText').textContent = current.question;
  $('#progressBar').style.width = `${(state.index / state.questions.length) * 100}%`;
  feedbackPanel.classList.add('hidden');
  answersEl.innerHTML = '';

  current.displayedAnswers = shuffle(current.answers.map((text, originalIndex) => ({ text, originalIndex })));
  current.displayedAnswers.forEach((answer, answerIndex) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.type = 'button';
    button.textContent = answer.text;
    button.addEventListener('click', () => submitAnswer(answerIndex));
    answersEl.appendChild(button);
  });

  state.timer = setInterval(() => {
    state.seconds -= 1;
    $('#timerText').textContent = state.seconds;
    if (state.seconds <= 0) submitAnswer(-1);
  }, 1000);
}

function submitAnswer(answerIndex) {
  clearInterval(state.timer);
  const current = state.questions[state.index];
  const selected = current.displayedAnswers[answerIndex];
  const picked = selected ? selected.originalIndex : -1;
  const isCorrect = picked === current.correct;

  [...answersEl.querySelectorAll('.answer-btn')].forEach((button, index) => {
    button.disabled = true;
    if (current.displayedAnswers[index].originalIndex === current.correct) button.classList.add('correct');
    if (index === answerIndex && !isCorrect) button.classList.add('wrong');
  });

  if (isCorrect) {
    const gained = 100 + Math.max(state.seconds, 0) + state.streak * 5;
    state.streak += 1;
    state.score += gained;
    $('#feedbackTitle').textContent = state.streak >= 3 ? 'Streak is alive' : 'Correct';
    $('#feedbackText').textContent = `${current.explain} +${gained} XP`;
  } else {
    state.streak = 0;
    $('#feedbackTitle').textContent = answerIndex === -1 ? 'Time ran out' : 'Not quite';
    $('#feedbackText').textContent = current.explain;
  }

  state.answers.push({ ...current, picked, isCorrect });
  $('#scoreText').textContent = state.score;
  $('#streakText').textContent = state.streak;
  feedbackPanel.classList.remove('hidden');
}

function nextQuestion() {
  state.index += 1;
  if (state.index >= state.questions.length) return showResults();
  renderQuestion();
}

function showResults() {
  clearInterval(state.timer);
  quizView.classList.add('hidden');
  resultView.classList.remove('hidden');
  const correctCount = state.answers.filter((item) => item.isCorrect).length;
  const percent = Math.round((correctCount / state.questions.length) * 100);
  $('#finalScore').textContent = state.score;

  if (percent >= 85) {
    $('#rankTitle').textContent = 'Fundamentals Look Strong';
    $('#rankSummary').textContent = state.mode === 'next'
      ? 'You handled practical questions well. Keep building projects and explaining your decisions clearly.'
      : 'Your basics are in good shape. You are ready to try the Next Step mode and connect fundamentals to real project situations.';
  } else if (percent >= 65) {
    $('#rankTitle').textContent = 'Good Base, Needs Practice';
    $('#rankSummary').textContent = 'You know several basics, but a few topics need repetition. Review the weak zones, then replay Fundamentals mode.';
  } else if (percent >= 45) {
    $('#rankTitle').textContent = 'Basics Are Forming';
    $('#rankSummary').textContent = 'You have started building the right mental model. Slow down, read the explanations, and strengthen one weak zone at a time.';
  } else {
    $('#rankTitle').textContent = 'Start With Foundations';
    $('#rankSummary').textContent = 'No stress. This is exactly why the level check exists. Begin with HTML, CSS, JavaScript basics, and simple browser concepts.';
  }

  renderBreakdown();
  renderRoadmap();
  saveBestScore();
}

function renderBreakdown() {
  const zones = {};
  state.answers.forEach((item) => {
    zones[item.zone] ||= { total: 0, correct: 0 };
    zones[item.zone].total += 1;
    if (item.isCorrect) zones[item.zone].correct += 1;
  });
  $('#breakdownList').innerHTML = Object.entries(zones).sort(([a], [b]) => a.localeCompare(b)).map(([zone, stats]) => {
    const percent = Math.round((stats.correct / stats.total) * 100);
    return `<div class="skill-row"><span>${zone}</span><div class="meter"><span style="width: ${percent}%"></span></div><strong>${percent}%</strong></div>`;
  }).join('');
}

function renderRoadmap() {
  const advice = {
    'Web Basics': 'Practice explaining URL, browser, server, HTTP, and webpage in very simple language.',
    HTML: 'Practice headings, paragraphs, links, images, forms, buttons, and semantic tags.',
    CSS: 'Practice selectors, colors, spacing, box model, flexbox, and responsive layouts.',
    'CSS Layout': 'Practice flexbox first, then grid, then positioning with small visual examples.',
    JavaScript: 'Practice variables, arrays, objects, functions, events, conditions, loops, and DOM updates.',
    React: 'After JavaScript basics feel comfortable, practice components, props, state, and events.',
    APIs: 'Learn GET and POST first, then practice calling a simple API and showing the result on screen.',
    Security: 'Start with simple safety: never trust user input, hide secrets, and understand XSS basics.',
    Performance: 'Start by learning image size, unused JavaScript, network requests, and browser DevTools.',
    Accessibility: 'Practice alt text, labels, buttons, keyboard navigation, and readable contrast.',
    Git: 'Practice status, add, commit, log, branch, and reading your own diff before saving work.',
    'AI Workflow': 'Use AI as a tutor: ask why code works, request simpler examples, then explain it yourself.',
    Testing: 'Start by manually testing the important user actions, then learn simple automated tests.',
    'Browser Basics': 'Learn what a browser does when it opens a page: URL, request, response, HTML, CSS, and JavaScript.'
  };
  const missedZones = [...new Set(state.answers.filter((item) => !item.isCorrect).map((item) => item.zone))].slice(0, 4);
  const items = missedZones.length ? missedZones.map((zone) => advice[zone]) : ['Try Next Step mode when you feel comfortable', 'Build a tiny page using HTML, CSS, and JavaScript', 'Use AI to explain concepts, then test yourself without looking'];
  $('#roadmapList').innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function openReview() {
  $('#reviewList').innerHTML = state.answers.map((item, index) => {
    const picked = item.picked === -1 ? 'Timed out' : item.answers[item.picked];
    return `<div class="review-item"><strong>${index + 1}. ${item.isCorrect ? 'Correct' : 'Missed'} - ${item.zone}</strong><p>${item.question}</p><p>Your answer: ${picked || 'No answer'}</p><p>Best answer: ${item.answers[item.correct]}</p><p>${item.explain}</p></div>`;
  }).join('');
  reviewDialog.showModal();
}

function saveBestScore() {
  const best = Number(localStorage.getItem('webDevArenaBest') || 0);
  if (state.score > best) localStorage.setItem('webDevArenaBest', String(state.score));
}

function shuffle(items) {
  return [...items].map((item) => ({ item, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ item }) => item);
}
