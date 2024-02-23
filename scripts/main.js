let currentTab = 0;
const elements = {
  form: document.getElementById('form'),
  tabs: document.querySelectorAll('.tab'),
  nextBtn: document.getElementById('nextBtn'),
  backBtn: document.getElementById('backBtn'),
  confirmBtn: document.getElementById('confirmBtn'),
  stepIndicators: document.querySelectorAll('.step-indicator'),
};

showCurrentTab(currentTab);
function showCurrentTab(tab) {
  elements.tabs[tab].style.display = 'block';

  elements.nextBtn.style.display = [0, 1, 2].includes(tab) ? 'block' : 'none';
  elements.backBtn.style.display = [1, 2, 3].includes(tab) ? 'block' : 'none';
  elements.confirmBtn.style.display = tab === 3 ? 'block' : 'none';

  defineActiveTab(tab);
}

function handleTabs(action) {
  elements.tabs[currentTab].style.display = 'none';

  if (action === 'next' && currentTab >= elements.tabs.length) return false;
  if (action === 'prev' && currentTab <= 0) return false;

  currentTab++;
  showCurrentTab(currentTab);
}

function defineActiveTab(tab) {
  elements.stepIndicators.forEach((value) => value.classList.remove('active'));

  if (tab >= elements.stepIndicators.length) return false;
  elements.stepIndicators[tab].classList.add('active');
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submit success');
  handleTabs('next');
});
