import { CountUp } from "../";

export default function Views() {
  return (
    <section className="w-full pb-4 px-6 bg-pallet4 font-montserrat">
      <div className="max-w-6xl mx-auto">
        <div className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-left text-gray-900 flex flex-col">
          Over{" "}
          <div className="mx-auto">
            <CountUp
              to={9200000}
              from={10000}
              direction="up"
              delay={0.2}
              duration={1}
              className="font-mono font-extrabold"
              separator=","
            />
            <span className="font-mono">+</span>
          </div>
          <span className="ml-auto">Views</span>
        </div>
      </div>
    </section>
  );
}
