import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center scissors-bg">
        <div className="absolute inset-0 bg-linear-to-b from-[#0d0d0d]/40 via-transparent to-[#0d0d0d]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative text-center px-6 max-w-5xl mx-auto">
          <p className="fade-up font-body tracking-[0.4em] text-[#c9a84c] text-sm uppercase mb-6 shimmer">
            Est. 1987 — Colombo, Sri Lanka
          </p>
          <h1
            className="fade-up-delay-1 font-headline leading-none tracking-tight text-[#f5f0e8]"
            style={{ fontSize: "clamp(5rem,15vw,14rem)" }}
          >
            NOBLE
            <br />
            <span className="gold">CUT</span>
          </h1>
          <div className="fade-up-delay-2 divider-line my-8">
            <span className="font-body text-lg tracking-widest text-[#f5f0e8]/60 px-4 uppercase">
              Where Craft Meets Character
            </span>
          </div>
          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              to="/booking"
              className="bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest px-10 py-4 text-lg hover:bg-[#f5f0e8] transition-all duration-300 hover:scale-105"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link
              to="/services"
              className="border border-[#c9a84c]/50 text-[#f5f0e8] font-headline tracking-widest px-10 py-4 text-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-xs tracking-widest text-[#f5f0e8]/40 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-[#c9a84c]/60 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#c9a84c]/20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "35+", label: "Years of Excellence" },
            { num: "12K+", label: "Happy Clients" },
            { num: "8", label: "Master Barbers" },
            { num: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-headline text-4xl gold tracking-wide">
                {stat.num}
              </div>
              <div className="font-body text-[#f5f0e8]/50 tracking-widest text-sm uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body tracking-[0.3em] gold text-sm uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-display text-5xl leading-tight mb-8">
            A Legacy of
            <br />
            <em>Precision & Pride</em>
          </h2>
          <p className="font-body text-[#f5f0e8]/65 text-xl leading-relaxed mb-6">
            For over three decades, Noble Cut has been the gentleman's sanctuary
            — a place where tradition meets technique, and every chair tells a
            story.
          </p>
          <p className="font-body text-[#f5f0e8]/50 text-lg leading-relaxed mb-10">
            Our master barbers blend old-world craftsmanship with contemporary
            style. From classic straight-razor shaves to modern fades, every cut
            is a statement.
          </p>
          <Link
            to="/services"
            className="inline-block border-b-2 border-[#c9a84c] font-body tracking-widest text-[#c9a84c] text-sm uppercase pb-1 hover:pb-2 transition-all duration-300"
          >
            Explore Our Services →
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-3/4 bg-[#1a1a1a] border border-[#c9a84c]/20 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-headline text-8xl text-[#c9a84c]/10 leading-none">
                  BARBER
                </div>
                <div className="font-headline text-8xl text-[#c9a84c]/10 leading-none">
                  SINCE
                </div>
                <div className="font-headline text-8xl text-[#c9a84c]/10 leading-none">
                  1987
                </div>
              </div>
            </div>
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c]" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c]" />
            <div className="absolute inset-8 border border-[#c9a84c]/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-[#0d0d0d] to-transparent">
              <div className="font-headline tracking-widest text-2xl gold">
                NOBLE CUT BARBER
              </div>
              <div className="font-body text-[#f5f0e8]/50 text-sm tracking-widest mt-1">
                Colombo, Sri Lanka
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] text-[#0d0d0d] p-6 text-center shadow-2xl">
            <div className="font-headline text-3xl">35</div>
            <div className="font-body text-xs tracking-widest uppercase">
              Years
              <br />
              of Craft
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body tracking-[0.3em] gold text-sm uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-5xl">Our Signature Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "✦",
                title: "Classic Cut",
                desc: "Precision haircut tailored to your face shape and style. Includes consultation, wash, and styling.",
                price: "LKR 1,500",
              },
              {
                icon: "◆",
                title: "Hot Towel Shave",
                desc: "The ultimate straight-razor experience. Warm towels, premium lather, flawless finish.",
                price: "LKR 2,000",
              },
              {
                icon: "✦",
                title: "The Works",
                desc: "Full grooming package — haircut, beard trim, hot towel shave, and scalp massage.",
                price: "LKR 4,500",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="card-hover border border-[#c9a84c]/20 bg-[#0d0d0d] p-8 relative group"
              >
                <div className="text-2xl gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                <p className="font-body text-[#f5f0e8]/55 text-lg leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex justify-between items-center border-t border-[#c9a84c]/20 pt-4">
                  <span className="gold font-headline tracking-wide text-xl">
                    {service.price}
                  </span>
                  <Link
                    to="/services"
                    className="font-body text-xs tracking-widest uppercase text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors"
                  >
                    Details →
                  </Link>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block border border-[#c9a84c] text-[#c9a84c] font-headline tracking-widest px-10 py-4 hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden scissors-bg">
        <div className="relative max-w-3xl mx-auto">
          <p className="font-body tracking-[0.3em] gold text-sm uppercase mb-6">
            Ready for a Change?
          </p>
          <h2 className="font-display text-6xl leading-tight mb-8">
            Book Your Chair
            <br />
            <em>Today</em>
          </h2>
          <p className="font-body text-[#f5f0e8]/55 text-xl leading-relaxed mb-10">
            Walk-ins welcome. Appointments preferred. Either way,
            <br />
            you'll leave looking sharper than when you came in.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest px-14 py-5 text-xl hover:bg-[#f5f0e8] transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            RESERVE YOUR SEAT
          </Link>
        </div>
      </section>
    </div>
  );
}
