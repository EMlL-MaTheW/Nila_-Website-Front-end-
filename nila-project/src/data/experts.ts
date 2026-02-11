

// Expert Interface
interface Expert {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: string;
  therapyHours: string;
  expertise: string[];
  videoDuration: string;
  progress: string;
  nextSlot: string;
  price: number;
  location: string;
}

//Data for the ExpertCard.tsx (./components/ExpertCard.tsx)
export const expertsData: CategoryExperts[] = [
    {
      category: "Psychologists",
      experts: [
        {
          id: "1",
          name: "Celina Binu",
          title: "Consultant Psychologist",
          image: "https://i.pravatar.cc/150?u=expert1",
          experience: "5 years exp",
          therapyHours: "450+ Therapy Hours ⚡",
          expertise: ["Stress", "Relationships"],
          videoDuration: "1:47",
          progress: "1/3",
          nextSlot: "Tomorrow, 10:00 AM",
          price: 1500,
          location: "Mental Health Care-India"
        },
        {
          id: "2",
          name: "Dr. Ria",
          title: "Clinical Psychologist",
          image: "https://i.pravatar.cc/150?u=expert2",
          experience: "7 years exp",
          therapyHours: "750+ Therapy Hours ⚡",
          expertise: ["Anxiety", "Depression", "OCD"],
          videoDuration: "2:15",
          progress: "2/5",
          nextSlot: "Tomorrow, 2:00 PM",
          price: 1800,
          location: "Mental Health Care-India"
        },
        {
          id: "3",
          name: "Leena Mary Mathew",
          title: "Consultant Psychologist",
          image: "https://i.pravatar.cc/150?u=expert3",
          experience: "6 years exp",
          therapyHours: "600+ Therapy Hours ⚡",
          expertise: ["Trauma", "Self-esteem"],
          videoDuration: "1:30",
          progress: "1/2",
          nextSlot: "Today, 5:00 PM",
          price: 1600,
          location: "Mental Health Care-India"
        },
        {
            id: "4",
            name: "Gayathri R",
            title: "Clinical Psychologist",
            image: "https://i.pravatar.cc/150?u=expert4",
            experience: "4 years exp",
            therapyHours: "380+ Therapy Hours ⚡",
            expertise: ["Anger", "Work Stress"],
            videoDuration: "2:00",
            progress: "1/4",
            nextSlot: "Tomorrow, 11:00 AM",
            price: 1400,
            location: "Mental Health Care-India"
        },
        {
            id: "5",
            name: "Anoohya",
            title: "Consultant Psychologist",
            image: "https://i.pravatar.cc/150?u=expert5",
            experience: "8 years exp",
            therapyHours: "920+ Therapy Hours ⚡",
            expertise: ["PTSD", "Grief", "Loss"],
            videoDuration: "1:55",
            progress: "3/5",
            nextSlot: "Today, 3:00 PM",
            price: 2000,
            location: "Mental Health Care-India"
        },
        {
            id: "6",
            name: "Dr. Hariharan Shanmugam",
            title: "Psychiatrist",
            image: "https://i.pravatar.cc/150?u=expert6",
            experience: "12 years exp",
            therapyHours: "1500+ Therapy Hours ⚡",
            expertise: ["Bipolar", "Schizophrenia"],
            videoDuration: "2:30",
            progress: "2/3",
            nextSlot: "Tomorrow, 9:00 AM",
            price: 2500,
            location: "Mental Health Care-India"
        },
        {
            id: "7",
            name: "Noor Fathima",
            title: "Clinical Psychologist",
            image: "https://i.pravatar.cc/150?u=expert7",
            experience: "5 years exp",
            therapyHours: "520+ Therapy Hours ⚡",
            expertise: ["Parenting", "Family Issues"],
            videoDuration: "1:40",
            progress: "1/3",
            nextSlot: "Today, 6:00 PM",
            price: 1550,
            location: "Mental Health Care-India"
        },
        {
            id: "8",
            name: "Blessy Mariya Mathew",
            title: "Consultant Psychologist",
            image: "https://i.pravatar.cc/150?u=expert8",
            experience: "6 years exp",
            therapyHours: "670+ Therapy Hours ⚡",
            expertise: ["Addiction", "Substance Abuse"],
            videoDuration: "2:10",
            progress: "2/5",
            nextSlot: "Tomorrow, 1:00 PM",
            price: 1700,
            location: "Mental Health Care-India"
        },
        {
            id: "9",
            name: "Dr. Swetha P B",
            title: "Clinical Psychologist",
            image: "https://i.pravatar.cc/150?u=expert9",
            experience: "9 years exp",
            therapyHours: "1100+ Therapy Hours ⚡",
            expertise: ["Eating Disorders", "Body Image"],
            videoDuration: "1:50",
            progress: "1/2",
            nextSlot: "Today, 4:00 PM",
            price: 1900,
            location: "Mental Health Care-India"
        },
        {
            id: "10",
            name: "Darsha Vijayan",
            title: "Consultant Psychologist",
            image: "https://i.pravatar.cc/150?u=expert10",
            experience: "4 years exp",
            therapyHours: "410+ Therapy Hours ⚡",
            expertise: ["Career", "Life Transitions"],
            videoDuration: "1:45",
            progress: "1/3",
            nextSlot: "Tomorrow, 3:30 PM",
            price: 1450,
            location: "Mental Health Care-India"
        }
      ],
    },
  ];
// Category Interface
interface CategoryExperts {
  category: string;
  experts: Expert[];
}
