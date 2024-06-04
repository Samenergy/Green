const features = [
  {
    name: "Custom Web Design",
    description:
      "From concept to execution, we create bespoke websites tailored to your unique brand identity and goals.",
  },
  {
    name: "Responsive Development",
    description:
      "Our websites are built to adapt seamlessly to all devices, ensuring a consistent and engaging user experience.",
  },
  {
    name: "Sustainable Practices",
    description:
      "We incorporate eco-friendly design principles and utilize renewable resources to minimize our environmental impact.",
  },
  {
    name: "Ongoing Support",
    description:
      "Beyond the launch, we offer comprehensive maintenance and support services to keep your website running smoothly.",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 lg:py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-20">
        <div className="mx-auto max-w-2xl lg:text-left">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Full Range of Web Design Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer professional web design services at affordable rates to
            help your business attract more visitors and keep them on your site!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-2 flex h-5 w-5 items-center  justify-center rounded-lg bg-[#37af65]"></div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
