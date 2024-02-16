import Counter from './Counter';

const CounterSection = () => {
  return (
    <section className="w-full bg-[#ba3c3c] py-32">
      <div className="container mx-auto">
        <ul className="flex flex-col items-center justify-center md:flex-row md:gap-8 md:px-4">
          <li className="flex items-center gap-2">
            <span className="font-josefin-sense text-3xl font-bold text-[#f4f5fe] max-xl:text-6xl md:text-5xl">
              <Counter end={100} />+
            </span>
            <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.2px] text-[#f4f5fe] lg:text-2xl lg:leading-[1.4]">
              Projects
            </h3>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-josefin-sense text-5xl font-bold text-[#f4f5fe] max-xl:text-7xl xl:text-6xl">
              <Counter end={20} />+
            </span>
            <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.2px] text-[#f4f5fe] lg:text-2xl lg:leading-[1.4]">
              Digital Products
            </h3>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-josefin-sense text-5xl font-bold text-[#f4f5fe] max-xl:text-7xl xl:text-6xl">
              <Counter end={50} />+
            </span>
            <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.2px] text-[#f4f5fe] lg:text-2xl lg:leading-[1.4]">
              Happy Clients
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CounterSection;
