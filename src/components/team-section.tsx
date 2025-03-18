import { useEffect, useRef } from 'react';
import aliezzahnPhoto from '@/static/image/aliezzahn.jpg';
import morihnPhoto from '@/static/image/morihn.jpg';
import amirMustangPhoto from '@/static/image/mustang.jpg';

const members = [
  {
    name: 'ALIEZZA HN',
    role: 'Blockchain',
    avatar: aliezzahnPhoto,
    link: 'https://aliezza.hncore.website',
  },
  {
    name: 'MORI HN',
    role: 'Designer',
    avatar: morihnPhoto,
    link: 'https://mori.hncore.website',
  },
  {
    name: 'MUSTANG',
    role: 'The art of making with Metal',
    avatar: amirMustangPhoto,
    link: 'https://mori.hncore.website',
  },
];

export default function TeamSection() {
  const memberRefs = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (!isTouchDevice) return; // Only apply to touch devices

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7, // Trigger when 70% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to simulate hover when element is in view
            entry.target.classList.add('is-in-view');
          } else {
            // Remove the class when element is out of view
            entry.target.classList.remove('is-in-view');
          }
        });
      }, observerOptions);

      // Observe all member cards
      memberRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        memberRefs.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Our team of developers and designers combines creativity and
              technology to build innovative digital solutions.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                ref={(el) => (memberRefs.current[index] = el)}
                className="group overflow-hidden"
              >
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl is-in-view:grayscale-0 is-in-view:h-[22.5rem] is-in-view:rounded-xl"
                  src={member.avatar}
                  alt={`${member.name}, ${member.role}`}
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider is-in-view:tracking-wider">
                      <a href={member.link} target="_blank" rel="noreferrer">
                        {member.name}
                      </a>
                    </h3>
                    <span className="text-xs">{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for mobile devices */}
      <style jsx>{`
        @media (hover: none) {
          /* For intersection animation */
          .is-in-view img {
            height: 22.5rem !important;
            border-radius: 0.75rem !important;
            filter: grayscale(0) !important;
          }

          .is-in-view h3 {
            letter-spacing: 0.05em !important;
          }

          /* Make details always visible on mobile */
          .mobile-visible {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }

          /* Additional styles to ensure visibility */
          .text-muted-foreground,
          a[href] {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
