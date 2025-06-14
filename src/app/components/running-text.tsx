'use client';

export function RunningText() {
  const services = [
    'Web Development',
    'Mobile Apps (Android & iOS)',
    'UI/UX Design',
    'Custom Icons',
    '3D Design & Modeling',
  ];

  const repeatedServices = [ ...services, ...services, ...services, ...services ];

  return (
    <div className="w-full overflow-hidden bg-[#00704A] py-6">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'scroll 10s linear infinite',
        }}
      >
        {repeatedServices.map((service, index) => (
          <span
            key={index}
            className=" text-2xl font-medium text-white inline-block flex-shrink-0"
          >
            {service}
            <span className="mx-4 text-white">•</span>
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
}

export default RunningText;
