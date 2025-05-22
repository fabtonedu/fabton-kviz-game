
import { Question } from '@/types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Milyen problémára keres megoldást a projektünk?",
    options: ["A tó partján elszaporodó invazív növényfajok", "A tó vizének romlása", "A horgászturizmus visszaesése a régióban"],
    correctAnswer: 1,
    category: "Innováció"
  },
  {
    id: 2,
    question: "Mit terveztünk a probléma megoldására?",
    options: ["Egy önjáró víztisztító bója", "Egy víz alatti robot (ROV), ami felderíti a tó vizét", "Egy hálózatra kötött szenzoros mérőrendszer"],
    correctAnswer: 1,
    category: "Innováció"
  },
  {
    id: 3,
    question: "Mi lesz a víz alatti robot neve?",
    options: ["DeltaROV-1", "Anna V2.0", "AquaLynx"],
    correctAnswer: 1,
    category: "Innováció"
  },
  {
    id: 4,
    question: "Milyen technológiával készül a robot?",
    options: ["CNC marással", "Acélöntéssel", "3D nyomtatással"],
    correctAnswer: 2,
    category: "Innováció"
  },
  {
    id: 5,
    question: "Mi Sydney egyik legismertebb látványossága?",
    options: ["Sydney Operaház", "Melbourne Tower", "Perth Skydeck"],
    correctAnswer: 0,
    category: "Sydney"
  },
  {
    id: 6,
    question: "Ki tervezte a Sydney-i Operaházat?",
    options: ["Norman Foster", "Jørn Utzon", "Renzo Piano"],
    correctAnswer: 1,
    category: "Sydney"
  },
  {
    id: 7,
    question: "Sydney melyik ausztrál állam fővárosa?",
    options: ["Victoria", "Új-Dél-Wales (New South Wales)", "Tasmánia"],
    correctAnswer: 1,
    category: "Sydney"
  },
  {
    id: 8,
    question: "Mi a neve Sydney híres hídjának, amelyet gyakran „a fogas hídnak" is neveznek?",
    options: ["Sydney Harbour Bridge", "Port Jackson Link", "Tasman Crossing"],
    correctAnswer: 0,
    category: "Sydney"
  },
  {
    id: 9,
    question: "Honnan jutottak ki Sydney-be a Fabton diákjai?",
    options: ["Gyula", "Zalaegerszeg", "Kolozsvár"],
    correctAnswer: 1,
    category: "A Fabton Csapat"
  },
  {
    id: 10,
    question: "Milyen versenyen vesz részt a Fabton csapata?",
    options: ["First Lego League", "RoboChallenge Europe", "Central European Bot Battle"],
    correctAnswer: 0,
    category: "A Fabton Csapat"
  },
  {
    id: 11,
    question: "Melyik nemzetközi versenyen szerepeltek tavaly nyáron?",
    options: ["Hong Kong Asia Open", "Oslo Nordic Robotics Cup", "Dubai Innovation Games"],
    correctAnswer: 0,
    category: "A Fabton Csapat"
  },
  {
    id: 12,
    question: "Mi a First Lego League idei témája?",
    options: ["Submerged", "Terraformers", "Rewired"],
    correctAnswer: 0,
    category: "A Fabton Csapat"
  }
];
