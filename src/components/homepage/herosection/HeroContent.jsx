import SearchBar from "../../SearchBar";

function HeroContent() {
  return (
    <>
      {/* ----- HEADING ----- */}

      <h1
        className="
          max-w-2xl
          text-[34px]
          font-extrabold
          leading-[1.06]
          tracking-[-0.045em]
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Find trusted local
        <br />
        services near you.
      </h1>

      {/* ----- DESCRIPTION ----- */}

      <p
        className="
          mt-4
          max-w-xl
          text-sm
          leading-6
          text-white/80
          sm:text-base
          sm:leading-7
        "
      >
        Easily find electricians, plumbers, mechanics, cleaners and other
        trusted local service providers.
      </p>

      {/* ----- SEARCH ----- */}

      <div className="mt-6 max-w-3xl">
        <SearchBar placeholder="Search services..." />
      </div>
    </>
  );
}

export default HeroContent;
