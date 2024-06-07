var totalSeconds = 60;
var countdownTimer;
var totalChanges = 0;
var currentStageIndex = 0;
var stages = [
  // stage 1
  {
    letters: ["S", "R", "M", "X", "H"],
    questionSets: [
      { questionLetters: ["S", "X", "M", "H"], correctAnswer: "1" },
      { questionLetters: ["R", "S", "X", "M"], correctAnswer: "4" },
      { questionLetters: ["H", "S", "R", "X"], correctAnswer: "2" },
      { questionLetters: ["X", "R", "H", "M"], correctAnswer: "0" },
      { questionLetters: ["S", "R", "M", "H"], correctAnswer: "3" },
      { questionLetters: ["M", "H", "S", "X"], correctAnswer: "1" },
      { questionLetters: ["R", "M", "S", "X"], correctAnswer: "4" },
      { questionLetters: ["S", "H", "X", "M"], correctAnswer: "1" },
      { questionLetters: ["M", "X", "R", "H"], correctAnswer: "0" },
      { questionLetters: ["R", "S", "H", "M"], correctAnswer: "3" },
      { questionLetters: ["R", "X", "S", "M"], correctAnswer: "4" },
      { questionLetters: ["S", "H", "M", "X"], correctAnswer: "1" },
      { questionLetters: ["X", "M", "S", "R"], correctAnswer: "4" },
      { questionLetters: ["S", "R", "X", "H"], correctAnswer: "2" },
      { questionLetters: ["R", "S", "X", "H"], correctAnswer: "2" },
      { questionLetters: ["M", "S", "H", "R"], correctAnswer: "3" },
      { questionLetters: ["R", "S", "M", "X"], correctAnswer: "4" },
      { questionLetters: ["S", "H", "R", "X"], correctAnswer: "2" },
      { questionLetters: ["R", "S", "X", "M"], correctAnswer: "4" },
      { questionLetters: ["X", "M", "R", "S"], correctAnswer: "4" },
      // 20 soal
      { questionLetters: ["S", "M", "X", "H"], correctAnswer: "1" },
      { questionLetters: ["M", "S", "X", "H"], correctAnswer: "1" },
      { questionLetters: ["R", "S", "H", "M"], correctAnswer: "3" },
      { questionLetters: ["S", "M", "H", "X"], correctAnswer: "1" },
      { questionLetters: ["X", "H", "M", "R"], correctAnswer: "0" },
      { questionLetters: ["R", "S", "M", "X"], correctAnswer: "4" },
      { questionLetters: ["H", "R", "X", "S"], correctAnswer: "2" },
      { questionLetters: ["S", "R", "H", "M"], correctAnswer: "3" },
      { questionLetters: ["M", "X", "H", "S"], correctAnswer: "1" },
      { questionLetters: ["H", "S", "M", "X"], correctAnswer: "1" },
      { questionLetters: ["X", "M", "H", "R"], correctAnswer: "0" },
      { questionLetters: ["M", "X", "S", "H"], correctAnswer: "1" },
      { questionLetters: ["R", "H", "M", "S"], correctAnswer: "3" },
      { questionLetters: ["X", "R", "M", "H"], correctAnswer: "0" },
      { questionLetters: ["X", "S", "R", "M"], correctAnswer: "4" },
      { questionLetters: ["M", "S", "H", "X"], correctAnswer: "1" },
      { questionLetters: ["S", "R", "M", "X"], correctAnswer: "4" },
      { questionLetters: ["R", "H", "X", "S"], correctAnswer: "2" },
      { questionLetters: ["M", "R", "X", "H"], correctAnswer: "0" },
      { questionLetters: ["R", "H", "S", "X"], correctAnswer: "2" },
      // 40 soal
      { questionLetters: ["S", "R", "X", "H"], correctAnswer: "2" },
      { questionLetters: ["M", "X", "H", "S"], correctAnswer: "1" },
      { questionLetters: ["R", "M", "H", "X"], correctAnswer: "0" },
      { questionLetters: ["S", "M", "R", "H"], correctAnswer: "3" },
      { questionLetters: ["S", "X", "M", "R"], correctAnswer: "4" },
      { questionLetters: ["R", "M", "H", "X"], correctAnswer: "0" },
      { questionLetters: ["M", "R", "S", "H"], correctAnswer: "3" },
      { questionLetters: ["S", "H", "X", "M"], correctAnswer: "1" },
      { questionLetters: ["S", "M", "X", "R"], correctAnswer: "4" },
      { questionLetters: ["R", "M", "S", "H"], correctAnswer: "3" },
      // 50 soal
    ],
  },
  // stage 2
  {
    letters: ["P", "N", "Y", "W", "X"],
    questionSets: [
      { questionLetters: ["P", "Y", "W", "N"], correctAnswer: "4" },
      { questionLetters: ["P", "X", "Y", "W"], correctAnswer: "1" },
      { questionLetters: ["X", "P", "N", "W"], correctAnswer: "2" },
      { questionLetters: ["W", "X", "Y", "P"], correctAnswer: "1" },
      { questionLetters: ["Y", "W", "X", "N"], correctAnswer: "0" },
      { questionLetters: ["Y", "W", "N", "X"], correctAnswer: "0" },
      { questionLetters: ["P", "Y", "W", "X"], correctAnswer: "1" },
      { questionLetters: ["Y", "N", "X", "P"], correctAnswer: "3" },
      { questionLetters: ["N", "X", "P", "W"], correctAnswer: "2" },
      { questionLetters: ["N", "Y", "W", "X"], correctAnswer: "0" },
      { questionLetters: ["P", "Y", "N", "W"], correctAnswer: "4" },
      { questionLetters: ["W", "N", "X", "P"], correctAnswer: "2" },
      { questionLetters: ["X", "N", "W", "Y"], correctAnswer: "0" },
      { questionLetters: ["N", "X", "Y", "P"], correctAnswer: "3" },
      { questionLetters: ["W", "X", "P", "Y"], correctAnswer: "1" },
      { questionLetters: ["P", "N", "Y", "W"], correctAnswer: "4" },
      { questionLetters: ["P", "X", "N", "W"], correctAnswer: "2" },
      { questionLetters: ["W", "N", "P", "Y"], correctAnswer: "4" },
      { questionLetters: ["X", "Y", "P", "N"], correctAnswer: "3" },
      { questionLetters: ["X", "P", "N", "W"], correctAnswer: "2" },
      // 20 soal
      { questionLetters: ["P", "N", "Y", "W"], correctAnswer: "4" },
      { questionLetters: ["N", "W", "Y", "X"], correctAnswer: "0" },
      { questionLetters: ["P", "Y", "N", "W"], correctAnswer: "4" },
      { questionLetters: ["N", "X", "W", "P"], correctAnswer: "2" },
      { questionLetters: ["X", "N", "P", "Y"], correctAnswer: "3" },
      { questionLetters: ["N", "Y", "X", "W"], correctAnswer: "0" },
      { questionLetters: ["W", "Y", "X", "P"], correctAnswer: "1" },
      { questionLetters: ["P", "N", "W", "Y"], correctAnswer: "4" },
      { questionLetters: ["W", "X", "N", "P"], correctAnswer: "2" },
      { questionLetters: ["Y", "W", "X", "N"], correctAnswer: "0" },
      { questionLetters: ["P", "X", "Y", "W"], correctAnswer: "1" },
      { questionLetters: ["N", "W", "Y", "P"], correctAnswer: "4" },
      { questionLetters: ["W", "Y", "X", "N"], correctAnswer: "0" },
      { questionLetters: ["P", "Y", "N", "X"], correctAnswer: "3" },
      { questionLetters: ["N", "X", "P", "W"], correctAnswer: "2" },
      { questionLetters: ["Y", "W", "X", "P"], correctAnswer: "1" },
      { questionLetters: ["W", "Y", "P", "N"], correctAnswer: "4" },
      { questionLetters: ["Y", "P", "X", "W"], correctAnswer: "1" },
      { questionLetters: ["Y", "N", "X", "W"], correctAnswer: "0" },
      { questionLetters: ["X", "N", "Y", "P"], correctAnswer: "3" },
      // 40 soal
      { questionLetters: ["Y", "N", "P", "W"], correctAnswer: "4" },
      { questionLetters: ["P", "W", "X", "Y"], correctAnswer: "1" },
      { questionLetters: ["Y", "X", "N", "W"], correctAnswer: "0" },
      { questionLetters: ["X", "N", "W", "P"], correctAnswer: "2" },
      { questionLetters: ["Y", "P", "X", "N"], correctAnswer: "3" },
      { questionLetters: ["P", "X", "N", "Y"], correctAnswer: "3" },
      { questionLetters: ["X", "N", "W", "P"], correctAnswer: "2" },
      { questionLetters: ["X", "N", "W", "Y"], correctAnswer: "0" },
      { questionLetters: ["N", "X", "Y", "P"], correctAnswer: "3" },
      { questionLetters: ["X", "Y", "P", "w"], correctAnswer: "1" },
      // 50 soal
    ],
  },
  // stage 3
  {
    letters: ["s", "h", "r", "d", "w"],
    questionSets: [
      { questionLetters: ["s", "h", "r", "d"], correctAnswer: "4" },
      { questionLetters: ["s", "w", "h", "r"], correctAnswer: "3" },
      { questionLetters: ["h", "w", "r", "d"], correctAnswer: "0" },
      { questionLetters: ["w", "h", "s", "r"], correctAnswer: "3" },
      { questionLetters: ["h", "s", "w", "d"], correctAnswer: "2" },
      { questionLetters: ["r", "h", "w", "d"], correctAnswer: "0" },
      { questionLetters: ["s", "r", "d", "h"], correctAnswer: "4" },
      { questionLetters: ["s", "h", "w", "r"], correctAnswer: "3" },
      { questionLetters: ["h", "r", "s", "d"], correctAnswer: "4" },
      { questionLetters: ["w", "r", "h", "s"], correctAnswer: "3" },
      { questionLetters: ["s", "h", "d", "w"], correctAnswer: "2" },
      { questionLetters: ["h", "s", "r", "d"], correctAnswer: "4" },
      { questionLetters: ["d", "r", "w", "s"], correctAnswer: "1" },
      { questionLetters: ["w", "d", "r", "h"], correctAnswer: "0" },
      { questionLetters: ["w", "s", "h", "r"], correctAnswer: "3" },
      { questionLetters: ["r", "s", "d", "w"], correctAnswer: "1" },
      { questionLetters: ["r", "d", "w", "s"], correctAnswer: "1" },
      { questionLetters: ["s", "w", "h", "r"], correctAnswer: "3" },
      { questionLetters: ["r", "h", "d", "s"], correctAnswer: "4" },
      { questionLetters: ["s", "h", "r", "w"], correctAnswer: "3" },
      // 20 soal
      { questionLetters: ["s", "h", "d", "w"], correctAnswer: "2" },
      { questionLetters: ["s", "r", "w", "d"], correctAnswer: "1" },
      { questionLetters: ["h", "s", "d", "w"], correctAnswer: "2" },
      { questionLetters: ["w", "r", "s", "h"], correctAnswer: "3" },
      { questionLetters: ["r", "s", "d", "w"], correctAnswer: "1" },
      { questionLetters: ["s", "d", "w", "h"], correctAnswer: "2" },
      { questionLetters: ["w", "r", "d", "h"], correctAnswer: "0" },
      { questionLetters: ["s", "h", "d", "r"], correctAnswer: "4" },
      { questionLetters: ["s", "r", "w", "d"], correctAnswer: "1" },
      { questionLetters: ["w", "d", "h", "s"], correctAnswer: "2" },
      { questionLetters: ["r", "d", "w", "h"], correctAnswer: "0" },
      { questionLetters: ["s", "w", "h", "d"], correctAnswer: "2" },
      { questionLetters: ["r", "d", "w", "h"], correctAnswer: "0" },
      { questionLetters: ["w", "h", "d", "r"], correctAnswer: "0" },
      { questionLetters: ["w", "h", "r", "s"], correctAnswer: "3" },
      { questionLetters: ["d", "r", "h", "s"], correctAnswer: "4" },
      { questionLetters: ["s", "r", "d", "w"], correctAnswer: "1" },
      { questionLetters: ["w", "d", "h", "r"], correctAnswer: "0" },
      { questionLetters: ["w", "d", "h", "s"], correctAnswer: "2" },
      { questionLetters: ["s", "h", "r", "w"], correctAnswer: "3" },
      // 40 soal
      { questionLetters: ["d", "r", "h", "s"], correctAnswer: "4" },
      { questionLetters: ["s", "h", "r", "w"], correctAnswer: "3" },
      { questionLetters: ["w", "d", "h", "s"], correctAnswer: "2" },
      { questionLetters: ["s", "r", "d", "w"], correctAnswer: "1" },
      { questionLetters: ["s", "w", "h", "d"], correctAnswer: "2" },
      { questionLetters: ["r", "d", "w", "h"], correctAnswer: "0" },
      { questionLetters: ["w", "h", "r", "s"], correctAnswer: "3" },
      { questionLetters: ["s", "h", "d", "r"], correctAnswer: "4" },
      { questionLetters: ["s", "h", "d", "w"], correctAnswer: "2" },
      { questionLetters: ["w", "r", "d", "h"], correctAnswer: "0" },
      // 50 soal
    ],
  },
  // stage 4
  {
    letters: ["j", "d", "r", "c", "k"],
    questionSets: [
      { questionLetters: ["j", "r", "c", "k"], correctAnswer: "1" },
      { questionLetters: ["r", "j", "c", "d"], correctAnswer: "4" },
      { questionLetters: ["d", "r", "j", "k"], correctAnswer: "3" },
      { questionLetters: ["d", "j", "r", "c"], correctAnswer: "4" },
      { questionLetters: ["c", "r", "k", "d"], correctAnswer: "0" },
      { questionLetters: ["j", "r", "d", "k"], correctAnswer: "3" },
      { questionLetters: ["d", "k", "r", "j"], correctAnswer: "3" },
      { questionLetters: ["k", "r", "j", "c"], correctAnswer: "1" },
      { questionLetters: ["k", "j", "r", "d"], correctAnswer: "3" },
      { questionLetters: ["j", "d", "c", "k"], correctAnswer: "2" },
      { questionLetters: ["k", "d", "r", "c"], correctAnswer: "0" },
      { questionLetters: ["c", "r", "j", "k"], correctAnswer: "1" },
      { questionLetters: ["c", "d", "j", "k"], correctAnswer: "2" },
      { questionLetters: ["j", "k", "r", "c"], correctAnswer: "1" },
      { questionLetters: ["r", "c", "k", "j"], correctAnswer: "1" },
      { questionLetters: ["j", "r", "c", "d"], correctAnswer: "4" },
      { questionLetters: ["d", "k", "j", "r"], correctAnswer: "3" },
      { questionLetters: ["k", "d", "j", "c"], correctAnswer: "2" },
      { questionLetters: ["r", "j", "k", "d"], correctAnswer: "3" },
      { questionLetters: ["c", "d", "j", "k"], correctAnswer: "2" },
      // 20 soal
      { questionLetters: ["j", "r", "c", "d"], correctAnswer: "4" },
      { questionLetters: ["j", "d", "c", "r"], correctAnswer: "4" },
      { questionLetters: ["k", "d", "r", "c"], correctAnswer: "0" },
      { questionLetters: ["j", "d", "c", "k"], correctAnswer: "2" },
      { questionLetters: ["r", "j", "d", "c"], correctAnswer: "4" },
      { questionLetters: ["d", "r", "k", "c"], correctAnswer: "0" },
      { questionLetters: ["k", "d", "c", "k"], correctAnswer: "0" },
      { questionLetters: ["c", "d", "j", "k"], correctAnswer: "2" },
      { questionLetters: ["d", "r", "c", "j"], correctAnswer: "4" },
      { questionLetters: ["c", "d", "r", "k"], correctAnswer: "0" },
      { questionLetters: ["r", "j", "k", "d"], correctAnswer: "3" },
      { questionLetters: ["d", "r", "k", "c"], correctAnswer: "0" },
      { questionLetters: ["c", "d", "j", "r"], correctAnswer: "4" },
      { questionLetters: ["j", "r", "k", "d"], correctAnswer: "3" },
      { questionLetters: ["j", "d", "c", "r"], correctAnswer: "4" },
      { questionLetters: ["d", "j", "k", "c"], correctAnswer: "2" },
      { questionLetters: ["c", "r", "d", "k"], correctAnswer: "0" },
      { questionLetters: ["c", "k", "j", "d"], correctAnswer: "2" },
      { questionLetters: ["k", "r", "j", "d"], correctAnswer: "3" },
      { questionLetters: ["c", "j", "r", "d"], correctAnswer: "4" },
      // 40 soal
      { questionLetters: ["j", "k", "r", "c"], correctAnswer: "1" },
      { questionLetters: ["c", "d", "j", "k"], correctAnswer: "2" },
      { questionLetters: ["k", "j", "r", "c"], correctAnswer: "1" },
      { questionLetters: ["c", "r", "k", "d"], correctAnswer: "0" },
      { questionLetters: ["k", "r", "c", "d"], correctAnswer: "0" },
      { questionLetters: ["k", "j", "r", "d"], correctAnswer: "3" },
      { questionLetters: ["r", "c", "j", "k"], correctAnswer: "1" },
      { questionLetters: ["j", "k", "c", "d"], correctAnswer: "2" },
      { questionLetters: ["r", "c", "d", "k"], correctAnswer: "0" },
      { questionLetters: ["r", "d", "k", "j"], correctAnswer: "3" },
      // 50 soal
    ],
  },
  // stage 5
  {
    letters: ["P", "R", "W", "H", "T"],
    questionSets: [
      { questionLetters: ["P", "W", "H", "T"], correctAnswer: "1" },
      { questionLetters: ["R", "H", "W", "P"], correctAnswer: "4" },
      { questionLetters: ["T", "R", "P", "H"], correctAnswer: "2" },
      { questionLetters: ["W", "P", "R", "T"], correctAnswer: "3" },
      { questionLetters: ["W", "P", "T", "H"], correctAnswer: "1" },
      { questionLetters: ["R", "P", "W", "T"], correctAnswer: "3" },
      { questionLetters: ["H", "R", "W", "P"], correctAnswer: "4" },
      { questionLetters: ["T", "W", "H", "R"], correctAnswer: "0" },
      { questionLetters: ["P", "W", "H", "R"], correctAnswer: "4" },
      { questionLetters: ["H", "W", "P", "T"], correctAnswer: "1" },
      { questionLetters: ["P", "R", "T", "H"], correctAnswer: "2" },
      { questionLetters: ["H", "W", "T", "R"], correctAnswer: "0" },
      { questionLetters: ["T", "R", "P", "W"], correctAnswer: "3" },
      { questionLetters: ["W", "H", "R", "P"], correctAnswer: "4" },
      { questionLetters: ["R", "H", "W", "T"], correctAnswer: "0" },
      { questionLetters: ["T", "H", "W", "P"], correctAnswer: "1" },
      { questionLetters: ["P", "T", "H", "W"], correctAnswer: "1" },
      { questionLetters: ["W", "R", "P", "H"], correctAnswer: "4" },
      { questionLetters: ["H", "W", "T", "R"], correctAnswer: "0" },
      { questionLetters: ["H", "P", "R", "T"], correctAnswer: "2" },
      // 20 soal
      { questionLetters: ["T", "R", "P", "W"], correctAnswer: "3" },
      { questionLetters: ["W", "P", "R", "T"], correctAnswer: "3" },
      { questionLetters: ["W", "R", "P", "H"], correctAnswer: "4" },
      { questionLetters: ["H", "W", "P", "T"], correctAnswer: "1" },
      { questionLetters: ["R", "T", "P", "W"], correctAnswer: "3" },
      { questionLetters: ["P", "W", "H", "T"], correctAnswer: "1" },
      { questionLetters: ["H", "W", "T", "R"], correctAnswer: "0" },
      { questionLetters: ["P", "R", "W", "H"], correctAnswer: "4" },
      { questionLetters: ["H", "P", "R", "T"], correctAnswer: "2" },
      { questionLetters: ["P", "H", "W", "R"], correctAnswer: "4" },
      { questionLetters: ["T", "P", "W", "H"], correctAnswer: "1" },
      { questionLetters: ["H", "R", "P", "W"], correctAnswer: "4" },
      { questionLetters: ["T", "W", "H", "R"], correctAnswer: "0" },
      { questionLetters: ["W", "H", "P", "T"], correctAnswer: "1" },
      { questionLetters: ["P", "R", "T", "W"], correctAnswer: "3" },
      { questionLetters: ["R", "P", "H", "T"], correctAnswer: "2" },
      { questionLetters: ["T", "R", "P", "H"], correctAnswer: "2" },
      { questionLetters: ["P", "T", "W", "R"], correctAnswer: "3" },
      { questionLetters: ["R", "H", "W", "P"], correctAnswer: "4" },
      { questionLetters: ["T", "W", "P", "H"], correctAnswer: "1" },
      // 40 soal
      { questionLetters: ["W", "H", "P", "T"], correctAnswer: "1" },
      { questionLetters: ["P", "H", "W", "R"], correctAnswer: "4" },
      { questionLetters: ["H", "P", "R", "T"], correctAnswer: "2" },
      { questionLetters: ["P", "H", "W", "T"], correctAnswer: "1" },
      { questionLetters: ["R", "P", "H", "T"], correctAnswer: "2" },
      { questionLetters: ["T", "W", "H", "R"], correctAnswer: "0" },
      { questionLetters: ["T", "R", "P", "H"], correctAnswer: "2" },
      { questionLetters: ["H", "W", "T", "R"], correctAnswer: "0" },
      { questionLetters: ["P", "R", "T", "W"], correctAnswer: "3" },
      { questionLetters: ["P", "H", "R", "T"], correctAnswer: "2" },
      // 50 soal
    ],
  },
  // stage 6
  {
    letters: ["f", "r", "t", "m", "x"],
    questionSets: [
      { questionLetters: ["f", "r", "m", "x"], correctAnswer: "2" },
      { questionLetters: ["f", "t", "x", "m"], correctAnswer: "1" },
      { questionLetters: ["m", "t", "x", "f"], correctAnswer: "1" },
      { questionLetters: ["x", "m", "r", "t"], correctAnswer: "0" },
      { questionLetters: ["t", "x", "f", "r"], correctAnswer: "3" },
      { questionLetters: ["r", "m", "x", "t"], correctAnswer: "0" },
      { questionLetters: ["f", "x", "t", "r"], correctAnswer: "3" },
      { questionLetters: ["x", "t", "f", "m"], correctAnswer: "1" },
      { questionLetters: ["t", "r", "m", "x"], correctAnswer: "0" },
      { questionLetters: ["r", "x", "f", "t"], correctAnswer: "3" },
      { questionLetters: ["f", "m", "t", "r"], correctAnswer: "4" },
      { questionLetters: ["t", "f", "m", "x"], correctAnswer: "1" },
      { questionLetters: ["t", "m", "f", "r"], correctAnswer: "4" },
      { questionLetters: ["f", "m", "r", "x"], correctAnswer: "2" },
      { questionLetters: ["x", "r", "m", "f"], correctAnswer: "2" },
      { questionLetters: ["x", "t", "f", "r"], correctAnswer: "3" },
      { questionLetters: ["m", "f", "r", "t"], correctAnswer: "4" },
      { questionLetters: ["m", "r", "x", "f"], correctAnswer: "2" },
      { questionLetters: ["r", "m", "t", "f"], correctAnswer: "4" },
      { questionLetters: ["f", "t", "m", "r"], correctAnswer: "4" },
      // 20 soal
      { questionLetters: ["m", "t", "x", "f"], correctAnswer: "1" },
      { questionLetters: ["f", "t", "x", "m"], correctAnswer: "1" },
      { questionLetters: ["t", "x", "f", "r"], correctAnswer: "3" },
      { questionLetters: ["x", "t", "m", "f"], correctAnswer: "1" },
      { questionLetters: ["x", "m", "r", "t"], correctAnswer: "0" },
      { questionLetters: ["f", "m", "t", "r"], correctAnswer: "4" },
      { questionLetters: ["f", "r", "m", "x"], correctAnswer: "2" },
      { questionLetters: ["f", "x", "t", "r"], correctAnswer: "3" },
      { questionLetters: ["x", "t", "f", "m"], correctAnswer: "1" },
      { questionLetters: ["f", "t", "m", "x"], correctAnswer: "1" },
      { questionLetters: ["r", "m", "x", "t"], correctAnswer: "0" },
      { questionLetters: ["t", "f", "m", "x"], correctAnswer: "1" },
      { questionLetters: ["x", "t", "f", "r"], correctAnswer: "3" },
      { questionLetters: ["x", "m", "f", "t"], correctAnswer: "1" },
      { questionLetters: ["t", "m", "f", "r"], correctAnswer: "4" },
      { questionLetters: ["x", "f", "m", "t"], correctAnswer: "1" },
      { questionLetters: ["m", "f", "r", "t"], correctAnswer: "4" },
      { questionLetters: ["f", "m", "r", "x"], correctAnswer: "2" },
      { questionLetters: ["t", "r", "m", "x"], correctAnswer: "0" },
      { questionLetters: ["x", "r", "m", "f"], correctAnswer: "2" },
      // 40 soal
      { questionLetters: ["f", "r", "m", "x"], correctAnswer: "2" },
      { questionLetters: ["x", "t", "f", "m"], correctAnswer: "1" },
      { questionLetters: ["x", "m", "r", "t"], correctAnswer: "0" },
      { questionLetters: ["f", "x", "t", "r"], correctAnswer: "3" },
      { questionLetters: ["t", "m", "f", "r"], correctAnswer: "4" },
      { questionLetters: ["r", "m", "x", "t"], correctAnswer: "0" },
      { questionLetters: ["x", "t", "f", "r"], correctAnswer: "3" },
      { questionLetters: ["t", "f", "m", "x"], correctAnswer: "1" },
      { questionLetters: ["m", "f", "r", "t"], correctAnswer: "4" },
      { questionLetters: ["t", "x", "f", "r"], correctAnswer: "3" },
      // 50 soal
    ],
  },
  // stage 7
  {
    letters: ["s", "β", "n", "k", "д"],
    questionSets: [
      { questionLetters: ["s", "β", "k", "д"], correctAnswer: "2" },
      { questionLetters: ["n", "k", "s", "д"], correctAnswer: "1" },
      { questionLetters: ["s", "д", "n", "k"], correctAnswer: "1" },
      { questionLetters: ["д", "β", "k", "n"], correctAnswer: "0" },
      { questionLetters: ["β", "n", "s", "д"], correctAnswer: "3" },
      { questionLetters: ["д", "n", "k", "β"], correctAnswer: "0" },
      { questionLetters: ["n", "β", "s", "д"], correctAnswer: "3" },
      { questionLetters: ["д", "k", "s", "n"], correctAnswer: "1" },
      { questionLetters: ["k", "n", "д", "β"], correctAnswer: "0" },
      { questionLetters: ["n", "д", "s", "β"], correctAnswer: "3" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["k", "n", "д", "s"], correctAnswer: "1" },
      { questionLetters: ["β", "s", "k", "n"], correctAnswer: "4" },
      { questionLetters: ["β", "s", "k", "д"], correctAnswer: "2" },
      { questionLetters: ["k", "д", "s", "β"], correctAnswer: "2" },
      { questionLetters: ["s", "β", "n", "д"], correctAnswer: "3" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["д", "β", "k", "s"], correctAnswer: "2" },
      { questionLetters: ["s", "β", "n", "k"], correctAnswer: "4" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      // 20 soal
      { questionLetters: ["n", "k", "s", "д"], correctAnswer: "1" },
      { questionLetters: ["s", "д", "n", "k"], correctAnswer: "1" },
      { questionLetters: ["β", "n", "s", "д"], correctAnswer: "3" },
      { questionLetters: ["д", "k", "s", "n"], correctAnswer: "1" },
      { questionLetters: ["д", "β", "k", "n"], correctAnswer: "0" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["β", "s", "k", "д"], correctAnswer: "2" },
      { questionLetters: ["s", "β", "n", "д"], correctAnswer: "3" },
      { questionLetters: ["k", "n", "д", "s"], correctAnswer: "1" },
      { questionLetters: ["д", "n", "k", "s"], correctAnswer: "1" },
      { questionLetters: ["д", "n", "k", "β"], correctAnswer: "0" },
      { questionLetters: ["д", "s", "k", "n"], correctAnswer: "1" },
      { questionLetters: ["k", "д", "s", "β"], correctAnswer: "2" },
      { questionLetters: ["k", "n", "д", "β"], correctAnswer: "0" },
      { questionLetters: ["s", "β", "n", "k"], correctAnswer: "4" },
      { questionLetters: ["n", "k", "s", "д"], correctAnswer: "1" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["β", "s", "k", "д"], correctAnswer: "2" },
      { questionLetters: ["k", "β", "д", "n"], correctAnswer: "0" },
      { questionLetters: ["s", "β", "k", "д"], correctAnswer: "2" },
      // 40 soal
      { questionLetters: ["k", "д", "s", "β"], correctAnswer: "2" },
      { questionLetters: ["д", "s", "k", "n"], correctAnswer: "1" },
      { questionLetters: ["k", "β", "д", "n"], correctAnswer: "0" },
      { questionLetters: ["β", "n", "s", "д"], correctAnswer: "3" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["k", "n", "д", "β"], correctAnswer: "0" },
      { questionLetters: ["s", "β", "n", "д"], correctAnswer: "3" },
      { questionLetters: ["д", "n", "k", "s"], correctAnswer: "1" },
      { questionLetters: ["k", "n", "β", "s"], correctAnswer: "4" },
      { questionLetters: ["n", "д", "s", "β"], correctAnswer: "3" },
      // 50 soal
    ],
  },
  // stage 8
  {
    letters: ["R", "Z", "B", "H", "T"],
    questionSets: [
      { questionLetters: ["Z", "H", "B", "T"], correctAnswer: "0" },
      { questionLetters: ["R", "T", "Z", "H"], correctAnswer: "2" },
      { questionLetters: ["B", "R", "H", "T"], correctAnswer: "1" },
      { questionLetters: ["R", "H", "Z", "T"], correctAnswer: "2" },
      { questionLetters: ["Z", "R", "T", "B"], correctAnswer: "3" },
      { questionLetters: ["B", "T", "H", "R"], correctAnswer: "1" },
      { questionLetters: ["H", "R", "Z", "B"], correctAnswer: "4" },
      { questionLetters: ["Z", "H", "R", "T"], correctAnswer: "2" },
      { questionLetters: ["Z", "R", "H", "B"], correctAnswer: "4" },
      { questionLetters: ["H", "T", "B", "R"], correctAnswer: "1" },
      { questionLetters: ["B", "R", "T", "Z"], correctAnswer: "3" },
      { questionLetters: ["H", "T", "Z", "R"], correctAnswer: "2" },
      { questionLetters: ["T", "B", "H", "Z"], correctAnswer: "0" },
      { questionLetters: ["Z", "R", "B", "T"], correctAnswer: "3" },
      { questionLetters: ["T", "R", "H", "Z"], correctAnswer: "2" },
      { questionLetters: ["B", "H", "Z", "T"], correctAnswer: "0" },
      { questionLetters: ["H", "Z", "R", "B"], correctAnswer: "4" },
      { questionLetters: ["R", "T", "B", "H"], correctAnswer: "1" },
      { questionLetters: ["T", "H", "R", "B"], correctAnswer: "1" },
      { questionLetters: ["B", "R", "Z", "H"], correctAnswer: "4" },
      // 20 soal
      { questionLetters: ["Z", "H", "B", "T"], correctAnswer: "0" },
      { questionLetters: ["Z", "R", "T", "B"], correctAnswer: "3" },
      { questionLetters: ["B", "R", "T", "Z"], correctAnswer: "3" },
      { questionLetters: ["B", "H", "Z", "T"], correctAnswer: "0" },
      { questionLetters: ["R", "T", "Z", "H"], correctAnswer: "2" },
      { questionLetters: ["T", "B", "R", "Z"], correctAnswer: "3" },
      { questionLetters: ["B", "R", "H", "T"], correctAnswer: "1" },
      { questionLetters: ["T", "Z", "H", "B"], correctAnswer: "0" },
      { questionLetters: ["Z", "R", "B", "T"], correctAnswer: "3" },
      { questionLetters: ["B", "T", "H", "R"], correctAnswer: "1" },
      { questionLetters: ["H", "Z", "R", "B"], correctAnswer: "4" },
      { questionLetters: ["H", "T", "B", "R"], correctAnswer: "1" },
      { questionLetters: ["R", "Z", "T", "B"], correctAnswer: "3" },
      { questionLetters: ["R", "T", "B", "H"], correctAnswer: "1" },
      { questionLetters: ["R", "H", "Z", "T"], correctAnswer: "2" },
      { questionLetters: ["B", "T", "Z", "R"], correctAnswer: "3" },
      { questionLetters: ["B", "R", "Z", "H"], correctAnswer: "4" },
      { questionLetters: ["T", "H", "R", "B"], correctAnswer: "1" },
      { questionLetters: ["R", "B", "T", "H"], correctAnswer: "1" },
      { questionLetters: ["Z", "H", "R", "T"], correctAnswer: "2" },
      // 40 soal
      { questionLetters: ["Z", "H", "B", "T"], correctAnswer: "0" },
      { questionLetters: ["T", "H", "R", "B"], correctAnswer: "1" },
      { questionLetters: ["H", "Z", "R", "B"], correctAnswer: "4" },
      { questionLetters: ["R", "T", "Z", "H"], correctAnswer: "2" },
      { questionLetters: ["B", "H", "Z", "T"], correctAnswer: "0" },
      { questionLetters: ["R", "H", "Z", "T"], correctAnswer: "2" },
      { questionLetters: ["T", "Z", "H", "B"], correctAnswer: "0" },
      { questionLetters: ["R", "B", "T", "H"], correctAnswer: "1" },
      { questionLetters: ["B", "R", "Z", "H"], correctAnswer: "4" },
      { questionLetters: ["Z", "H", "R", "T"], correctAnswer: "2" },
      // 50 soal
    ],
  },
  // stage 9
  {
    letters: ["k", "t", "¥", "Ǝ", "h"],
    questionSets: [
      { questionLetters: ["Ǝ", "¥", "t", "k"], correctAnswer: "4" },
      { questionLetters: ["k", "Ǝ", "h", "t"], correctAnswer: "2" },
      { questionLetters: ["t", "h", "¥", "k"], correctAnswer: "3" },
      { questionLetters: ["¥", "Ǝ", "k", "t"], correctAnswer: "4" },
      { questionLetters: ["h", "k", "t", "¥"], correctAnswer: "3" },
      { questionLetters: ["t", "h", "Ǝ", "k"], correctAnswer: "2" },
      { questionLetters: ["Ǝ", "t", "h", "¥"], correctAnswer: "0" },
      { questionLetters: ["k", "h", "¥", "Ǝ"], correctAnswer: "1" },
      { questionLetters: ["¥", "k", "t", "h"], correctAnswer: "3" },
      { questionLetters: ["h", "t", "Ǝ", "k"], correctAnswer: "2" },
      { questionLetters: ["k", "¥", "t", "h"], correctAnswer: "3" },
      { questionLetters: ["¥", "k", "Ǝ", "t"], correctAnswer: "4" },
      { questionLetters: ["t", "¥", "k", "h"], correctAnswer: "3" },
      { questionLetters: ["Ǝ", "h", "¥", "k"], correctAnswer: "1" },
      { questionLetters: ["¥", "k", "Ǝ", "h"], correctAnswer: "1" },
      { questionLetters: ["Ǝ", "t", "¥", "h"], correctAnswer: "0" },
      { questionLetters: ["t", "k", "Ǝ", "¥"], correctAnswer: "4" },
      { questionLetters: ["h", "¥", "k", "t"], correctAnswer: "3" },
      { questionLetters: ["t", "k", "¥", "Ǝ"], correctAnswer: "4" },
      { questionLetters: ["¥", "h", "Ǝ", "k"], correctAnswer: "1" },
      // 20 soal
      { questionLetters: ["k", "Ǝ", "h", "t"], correctAnswer: "2" },
      { questionLetters: ["t", "h", "Ǝ", "k"], correctAnswer: "2" },
      { questionLetters: ["t", "h", "¥", "k"], correctAnswer: "3" },
      { questionLetters: ["Ǝ", "t", "h", "¥"], correctAnswer: "0" },
      { questionLetters: ["h", "t", "Ǝ", "k"], correctAnswer: "2" },
      { questionLetters: ["Ǝ", "t", "¥", "h"], correctAnswer: "0" },
      { questionLetters: ["Ǝ", "¥", "t", "k"], correctAnswer: "4" },
      { questionLetters: ["h", "k", "t", "¥"], correctAnswer: "3" },
      { questionLetters: ["¥", "k", "t", "h"], correctAnswer: "3" },
      { questionLetters: ["Ǝ", "h", "¥", "k"], correctAnswer: "1" },
      { questionLetters: ["k", "Ǝ", "t", "h"], correctAnswer: "2" },
      { questionLetters: ["¥", "k", "Ǝ", "h"], correctAnswer: "1" },
      { questionLetters: ["t", "h", "k", "Ǝ"], correctAnswer: "2" },
      { questionLetters: ["k", "¥", "t", "h"], correctAnswer: "3" },
      { questionLetters: ["Ǝ", "h", "¥", "t"], correctAnswer: "0" },
      { questionLetters: ["¥", "Ǝ", "k", "t"], correctAnswer: "4" },
      { questionLetters: ["t", "¥", "k", "h"], correctAnswer: "3" },
      { questionLetters: ["t", "k", "Ǝ", "¥"], correctAnswer: "4" },
      { questionLetters: ["¥", "h", "Ǝ", "k"], correctAnswer: "1" },
      { questionLetters: ["¥", "h", "Ǝ", "t"], correctAnswer: "0" },
      // 40 soal
      { questionLetters: ["Ǝ", "¥", "t", "k"], correctAnswer: "4" },
      { questionLetters: ["t", "h", "¥", "k"], correctAnswer: "3" },
      { questionLetters: ["¥", "Ǝ", "k", "t"], correctAnswer: "4" },
      { questionLetters: ["Ǝ", "h", "¥", "k"], correctAnswer: "1" },
      { questionLetters: ["Ǝ", "t", "¥", "h"], correctAnswer: "0" },
      { questionLetters: ["h", "k", "t", "¥"], correctAnswer: "3" },
      { questionLetters: ["k", "Ǝ", "t", "h"], correctAnswer: "2" },
      { questionLetters: ["¥", "h", "Ǝ", "k"], correctAnswer: "1" },
      { questionLetters: ["Ǝ", "h", "¥", "t"], correctAnswer: "0" },
      { questionLetters: ["¥", "k", "t", "h"], correctAnswer: "3" },
      // 50 soal
    ],
  },
  // stage 10
  {
    letters: ["S", "T", "H", "C", "M"],
    questionSets: [
      { questionLetters: ["S", "H", "C", "T"], correctAnswer: "4" },
      { questionLetters: ["M", "T", "H", "S"], correctAnswer: "3" },
      { questionLetters: ["C", "M", "T", "H"], correctAnswer: "0" },
      { questionLetters: ["H", "T", "M", "S"], correctAnswer: "3" },
      { questionLetters: ["C", "M", "S", "T"], correctAnswer: "2" },
      { questionLetters: ["H", "M", "T", "C"], correctAnswer: "0" },
      { questionLetters: ["T", "C", "H", "S"], correctAnswer: "4" },
      { questionLetters: ["H", "S", "M", "T"], correctAnswer: "3" },
      { questionLetters: ["T", "S", "H", "C"], correctAnswer: "4" },
      { questionLetters: ["S", "H", "T", "M"], correctAnswer: "3" },
      { questionLetters: ["C", "S", "M", "T"], correctAnswer: "2" },
      { questionLetters: ["H", "S", "T", "C"], correctAnswer: "4" },
      { questionLetters: ["S", "M", "C", "H"], correctAnswer: "1" },
      { questionLetters: ["T", "C", "H", "M"], correctAnswer: "0" },
      { questionLetters: ["T", "H", "S", "M"], correctAnswer: "3" },
      { questionLetters: ["M", "S", "C", "H"], correctAnswer: "1" },
      { questionLetters: ["M", "H", "C", "S"], correctAnswer: "1" },
      { questionLetters: ["C", "T", "S", "H"], correctAnswer: "4" },
      { questionLetters: ["H", "T", "M", "S"], correctAnswer: "3" },
      { questionLetters: ["S", "H", "T", "C"], correctAnswer: "4" },
      // 20 soal
      { questionLetters: ["C", "M", "S", "T"], correctAnswer: "2" },
      { questionLetters: ["S", "M", "C", "H"], correctAnswer: "1" },
      { questionLetters: ["C", "S", "M", "T"], correctAnswer: "2" },
      { questionLetters: ["M", "T", "H", "S"], correctAnswer: "3" },
      { questionLetters: ["M", "H", "C", "S"], correctAnswer: "1" },
      { questionLetters: ["T", "M", "S", "C"], correctAnswer: "2" },
      { questionLetters: ["H", "M", "T", "C"], correctAnswer: "0" },
      { questionLetters: ["T", "C", "H", "S"], correctAnswer: "4" },
      { questionLetters: ["M", "S", "C", "H"], correctAnswer: "1" },
      { questionLetters: ["T", "C", "S", "M"], correctAnswer: "2" },
      { questionLetters: ["T", "C", "H", "M"], correctAnswer: "0" },
      { questionLetters: ["S", "C", "T", "M"], correctAnswer: "2" },
      { questionLetters: ["M", "H", "C", "T"], correctAnswer: "0" },
      { questionLetters: ["C", "T", "M", "H"], correctAnswer: "0" },
      { questionLetters: ["H", "T", "M", "S"], correctAnswer: "3" },
      { questionLetters: ["S", "H", "T", "C"], correctAnswer: "4" },
      { questionLetters: ["C", "H", "M", "S"], correctAnswer: "1" },
      { questionLetters: ["T", "C", "H", "M"], correctAnswer: "0" },
      { questionLetters: ["C", "S", "M", "T"], correctAnswer: "2" },
      { questionLetters: ["H", "T", "M", "S"], correctAnswer: "3" },
      // 40 soal
      { questionLetters: ["T", "C", "H", "S"], correctAnswer: "4" },
      { questionLetters: ["H", "T", "M", "S"], correctAnswer: "3" },
      { questionLetters: ["S", "C", "T", "M"], correctAnswer: "2" },
      { questionLetters: ["C", "H", "M", "S"], correctAnswer: "1" },
      { questionLetters: ["T", "C", "S", "M"], correctAnswer: "2" },
      { questionLetters: ["C", "T", "M", "H"], correctAnswer: "0" },
      { questionLetters: ["M", "T", "H", "S"], correctAnswer: "3" },
      { questionLetters: ["S", "H", "T", "C"], correctAnswer: "4" },
      { questionLetters: ["C", "S", "M", "T"], correctAnswer: "2" },
      { questionLetters: ["C", "T", "M", "H"], correctAnswer: "0" },
      // 50 soal
    ],
  },
];
var totalAnswered = 0;
var totalCorrect = 0;
var speedCredit = 0;
var accuracyCredit = 0;
var enduranceCredit = 0;

function calculateSpeedCredit(totalAnswered) {
  if (totalAnswered >= 441) {
    return 4;
  } else if (totalAnswered >= 363) {
    return 3;
  } else if (totalAnswered >= 308) {
    return 2;
  } else if (totalAnswered >= 253) {
    return 1;
  } else {
    return 0;
  }
}

function calculateAccuracyCredit(totalCorrect) {
  if (totalCorrect >= 418) {
    return 4;
  } else if (totalCorrect >= 345) {
    return 3;
  } else if (totalCorrect >= 293) {
    return 2;
  } else if (totalCorrect >= 241) {
    return 1;
  } else {
    return 0;
  }
}

function calculateEnduranceCredit(
  avgCorrectStage1to5,
  avgCorrectStage6to10,
  deviation
) {
  if (avgCorrectStage1to5 < avgCorrectStage6to10) {
    return 4;
  } else if (avgCorrectStage1to5 === avgCorrectStage6to10) {
    return 3;
  } else if (avgCorrectStage1to5 > avgCorrectStage6to10) {
    if (deviation < 2) {
      return 2;
    } else if (deviation >= 2 && deviation <= 4) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}


// Fungsi untuk menghitung total jawaban yang benar
function calculateTotalCorrect(answers) {
  return answers.reduce((total, answer) => {
    return total + (answer === "correct" ? 1 : 0);
  }, 0);
}

function answerQuestion(stageIndex, questionIndex, userAnswer) {
  const correctAnswer =
    stages[stageIndex].questionSets[questionIndex].correctAnswer;
  if (userAnswer === correctAnswer) {
    totalCorrect++;
    return "correct";
  } else {
    return "incorrect";
  }
}

document.querySelectorAll(".clickable .box").forEach((box, index) => {
  box.addEventListener("click", function () {
    totalAnswered++;
    const answerStatus = answerQuestion(
      currentStageIndex,
      totalChanges % stages[currentStageIndex].questionSets.length,
      index.toString()
    );

    if (answerStatus === "correct") {
      totalCorrect++;
    }

    var finalScore = calculateScore();
    console.log("Nilai akhir:", finalScore);

    if (
      stages.length >= 10 &&
      currentStageIndex === stages.length - 1 &&
      totalChanges === 50
    ) {
      saveScoreAndAlert();
    }
  });
});

function runSimulation() {
  for (let stageIndex = 0; stageIndex < stages.length; stageIndex++) {
    const stage = stages[stageIndex];
    let stageCorrectAnswers = [];
    totalAnswered = 0; // Reset totalAnswered for each stage
    for (
      let questionIndex = 0;
      questionIndex < stage.questionSets.length;
      questionIndex++
    ) {
      const randomAnswer =
        Math.random() < 0.5 ? stage.letters[0] : stage.letters[1];
      stageCorrectAnswers.push(
        answerQuestion(stageIndex, questionIndex, randomAnswer)
      );
    }
    const avgCorrectStage1to5 =
      calculateTotalCorrect(stageCorrectAnswers.slice(0, 20)) / 20;
    const avgCorrectStage6to10 =
      calculateTotalCorrect(stageCorrectAnswers.slice(20, 40)) / 20;
    const deviation = Math.abs(avgCorrectStage1to5 - avgCorrectStage6to10);

    // Calculate credits for each stage and accumulate them
    speedCredit += calculateSpeedCredit(totalAnswered);
    accuracyCredit += calculateAccuracyCredit(totalCorrect);
    enduranceCredit += calculateEnduranceCredit(
      avgCorrectStage1to5,
      avgCorrectStage6to10,
      deviation
    );
  }

  // Output the results
  console.log("Total Correct:", totalCorrect);
  console.log("Total Answered:", totalAnswered);
  console.log("Speed Credit:", speedCredit);
  console.log("Accuracy Credit:", accuracyCredit);
  console.log("Endurance Credit:", enduranceCredit);
}

function calculateFinalScore(speedCredit, accuracyCredit, enduranceCredit) {
  var finalScore = speedCredit + accuracyCredit + enduranceCredit;
  return finalScore;
}

function saveScoreToDatabase(speedCredit, accuracyCredit, enduranceCredit) {
  const formData = new FormData();
  formData.append("Kecepatan", speedCredit);
  formData.append("Ketelitian", accuracyCredit);
  formData.append("DayaTahan", enduranceCredit);

  fetch("submit-kecermatan.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      window.location.href = "hasil-akhir.php";
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}

function calculateScore(avgCorrectStage1to5, avgCorrectStage6to10, deviation) {
  speedCredit = calculateSpeedCredit(totalAnswered);
  accuracyCredit = calculateAccuracyCredit(totalCorrect);
  enduranceCredit = calculateEnduranceCredit(
    avgCorrectStage1to5,
    avgCorrectStage6to10,
    deviation
  );
  var finalScore = calculateFinalScore(
    speedCredit,
    accuracyCredit,
    enduranceCredit
  );
  return finalScore;
}

function startTimer() {
  countdownTimer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  if (totalSeconds <= 0) {
    clearInterval(countdownTimer);
    if (currentStageIndex === stages.length - 1) {
      saveScoreAndAlert();
    } else {
      resetStage();
      totalSeconds = 60;
      startTimer();
    }
  } else {
    totalSeconds--;
  }
}

document.querySelectorAll(".answer").forEach((answer) => {
  answer.addEventListener("click", function () {
    totalAnswered++;
    if (
      this.innerText ===
      currentStage.questionSets[totalChanges % currentStage.questionSets.length]
        .correctAnswer
    ) {
      totalCorrect++;
    }

    var finalScore = calculateScore();
    console.log("Nilai akhir:", finalScore);

    if (stages >= 10 && currentStageIndex === stages.length - 1) {
      saveScoreAndAlert();
    }
  });
});

function saveScoreAndAlert() {
  saveScoreToDatabase(speedCredit, accuracyCredit, enduranceCredit);
  alert(`Skor Anda telah tersimpan, good luck!`);
  window.location.href = "hasil-akhir.php";
}

function shuffleLetters(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function displayStageLetters() {
  var currentStage = stages[currentStageIndex];
  var row1Boxes = document.querySelectorAll(".row#row1 .box");
  for (var i = 0; i < row1Boxes.length; i++) {
    row1Boxes[i].innerText = currentStage.letters[i] || "";
  }
}

function displayQuestions() {
  var currentStage = stages[currentStageIndex];
  var currentQuestionSet =
    currentStage.questionSets[totalChanges % currentStage.questionSets.length];
  var questionBoxes = document.querySelectorAll(".question-box");
  var questionsForStage = currentQuestionSet.questionLetters;
  for (var i = 0; i < questionBoxes.length; i++) {
    questionBoxes[i].innerText = questionsForStage[i];
  }
}

function changeQuestion() {
  if (totalChanges >= 50 || totalSeconds <= 5) {
    totalChanges = 0;
    return;
  }

  var currentStage = stages[currentStageIndex];
  var currentQuestionSet =
    currentStage.questionSets[totalChanges % currentStage.questionSets.length];
  var questionBoxes = document.querySelectorAll(".question-box");
  var questionsForStage = currentQuestionSet.questionLetters;
  var lettersForStage = currentStage.letters.slice();

  shuffleLetters(lettersForStage);

  for (var i = 0; i < questionBoxes.length; i++) {
    var letterIndex = lettersForStage.findIndex(
      (letter) => letter === questionsForStage[i]
    );
    if (letterIndex !== -1) {
      questionBoxes[i].innerText = lettersForStage.splice(letterIndex, 1)[0];
    }
  }
  totalChanges++;

  displayQuestions();
}

function resetStage() {
  totalChanges = 50;
  if (currentStageIndex >= stages.length - 1) {
    currentStageIndex = 0;
  } else {
    currentStageIndex++;
  }
  displayStageLetters();
  displayQuestions();
}

// Inisialisasi
startTimer();
displayStageLetters();
displayQuestions();
