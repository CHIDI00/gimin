import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactInfo from "@/components/sections/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 sm:px-12 lg:px-0 font-sans">
      <div className="max-w-360 mx-auto">
        <div className="mb-20 max-w-2xl">
          <p className="text-blue-700 uppercase text-xs sm:text-[10px] font-bold tracking-[0.2em] mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tight mb-6">
            CONTACT <br />
            <span className="text-white/40">US.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Whether you&apos;re ready to start training, have a question about
            our programs, or want to discuss a partnership, we&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <section>
            <ContactForm />
          </section>

          {/* Right Column: Info & Locations */}
          <section>
            <ContactInfo />
          </section>
        </div>
      </div>
    </main>
  );
}
