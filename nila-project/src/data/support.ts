
interface Category {
  title: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  {
    title: 'Consultant Psychologist',
    // icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    icon: 'fa-solid fa-heart',
    color: 'amber-600',
    bgColor: 'amber-100'
  },
  {
    title: 'Sexual Wellness',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364a4.5 4.5 0 006.364-6.364L21.5 9a4.5 4.5 0 00-6.364-6.364L12 3.636a4.5 4.5 0 00-6.364 6.364L3.636 12A4.5 4.5 0 003 9l.318-1.682z',
    color: 'pink-600',
    bgColor: 'pink-100'
  },
  {
    title: 'Clinical Psychologist',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: 'teal-600',
    bgColor: 'teal-100'
  },
  {
    title: 'Psychiatrist',
    icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    color: 'orange-600',
    bgColor: 'orange-100'
  }
];