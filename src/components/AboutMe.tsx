export function AboutMe() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div className="order-1">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I’m a Biomedical Engineering graduate (with an MS and BS) actively seeking entry-level
            opportunities in regulatory affairs, quality engineering, test engineering, product
            engineering, or systems engineering. I am interested in contributing towards
            full-lifecycle product development and translating user needs into safe and high quality
            products. Equipped with a Six Sigma Green Belt and a diverse toolkit across 3D modeling,
            statistical quality control, quality systems, and regulatory frameworks, I am eager to
            collaborate with cross-functional teams to bring highly reliable solutions to market.
          </p>
        </div>

        {/* Headshot */}
        <div className="order-2 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xl shadow-lg">
            <img
              src="/professional-headshot.JPG"
              alt="Kelly Cao professional headshot"
              className="absolute inset-0 h-full w-full origin-[center_25%] scale-[1.6] object-cover object-[center_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
