const DIAGRAMS = {
  leafVenation: {
    caption: "Ilustrasi bentuk susunan tulang daun menjari dan sejajar.",
    svg: `
      <svg viewBox="0 0 320 110" width="300" height="104" aria-label="Perbandingan tulang daun">
        <g transform="translate(20,8)">
          <rect x="0" y="0" width="120" height="94" rx="10" fill="#ffffff" stroke="#bbf7d0" />
          <path d="M60 76 L60 22 M60 72 L30 34 M60 72 L90 34 M60 72 L24 58 M60 72 L96 58" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
          <circle cx="60" cy="72" r="4" fill="#15803d"/>
          <text x="60" y="90" text-anchor="middle" font-size="11" fill="#334155">Tulang Menjari</text>
        </g>
        <g transform="translate(180,8)">
          <rect x="0" y="0" width="120" height="94" rx="10" fill="#ffffff" stroke="#bbf7d0" />
          <path d="M35 74 Q60 12 85 74 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <line x1="50" y1="70" x2="55" y2="28" stroke="#15803d" stroke-width="2"/>
          <line x1="60" y1="72" x2="60" y2="22" stroke="#15803d" stroke-width="2"/>
          <line x1="70" y1="70" x2="65" y2="28" stroke="#15803d" stroke-width="2"/>
          <text x="60" y="90" text-anchor="middle" font-size="11" fill="#334155">Tulang Sejajar</text>
        </g>
      </svg>
    `,
  },
  photosynthesis: {
    caption: "Skema proses fotosintesis pada tumbuhan hijau.",
    svg: `
      <svg viewBox="0 0 360 130" width="340" height="122" aria-label="Skema fotosintesis">
        <circle cx="48" cy="30" r="18" fill="#fde047" stroke="#eab308" stroke-width="2"/>
        <text x="48" y="60" text-anchor="middle" font-size="11" fill="#854d0e" font-weight="600">Cahaya Matahari</text>
        <path d="M72 34 L132 54" stroke="#eab308" stroke-width="2.5" stroke-dasharray="4 3"/>
        <ellipse cx="180" cy="64" rx="46" ry="26" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
        <text x="180" y="68" text-anchor="middle" font-size="12" fill="#ffffff" font-weight="700">DAUN (Klorofil)</text>
        <text x="180" y="112" text-anchor="middle" font-size="11" fill="#0369a1" font-weight="600">↑ Air (H₂O) dari Akar</text>
        <line x1="180" y1="98" x2="180" y2="90" stroke="#0284c7" stroke-width="2"/>
        <text x="95" y="96" text-anchor="middle" font-size="11" fill="#475569" font-weight="600">CO₂ Masuk →</text>
        <text x="295" y="48" text-anchor="middle" font-size="11" fill="#15803d" font-weight="700">→ Oksigen (O₂)</text>
        <text x="295" y="84" text-anchor="middle" font-size="11" fill="#b45309" font-weight="700">→ Glukosa</text>
      </svg>
    `,
  },
  flowerParts: {
    caption: "Bagian-bagian utama pada bunga sempurna.",
    svg: `
      <svg viewBox="0 0 280 130" width="260" height="120" aria-label="Bagian bunga">
        <path d="M140 120 L140 78" stroke="#15803d" stroke-width="6" stroke-linecap="round"/>
        <path d="M116 84 Q140 94 164 84 Q140 72 116 84 Z" fill="#22c55e"/>
        <ellipse cx="110" cy="54" rx="22" ry="28" fill="#fbcfe8" stroke="#ec4899" stroke-width="1.5"/>
        <ellipse cx="170" cy="54" rx="22" ry="28" fill="#fbcfe8" stroke="#ec4899" stroke-width="1.5"/>
        <ellipse cx="140" cy="40" rx="20" ry="26" fill="#f9a8d4" stroke="#ec4899" stroke-width="1.5"/>
        <line x1="140" y1="78" x2="140" y2="34" stroke="#ca8a04" stroke-width="4" stroke-linecap="round"/>
        <circle cx="140" cy="30" r="6" fill="#eab308"/>
        <line x1="125" y1="74" x2="118" y2="42" stroke="#78350f" stroke-width="2"/>
        <circle cx="117" cy="40" r="4" fill="#f59e0b"/>
        <line x1="155" y1="74" x2="162" y2="42" stroke="#78350f" stroke-width="2"/>
        <circle cx="163" cy="40" r="4" fill="#f59e0b"/>
        <text x="52" y="34" font-size="11" fill="#334155">1. Mahkota</text>
        <text x="52" y="96" font-size="11" fill="#334155">2. Kelopak</text>
        <text x="184" y="42" font-size="11" fill="#334155">3. Benang Sari</text>
        <text x="184" y="24" font-size="11" fill="#334155">4. Putik</text>
      </svg>
    `,
  },
};

const QUESTIONS = [
  {
    id: 1,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    question:
      "Bagian tumbuhan yang berfungsi menyerap air dan zat hara (mineral) dari dalam tanah serta memperkokoh berdirinya tumbuhan adalah ....",
    options: ["batang", "daun", "akar", "bunga"],
    answer: 2,
    explanation:
      "Akar berfungsi menyerap air dan zat hara dari dalam tanah serta memperkokoh berdirinya tumbuhan.",
  },
  {
    id: 2,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    question:
      "Tumbuhan dikotil seperti mangga dan jambu memiliki jenis akar yang terdiri atas satu akar utama besar yang tumbuh lurus ke bawah disertai cabang-cabang akar. Jenis akar tersebut adalah ....",
    options: ["akar serabut", "akar tunggang", "akar gantung", "akar napas"],
    answer: 1,
    explanation:
      "Tumbuhan dikotil seperti mangga dan jambu memiliki akar tunggang yang kokoh dengan satu akar utama besar.",
  },
  {
    id: 3,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    question:
      "Perhatikan pernyataan mengenai fungsi bagian tumbuhan berikut:\n1) Menyalurkan air dan mineral dari akar menuju daun\n2) Tempat berlangsungnya fotosintesis utama\n3) Mengedarkan hasil fotosintesis ke seluruh tubuh tumbuhan\n4) Menopang daun, bunga, dan buah\n\nYang merupakan fungsi batang ditunjukkan oleh nomor ....",
    options: ["1, 2, dan 3", "1, 3, dan 4", "2, 3, dan 4", "1, 2, dan 4"],
    answer: 1,
    explanation:
      "Batang berfungsi menyalurkan air/mineral ke daun (1), mengedarkan hasil fotosintesis (3), serta menopang daun, bunga, dan buah (4). Nomor 2 adalah fungsi utama daun.",
  },
  {
    id: 4,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    question:
      "Pada permukaan daun terdapat bagian kecil berbentuk pori-pori atau celah yang berfungsi sebagai tempat keluar masuknya gas (karbon dioksida dan oksigen) serta penguapan air. Bagian tersebut dinamakan ....",
    options: ["klorofil", "tulang daun", "stomata", "tangkai daun"],
    answer: 2,
    explanation:
      "Stomata (mulut daun) merupakan celah mikroskopis pada daun sebagai jalan keluar masuknya gas dan penguapan air.",
  },
  {
    id: 5,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    diagram: "leafVenation",
    question:
      "Rani mengamati sehelai daun singkong dan sehelai daun jagung. Perbedaan susunan tulang daun yang benar dari kedua tumbuhan tersebut adalah ....",
    options: [
      "daun singkong bertulang sejajar, sedangkan daun jagung menjari",
      "daun singkong bertulang menyirip, sedangkan daun jagung melengkung",
      "daun singkong bertulang menjari, sedangkan daun jagung sejajar",
      "daun singkong bertulang melengkung, sedangkan daun jagung menyirip",
    ],
    answer: 2,
    explanation:
      "Daun singkong memiliki susunan tulang daun menjari, sedangkan daun jagung (tumbuhan monokotil) memiliki tulang daun sejajar.",
  },
  {
    id: 6,
    topic: "A",
    topicLabel: "Topik A: Bagian Tubuh Tumbuhan",
    question:
      "Bagian buah yang berfungsi melindungi biji sekaligus sering dimanfaatkan manusia dan hewan sebagai sumber makanan adalah ....",
    options: ["kulit biji", "tangkai buah", "daging buah", "kelopak bunga"],
    answer: 2,
    explanation:
      "Daging buah membungkus dan melindungi biji serta menyimpan cadangan makanan yang sering dimakan manusia dan hewan.",
  },
  {
    id: 7,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Proses tumbuhan hijau membuat makanannya sendiri dengan bantuan energi cahaya matahari disebut ....",
    options: ["respirasi", "transpirasi", "penyerbukan", "fotosintesis"],
    answer: 3,
    explanation:
      "Fotosintesis adalah proses tumbuhan berklorofil mengolah air dan karbon dioksida menjadi makanan menggunakan energi cahaya matahari.",
  },
  {
    id: 8,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    diagram: "photosynthesis",
    question:
      "Bahan-bahan yang dibutuhkan tumbuhan untuk melakukan proses fotosintesis adalah ....",
    options: [
      "oksigen, air, dan cahaya matahari",
      "air, karbon dioksida, dan cahaya matahari",
      "karbohidrat, oksigen, dan mineral",
      "karbon dioksida, glukosa, dan nitrogen",
    ],
    answer: 1,
    explanation:
      "Fotosintesis membutuhkan air (diserap akar), karbon dioksida (masuk lewat stomata), dan cahaya matahari (ditangkap klorofil).",
  },
  {
    id: 9,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Zat hijau daun yang berperan menangkap energi cahaya matahari selama proses fotosintesis berlangsung adalah ....",
    options: ["stomata", "klorofil", "floem", "xilem"],
    answer: 1,
    explanation:
      "Klorofil adalah zat hijau daun yang berfungsi menyerap energi cahaya matahari untuk proses fotosintesis.",
  },
  {
    id: 10,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Hasil utama dari proses fotosintesis yang sangat dibutuhkan oleh manusia dan hewan untuk bernapas adalah ....",
    options: ["karbon dioksida", "uap air", "oksigen", "nitrogen"],
    answer: 2,
    explanation:
      "Selain menghasilkan karbohidrat (glukosa), fotosintesis melepaskan gas oksigen (O₂) ke udara untuk pernapasan makhluk hidup.",
  },
  {
    id: 11,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Karbohidrat (glukosa) hasil fotosintesis tidak semuanya langsung digunakan oleh tumbuhan, melainkan sebagian disimpan sebagai cadangan makanan. Contoh tumbuhan yang menyimpan cadangan makanannya pada bagian umbi akar adalah ....",
    options: [
      "tebu dan sagu",
      "singkong dan wortel",
      "padi dan jagung",
      "mangga dan pisang",
    ],
    answer: 1,
    explanation:
      "Singkong dan wortel menyimpan cadangan makanan di umbi akar. Tebu dan sagu menyimpannya di batang, sedangkan padi dan jagung di biji.",
  },
  {
    id: 12,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Dalam sebuah percobaan, siswa menutup sebagian permukaan daun tanaman hijau dengan kertas timah (aluminium foil) selama beberapa hari lalu meletakkannya di tempat terang. Bagian daun yang tertutup kertas timah tidak menghasilkan zat tepung (amilum) saat diuji dengan larutan iodin karena ....",
    options: [
      "daun kekurangan air dari tanah",
      "udara tidak bisa masuk melalui akar",
      "bagian daun tersebut tidak mendapatkan cahaya matahari",
      "klorofil pada daun hilang seluruhnya",
    ],
    answer: 2,
    explanation:
      "Kertas timah menghalangi cahaya matahari mengenai permukaan daun sehingga fotosintesis tidak terjadi di bagian yang tertutup tersebut.",
  },
  {
    id: 13,
    topic: "B",
    topicLabel: "Topik B: Fotosintesis",
    question:
      "Mengapa proses fotosintesis disebut sebagai proses paling penting di Bumi bagi makhluk hidup lain?",
    options: [
      "Karena fotosintesis hanya terjadi pada malam hari untuk mendinginkan udara",
      "Karena fotosintesis menghasilkan oksigen untuk bernapas dan sumber makanan bagi makhluk hidup",
      "Karena fotosintesis mengubah oksigen menjadi karbon dioksida di atmosfer",
      "Karena fotosintesis membuat semua tumbuhan tidak memerlukan air lagi",
    ],
    answer: 1,
    explanation:
      "Fotosintesis menyediakan oksigen untuk bernapas sekaligus menghasilkan bahan makanan (energi kimia) yang menjadi dasar rantai makanan di Bumi.",
  },
  {
    id: 14,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    diagram: "flowerParts",
    question:
      "Perhatikan bagian-bagian bunga sempurna berikut:\n1) Mahkota bunga\n2) Kelopak bunga\n3) Benang sari\n4) Putik\n\nAlat kelamin jantan dan alat kelamin betina pada bunga berturut-turut ditunjukkan oleh nomor ....",
    options: ["1 dan 2", "2 dan 3", "3 dan 4", "4 dan 3"],
    answer: 2,
    explanation:
      "Benang sari (3) merupakan alat kelamin jantan penghasil serbuk sari, sedangkan putik (4) merupakan alat kelamin betina pada bunga.",
  },
  {
    id: 15,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question: "Peristiwa jatuhnya serbuk sari ke atas kepala putik disebut ....",
    options: ["pembuahan", "penyerbukan", "pencangkokan", "perkecambahan"],
    answer: 1,
    explanation:
      "Penyerbukan (polinasi) adalah peristiwa jatuhnya serbuk sari ke atas kepala putik sebelum terjadi pembuahan.",
  },
  {
    id: 16,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question:
      "Bunga sepatu memiliki mahkota berwarna cerah dan menghasilkan nektar yang manis. Ciri tersebut menarik perhatian lebah dan kupu-kupu untuk membantu proses penyerbukan. Penyerbukan yang dibantu oleh serangga disebut ....",
    options: ["anemogami", "hidrogami", "entomogami", "antropogami"],
    answer: 2,
    explanation:
      "Entomogami adalah penyerbukan yang dibantu serangga. Anemogami dibantu angin, hidrogami oleh air, dan antropogami oleh manusia.",
  },
  {
    id: 17,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question:
      "Jika serbuk sari jatuh ke kepala putik bunga lain yang masih berada pada satu pohon yang sama, peristiwa tersebut disebut ....",
    options: [
      "penyerbukan sendiri",
      "penyerbukan tetangga",
      "penyerbukan silang",
      "penyerbukan bastar",
    ],
    answer: 1,
    explanation:
      "Penyerbukan tetangga terjadi apabila serbuk sari berasal dari bunga lain yang masih berada pada satu pohon yang sama.",
  },
  {
    id: 18,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question:
      "Tumbuhan seperti kelapa memiliki sabut yang berongga dan ringan sehingga dapat mengapung di air. Cara penyebaran biji tumbuhan kelapa umumnya dibantu oleh ....",
    options: ["angin", "air", "hewan", "manusia"],
    answer: 1,
    explanation:
      "Sabut kelapa memiliki rongga udara sehingga ringan dan dapat mengapung terbawa arus air ke tempat baru.",
  },
  {
    id: 19,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question:
      "Di bawah ini yang merupakan kelompok tumbuhan yang berkembang biak secara vegetatif alami menggunakan tunas adalah ....",
    options: [
      "jahe, kunyit, dan lengkuas",
      "stroberi, pegagan, dan rumput teki",
      "pisang, bambu, dan cocor bebek",
      "kentang, bawang merah, dan singkong",
    ],
    answer: 2,
    explanation:
      "Pisang dan bambu berkembang biak dengan tunas batang/anakan, sedangkan cocor bebek berkembang biak dengan tunas adventif pada daun.",
  },
  {
    id: 20,
    topic: "C",
    topicLabel: "Topik C: Perkembangbiakan Tumbuhan",
    question:
      "Pak Budi ingin memperbanyak tanaman mangga yang berbuah manis dengan cepat dan memiliki sifat yang sama persis dengan induknya. Cara perkembangbiakan vegetatif buatan yang paling tepat dilakukan Pak Budi adalah ....",
    options: [
      "menyebar biji mangga di kebun",
      "melakukan penyerbukan silang",
      "mencangkok dahan pohon mangga",
      "menanam daun pohon mangga",
    ],
    answer: 2,
    explanation:
      "Mencangkok cocok untuk tanaman berkayu seperti mangga karena menghasilkan tanaman baru yang cepat berbuah dan sifatnya sama dengan induk.",
  },
];

const state = {
  studentName: "",
  studentClass: "",
  activeQuestions: [],
  currentIndex: 0,
  answers: {},
  flagged: new Set(),
  secondsElapsed: 0,
  timerId: null,
};

const els = {
  startScreen: document.getElementById("startScreen"),
  quizScreen: document.getElementById("quizScreen"),
  resultScreen: document.getElementById("resultScreen"),
  startForm: document.getElementById("startForm"),
  studentNameInput: document.getElementById("studentName"),
  studentClassInput: document.getElementById("studentClass"),
  topicSelect: document.getElementById("topicSelect"),
  timerPill: document.getElementById("timerPill"),
  timerText: document.getElementById("timerText"),
  topicBadge: document.getElementById("topicBadge"),
  progressText: document.getElementById("progressText"),
  progressBarFill: document.getElementById("progressBarFill"),
  questionDiagram: document.getElementById("questionDiagram"),
  questionText: document.getElementById("questionText"),
  optionsContainer: document.getElementById("optionsContainer"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  flagBtn: document.getElementById("flagBtn"),
  submitQuizBtn: document.getElementById("submitQuizBtn"),
  finishEarlyBtn: document.getElementById("finishEarlyBtn"),
  displayStudentName: document.getElementById("displayStudentName"),
  displayStudentClass: document.getElementById("displayStudentClass"),
  questionNavGrid: document.getElementById("questionNavGrid"),
  resultGreeting: document.getElementById("resultGreeting"),
  resultStudentInfo: document.getElementById("resultStudentInfo"),
  scoreValue: document.getElementById("scoreValue"),
  predicateText: document.getElementById("predicateText"),
  correctCountText: document.getElementById("correctCountText"),
  elapsedTimeText: document.getElementById("elapsedTimeText"),
  topicBreakdown: document.getElementById("topicBreakdown"),
  reviewList: document.getElementById("reviewList"),
  printResultBtn: document.getElementById("printResultBtn"),
  retryBtn: document.getElementById("retryBtn"),
};

function formatTime(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function startTimer() {
  stopTimer();
  state.secondsElapsed = 0;
  els.timerText.textContent = "00:00";
  els.timerPill.hidden = false;
  state.timerId = setInterval(() => {
    state.secondsElapsed += 1;
    els.timerText.textContent = formatTime(state.secondsElapsed);
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startQuiz(event) {
  event.preventDefault();
  state.studentName = els.studentNameInput.value.trim() || "Siswa";
  state.studentClass = els.studentClassInput.value.trim() || "Kelas V";
  const selectedTopic = els.topicSelect.value;

  state.activeQuestions =
    selectedTopic === "all"
      ? [...QUESTIONS]
      : QUESTIONS.filter((q) => q.topic === selectedTopic);

  state.currentIndex = 0;
  state.answers = {};
  state.flagged = new Set();

  els.displayStudentName.textContent = state.studentName;
  els.displayStudentClass.textContent = `Kelas ${state.studentClass}`;

  els.startScreen.hidden = true;
  els.resultScreen.hidden = true;
  els.quizScreen.hidden = false;

  startTimer();
  renderQuestion();
}

function renderQuestion() {
  const total = state.activeQuestions.length;
  const q = state.activeQuestions[state.currentIndex];
  const letters = ["A", "B", "C", "D"];

  els.topicBadge.textContent = q.topicLabel;
  els.progressText.textContent = `Soal ${state.currentIndex + 1} dari ${total}`;
  els.progressBarFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

  if (q.diagram && DIAGRAMS[q.diagram]) {
    const d = DIAGRAMS[q.diagram];
    els.questionDiagram.innerHTML = `${d.svg}<p class="diagram-caption">${d.caption}</p>`;
    els.questionDiagram.hidden = false;
  } else {
    els.questionDiagram.innerHTML = "";
    els.questionDiagram.hidden = true;
  }

  els.questionText.textContent = `${state.currentIndex + 1}. ${q.question}`;
  els.optionsContainer.innerHTML = "";

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    if (state.answers[q.id] === idx) {
      btn.classList.add("selected");
    }
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", String(state.answers[q.id] === idx));

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = letters[idx];

    const textSpan = document.createElement("span");
    textSpan.textContent = optText;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.addEventListener("click", () => {
      state.answers[q.id] = idx;
      renderQuestion();
    });
    els.optionsContainer.appendChild(btn);
  });

  els.prevBtn.disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;
  els.nextBtn.hidden = isLast;
  els.submitQuizBtn.hidden = !isLast;

  const isFlagged = state.flagged.has(q.id);
  els.flagBtn.classList.toggle("active", isFlagged);
  els.flagBtn.textContent = isFlagged ? "⚑ Ragu-ragu (Aktif)" : "⚑ Tandai Ragu";

  renderNavGrid();
}

function renderNavGrid() {
  els.questionNavGrid.innerHTML = "";
  state.activeQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-num";
    btn.textContent = String(idx + 1);

    if (idx === state.currentIndex) btn.classList.add("current");
    if (state.flagged.has(q.id)) {
      btn.classList.add("flagged");
    } else if (state.answers[q.id] !== undefined) {
      btn.classList.add("answered");
    }

    btn.addEventListener("click", () => {
      state.currentIndex = idx;
      renderQuestion();
    });
    els.questionNavGrid.appendChild(btn);
  });
}

function getPredicate(score) {
  if (score >= 90) return "Sangat Baik (Mahir)";
  if (score >= 80) return "Baik (Cakap)";
  if (score >= 70) return "Cukup (Layak)";
  return "Perlu Bimbingan";
}

function finishQuiz(confirmIfUnanswered = true) {
  const unanswered = state.activeQuestions.filter(
    (q) => state.answers[q.id] === undefined
  ).length;

  if (confirmIfUnanswered && unanswered > 0) {
    const proceed = window.confirm(
      `Masih ada ${unanswered} soal yang belum dijawab. Tetap kumpulkan jawaban sekarang?`
    );
    if (!proceed) return;
  }

  stopTimer();

  const total = state.activeQuestions.length;
  let correctCount = 0;
  const topicStats = {};

  state.activeQuestions.forEach((q) => {
    if (!topicStats[q.topicLabel]) {
      topicStats[q.topicLabel] = { total: 0, correct: 0 };
    }
    topicStats[q.topicLabel].total += 1;

    if (state.answers[q.id] === q.answer) {
      correctCount += 1;
      topicStats[q.topicLabel].correct += 1;
    }
  });

  const score = Math.round((correctCount / total) * 100);
  const predicate = getPredicate(score);

  els.scoreValue.textContent = String(score);
  els.predicateText.textContent = predicate;
  els.correctCountText.textContent = `${correctCount} / ${total} soal`;
  els.elapsedTimeText.textContent = formatTime(state.secondsElapsed);
  els.resultStudentInfo.textContent = `${state.studentName} • Kelas ${state.studentClass}`;
  els.resultGreeting.textContent =
    score >= 80
      ? "Hebat! Pemahamanmu Sangat Bagus!"
      : score >= 70
      ? "Bagus! Terus Tingkatkan Belajarmu!"
      : "Tetap Semangat! Ayo Pelajari Pembahasannya!";

  els.topicBreakdown.innerHTML = "";
  Object.entries(topicStats).forEach(([label, stat]) => {
    const div = document.createElement("div");
    div.className = "topic-stat";
    const pct = Math.round((stat.correct / stat.total) * 100);
    div.innerHTML = `<strong>${label}</strong><br/>Benar ${stat.correct} dari ${stat.total} soal (${pct}%)`;
    els.topicBreakdown.appendChild(div);
  });

  renderReviewList();

  els.quizScreen.hidden = true;
  els.resultScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReviewList() {
  const letters = ["A", "B", "C", "D"];
  els.reviewList.innerHTML = "";

  state.activeQuestions.forEach((q, idx) => {
    const userIdx = state.answers[q.id];
    const isCorrect = userIdx === q.answer;

    const item = document.createElement("div");
    item.className = `review-item ${isCorrect ? "correct" : "wrong"}`;

    const userAnswerText =
      userIdx !== undefined
        ? `${letters[userIdx]}. ${q.options[userIdx]}`
        : "Tidak dijawab";
    const correctAnswerText = `${letters[q.answer]}. ${q.options[q.answer]}`;

    item.innerHTML = `
      <div class="review-top">
        <span class="topic-pill">${q.topicLabel}</span>
        <span class="status-tag ${isCorrect ? "ok" : "no"}">
          ${isCorrect ? "✓ Benar" : "✗ Kurang Tepat"}
        </span>
      </div>
      <p class="review-question">${idx + 1}. ${escapeHtml(q.question)}</p>
      <p class="review-answer"><strong>Jawaban Kamu:</strong> ${escapeHtml(userAnswerText)}</p>
      ${
        !isCorrect
          ? `<p class="review-answer"><strong>Kunci Jawaban:</strong> ${escapeHtml(correctAnswerText)}</p>`
          : ""
      }
      <p class="review-explain"><strong>Pembahasan:</strong> ${escapeHtml(q.explanation)}</p>
    `;

    els.reviewList.appendChild(item);
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

els.startForm.addEventListener("submit", startQuiz);

els.prevBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

els.nextBtn.addEventListener("click", () => {
  if (state.currentIndex < state.activeQuestions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
});

els.flagBtn.addEventListener("click", () => {
  const q = state.activeQuestions[state.currentIndex];
  if (state.flagged.has(q.id)) {
    state.flagged.delete(q.id);
  } else {
    state.flagged.add(q.id);
  }
  renderQuestion();
});

els.submitQuizBtn.addEventListener("click", () => finishQuiz(true));
els.finishEarlyBtn.addEventListener("click", () => finishQuiz(true));

els.printResultBtn.addEventListener("click", () => window.print());

els.retryBtn.addEventListener("click", () => {
  stopTimer();
  els.timerPill.hidden = true;
  els.resultScreen.hidden = true;
  els.startScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
