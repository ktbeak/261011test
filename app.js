/**
 * 고등학교 1학년 탐구용 주기율표 웹 앱 메인 로직 (app.js)
 * 원소 렌더링, 필터링, 보어 전자 모형 시각화, 모달 제어, 활동지 메모 저장 기능을 담당합니다.
 */

// ==========================================
// 1. 애플리케이션 상태 (Application State)
// ==========================================
const state = {
  viewMode: 'core',       // 'core': 1~20번 핵심 집중 모드, 'all': 118번 전체 모드
  periodFilter: 0,        // 0: 전체 주기, 1~7: 선택된 주기
  groupFilter: 'all',     // 'all': 전체 족, 1, 2, 14, 17, 18 등
  categoryFilter: null,   // 선택된 원소 분류 카테고리
  searchKeyword: '',      // 검색어 (기호, 한글명, 번호)
  currentElementNum: 1,   // 현재 모달에 열린 원소 번호
  scrappedElements: [],   // 활동지에 스크랩된 원소 번호 배열
  studentInfo: {
    gradeClass: '',
    name: '',
    memo: ''
  }
};

// ==========================================
// 2. DOM 요소 참조 (DOM Elements)
// ==========================================
const dom = {
  // 모드 및 필터
  btnModeCore: document.getElementById('btnModeCore'),
  btnModeAll: document.getElementById('btnModeAll'),
  periodSlider: document.getElementById('periodSlider'),
  periodDisplay: document.getElementById('periodDisplay'),
  periodHint: document.getElementById('periodHint'),
  groupChips: document.getElementById('groupChips'),
  elementSearchInput: document.getElementById('elementSearchInput'),
  btnResetFilters: document.getElementById('btnResetFilters'),
  
  // 가이드 배너
  guideTitle: document.getElementById('guideTitle'),
  guideDesc: document.getElementById('guideDesc'),

  // 주기율표 컨테이너
  groupHeaderRow: document.getElementById('groupHeaderRow'),
  periodicGrid: document.getElementById('periodicGrid'),
  fBlockWrapper: document.getElementById('fBlockWrapper'),
  lanthanideGrid: document.getElementById('lanthanideGrid'),
  actinideGrid: document.getElementById('actinideGrid'),
  legendItems: document.getElementById('legendItems'),

  // 모달 창
  elementModal: document.getElementById('elementModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalAtomicNumber: document.getElementById('modalAtomicNumber'),
  modalCategoryTag: document.getElementById('modalCategoryTag'),
  modalGroupPeriodTag: document.getElementById('modalGroupPeriodTag'),
  modalSymbolBox: document.getElementById('modalSymbolBox'),
  modalSymbol: document.getElementById('modalSymbol'),
  modalNameKo: document.getElementById('modalNameKo'),
  modalNameEn: document.getElementById('modalNameEn'),
  modalAtomicMass: document.getElementById('modalAtomicMass'),
  modalValenceBadge: document.getElementById('modalValenceBadge'),
  bohrOrbitContainer: document.getElementById('bohrOrbitContainer'),
  shellStats: document.getElementById('shellStats'),
  modalSummary: document.getElementById('modalSummary'),
  modalDescription: document.getElementById('modalDescription'),
  modalUsage: document.getElementById('modalUsage'),
  modalQuizSection: document.getElementById('modalQuizSection'),
  modalQuizQuestion: document.getElementById('modalQuizQuestion'),
  btnToggleQuizAnswer: document.getElementById('btnToggleQuizAnswer'),
  modalQuizHint: document.getElementById('modalQuizHint'),
  modalQuizAnswerWrap: document.getElementById('modalQuizAnswerWrap'),
  modalQuizAnswer: document.getElementById('modalQuizAnswer'),
  btnAddToNotebook: document.getElementById('btnAddToNotebook'),
  addedFeedbackMsg: document.getElementById('addedFeedbackMsg'),
  btnPrevElement: document.getElementById('btnPrevElement'),
  btnNextElement: document.getElementById('btnNextElement'),

  // 탐구 활동지 패널
  btnOpenNotebook: document.getElementById('btnOpenNotebook'),
  btnCloseNotebook: document.getElementById('btnCloseNotebook'),
  notebookPanel: document.getElementById('notebookPanel'),
  notebookBadge: document.getElementById('notebookBadge'),
  studentGradeClass: document.getElementById('studentGradeClass'),
  studentName: document.getElementById('studentName'),
  notebookMemo: document.getElementById('notebookMemo'),
  scrappedCount: document.getElementById('scrappedCount'),
  scrappedList: document.getElementById('scrappedList'),
  btnClearScraps: document.getElementById('btnClearScraps'),
  btnCopyNotebook: document.getElementById('btnCopyNotebook'),
  btnPrintNotebook: document.getElementById('btnPrintNotebook')
};

// ==========================================
// 3. 초기화 함수 (Initialization)
// ==========================================
function initApp() {
  // 로컬 스토리지에서 저장된 활동지 정보 불러오기
  loadStorageData();

  // 상단 족 헤더 행 생성 (1~18족)
  renderGroupHeaders();

  // 하단 카테고리 범례 생성
  renderLegend();

  // 주기율표 원소 카드 렌더링
  renderPeriodicTable();

  // 이벤트 리스너 등록
  attachEventListeners();

  // 초기 뱃지 업데이트
  updateNotebookUI();
}

// ==========================================
// 4. 로컬 스토리지 연동 (Local Storage)
// ==========================================
function loadStorageData() {
  try {
    const savedScraps = localStorage.getItem('periodic_scraps');
    if (savedScraps) {
      state.scrappedElements = JSON.parse(savedScraps);
    }
    const savedInfo = localStorage.getItem('periodic_student_info');
    if (savedInfo) {
      state.studentInfo = JSON.parse(savedInfo);
      dom.studentGradeClass.value = state.studentInfo.gradeClass || '';
      dom.studentName.value = state.studentInfo.name || '';
      dom.notebookMemo.value = state.studentInfo.memo || '';
    }
  } catch (err) {
    console.error('활동지 데이터 불러오기 실패:', err);
  }
}

function saveStorageData() {
  try {
    localStorage.setItem('periodic_scraps', JSON.stringify(state.scrappedElements));
    state.studentInfo = {
      gradeClass: dom.studentGradeClass.value.trim(),
      name: dom.studentName.value.trim(),
      memo: dom.notebookMemo.value.trim()
    };
    localStorage.setItem('periodic_student_info', JSON.stringify(state.studentInfo));
  } catch (err) {
    console.error('활동지 데이터 저장 실패:', err);
  }
}

// ==========================================
// 5. 족 헤더 및 범례 렌더링 (UI Components)
// ==========================================
function renderGroupHeaders() {
  for (let g = 1; g <= 18; g++) {
    const col = document.createElement('div');
    col.className = 'group-number-col';
    col.id = `groupHeader-${g}`;
    col.textContent = `${g}족`;
    dom.groupHeaderRow.appendChild(col);
  }
}

function renderLegend() {
  dom.legendItems.innerHTML = '';
  Object.keys(ELEMENT_CATEGORIES).forEach(catKey => {
    const cat = ELEMENT_CATEGORIES[catKey];
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'legend-chip';
    chip.dataset.category = catKey;
    chip.style.backgroundColor = cat.color;
    chip.style.color = cat.textColor;

    const dot = document.createElement('span');
    dot.className = 'legend-color-dot';
    dot.style.backgroundColor = cat.textColor;

    const label = document.createElement('span');
    label.textContent = cat.name;

    chip.appendChild(dot);
    chip.appendChild(label);

    chip.addEventListener('click', () => {
      if (state.categoryFilter === catKey) {
        state.categoryFilter = null;
        chip.classList.remove('active');
      } else {
        document.querySelectorAll('.legend-chip').forEach(c => c.classList.remove('active'));
        state.categoryFilter = catKey;
        chip.classList.add('active');
      }
      applyFilters();
    });

    dom.legendItems.appendChild(chip);
  });
}

// ==========================================
// 6. 주기율표 카드 렌더링 (Grid Rendering)
// ==========================================
function renderPeriodicTable() {
  dom.periodicGrid.innerHTML = '';
  dom.lanthanideGrid.innerHTML = '';
  dom.actinideGrid.innerHTML = '';

  // 1~7주기 번호 인디케이터(가로줄 표시) 생성
  const shellNames = ['', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
  for (let p = 1; p <= 7; p++) {
    const periodIndicator = document.createElement('div');
    periodIndicator.className = 'period-number-indicator';
    periodIndicator.id = `periodIndicator-${p}`;
    periodIndicator.style.gridRow = p;
    periodIndicator.style.gridColumn = 1;

    periodIndicator.innerHTML = `
      <span>${p}주기</span>
      <span class="period-shell-subtext">${shellNames[p]}껍질</span>
    `;
    dom.periodicGrid.appendChild(periodIndicator);
  }

  // 원소 카드 생성
  ELEMENTS_DATA.forEach(elem => {
    const card = createCardElement(elem);

    // 란타넘족(57~71)과 악티늄족(89~103)은 별도 f-block에 배치
    if (elem.category === 'lanthanide') {
      dom.lanthanideGrid.appendChild(card);
    } else if (elem.category === 'actinide') {
      dom.actinideGrid.appendChild(card);
    } else {
      // 일반 원소는 주기(Row)와 족(Col + 1)으로 그리드 좌표 배치
      card.style.gridRow = elem.period;
      card.style.gridColumn = elem.group + 1;
      dom.periodicGrid.appendChild(card);
    }
  });

  applyFilters();
}

// 개별 원소 카드 HTML 엘리먼트 생성
function createCardElement(elem) {
  const card = document.createElement('div');
  card.className = `element-card category-${elem.category}`;
  card.id = `elemCard-${elem.number}`;
  card.dataset.number = elem.number;
  card.dataset.period = elem.period;
  card.dataset.group = elem.group;
  card.dataset.category = elem.category;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${elem.number}번 ${elem.nameKo} (${elem.symbol})`);

  // 1~20번 핵심 원소 표시 파란 점
  const isCore = elem.number <= 20;
  const coreDotHtml = isCore ? `<span class="core-badge-dot" title="고1 핵심 원소"></span>` : '';

  // 원자가 전자 칩 (1~20번에 제공)
  const valenceHtml = (elem.valenceElectrons !== undefined)
    ? `<span class="element-valence-chip" title="원자가 전자 수">손:${elem.valenceElectrons}</span>`
    : '';

  card.innerHTML = `
    ${coreDotHtml}
    <div class="element-top-meta">
      <span class="element-atomic-number">${elem.number}</span>
      ${valenceHtml}
    </div>
    <div class="element-symbol">${elem.symbol}</div>
    <div class="element-name-ko">${elem.nameKo}</div>
  `;

  // 카드 클릭 시 상세 모달 열기
  card.addEventListener('click', () => {
    openElementModal(elem.number);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openElementModal(elem.number);
    }
  });

  return card;
}

// ==========================================
// 7. 필터 및 하이라이트 적용 (Filter Engine)
// ==========================================
function applyFilters() {
  const isCoreMode = (state.viewMode === 'core');
  const targetPeriod = state.periodFilter;
  const targetGroup = state.groupFilter;
  const targetCategory = state.categoryFilter;
  const keyword = state.searchKeyword.toLowerCase().trim();

  // f-block 노출 여부 (전체 모드일 때만 표시)
  dom.fBlockWrapper.style.display = isCoreMode ? 'none' : 'flex';

  // 주기 헤더 및 족 헤더 하이라이트 클래스 갱신
  for (let p = 1; p <= 7; p++) {
    const indicator = document.getElementById(`periodIndicator-${p}`);
    if (indicator) {
      indicator.classList.toggle('highlight', targetPeriod === p);
    }
  }

  for (let g = 1; g <= 18; g++) {
    const header = document.getElementById(`groupHeader-${g}`);
    if (header) {
      header.classList.toggle('highlight', targetGroup !== 'all' && Number(targetGroup) === g);
    }
  }

  // 전체 카드 필터링 순회
  const allCards = document.querySelectorAll('.element-card');
  allCards.forEach(card => {
    const num = parseInt(card.dataset.number, 10);
    const period = parseInt(card.dataset.period, 10);
    const group = parseInt(card.dataset.group, 10);
    const cat = card.dataset.category;
    const elem = ELEMENTS_DATA.find(e => e.number === num);

    let isVisible = true;
    let isHighlighted = false;

    // 1) 모드 필터: 핵심 모드일 때 21번 이후 원소는 비강조(dimmed) 처리
    if (isCoreMode && num > 20) {
      card.classList.add('dimmed');
      card.classList.remove('highlighted');
      return;
    }

    // 2) 주기 필터
    if (targetPeriod > 0 && period !== targetPeriod) {
      isVisible = false;
    }

    // 3) 족 필터
    if (targetGroup !== 'all' && group !== Number(targetGroup)) {
      isVisible = false;
    }

    // 4) 카테고리 필터
    if (targetCategory && cat !== targetCategory) {
      isVisible = false;
    }

    // 5) 검색어 필터 (기호, 한국어 이름, 원자 번호 검색)
    if (keyword) {
      const matchSymbol = elem.symbol.toLowerCase().includes(keyword);
      const matchNameKo = elem.nameKo.toLowerCase().includes(keyword);
      const matchNameEn = elem.nameEn.toLowerCase().includes(keyword);
      const matchNumber = String(elem.number) === keyword;

      if (!matchSymbol && !matchNameKo && !matchNameEn && !matchNumber) {
        isVisible = false;
      } else {
        isHighlighted = true;
      }
    }

    if (!isVisible) {
      card.classList.add('dimmed');
      card.classList.remove('highlighted');
    } else {
      card.classList.remove('dimmed');
      if (isHighlighted || (targetPeriod > 0 && period === targetPeriod) || (targetGroup !== 'all' && group === Number(targetGroup))) {
        card.classList.add('highlighted');
      } else {
        card.classList.remove('highlighted');
      }
    }
  });

  // 상단 개념 안내 배너 문구 업데이트
  updateGuideBanner();
}

// 상단 안내 배너 문구 동적 갱신
function updateGuideBanner() {
  if (state.periodFilter > 0) {
    const shells = ['', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
    dom.guideTitle.textContent = `${state.periodFilter}주기 원소들의 주기성`;
    dom.guideDesc.innerHTML = `가로줄인 <strong>${state.periodFilter}주기</strong> 원소들은 모두 <strong>전자 껍질이 ${state.periodFilter}개(${shells[state.periodFilter]}껍질까지 채워짐)</strong>입니다. 주기가 커질수록 원자 반지름(크기)이 커지는 경향이 있습니다.`;
  } else if (state.groupFilter !== 'all') {
    const g = Number(state.groupFilter);
    if (g === 1) {
      dom.guideTitle.textContent = `1족 (알칼리 금속 & 수소)의 주기성`;
      dom.guideDesc.innerHTML = `1족 원소들은 최외각 <strong>원자가 전자 수가 1개</strong>입니다. 전자 1개를 쉽게 잃고 <strong>+1가 양이온</strong>이 되려는 반응성이 매우 큰 특징이 있습니다! (단, 수소는 비금속)`;
    } else if (g === 2) {
      dom.guideTitle.textContent = `2족 (알칼리 토금속)의 주기성`;
      dom.guideDesc.innerHTML = `2족 원소들은 최외각 <strong>원자가 전자 수가 2개</strong>입니다. 전자 2개를 잃고 <strong>+2가 양이온</strong>을 형성하기 쉽습니다.`;
    } else if (g === 14) {
      dom.guideTitle.textContent = `14족 (탄소족)의 주기성`;
      dom.guideDesc.innerHTML = `14족 원소들은 <strong>원자가 전자 수가 4개</strong>로, 최대 4개의 공유 결합을 형성할 수 있어 생명체와 IT 반도체의 중심 원소가 됩니다.`;
    } else if (g === 17) {
      dom.guideTitle.textContent = `17족 (할로젠 원소)의 주기성`;
      dom.guideDesc.innerHTML = `17족 원소들은 <strong>원자가 전자 수가 7개</strong>입니다. 전자 1개를 얻어 <strong>-1가 음이온</strong>이 되려는 반응성이 매우 큽니다.`;
    } else if (g === 18) {
      dom.guideTitle.textContent = `18족 (비활성 기체)의 주기성`;
      dom.guideDesc.innerHTML = `가장 바깥 전자 껍질이 꽉 차서(옥텟 규칙 만족) 매우 안정합니다. 화학 결합을 거의 하지 않으므로 <strong>원자가 전자 수는 0</strong>입니다.`;
    }
  } else {
    dom.guideTitle.textContent = '원소의 주기성이란?';
    dom.guideDesc.innerHTML = `원자 번호 순서대로 원소를 배열했을 때, 화학적 성질이 비슷한 원소가 주기적으로 나타납니다. <strong>같은 족(세로줄)</strong>은 <strong>원자가 전자 수</strong>가 같아서 화학적 성질이 유사합니다!`;
  }
}

// ==========================================
// 8. 보어 전자 껍질 모형 SVG 생성 (Bohr Model)
// ==========================================
function renderBohrModel(shells, symbol, atomicNumber) {
  dom.bohrOrbitContainer.innerHTML = '';
  dom.shellStats.innerHTML = '';

  const size = 220;
  const center = size / 2;
  const shellLabels = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];

  // SVG 요소 생성
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

  // 1) 중심 원자핵 (Nucleus)
  const nucleusGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const nucleusCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  nucleusCircle.setAttribute('cx', center);
  nucleusCircle.setAttribute('cy', center);
  nucleusCircle.setAttribute('r', '18');
  nucleusCircle.setAttribute('fill', '#EF4444');
  nucleusCircle.setAttribute('stroke', '#DC2626');
  nucleusCircle.setAttribute('stroke-width', '2');

  const nucleusText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  nucleusText.setAttribute('x', center);
  nucleusText.setAttribute('y', center + 4);
  nucleusText.setAttribute('text-anchor', 'middle');
  nucleusText.setAttribute('fill', '#FFFFFF');
  nucleusText.setAttribute('font-size', '10');
  nucleusText.setAttribute('font-weight', 'bold');
  nucleusText.textContent = `+${atomicNumber}`;

  nucleusGroup.appendChild(nucleusCircle);
  nucleusGroup.appendChild(nucleusText);

  // 2) 각 껍질 궤도 동심원 및 전자 렌더링
  const shellCount = shells.length;
  const baseRadius = 26;
  const radiusStep = shellCount > 3 ? 18 : 24;

  shells.forEach((electronCount, idx) => {
    const orbitRadius = baseRadius + (idx + 1) * radiusStep;

    // 궤도 점선 원
    const orbitCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    orbitCircle.setAttribute('cx', center);
    orbitCircle.setAttribute('cy', center);
    orbitCircle.setAttribute('r', orbitRadius);
    orbitCircle.setAttribute('fill', 'none');
    orbitCircle.setAttribute('stroke', '#CBD5E1');
    orbitCircle.setAttribute('stroke-width', '1.5');
    orbitCircle.setAttribute('stroke-dasharray', '3,3');
    svg.appendChild(orbitCircle);

    // 전자들이 회전할 애니메이션 그룹
    const orbitGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    orbitGroup.setAttribute('class', `orbit-group-${(idx % 4) + 1}`);

    // 각도별 균등 전자 배치
    for (let e = 0; e < electronCount; e++) {
      const angle = (2 * Math.PI * e) / electronCount - Math.PI / 2;
      const ex = center + orbitRadius * Math.cos(angle);
      const ey = center + orbitRadius * Math.sin(angle);

      const electronCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      electronCircle.setAttribute('cx', ex);
      electronCircle.setAttribute('cy', ey);
      electronCircle.setAttribute('r', '4.5');
      electronCircle.setAttribute('fill', '#3B82F6');
      electronCircle.setAttribute('stroke', '#1E40AF');
      electronCircle.setAttribute('stroke-width', '1');

      orbitGroup.appendChild(electronCircle);
    }
    svg.appendChild(orbitGroup);

    // 하단 껍질별 개수 칩 표시 (예: K: 2, L: 8)
    const chip = document.createElement('span');
    chip.className = 'shell-chip';
    chip.textContent = `${shellLabels[idx]}: ${electronCount}개`;
    dom.shellStats.appendChild(chip);
  });

  svg.appendChild(nucleusGroup);
  dom.bohrOrbitContainer.appendChild(svg);
}

// ==========================================
// 9. 원소 상세 정보 모달 제어 (Modal System)
// ==========================================
function openElementModal(elementNumber) {
  const elem = ELEMENTS_DATA.find(e => e.number === elementNumber);
  if (!elem) return;

  state.currentElementNum = elementNumber;
  const categoryInfo = ELEMENT_CATEGORIES[elem.category] || { name: '원소', color: '#FFF', textColor: '#000' };

  // 헤더 정보 채우기
  dom.modalAtomicNumber.textContent = `${elem.number}번`;
  dom.modalCategoryTag.textContent = categoryInfo.name;
  dom.modalCategoryTag.style.backgroundColor = categoryInfo.color;
  dom.modalCategoryTag.style.color = categoryInfo.textColor;
  dom.modalGroupPeriodTag.textContent = `${elem.period}주기 · ${elem.group}족 (${elem.stateAtRoomTemp || '고체'})`;

  // 좌측 심볼 박스
  dom.modalSymbol.textContent = elem.symbol;
  dom.modalNameKo.textContent = elem.nameKo;
  dom.modalNameEn.textContent = elem.nameEn;
  dom.modalAtomicMass.textContent = `원자량 ${elem.atomicMass}`;
  dom.modalSymbolBox.style.backgroundColor = categoryInfo.color;
  dom.modalSymbolBox.style.color = categoryInfo.textColor;

  // 원자가 전자 수 배지
  if (elem.valenceElectrons !== undefined) {
    dom.modalValenceBadge.style.display = 'inline-block';
    dom.modalValenceBadge.textContent = `원자가 전자: ${elem.valenceElectrons}개`;
  } else {
    dom.modalValenceBadge.style.display = 'none';
  }

  // 보어 전자 모형 렌더링 (shells 데이터가 있는 경우 시각화, 없을 경우 껍질 수 기본 추정치)
  let shells = elem.shells;
  if (!shells) {
    // 21번 이상 원소는 주기에 맞춘 기본 표시
    shells = [2];
    if (elem.period >= 2) shells.push(8);
    if (elem.period >= 3) shells.push(8);
    if (elem.period >= 4) shells.push(2);
  }
  renderBohrModel(shells, elem.symbol, elem.number);

  // 우측 상세 학습 콘텐츠
  dom.modalSummary.textContent = elem.summary || `${elem.nameKo}(${elem.symbol})는 ${elem.period}주기 ${elem.group}족에 위치한 원소입니다.`;
  dom.modalDescription.textContent = elem.description || `고등학교 화학 탐구에서 원소의 주기적 성질을 이해하는 데 중요한 원소입니다.`;
  dom.modalUsage.textContent = elem.realLifeUsage || `다양한 산업 화학 공정 및 실험 재료로 활용됩니다.`;

  // 퀴즈 섹션
  if (elem.quiz) {
    dom.modalQuizSection.style.display = 'block';
    dom.modalQuizQuestion.textContent = `Q. ${elem.quiz.question}`;
    dom.modalQuizHint.textContent = `힌트: ${elem.quiz.hint}`;
    dom.modalQuizAnswer.textContent = elem.quiz.answer;
    dom.modalQuizAnswerWrap.style.display = 'none';
    dom.btnToggleQuizAnswer.textContent = '정답 확인하기';
  } else {
    dom.modalQuizSection.style.display = 'none';
  }

  // 스크랩 여부 피드백 초기화
  dom.addedFeedbackMsg.textContent = '';
  const isAlreadyScrapped = state.scrappedElements.includes(elem.number);
  dom.btnAddToNotebook.textContent = isAlreadyScrapped ? '✔️ 활동지에 이미 추가됨' : '📌 이 원소를 탐구 활동지에 추가하기';

  // 이전/다음 버튼 활성화 상태
  dom.btnPrevElement.disabled = (elem.number <= 1);
  dom.btnNextElement.disabled = (elem.number >= (state.viewMode === 'core' ? 20 : 118));

  // 모달 띄우기
  dom.elementModal.classList.add('open');
  dom.elementModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeElementModal() {
  dom.elementModal.classList.remove('open');
  dom.elementModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// ==========================================
// 10. 나만의 탐구 활동지 패널 제어 (Notebook)
// ==========================================
function toggleNotebookPanel(isOpen) {
  if (isOpen) {
    dom.notebookPanel.classList.add('open');
    dom.notebookPanel.setAttribute('aria-hidden', 'false');
  } else {
    dom.notebookPanel.classList.remove('open');
    dom.notebookPanel.setAttribute('aria-hidden', 'true');
  }
}

function addCurrentElementToNotebook() {
  const num = state.currentElementNum;
  if (!state.scrappedElements.includes(num)) {
    state.scrappedElements.push(num);
    saveStorageData();
    updateNotebookUI();
    dom.addedFeedbackMsg.textContent = '활동지에 추가되었습니다!';
    dom.btnAddToNotebook.textContent = '✔️ 활동지에 이미 추가됨';
    setTimeout(() => { dom.addedFeedbackMsg.textContent = ''; }, 2000);
  } else {
    dom.addedFeedbackMsg.textContent = '이미 활동지에 들어있는 원소입니다.';
    setTimeout(() => { dom.addedFeedbackMsg.textContent = ''; }, 2000);
  }
}

function removeScrappedElement(num) {
  state.scrappedElements = state.scrappedElements.filter(n => n !== num);
  saveStorageData();
  updateNotebookUI();
  if (state.currentElementNum === num) {
    dom.btnAddToNotebook.textContent = '📌 이 원소를 탐구 활동지에 추가하기';
  }
}

function updateNotebookUI() {
  const count = state.scrappedElements.length;
  dom.notebookBadge.textContent = count;
  dom.scrappedCount.textContent = count;

  dom.scrappedList.innerHTML = '';
  if (count === 0) {
    dom.scrappedList.innerHTML = `<p class="empty-note">원소 모달 창에서 [📌 탐구 활동지에 추가하기]를 누르면 여기에 기록됩니다.</p>`;
    return;
  }

  // 스크랩된 원소들을 번호순으로 정렬하여 표시
  const sortedNums = [...state.scrappedElements].sort((a, b) => a - b);
  sortedNums.forEach(num => {
    const elem = ELEMENTS_DATA.find(e => e.number === num);
    if (!elem) return;

    const cat = ELEMENT_CATEGORIES[elem.category] || { color: '#eee', textColor: '#333' };
    const item = document.createElement('div');
    item.className = 'scrap-item';

    const infoWrap = document.createElement('div');
    infoWrap.className = 'scrap-info';
    infoWrap.title = '클릭하여 다시 탐구하기';
    infoWrap.innerHTML = `
      <span class="scrap-symbol" style="color: ${cat.textColor};">${elem.symbol}</span>
      <div>
        <div class="scrap-name">${elem.number}. ${elem.nameKo}</div>
        <div class="scrap-meta">${elem.period}주기 ${elem.group}족 · 원자가전자: ${elem.valenceElectrons !== undefined ? elem.valenceElectrons + '개' : '-'}</div>
      </div>
    `;
    infoWrap.addEventListener('click', () => {
      openElementModal(elem.number);
    });

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'btn-remove-scrap';
    removeBtn.title = '활동지에서 제거';
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeScrappedElement(elem.number);
    });

    item.appendChild(infoWrap);
    item.appendChild(removeBtn);
    dom.scrappedList.appendChild(item);
  });
}

// 활동지 내용 클립보드 복사
function copyNotebookContent() {
  const grade = dom.studentGradeClass.value.trim() || '미작성';
  const name = dom.studentName.value.trim() || '미작성';
  const memo = dom.notebookMemo.value.trim() || '(작성된 메모 없음)';

  const sortedNums = [...state.scrappedElements].sort((a, b) => a - b);
  const elementsText = sortedNums.map(num => {
    const el = ELEMENTS_DATA.find(e => e.number === num);
    return `- [${el.number}번 ${el.symbol} ${el.nameKo}] (${el.period}주기 ${el.group}족 / 원자가 전자: ${el.valenceElectrons !== undefined ? el.valenceElectrons : '-'}개)`;
  }).join('\n') || '- 수집된 원소 없음';

  const fullReport = `[고등학교 1학년 통합과학 - 원소의 주기성 탐구 활동지]
- 작성자 정보: ${grade} ${name}
- 탐구 일시: ${new Date().toLocaleDateString('ko-KR')}

■ 수집 및 탐구한 원소 목록 (${state.scrappedElements.length}개):
${elementsText}

■ 주기성 탐구 소감 및 규칙 발견 메모:
${memo}
`;

  navigator.clipboard.writeText(fullReport).then(() => {
    alert('활동지 내용이 클립보드에 복사되었습니다! 한글, 워드, 구글 문서 등에 붙여넣어 제출할 수 있습니다.');
  }).catch(() => {
    alert('클립보드 복사에 실패했습니다. 메모 내용을 직접 복사해주세요.');
  });
}

// ==========================================
// 11. 이벤트 리스너 등록 (Event Listeners)
// ==========================================
function attachEventListeners() {
  // 모드 전환 버튼 (1~20번 핵심 vs 118번 전체)
  dom.btnModeCore.addEventListener('click', () => {
    state.viewMode = 'core';
    dom.btnModeCore.classList.add('active');
    dom.btnModeAll.classList.remove('active');
    applyFilters();
  });

  dom.btnModeAll.addEventListener('click', () => {
    state.viewMode = 'all';
    dom.btnModeAll.classList.add('active');
    dom.btnModeCore.classList.remove('active');
    applyFilters();
  });

  // 주기 탐색 슬라이더
  dom.periodSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    state.periodFilter = val;
    dom.periodDisplay.textContent = val === 0 ? '전체' : `${val}주기`;
    if (val === 0) {
      dom.periodHint.textContent = '주기는 전자 껍질 수(K, L, M, N...)를 의미합니다.';
    } else {
      const shells = ['', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
      dom.periodHint.textContent = `${val}주기는 전자 껍질이 ${val}개(${shells[val]}껍질) 채워집니다.`;
    }
    applyFilters();
  });

  // 주요 족 칩 버튼 클릭
  dom.groupChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    dom.groupChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    state.groupFilter = chip.dataset.group;
    applyFilters();
  });

  // 원소 검색창 입력
  dom.elementSearchInput.addEventListener('input', (e) => {
    state.searchKeyword = e.target.value;
    applyFilters();
  });

  // 필터 초기화 버튼
  dom.btnResetFilters.addEventListener('click', () => {
    state.periodFilter = 0;
    dom.periodSlider.value = 0;
    dom.periodDisplay.textContent = '전체';
    dom.periodHint.textContent = '주기는 전자 껍질 수(K, L, M, N...)를 의미합니다.';

    state.groupFilter = 'all';
    dom.groupChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    dom.groupChips.querySelector('[data-group="all"]').classList.add('active');

    state.categoryFilter = null;
    document.querySelectorAll('.legend-chip').forEach(c => c.classList.remove('active'));

    state.searchKeyword = '';
    dom.elementSearchInput.value = '';

    applyFilters();
  });

  // 모달 닫기
  dom.modalCloseBtn.addEventListener('click', closeElementModal);
  dom.elementModal.addEventListener('click', (e) => {
    if (e.target === dom.elementModal) {
      closeElementModal();
    }
  });

  // 모달 이전/다음 탐색 버튼
  dom.btnPrevElement.addEventListener('click', () => {
    if (state.currentElementNum > 1) {
      openElementModal(state.currentElementNum - 1);
    }
  });

  dom.btnNextElement.addEventListener('click', () => {
    const maxNum = state.viewMode === 'core' ? 20 : 118;
    if (state.currentElementNum < maxNum) {
      openElementModal(state.currentElementNum + 1);
    }
  });

  // 모달 퀴즈 정답 확인 토글
  dom.btnToggleQuizAnswer.addEventListener('click', () => {
    const isHidden = dom.modalQuizAnswerWrap.style.display === 'none';
    dom.modalQuizAnswerWrap.style.display = isHidden ? 'block' : 'none';
    dom.btnToggleQuizAnswer.textContent = isHidden ? '정답 접기' : '정답 확인하기';
  });

  // 모달 활동지 추가 버튼
  dom.btnAddToNotebook.addEventListener('click', addCurrentElementToNotebook);

  // 탐구 활동지 패널 열기/닫기
  dom.btnOpenNotebook.addEventListener('click', () => toggleNotebookPanel(true));
  dom.btnCloseNotebook.addEventListener('click', () => toggleNotebookPanel(false));

  // 활동지 실시간 저장 (입력 시)
  dom.studentGradeClass.addEventListener('input', saveStorageData);
  dom.studentName.addEventListener('input', saveStorageData);
  dom.notebookMemo.addEventListener('input', saveStorageData);

  // 활동지 비우기
  dom.btnClearScraps.addEventListener('click', () => {
    if (confirm('수집한 원소 목록을 모두 비우시겠습니까?')) {
      state.scrappedElements = [];
      saveStorageData();
      updateNotebookUI();
      if (dom.elementModal.classList.contains('open')) {
        dom.btnAddToNotebook.textContent = '📌 이 원소를 탐구 활동지에 추가하기';
      }
    }
  });

  // 활동지 복사 및 인쇄
  dom.btnCopyNotebook.addEventListener('click', copyNotebookContent);
  dom.btnPrintNotebook.addEventListener('click', () => {
    window.print();
  });

  // 키보드 단축키 지원 (ESC: 닫기, 좌우 화살표: 원소 탐색)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dom.elementModal.classList.contains('open')) {
        closeElementModal();
      } else if (dom.notebookPanel.classList.contains('open')) {
        toggleNotebookPanel(false);
      }
    } else if (dom.elementModal.classList.contains('open')) {
      const maxNum = state.viewMode === 'core' ? 20 : 118;
      if (e.key === 'ArrowLeft' && state.currentElementNum > 1) {
        openElementModal(state.currentElementNum - 1);
      } else if (e.key === 'ArrowRight' && state.currentElementNum < maxNum) {
        openElementModal(state.currentElementNum + 1);
      }
    }
  });
}

// ==========================================
// 12. 웹 앱 구동 시작 (Entry Point)
// ==========================================
document.addEventListener('DOMContentLoaded', initApp);
