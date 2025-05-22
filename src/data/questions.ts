
import { Question } from '@/types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Milyen problémára keres megoldást a projektünk?",
    options: ["A medvék megjelenésére", "A tó vizének romlására", "A tóban élő védett halfaj veszélyeztetésére"],
    correctAnswer: 1,
    category: "Innováció"
  },
  {
    id: 2,
    question: "Mit terveztünk a probléma megoldására?",
    options: ["Egy speciális vegyszert, ami elpusztítja az algákat", "Egy légi drónt, ami a magasból figyeli a tavat", "Egy víz alatti robotot (ROV), amely felderíti a tó vizét"],
    correctAnswer: 2,
    category: "Innováció"
  },
  {
    id: 3,
    question: "Mi lesz a víz alatti robot neve?",
    options: ["Algadestroyer 2000", "Anna V2.0", "Sanyi"],
    correctAnswer: 1,
    category: "Innováció"
  },
  {
    id: 4,
    question: "Milyen technológiával készül a robot?",
    options: ["Fa faragással", "Acélöntéssel", "3D nyomtatással"],
    correctAnswer: 2,
    category: "Innováció"
  },
  {
    id: 5,
    question: "Mi Sydney egyik legismertebb látványossága?",
    options: ["Eiffel-torony", "Kínai Nagy Fal", "Sydney Operaház"],
    correctAnswer: 2,
    category: "Sydney"
  },
  {
    id: 6,
    question: "Ki tervezte a Sydney-i Operaházat?",
    options: ["Frank Lloyd Wright", "Jørn Utzon", "Zaha Hadid"],
    correctAnswer: 1,
    category: "Sydney"
  },
  {
    id: 7,
    question: "Sydney melyik ausztrál állam fővárosa?",
    options: ["Victoria", "Queensland", "Új-Dél-Wales (New South Wales)"],
    correctAnswer: 2,
    category: "Sydney"
  },
  {
    id: 8,
    question: "Mi a neve Sydney leghíresebb hídjának, amelyet gyakran \"a fogas hídnak\" is neveznek?",
    options: ["Brooklyn híd", "Golden Gate híd", "Sydney Harbour Bridge"],
    correctAnswer: 2,
    category: "Sydney"
  }
];
