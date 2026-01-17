import { useState } from "react";
import { Link } from "react-router-dom";
import {expertsData} from '../data/experts';

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
}

// Category Interface
interface CategoryExperts {
  category: string;
  experts: Expert[];
}

const ExpertCard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  

  const getProgressWidth = (progress: string): string => {
    const [current, total] = progress.split('/').map(Number);
    return `${(current / total) * 100}%`;
  };

  // Filter experts by search term
  const filteredExperts = expertsData.map(category => ({
    ...category,
    experts: category.experts.filter(expert =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertise.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.experts.length > 0);

  return (
    <>
      {/* Search Section */}
      <section id="section-search" className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            <input
              type="text"
              placeholder="Search by therapist name, specialty or expertise"
              className="w-full pl-14 pr-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-gray-700 font-medium transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="section-experts" className="max-w-7xl mx-auto px-6 py-12">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((category, catIndex) => (
            <div key={catIndex} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  {category.experts.length} top {category.category.toLowerCase()} experts available
                </p>
              </div>

              {/* Experts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.experts.map((expert) => (
                  <div
                    key={expert.id}
                    className="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-green-200 hover:border-green-300"
                  >
                    {/* Expert Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-xl text-gray-900 leading-tight truncate">
                          {expert.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 truncate">
                          {expert.title}
                        </p>
                        <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {expert.experience}
                        </span>
                      </div>
                    </div>

                    {/* Stats & Expertise */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        {expert.therapyHours}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {expert.expertise.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Video Progress */}
                    <div className="flex items-center gap-3 mb-6">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 group-hover:bg-green-50">
                        <i className="fa-solid fa-play text-green-600 text-sm group-hover:scale-110 transition-transform"></i>
                      </button>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-600 rounded-full transition-all duration-300"
                          style={{ width: getProgressWidth(expert.progress) }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 min-w-[32px] text-center">
                        {expert.videoDuration}
                      </span>
                    </div>

                    {/* Availability & Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500">Next available slot</p>
                        <p className="font-bold text-gray-900 text-sm">
                          {expert.nextSlot}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-xs text-gray-500">Starts from</p>
                        <p className="font-bold text-2xl text-gray-900">₹{expert.price}</p>
                      </div>
                    </div>

                    {/* Book Button */}
                    <Link
                      to={`/experts/${expert.id}`}
                      className="w-full block bg-gray-900 text-white py-4 rounded-2xl font-semibold text-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:-translate-y-1"
                    >
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-32">
            <i className="fa-solid fa-magnifying-glass text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No experts found</h2>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Try searching with different keywords or clear the search
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ExpertCard;


// import { Link } from "react-router-dom";

// // Expert Interface
// interface Expert {
//   id: string;
//   name: string;
//   title: string;
//   image: string;
//   experience: string;
//   therapyHours: string;
//   expertise: string[];
//   videoDuration: string;
//   progress: string; // "1/3", "2/5", "1/2"
//   nextSlot: string;
//   price: number;
// }

// // Category Interface
// interface CategoryExperts {
//   category: string;
//   experts: Expert[];
// }

// const ExpertCard: React.FC = () => {
//   const expertsData: CategoryExperts[] = [
//     {
//       category: "Psychologists",
//       experts: [
//         {
//           id: "1",
//           name: "Celina Binu",
//           title: "Consultant Psychologist",
//           image: "https://i.pravatar.cc/150?u=expert1",
//           experience: "5 years exp",
//           therapyHours: "450+ Therapy Hours ⚡",
//           expertise: ["Stress", "Relationships"],
//           videoDuration: "1:47",
//           progress: "1/3",
//           nextSlot: "Tomorrow, 10:00 AM",
//           price: 1500,
//         },
//         {
//           id: "2",
//           name: "Dr. Ria",
//           title: "Clinical Psychologist",
//           image: "https://i.pravatar.cc/150?u=expert2",
//           experience: "7 years exp",
//           therapyHours: "750+ Therapy Hours ⚡",
//           expertise: ["Anxiety", "Depression", "OCD"],
//           videoDuration: "2:15",
//           progress: "2/5",
//           nextSlot: "Tomorrow, 2:00 PM",
//           price: 1800,
//         },
//         {
//           id: "3",
//           name: "Leena Mary Mathew",
//           title: "Consultant Psychologist",
//           image: "https://i.pravatar.cc/150?u=expert3",
//           experience: "6 years exp",
//           therapyHours: "600+ Therapy Hours ⚡",
//           expertise: ["Trauma", "Self-esteem"],
//           videoDuration: "1:30",
//           progress: "1/2",
//           nextSlot: "Today, 5:00 PM",
//           price: 1600,
//         },
//       ],
//     },
//     // Add more categories as needed
//     {
//       category: "Therapists",
//       experts: [
//         {
//           id: "4",
//           name: "Dr. Maya Singh",
//           title: "Cognitive Therapist",
//           image: "https://i.pravatar.cc/150?u=expert4",
//           experience: "8 years exp",
//           therapyHours: "900+ Therapy Hours ⚡",
//           expertise: ["CBT", "Mindfulness"],
//           videoDuration: "1:45",
//           progress: "3/4",
//           nextSlot: "Today, 7:00 PM",
//           price: 2000,
//         },
//       ],
//     },
//   ];

//   const getProgressWidth = (progress: string): string => {
//     const [current, total] = progress.split('/').map(Number);
//     return `${(current / total) * 100}%`;
//   };

//   return (
//     <section id="section-experts" className="max-w-7xl mx-auto px-6 py-16">
//       {expertsData.map((category, catIndex) => (
//         <div key={catIndex} className="mb-20 last:mb-0">
//           <div className="mb-12">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
//               {category.category}
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl">
//               Connect with India's top {category.category.toLowerCase()} for personalized sessions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {category.experts.map((expert) => (
//               <div
//                 key={expert.id}
//                 className="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-green-200 hover:border-green-300"
//               >
//                 <div className="flex items-start gap-4 mb-6">
//                   <img
//                     src={expert.image}
//                     alt={expert.name}
//                     className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-bold text-xl text-gray-900 leading-tight truncate">
//                       {expert.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2 truncate">
//                       {expert.title}
//                     </p>
//                     <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
//                       {expert.experience}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <p className="text-sm font-semibold text-gray-700 mb-3">
//                     {expert.therapyHours}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {expert.expertise.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 mb-6">
//                   <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 group-hover:bg-green-50">
//                     <i className="fa-solid fa-play text-green-600 text-sm group-hover:scale-110 transition-transform"></i>
//                   </button>
//                   <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-green-600 rounded-full transition-all duration-300"
//                       style={{ width: getProgressWidth(expert.progress) }}
//                     />
//                   </div>
//                   <span className="text-xs font-medium text-gray-700 min-w-[32px] text-center">
//                     {expert.videoDuration}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between mb-6">
//                   <div className="space-y-1">
//                     <p className="text-xs text-gray-500">Next available slot</p>
//                     <p className="font-bold text-gray-900 text-sm">
//                       {expert.nextSlot}
//                     </p>
//                   </div>
//                   <div className="text-right space-y-1">
//                     <p className="text-xs text-gray-500">Starts from</p>
//                     <p className="font-bold text-2xl text-gray-900">₹{expert.price}</p>
//                   </div>
//                 </div>

//                 <Link
//                   to={`/experts/${expert.id}`}
//                   className="w-full block bg-gray-900 text-white py-4 rounded-2xl font-semibold text-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:-translate-y-1"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ExpertCard;
