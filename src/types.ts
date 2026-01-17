export enum View {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  HOME = 'HOME',
  LEARN = 'LEARN',
  FINANCE = 'FINANCE',
  REWARDS = 'REWARDS',
  EVENTS = 'EVENTS',
  PRODUCTS = 'PRODUCTS'
}

export enum TransactionCategory {
  FOOD = 'Food',
  SHOPPING = 'Shopping',
  TRANSPORT = 'Transport',
  ENTERTAINMENT = 'Entertainment',
  SAVINGS = 'Savings'
}

export interface Transaction {
  id: string;
  storeName: string;
  amount: number;
  date: string;
  category: TransactionCategory;
  isPartner: boolean;
}

export interface User {
  username: string;
  email: string;
  kDollars: number;
  streakDays: number;
  badges: string[];
  interests: string[];
  language: 'English' | 'Chinese';
  savingsGoal: {
    amount: number;
    targetDate: string;
    current: number;
  } | null;
  level: number | 0;
}

export interface Lesson {
  id: string;
  title: string;
  provider: string; // e.g., "HOY TV"
  thumbnail: string;
  duration: string;
  reward: number;
  completed: boolean;
}

export interface QuizQuestion {
  correct_answer: string;
  explanation: string;
  options: string[];
  question: string;
}
export interface Section {
  id: number;
  title: string;
  is_completed: boolean;
  is_locked: boolean;
}
export interface Sections {
  course: string;
  sections: Section[];
}

export interface CourseContent {
  content: string;
  quiz: QuizQuestion;
  status?: string;
}

export interface CourseDetailResponse {
  course: string;
  sections: Section[];
}

export interface RewardItem {
  id: string;
  name: string;
  cost: number;
  image: string;
  description: string;
}

export interface EventItem {
  id: string;
  name: string;
  date: string;
  location: string;
  type: 'Workshop' | 'Class' | 'Featured';
  spotsAvailable: number;
  isRegistered: boolean;
  price?: string; // For ads/promotions
}

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  interests: string[];
  otherInterest: string;
}

export interface Course {
  description: string;
  id: number;
  progress: number;
  title: string;
}

export type Courses = Course[];