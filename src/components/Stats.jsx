import { FaPlus } from "react-icons/fa";

const stats = [
  { id: 1, name: "Satisfied customers", value: "50" },
  { id: 2, name: "Successful projects", value: "100" },
  { id: 3, name: "Years of experience", value: "5" },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <div className="flex items-center gap-2 ">
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
                <FaPlus className="text-lg" />
              </div>
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
