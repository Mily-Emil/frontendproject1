function Biodata({ name, age, hobby, city }) {
  return (
    <div className="group rounded-[26px] border border-white/15 bg-[#111111] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_12px_30px_rgba(34,211,238,0.08)] md:p-10">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400">
        Biodata
      </p>

      <h3 className="text-4xl font-black uppercase tracking-[-0.08em] text-white md:text-6xl">
        {name}
      </h3>

      <div className="mt-8 space-y-4 text-lg text-white/80 md:text-2xl">
        <p>
          <span className="font-semibold text-cyan-400">Age:</span> {age} years old
        </p>
        <p>
          <span className="font-semibold text-cyan-400">Hobby:</span> {hobby}
        </p>
        <p>
          <span className="font-semibold text-cyan-400">City:</span> {city}
        </p>
      </div>
    </div>
  );
}

export default Biodata;
