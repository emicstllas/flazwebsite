import Image from "next/image";

const reviews = [
  {
    id: "james",
    text: "I am extremely impressed with the design and technical work done on my villa in Dubai. The team's attention to detail, professionalism, and commitment to delivering the highest quality results is truly commendable. My villa now stands as a testament to their exceptional craftsmanship.",
    name: "James",
    role: "Marina professional from UK, villa in Jumeirah Hills",
    avatar: "/images/pexels-artbovich-7174105.jpg",
  },
  {
    id: "michael",
    text: "The services provided for my villa in Dubai exceeded all my expectations. The team was professional, knowledgeable, and went above and beyond to create a stunning and functional space. I couldn't be happier with the results!",
    name: "Michael",
    role: "Finance professional from Germany, villa in The Lakes",
    avatar: "/images/pexels-ranamatloob567-34378029.jpg",
  },
  {
    id: "sofia",
    text: "From start to finish, the team demonstrated exceptional expertise and creativity in renovating my villa in Dubai. They listened to my preferences, offered innovative solutions, and delivered a remarkable transformation. I couldn't have asked for a better experience.",
    name: "Sofia",
    role: "Lawyer from Spain, villa in Springs",
    avatar: "/images/pexels-zak-mir-2158162344-35492984.jpg",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--flaz-teal)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <h2 className="text-[64px] font-medium text-[var(--flaz-dark)] tracking-tight">
          What our clients say
        </h2>
        <div className="flex items-baseline gap-2 shrink-0">
          <span className="text-3xl md:text-5xl font-medium text-[var(--flaz-dark)]">4.8</span>
          <span className="text-sm text-gray-400 leading-snug max-w-[120px]">
            /5 summary on Google Reviews
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white rounded-sm p-7 flex flex-col gap-5">
            <Stars />
            <p className="text-[20px] font-light text-gray-600 leading-relaxed flex-1">{r.text}</p>
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="relative w-10 h-10 rounded-sm-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-[20px] font-medium text-[var(--flaz-dark)]">{r.name}</p>
                <p className="text-[16px] font-light text-gray-400 leading-snug">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
