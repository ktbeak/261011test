/**
 * 주기율표 원소 데이터 (Periodic Table Elements Data)
 * 1번부터 20번까지는 고등학교 1학년 통합과학에 맞춘 심층 탐구 정보(전자배치, 원자가전자, 실생활 활용, 퀴즈)를 포함하며,
 * 21번부터 118번까지는 전체 주기율표 확장을 위한 기본 정보를 제공합니다.
 */

// 원소 분류별 색상 및 한글 명칭 매핑
const ELEMENT_CATEGORIES = {
  'alkali-metal': { name: '알칼리 금속', color: '#FFE2DD', textColor: '#C93B2B' },
  'alkaline-earth': { name: '알칼리 토금속', color: '#FFE8D6', textColor: '#B85D19' },
  'transition-metal': { name: '전이 금속', color: '#FFF3CD', textColor: '#856404' },
  'post-transition': { name: '전이후 금속', color: '#D4EDDA', textColor: '#155724' },
  'metalloid': { name: '준금속 (양쪽성)', color: '#D1ECF1', textColor: '#0C5460' },
  'nonmetal': { name: '반응성 비금속', color: '#E2E3F3', textColor: '#383D81' },
  'halogen': { name: '할로젠', color: '#E8DAEF', textColor: '#6C3483' },
  'noble-gas': { name: '비활성 기체', color: '#D6EAF8', textColor: '#21618C' },
  'lanthanide': { name: '란타넘족', color: '#FADBD8', textColor: '#78281F' },
  'actinide': { name: '악티늄족', color: '#EDBB99', textColor: '#6E2C00' }
};

// 원소 데이터 배열
const ELEMENTS_DATA = [
  // 1번 ~ 20번 : 고등학교 1학년 통합과학 핵심 원소 (상세 정보 포함)
  {
    number: 1,
    symbol: 'H',
    nameKo: '수소',
    nameEn: 'Hydrogen',
    period: 1,
    group: 1,
    category: 'nonmetal',
    atomicMass: 1.008,
    stateAtRoomTemp: '기체',
    shells: [1], // 전자 껍질 (K)
    valenceElectrons: 1, // 원자가 전자 수 (화학 결합에 참여하는 가장 바깥쪽 전자)
    summary: '우주에서 가장 풍부하고 가장 가벼운 원소입니다.',
    description: '1족에 속하지만 금속이 아닌 비금속 원소입니다. 1개의 양성자와 1개의 전자로 이루어져 있으며, 물(H₂O)과 유기물의 핵심 구성 성분입니다.',
    realLifeUsage: '수소 연료전지 자동차, 청정 에너지원, 로켓 추진 연료, 암모니아 합성 비료의 원료.',
    quiz: {
      question: '수소(H)는 1족에 속하므로 알칼리 금속의 성질을 띨까요?',
      answer: '아닙니다! 수소는 1족이지만 금속이 아니라 "비금속" 원소로 분류됩니다.',
      hint: '알칼리 금속은 리튬(Li), 나트륨(Na)부터 시작해요.'
    }
  },
  {
    number: 2,
    symbol: 'He',
    nameKo: '헬륨',
    nameEn: 'Helium',
    period: 1,
    group: 18,
    category: 'noble-gas',
    atomicMass: 4.003,
    stateAtRoomTemp: '기체',
    shells: [2], // K껍질 2개로 최대 수용량 채움 (안정)
    valenceElectrons: 0, // 비활성 기체는 안정한 전자배치를 가져 원자가 전자 수가 0
    summary: '가장 안정한 비활성 기체 중 하나로 폭발성이 없습니다.',
    description: '첫 번째 전자 껍질(K)에 전자가 2개 채워져 옥텟 규칙(안정한 전자 배치)을 만족합니다. 다른 물질과 화학 반응을 거의 하지 않습니다.',
    realLifeUsage: '파티용 풍선 및 비행선 충전 기체(수소와 달리 불이 붙지 않음), MRI 초전도 자석 냉각재.',
    quiz: {
      question: '헬륨(He)의 최외각 전자는 2개인데, 왜 원자가 전자 수는 0개일까요?',
      answer: '첫 번째 껍질(K)은 전자가 2개일 때 꽉 차서 매우 안정하므로, 다른 원소와 화학 결합을 하지 않아 원자가 전자 수는 0입니다.',
      hint: '원자가 전자 수는 "화학 결합에 참여할 수 있는 전자"를 의미합니다.'
    }
  },
  {
    number: 3,
    symbol: 'Li',
    nameKo: '리튬',
    nameEn: 'Lithium',
    period: 2,
    group: 1,
    category: 'alkali-metal',
    atomicMass: 6.94,
    stateAtRoomTemp: '고체',
    shells: [2, 1], // K:2, L:1
    valenceElectrons: 1,
    summary: '가장 가벼운 금속으로, 물과 격렬히 반응하는 알칼리 금속입니다.',
    description: '칼로 잘릴 정도로 무른 금속입니다. 물과 반응하면 수소 기체를 발생시키며 수용액을 염기성으로 만듭니다. 붉은색 불꽃 반응을 보입니다.',
    realLifeUsage: '스마트폰, 전기차 배터리의 핵심 원료(리튬 이온 배터리), 가벼운 항공기 합금.',
    quiz: {
      question: '리튬(Li)을 물에 넣으면 발생하는 기체는 무엇일까요?',
      answer: '수소(H₂) 기체입니다! 물(H₂O)과 반응하여 수소 기체가 발생하고 염기성 용액이 됩니다.',
      hint: '알칼리 금속은 물과 반응하여 불이 잘 붙는 기체를 냅니다.'
    }
  },
  {
    number: 4,
    symbol: 'Be',
    nameKo: '베릴륨',
    nameEn: 'Beryllium',
    period: 2,
    group: 2,
    category: 'alkaline-earth',
    atomicMass: 9.012,
    stateAtRoomTemp: '고체',
    shells: [2, 2],
    valenceElectrons: 2,
    summary: '단단하고 가벼우며 녹는점이 높은 알칼리 토금속입니다.',
    description: '가볍고 탄성이 우수하지만 화합물과 분진은 인체에 독성이 있습니다. 우주 망원경의 반사경 소재로 사용됩니다.',
    realLifeUsage: '제임스 웹 우주망원경 주거울(경량화 및 극한 냉각 안정성), 항공 우주 특수 합금.',
    quiz: {
      question: '베릴륨의 원자가 전자 수는 몇 개일까요?',
      answer: '2개입니다! 2족 원소는 최외각 껍질에 2개의 전자를 가집니다.',
      hint: '원소의 족 번호 일의 자리와 관련이 있어요.'
    }
  },
  {
    number: 5,
    symbol: 'B',
    nameKo: '붕소',
    nameEn: 'Boron',
    period: 2,
    group: 13,
    category: 'metalloid',
    atomicMass: 10.81,
    stateAtRoomTemp: '고체',
    shells: [2, 3],
    valenceElectrons: 3,
    summary: '금속과 비금속의 중간 성질을 띠는 준금속 원소입니다.',
    description: '열 팽창에 강한 내열유리를 만드는 데 필수적이며, 식물의 필수 미량 영양소이기도 합니다.',
    realLifeUsage: '내열 파이렉스(Pyrex) 유리그릇, 반도체 도핑 첨가물, 살균 소독용 붕산수.',
    quiz: {
      question: '붕소처럼 금속과 비금속의 중간 성질을 가진 원소를 무엇이라 부를까요?',
      answer: '준금속(Metalloid)이라고 부릅니다.',
      hint: '"준"결승처럼 금속에 준한다는 의미입니다.'
    }
  },
  {
    number: 6,
    symbol: 'C',
    nameKo: '탄소',
    nameEn: 'Carbon',
    period: 2,
    group: 14,
    category: 'nonmetal',
    atomicMass: 12.011,
    stateAtRoomTemp: '고체',
    shells: [2, 4],
    valenceElectrons: 4,
    summary: '생명체를 구성하는 중심 원소이자 화학의 팔방미인입니다.',
    description: '원자가 전자가 4개로, 최대 4개의 단일 결합을 형성할 수 있어 무수히 다양한 사슬형, 고리형 화합물(단백질, DNA, 플라스틱 등)을 만듭니다.',
    realLifeUsage: '다이아몬드, 흑연 연필심, 탄소섬유 스포츠 장비, 유기 생체 고분자.',
    quiz: {
      question: '탄소가 생명체의 기본 뼈대를 이루며 수많은 화합물을 만들 수 있는 까닭은?',
      answer: '원자가 전자가 4개로, 최대 4개의 공유 결합을 다양한 방식으로 맺을 수 있기 때문입니다.',
      hint: '탄소의 원자가 전자 수(결합할 수 있는 손의 개수)를 생각해보세요!'
    }
  },
  {
    number: 7,
    symbol: 'N',
    nameKo: '질소',
    nameEn: 'Nitrogen',
    period: 2,
    group: 15,
    category: 'nonmetal',
    atomicMass: 14.007,
    stateAtRoomTemp: '기체',
    shells: [2, 5],
    valenceElectrons: 5,
    summary: '지구 대기의 약 78%를 차지하는 반응성이 낮은 기체입니다.',
    description: '질소 분자(N₂)는 원자끼리 강력한 삼중 결합을 하고 있어 상온에서 매우 안정합니다. 단백질과 핵산의 핵심 구성 성분입니다.',
    realLifeUsage: '과자 봉지 충전재(바삭함 유지 및 산화 방지), 액체 질소 냉동 보관, 질소 비료.',
    quiz: {
      question: '과자 봉지에 질소 기체를 충전하는 과학적 이유는 무엇일까요?',
      answer: '질소 분자는 삼중 결합으로 매우 안정하여 음식물과 반응(산화)하지 않고 부패를 방지해주기 때문입니다.',
      hint: '질소의 매우 안정한 화학적 결합을 떠올려보세요.'
    }
  },
  {
    number: 8,
    symbol: 'O',
    nameKo: '산소',
    nameEn: 'Oxygen',
    period: 2,
    group: 16,
    category: 'nonmetal',
    atomicMass: 15.999,
    stateAtRoomTemp: '기체',
    shells: [2, 6],
    valenceElectrons: 6,
    summary: '생물의 호흡과 연소에 필수적인 생명의 기체입니다.',
    description: '지각과 인체에서 질량비로 가장 많은 원소입니다. 반응성이 커서 금속이나 비금속과 쉽게 산화물을 형성합니다.',
    realLifeUsage: '생물 호흡, 병원용 산소 호흡기, 제철소의 용광로 연소, 오존(O₃) 자외선 차단층.',
    quiz: {
      question: '산소(O)가 안정한 전자 배치를 이루기 위해 얻어야 하는 전자의 개수는?',
      answer: '2개입니다! 최외각에 전자 6개가 있으므로 2개를 얻어 8개(옥텟 규칙)를 채우려 합니다.',
      hint: '옥텟 규칙(가장 바깥 전자 8개 채우기)을 기억해보세요.'
    }
  },
  {
    number: 9,
    symbol: 'F',
    nameKo: '플루오린',
    nameEn: 'Fluorine',
    period: 2,
    group: 17,
    category: 'halogen',
    atomicMass: 18.998,
    stateAtRoomTemp: '기체',
    shells: [2, 7],
    valenceElectrons: 7,
    summary: '원소 중 전기 음성도(전자를 끌어당기는 힘)가 가장 강한 할로젠 원소입니다.',
    description: '전자 1개만 얻으면 옥텟 규칙을 만족하므로 반응성이 매우 격렬합니다. 과거에는 불소라고 불렸습니다.',
    realLifeUsage: '치약(충치 예방 불소 성분), 프라이팬 테플론 논스틱 코팅, 냉매 물질.',
    quiz: {
      question: '플루오린이 속한 17족 원소들을 무엇이라고 부를까요?',
      answer: '할로젠(Halogen) 원소라고 합니다.',
      hint: '염소(Cl), 브로민(Br), 아이오딘(I)과 같은 족입니다.'
    }
  },
  {
    number: 10,
    symbol: 'Ne',
    nameKo: '네온',
    nameEn: 'Neon',
    period: 2,
    group: 18,
    category: 'noble-gas',
    atomicMass: 20.18,
    stateAtRoomTemp: '기체',
    shells: [2, 8],
    valenceElectrons: 0,
    summary: '주황빛 네온사인으로 도시의 밤을 밝히는 비활성 기체입니다.',
    description: '두 번째 전자 껍질(L)에 전자 8개가 꽉 차 있어 화학적으로 극도로 안정하며 반응하지 않습니다.',
    realLifeUsage: '붉은빛/주황빛 네온사인 간판, 고전압 방전 표시등, 극저온 냉매.',
    quiz: {
      question: '네온(Ne)의 원자가 전자 수는 몇 개일까요?',
      answer: '0개입니다! 최외각 전자는 8개이지만, 꽉 차서 화학 결합에 참여하지 않으므로 원자가 전자 수는 0입니다.',
      hint: '최외각 전자 수(8개)와 화학 결합에 참여하는 원자가 전자 수의 차이를 확인하세요.'
    }
  },
  {
    number: 11,
    symbol: 'Na',
    nameKo: '나트륨 (소듐)',
    nameEn: 'Sodium',
    period: 3,
    group: 1,
    category: 'alkali-metal',
    atomicMass: 22.99,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 1],
    valenceElectrons: 1,
    summary: '소금(NaCl)의 주성분이며 노란색 불꽃 반응을 나타내는 알칼리 금속입니다.',
    description: '물과 폭발적으로 반응하여 수소 기체를 방출합니다. 공기 중 산소와도 빠르게 반응하므로 석유나 파라핀유 속에 보관합니다.',
    realLifeUsage: '식용 소금(염화 나트륨), 터널의 노란색 나트륨등, 신경 신호 전달에 필수적인 체내 이온.',
    quiz: {
      question: '나트륨(Na)을 물이나 공기 중에 그냥 두지 않고 석유 속에 보관하는 이유는?',
      answer: '반응성이 매우 커서 공기 중의 산소 및 수분과 격렬하게 반응하기 때문입니다.',
      hint: '알칼리 금속의 큰 반응성을 생각해보세요.'
    }
  },
  {
    number: 12,
    symbol: 'Mg',
    nameKo: '마그네슘',
    nameEn: 'Magnesium',
    period: 3,
    group: 2,
    category: 'alkaline-earth',
    atomicMass: 24.305,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 2],
    valenceElectrons: 2,
    summary: '타오를 때 눈부신 백색 빛을 내는 가벼운 실용 금속입니다.',
    description: '식물의 엽록소 중심에 위치하여 광합성을 가능하게 합니다. 가볍고 강도가 높아 경량 합금으로 애용됩니다.',
    realLifeUsage: '카메라 바디, 노트북 경량 마그네슘 케이스, 불꽃놀이 백색 조명탄, 식물 엽록소.',
    quiz: {
      question: '식물이 빛 에너지를 흡수하는 엽록소의 중심에 들어있는 금속 원소는?',
      answer: '마그네슘(Mg)입니다!',
      hint: '2족 3주기 원소입니다.'
    }
  },
  {
    number: 13,
    symbol: 'Al',
    nameKo: '알루미늄',
    nameEn: 'Aluminium',
    period: 3,
    group: 13,
    category: 'post-transition',
    atomicMass: 26.982,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 3],
    valenceElectrons: 3,
    summary: '지각에 세 번째로 풍부하며(금속 중 1위), 가볍고 녹슬지 않는 금속입니다.',
    description: '공기 중에서 표면에 치밀한 산화 피막을 형성하여 내부의 부식을 스스로 막아냅니다. 열과 전기 전도성이 좋습니다.',
    realLifeUsage: '음료수 캔, 주방용 알루미늄 호일, 비행기 동체 프레임, 창문 샷시.',
    quiz: {
      question: '알루미늄(Al)이 공기 중에서 쉽게 부식되어 망가지지 않는 과학적 원리는?',
      answer: '표면에 얇고 치밀한 산화 알루미늄 피막이 형성되어 내부를 보호하기 때문입니다.',
      hint: '스스로 만드는 얇은 보호막(피막)이 있습니다.'
    }
  },
  {
    number: 14,
    symbol: 'Si',
    nameKo: '규소 (실리콘)',
    nameEn: 'Silicon',
    period: 3,
    group: 14,
    category: 'metalloid',
    atomicMass: 28.085,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 4],
    valenceElectrons: 4,
    summary: '현대 IT 반도체 혁명을 이끈 모래(석영)의 핵심 성분 준금속입니다.',
    description: '지각에서 산소 다음으로 풍부합니다. 전기가 통하기도 하고 안 통하기도 하는 반도체 특성을 띠고 있어 컴퓨터 칩의 뼈대가 됩니다.',
    realLifeUsage: '컴퓨터 CPU 및 메모리 반도체 웨이퍼, 태양광 발전 패널, 유리 및 실리콘 젤.',
    quiz: {
      question: '규소(Si)는 탄소(C)와 같은 14족입니다. 원자가 전자 수는 몇 개일까요?',
      answer: '4개입니다! 같은 족 원소들은 원자가 전자 수가 같습니다.',
      hint: '동족 원소는 최외각 원자가 전자 수가 동일합니다.'
    }
  },
  {
    number: 15,
    symbol: 'P',
    nameKo: '인',
    nameEn: 'Phosphorus',
    period: 3,
    group: 15,
    category: 'nonmetal',
    atomicMass: 30.974,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 5],
    valenceElectrons: 5,
    summary: '생명체의 유전 물질(DNA, RNA)과 에너지 화폐(ATP)의 핵심 원소입니다.',
    description: '공기 중에서 자연 발화하는 백린과 안전한 적린 등의 동소체가 있습니다. 성냥 머리에도 쓰입니다.',
    realLifeUsage: 'DNA와 생체 에너지 분자(ATP), 농업용 인산 비료, 성냥의 마찰면.',
    quiz: {
      question: '우리 몸에서 에너지를 저장하고 전달하는 물질 ATP에서 P가 뜻하는 원소는?',
      answer: '인(Phosphorus)입니다!',
      hint: '아데노신 3"인"산에서 이름을 찾아보세요.'
    }
  },
  {
    number: 16,
    symbol: 'S',
    nameKo: '황',
    nameEn: 'Sulfur',
    period: 3,
    group: 16,
    category: 'nonmetal',
    atomicMass: 32.06,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 6],
    valenceElectrons: 6,
    summary: '노란색 결정을 띠며 화산 지대와 온천에서 특유의 냄새를 풍기는 원소입니다.',
    description: '단백질 아미노산(시스테인, 메싸이오닌)에 포함되어 머리카락의 파마 모양을 유지하는 이황화 결합을 만듭니다.',
    realLifeUsage: '황산(산업의 쌀), 고무 가황제(타이어 탄성 강화), 온천욕 의약품, 머리카락 단백질.',
    quiz: {
      question: '황(S)은 주기율표에서 어떤 원소와 같은 16족이며 화학적 성질이 비슷할까요?',
      answer: '산소(O)입니다! 산소와 황은 같은 16족 원소입니다.',
      hint: '호흡에 필요한 2주기 16족 원소를 생각해보세요.'
    }
  },
  {
    number: 17,
    symbol: 'Cl',
    nameKo: '염소',
    nameEn: 'Chlorine',
    period: 3,
    group: 17,
    category: 'halogen',
    atomicMass: 35.45,
    stateAtRoomTemp: '기체',
    shells: [2, 8, 7],
    valenceElectrons: 7,
    summary: '황록색의 자극적인 냄새가 나며 강력한 살균 및 소독력을 지닌 할로젠 원소입니다.',
    description: '수영장 소독이나 수돗물 정수에 사용됩니다. 1개의 전자를 얻어 염화 이온(Cl⁻)이 되기 쉽습니다.',
    realLifeUsage: '수돗물 및 수영장 염소 소독, 락스(차아염소산나트륨), 소금(NaCl), PVC 플라스틱.',
    quiz: {
      question: '염소(Cl)가 전자 1개를 얻어 안정한 이온이 되면 어떤 기체의 전자 배치를 가질까요?',
      answer: '18번 아르곤(Ar)의 전자 배치(2, 8, 8)를 갖게 됩니다!',
      hint: '17번에 전자 1개가 더해지면 18번 원소와 같아집니다.'
    }
  },
  {
    number: 18,
    symbol: 'Ar',
    nameKo: '아르곤',
    nameEn: 'Argon',
    period: 3,
    group: 18,
    category: 'noble-gas',
    atomicMass: 39.948,
    stateAtRoomTemp: '기체',
    shells: [2, 8, 8],
    valenceElectrons: 0,
    summary: '대기 중에 질소, 산소 다음으로 세 번째로 많은 비활성 기체입니다.',
    description: '이름의 뜻은 그리스어로 "게으른(반응하지 않는)"이라는 뜻입니다. 필라멘트가 타는 것을 막는 백열전구 보호 가스로 쓰였습니다.',
    realLifeUsage: '특수 금속 아크 용접 시 산화 방지 보호 가스, 이중창 단열재 충전 기체, 백열전구.',
    quiz: {
      question: '아르곤(Ar)은 대기 중에 몇 번째로 많은 기체일까요?',
      answer: '3번째로 많습니다! (질소 약 78%, 산소 약 21%, 아르곤 약 0.93%)',
      hint: '이산화 탄소보다 아르곤이 대기 중에 훨씬 많답니다.'
    }
  },
  {
    number: 19,
    symbol: 'K',
    nameKo: '칼륨 (포타슘)',
    nameEn: 'Potassium',
    period: 4,
    group: 1,
    category: 'alkali-metal',
    atomicMass: 39.098,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 8, 1], // K:2, L:8, M:8, N:1
    valenceElectrons: 1,
    summary: '바나나에 풍부하며 보라색 불꽃 반응을 보이는 매우 반응성이 큰 알칼리 금속입니다.',
    description: '나트륨(Na)보다 반응성이 더 격렬하여 차가운 물에 닿자마자 보라색 불꽃을 내며 폭발적으로 반응합니다. 체내 나트륨 배출을 돕습니다.',
    realLifeUsage: '바나나/시금치 등 건강 식품, 신경 자극 전도 및 심장 박동 조절, 칼륨 비료.',
    quiz: {
      question: '칼륨(K)의 불꽃 반응 색깔은 무엇일까요?',
      answer: '보라색입니다! (나트륨은 노란색, 리튬은 빨간색)',
      hint: '고1 과학 시간에 배우는 알칼리 금속의 불꽃색을 떠올려보세요.'
    }
  },
  {
    number: 20,
    symbol: 'Ca',
    nameKo: '칼슘',
    nameEn: 'Calcium',
    period: 4,
    group: 2,
    category: 'alkaline-earth',
    atomicMass: 40.078,
    stateAtRoomTemp: '고체',
    shells: [2, 8, 8, 2], // K:2, L:8, M:8, N:2
    valenceElectrons: 2,
    summary: '우리의 뼈와 치아를 튼튼하게 구성하는 알칼리 토금속입니다.',
    description: '석회석(CaCO₃), 시멘트, 조개껍데기의 주성분입니다. 주황빛 붉은색 불꽃 반응을 보입니다. 혈액 응고와 근육 수축에도 관여합니다.',
    realLifeUsage: '우유 및 멸치(뼈 건강 영양소), 건축용 석회석 및 시멘트, 제설제(염화칼슘).',
    quiz: {
      question: '칼슘(Ca)의 전자 껍질(주기) 수는 몇 개일까요?',
      answer: '4개(K, L, M, N)입니다! 4주기 원소이므로 4개의 전자 껍질을 가집니다.',
      hint: '주기율표의 가로줄(주기) 번호가 전자 껍질 수를 뜻합니다.'
    }
  },

  // 21번 ~ 118번 : 전체 주기율표 확장 모드를 위한 표준 원소 데이터
  { number: 21, symbol: 'Sc', nameKo: '스칸듐', nameEn: 'Scandium', period: 4, group: 3, category: 'transition-metal', atomicMass: 44.956, stateAtRoomTemp: '고체' },
  { number: 22, symbol: 'Ti', nameKo: '티타늄', nameEn: 'Titanium', period: 4, group: 4, category: 'transition-metal', atomicMass: 47.867, stateAtRoomTemp: '고체' },
  { number: 23, symbol: 'V', nameKo: '바나듐', nameEn: 'Vanadium', period: 4, group: 5, category: 'transition-metal', atomicMass: 50.942, stateAtRoomTemp: '고체' },
  { number: 24, symbol: 'Cr', nameKo: '크로뮴', nameEn: 'Chromium', period: 4, group: 6, category: 'transition-metal', atomicMass: 51.996, stateAtRoomTemp: '고체' },
  { number: 25, symbol: 'Mn', nameKo: '망가니즈', nameEn: 'Manganese', period: 4, group: 7, category: 'transition-metal', atomicMass: 54.938, stateAtRoomTemp: '고체' },
  { number: 26, symbol: 'Fe', nameKo: '철', nameEn: 'Iron', period: 4, group: 8, category: 'transition-metal', atomicMass: 55.845, stateAtRoomTemp: '고체' },
  { number: 27, symbol: 'Co', nameKo: '코발트', nameEn: 'Cobalt', period: 4, group: 9, category: 'transition-metal', atomicMass: 58.933, stateAtRoomTemp: '고체' },
  { number: 28, symbol: 'Ni', nameKo: '니켈', nameEn: 'Nickel', period: 4, group: 10, category: 'transition-metal', atomicMass: 58.693, stateAtRoomTemp: '고체' },
  { number: 29, symbol: 'Cu', nameKo: '구리', nameEn: 'Copper', period: 4, group: 11, category: 'transition-metal', atomicMass: 63.546, stateAtRoomTemp: '고체' },
  { number: 30, symbol: 'Zn', nameKo: '아연', nameEn: 'Zinc', period: 4, group: 12, category: 'transition-metal', atomicMass: 65.38, stateAtRoomTemp: '고체' },
  { number: 31, symbol: 'Ga', nameKo: '갈륨', nameEn: 'Gallium', period: 4, group: 13, category: 'post-transition', atomicMass: 69.723, stateAtRoomTemp: '고체' },
  { number: 32, symbol: 'Ge', nameKo: '저마늄', nameEn: 'Germanium', period: 4, group: 14, category: 'metalloid', atomicMass: 72.63, stateAtRoomTemp: '고체' },
  { number: 33, symbol: 'As', nameKo: '비소', nameEn: 'Arsenic', period: 4, group: 15, category: 'metalloid', atomicMass: 74.922, stateAtRoomTemp: '고체' },
  { number: 34, symbol: 'Se', nameKo: '셀레늄', nameEn: 'Selenium', period: 4, group: 16, category: 'nonmetal', atomicMass: 78.971, stateAtRoomTemp: '고체' },
  { number: 35, symbol: 'Br', nameKo: '브로민', nameEn: 'Bromine', period: 4, group: 17, category: 'halogen', atomicMass: 79.904, stateAtRoomTemp: '액체' },
  { number: 36, symbol: 'Kr', nameKo: '크립톤', nameEn: 'Krypton', period: 4, group: 18, category: 'noble-gas', atomicMass: 83.798, stateAtRoomTemp: '기체' },

  { number: 37, symbol: 'Rb', nameKo: '루비듐', nameEn: 'Rubidium', period: 5, group: 1, category: 'alkali-metal', atomicMass: 85.468, stateAtRoomTemp: '고체' },
  { number: 38, symbol: 'Sr', nameKo: '스트론튬', nameEn: 'Strontium', period: 5, group: 2, category: 'alkaline-earth', atomicMass: 87.62, stateAtRoomTemp: '고체' },
  { number: 39, symbol: 'Y', nameKo: '이트륨', nameEn: 'Yttrium', period: 5, group: 3, category: 'transition-metal', atomicMass: 88.906, stateAtRoomTemp: '고체' },
  { number: 40, symbol: 'Zr', nameKo: '지르코늄', nameEn: 'Zirconium', period: 5, group: 4, category: 'transition-metal', atomicMass: 91.224, stateAtRoomTemp: '고체' },
  { number: 41, symbol: 'Nb', nameKo: '나이오븀', nameEn: 'Niobium', period: 5, group: 5, category: 'transition-metal', atomicMass: 92.906, stateAtRoomTemp: '고체' },
  { number: 42, symbol: 'Mo', nameKo: '몰리브데넘', nameEn: 'Molybdenum', period: 5, group: 6, category: 'transition-metal', atomicMass: 95.95, stateAtRoomTemp: '고체' },
  { number: 43, symbol: 'Tc', nameKo: '테크네튬', nameEn: 'Technetium', period: 5, group: 7, category: 'transition-metal', atomicMass: 98, stateAtRoomTemp: '고체' },
  { number: 44, symbol: 'Ru', nameKo: '루테늄', nameEn: 'Ruthenium', period: 5, group: 8, category: 'transition-metal', atomicMass: 101.07, stateAtRoomTemp: '고체' },
  { number: 45, symbol: 'Rh', nameKo: '로듐', nameEn: 'Rhodium', period: 5, group: 9, category: 'transition-metal', atomicMass: 102.91, stateAtRoomTemp: '고체' },
  { number: 46, symbol: 'Pd', nameKo: '팔라듐', nameEn: 'Palladium', period: 5, group: 10, category: 'transition-metal', atomicMass: 106.42, stateAtRoomTemp: '고체' },
  { number: 47, symbol: 'Ag', nameKo: '은', nameEn: 'Silver', period: 5, group: 11, category: 'transition-metal', atomicMass: 107.87, stateAtRoomTemp: '고체' },
  { number: 48, symbol: 'Cd', nameKo: '카드뮴', nameEn: 'Cadmium', period: 5, group: 12, category: 'transition-metal', atomicMass: 112.41, stateAtRoomTemp: '고체' },
  { number: 49, symbol: 'In', nameKo: '인듐', nameEn: 'Indium', period: 5, group: 13, category: 'post-transition', atomicMass: 114.82, stateAtRoomTemp: '고체' },
  { number: 50, symbol: 'Sn', nameKo: '주석', nameEn: 'Tin', period: 5, group: 14, category: 'post-transition', atomicMass: 118.71, stateAtRoomTemp: '고체' },
  { number: 51, symbol: 'Sb', nameKo: '안티모니', nameEn: 'Antimony', period: 5, group: 15, category: 'metalloid', atomicMass: 121.76, stateAtRoomTemp: '고체' },
  { number: 52, symbol: 'Te', nameKo: '텔루륨', nameEn: 'Tellurium', period: 5, group: 16, category: 'metalloid', atomicMass: 127.6, stateAtRoomTemp: '고체' },
  { number: 53, symbol: 'I', nameKo: '아이오딘 (요오드)', nameEn: 'Iodine', period: 5, group: 17, category: 'halogen', atomicMass: 126.9, stateAtRoomTemp: '고체' },
  { number: 54, symbol: 'Xe', nameKo: '제논', nameEn: 'Xenon', period: 5, group: 18, category: 'noble-gas', atomicMass: 131.29, stateAtRoomTemp: '기체' },

  { number: 55, symbol: 'Cs', nameKo: '세슘', nameEn: 'Caesium', period: 6, group: 1, category: 'alkali-metal', atomicMass: 132.91, stateAtRoomTemp: '고체' },
  { number: 56, symbol: 'Ba', nameKo: '바륨', nameEn: 'Barium', period: 6, group: 2, category: 'alkaline-earth', atomicMass: 137.33, stateAtRoomTemp: '고체' },
  // 란타넘족 (57~71)
  { number: 57, symbol: 'La', nameKo: '란타넘', nameEn: 'Lanthanum', period: 6, group: 3, category: 'lanthanide', atomicMass: 138.91, stateAtRoomTemp: '고체' },
  { number: 58, symbol: 'Ce', nameKo: '세륨', nameEn: 'Cerium', period: 6, group: 3, category: 'lanthanide', atomicMass: 140.12, stateAtRoomTemp: '고체' },
  { number: 59, symbol: 'Pr', nameKo: '프라세오디뮴', nameEn: 'Praseodymium', period: 6, group: 3, category: 'lanthanide', atomicMass: 140.91, stateAtRoomTemp: '고체' },
  { number: 60, symbol: 'Nd', nameKo: '네오디뮴', nameEn: 'Neodymium', period: 6, group: 3, category: 'lanthanide', atomicMass: 144.24, stateAtRoomTemp: '고체' },
  { number: 61, symbol: 'Pm', nameKo: '프로메튬', nameEn: 'Promethium', period: 6, group: 3, category: 'lanthanide', atomicMass: 145, stateAtRoomTemp: '고체' },
  { number: 62, symbol: 'Sm', nameKo: '사마륨', nameEn: 'Samarium', period: 6, group: 3, category: 'lanthanide', atomicMass: 150.36, stateAtRoomTemp: '고체' },
  { number: 63, symbol: 'Eu', nameKo: '유로퓸', nameEn: 'Europium', period: 6, group: 3, category: 'lanthanide', atomicMass: 151.96, stateAtRoomTemp: '고체' },
  { number: 64, symbol: 'Gd', nameKo: '가돌리늄', nameEn: 'Gadolinium', period: 6, group: 3, category: 'lanthanide', atomicMass: 157.25, stateAtRoomTemp: '고체' },
  { number: 65, symbol: 'Tb', nameKo: '터븀', nameEn: 'Terbium', period: 6, group: 3, category: 'lanthanide', atomicMass: 158.93, stateAtRoomTemp: '고체' },
  { number: 66, symbol: 'Dy', nameKo: '디스프로슘', nameEn: 'Dysprosium', period: 6, group: 3, category: 'lanthanide', atomicMass: 162.5, stateAtRoomTemp: '고체' },
  { number: 67, symbol: 'Ho', nameKo: '홀뮴', nameEn: 'Holmium', period: 6, group: 3, category: 'lanthanide', atomicMass: 164.93, stateAtRoomTemp: '고체' },
  { number: 68, symbol: 'Er', nameKo: '어븀', nameEn: 'Erbium', period: 6, group: 3, category: 'lanthanide', atomicMass: 167.26, stateAtRoomTemp: '고체' },
  { number: 69, symbol: 'Tm', nameKo: '툴륨', nameEn: 'Thulium', period: 6, group: 3, category: 'lanthanide', atomicMass: 168.93, stateAtRoomTemp: '고체' },
  { number: 70, symbol: 'Yb', nameKo: '이터븀', nameEn: 'Ytterbium', period: 6, group: 3, category: 'lanthanide', atomicMass: 173.05, stateAtRoomTemp: '고체' },
  { number: 71, symbol: 'Lu', nameKo: '루테튬', nameEn: 'Lutetium', period: 6, group: 3, category: 'lanthanide', atomicMass: 174.97, stateAtRoomTemp: '고체' },
  // 6주기 전이금속 및 후반
  { number: 72, symbol: 'Hf', nameKo: '하프늄', nameEn: 'Hafnium', period: 6, group: 4, category: 'transition-metal', atomicMass: 178.49, stateAtRoomTemp: '고체' },
  { number: 73, symbol: 'Ta', nameKo: '탄탈럼', nameEn: 'Tantalum', period: 6, group: 5, category: 'transition-metal', atomicMass: 180.95, stateAtRoomTemp: '고체' },
  { number: 74, symbol: 'W', nameKo: '텅스텐', nameEn: 'Tungsten', period: 6, group: 6, category: 'transition-metal', atomicMass: 183.84, stateAtRoomTemp: '고체' },
  { number: 75, symbol: 'Re', nameKo: '레늄', nameEn: 'Rhenium', period: 6, group: 7, category: 'transition-metal', atomicMass: 186.21, stateAtRoomTemp: '고체' },
  { number: 76, symbol: 'Os', nameKo: '오스뮴', nameEn: 'Osmium', period: 6, group: 8, category: 'transition-metal', atomicMass: 190.23, stateAtRoomTemp: '고체' },
  { number: 77, symbol: 'Ir', nameKo: '이리듐', nameEn: 'Iridium', period: 6, group: 9, category: 'transition-metal', atomicMass: 192.22, stateAtRoomTemp: '고체' },
  { number: 78, symbol: 'Pt', nameKo: '백금', nameEn: 'Platinum', period: 6, group: 10, category: 'transition-metal', atomicMass: 195.08, stateAtRoomTemp: '고체' },
  { number: 79, symbol: 'Au', nameKo: '금', nameEn: 'Gold', period: 6, group: 11, category: 'transition-metal', atomicMass: 196.97, stateAtRoomTemp: '고체' },
  { number: 80, symbol: 'Hg', nameKo: '수은', nameEn: 'Mercury', period: 6, group: 12, category: 'transition-metal', atomicMass: 200.59, stateAtRoomTemp: '액체' },
  { number: 81, symbol: 'Tl', nameKo: '탈륨', nameEn: 'Thallium', period: 6, group: 13, category: 'post-transition', atomicMass: 204.38, stateAtRoomTemp: '고체' },
  { number: 82, symbol: 'Pb', nameKo: '납', nameEn: 'Lead', period: 6, group: 14, category: 'post-transition', atomicMass: 207.2, stateAtRoomTemp: '고체' },
  { number: 83, symbol: 'Bi', nameKo: '비스무트', nameEn: 'Bismuth', period: 6, group: 15, category: 'post-transition', atomicMass: 208.98, stateAtRoomTemp: '고체' },
  { number: 84, symbol: 'Po', nameKo: '폴로늄', nameEn: 'Polonium', period: 6, group: 16, category: 'post-transition', atomicMass: 209, stateAtRoomTemp: '고체' },
  { number: 85, symbol: 'At', nameKo: '아스타틴', nameEn: 'Astatine', period: 6, group: 17, category: 'metalloid', atomicMass: 210, stateAtRoomTemp: '고체' },
  { number: 86, symbol: 'Rn', nameKo: '라돈', nameEn: 'Radon', period: 6, group: 18, category: 'noble-gas', atomicMass: 222, stateAtRoomTemp: '기체' },

  { number: 87, symbol: 'Fr', nameKo: '프랑슘', nameEn: 'Francium', period: 7, group: 1, category: 'alkali-metal', atomicMass: 223, stateAtRoomTemp: '고체' },
  { number: 88, symbol: 'Ra', nameKo: '라듐', nameEn: 'Radium', period: 7, group: 2, category: 'alkaline-earth', atomicMass: 226, stateAtRoomTemp: '고체' },
  // 악티늄족 (89~103)
  { number: 89, symbol: 'Ac', nameKo: '악티늄', nameEn: 'Actinium', period: 7, group: 3, category: 'actinide', atomicMass: 227, stateAtRoomTemp: '고체' },
  { number: 90, symbol: 'Th', nameKo: '토륨', nameEn: 'Thorium', period: 7, group: 3, category: 'actinide', atomicMass: 232.04, stateAtRoomTemp: '고체' },
  { number: 91, symbol: 'Pa', nameKo: '프로트악티늄', nameEn: 'Protactinium', period: 7, group: 3, category: 'actinide', atomicMass: 231.04, stateAtRoomTemp: '고체' },
  { number: 92, symbol: 'U', nameKo: '우라늄', nameEn: 'Uranium', period: 7, group: 3, category: 'actinide', atomicMass: 238.03, stateAtRoomTemp: '고체' },
  { number: 93, symbol: 'Np', nameKo: '넵투늄', nameEn: 'Neptunium', period: 7, group: 3, category: 'actinide', atomicMass: 237, stateAtRoomTemp: '고체' },
  { number: 94, symbol: 'Pu', nameKo: '플루토늄', nameEn: 'Plutonium', period: 7, group: 3, category: 'actinide', atomicMass: 244, stateAtRoomTemp: '고체' },
  { number: 95, symbol: 'Am', nameKo: '아메리슘', nameEn: 'Americium', period: 7, group: 3, category: 'actinide', atomicMass: 243, stateAtRoomTemp: '고체' },
  { number: 96, symbol: 'Cm', nameKo: '퀴륨', nameEn: 'Curium', period: 7, group: 3, category: 'actinide', atomicMass: 247, stateAtRoomTemp: '고체' },
  { number: 97, symbol: 'Bk', nameKo: '버클륨', nameEn: 'Berkelium', period: 7, group: 3, category: 'actinide', atomicMass: 247, stateAtRoomTemp: '고체' },
  { number: 98, symbol: 'Cf', nameKo: '캘리포늄', nameEn: 'Californium', period: 7, group: 3, category: 'actinide', atomicMass: 251, stateAtRoomTemp: '고체' },
  { number: 99, symbol: 'Es', nameKo: '아인슈타이늄', nameEn: 'Einsteinium', period: 7, group: 3, category: 'actinide', atomicMass: 252, stateAtRoomTemp: '고체' },
  { number: 100, symbol: 'Fm', nameKo: '페르뮴', nameEn: 'Fermium', period: 7, group: 3, category: 'actinide', atomicMass: 257, stateAtRoomTemp: '고체' },
  { number: 101, symbol: 'Md', nameKo: '멘델레븀', nameEn: 'Mendelevium', period: 7, group: 3, category: 'actinide', atomicMass: 258, stateAtRoomTemp: '고체' },
  { number: 102, symbol: 'No', nameKo: '노벨륨', nameEn: 'Nobelium', period: 7, group: 3, category: 'actinide', atomicMass: 259, stateAtRoomTemp: '고체' },
  { number: 103, symbol: 'Lr', nameKo: '로렌슘', nameEn: 'Lawrencium', period: 7, group: 3, category: 'actinide', atomicMass: 266, stateAtRoomTemp: '고체' },
  // 7주기 전이금속 및 후반
  { number: 104, symbol: 'Rf', nameKo: '러더포듐', nameEn: 'Rutherfordium', period: 7, group: 4, category: 'transition-metal', atomicMass: 267, stateAtRoomTemp: '인공합성' },
  { number: 105, symbol: 'Db', nameKo: '더브늄', nameEn: 'Dubnium', period: 7, group: 5, category: 'transition-metal', atomicMass: 268, stateAtRoomTemp: '인공합성' },
  { number: 106, symbol: 'Sg', nameKo: '시보귬', nameEn: 'Seaborgium', period: 7, group: 6, category: 'transition-metal', atomicMass: 269, stateAtRoomTemp: '인공합성' },
  { number: 107, symbol: 'Bh', nameKo: '보륨', nameEn: 'Bohrium', period: 7, group: 7, category: 'transition-metal', atomicMass: 270, stateAtRoomTemp: '인공합성' },
  { number: 108, symbol: 'Hs', nameKo: '하슘', nameEn: 'Hassium', period: 7, group: 8, category: 'transition-metal', atomicMass: 277, stateAtRoomTemp: '인공합성' },
  { number: 109, symbol: 'Mt', nameKo: '마이트너륨', nameEn: 'Meitnerium', period: 7, group: 9, category: 'transition-metal', atomicMass: 278, stateAtRoomTemp: '인공합성' },
  { number: 110, symbol: 'Ds', nameKo: '다름슈타튬', nameEn: 'Darmstadtium', period: 7, group: 10, category: 'transition-metal', atomicMass: 281, stateAtRoomTemp: '인공합성' },
  { number: 111, symbol: 'Rg', nameKo: '뢴트게늄', nameEn: 'Roentgenium', period: 7, group: 11, category: 'transition-metal', atomicMass: 282, stateAtRoomTemp: '인공합성' },
  { number: 112, symbol: 'Cn', nameKo: '코페르니슘', nameEn: 'Copernicium', period: 7, group: 12, category: 'transition-metal', atomicMass: 285, stateAtRoomTemp: '인공합성' },
  { number: 113, symbol: 'Nh', nameKo: '니호늄', nameEn: 'Nihonium', period: 7, group: 13, category: 'post-transition', atomicMass: 286, stateAtRoomTemp: '인공합성' },
  { number: 114, symbol: 'Fl', nameKo: '플레로븀', nameEn: 'Flerovium', period: 7, group: 14, category: 'post-transition', atomicMass: 289, stateAtRoomTemp: '인공합성' },
  { number: 115, symbol: 'Mc', nameKo: '모스코븀', nameEn: 'Moscovium', period: 7, group: 15, category: 'post-transition', atomicMass: 290, stateAtRoomTemp: '인공합성' },
  { number: 116, symbol: 'Lv', nameKo: '리버모륨', nameEn: 'Livermorium', period: 7, group: 16, category: 'post-transition', atomicMass: 293, stateAtRoomTemp: '인공합성' },
  { number: 117, symbol: 'Ts', nameKo: '테네신', nameEn: 'Tennessine', period: 7, group: 17, category: 'halogen', atomicMass: 294, stateAtRoomTemp: '인공합성' },
  { number: 118, symbol: 'Og', nameKo: '오가네손', nameEn: 'Oganesson', period: 7, group: 18, category: 'noble-gas', atomicMass: 294, stateAtRoomTemp: '인공합성' }
];
