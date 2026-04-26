import resume from "./data/resume.json";
import type { ContactItem, ResumeData, SkillGroup } from "./types/resume";

const data = resume as ResumeData;

function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f8] text-[#1f1b18]">
      <MobileHeader />
      <div className="md:flex">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <DesktopHeader />

          <main className="px-5 pb-16 pt-24 sm:px-8 md:px-10 md:pt-28 lg:px-14">
            <div className="mx-auto max-w-5xl">
              <HeroSection />
              <ExperienceSection />
              <ExpertiseSection />
              <EducationAndInterests />
              <ContactSection />
            </div>
          </main>

          <footer className="border-t border-[#e6dfd8] bg-[#f7f4f0] px-5 py-10 sm:px-8 md:px-10 lg:px-14">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center text-sm text-[#7a7068] md:flex-row md:justify-between md:text-left">
              <p className="font-display text-base text-[#554940]">{data.name}</p>
              <div className="flex flex-wrap items-center justify-center gap-5 uppercase tracking-[0.22em]">
                <a href={`/${data.cvFileName}`} className="hover:text-[#884530]">
                  CV
                </a>
                <a href="mailto:madhurima0423@gmail.com" className="hover:text-[#884530]">
                  Email
                </a>
                <a href="tel:+8801622112614" className="hover:text-[#884530]">
                  Call
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#e5ddd6] bg-[#fbf9f8]/90 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#c9b8ab] bg-[#d2c0b1]">
            <img
              src="/MainPhoto.jpg"
              alt="Madhurima Das Burman"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-lg text-[#2a2420]">{data.name}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#884530]">
              {data.title}
            </p>
          </div>
        </div>
        <a
          href={`/${data.cvFileName}`}
          className="shrink-0 border border-[#2a2420] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2a2420]"
        >
          CV
        </a>
      </div>
    </header>
  );
}

function DesktopHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 hidden border-b border-[#ebe3dc] bg-[#fbf9f8]/88 backdrop-blur md:block">
      <div className="flex items-center justify-between px-10 py-5 md:pl-[350px] lg:px-14 lg:pl-[376px]">
        <div>
          <p className="font-display text-2xl text-[#2a2420]">{data.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-[#884530]">
            Career Profile
          </p>
        </div>
        <nav className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f6254]">
          <a href="#experience" className="hover:text-[#884530]">
            Experience
          </a>
          <a href="#skills" className="hover:text-[#884530]">
            Skills
          </a>
          <a href="#education" className="hover:text-[#884530]">
            Education
          </a>
          <a href="#contact" className="hover:text-[#884530]">
            Contact
          </a>
          <a
            href={`/${data.cvFileName}`}
            className="border border-[#2a2420] px-4 py-2 text-[#2a2420] transition hover:bg-[#f3ece5]"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

function Sidebar() {
  const quickLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <aside className="hidden min-h-screen w-80 shrink-0 border-r border-[#ddd3ca] bg-[#ede7e1] md:flex md:flex-col md:justify-between md:px-8 md:pb-8 md:pt-28">
      <div>
        <div className="border-b border-[#d7cbc1] pb-8 text-center">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-[#a38d7e] bg-[#d2c0b1]">
            <img
              src="/MainPhoto.jpg"
              alt="Madhurima Das Burman"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-5 font-display text-[29px] leading-tight text-[#2a2420]">
            Madhurima Das Burman
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[#884530]">
            Executive Professional
          </p>
        </div>

        <nav className="mt-8 space-y-1">
          {quickLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition ${
                index === 0
                  ? "border-l-2 border-[#884530] bg-[#f4eee8] font-semibold text-[#884530]"
                  : "text-[#5f554d] hover:bg-[#e6ddd5]"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 border-t border-[#d7cbc1] pt-8">
          <SidebarBlock title="Contact">
            <div className="space-y-4">
              {data.contact.map((item) => (
                <ContactLine key={item.label} item={item} />
              ))}
            </div>
          </SidebarBlock>

          <SidebarBlock title="Languages">
            <div className="space-y-4">
              {data.languages.map((language) => (
                <div key={language.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[#2a2420]">{language.name}</span>
                    <span className="uppercase tracking-[0.18em] text-[#884530]">
                      {language.level}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/80">
                    <div
                      className="h-1.5 bg-[#884530]"
                      style={{ width: language.level === "C2" ? "100%" : "78%" }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-[#6f6254]">{language.proficiency}</p>
                </div>
              ))}
            </div>
          </SidebarBlock>
        </div>
      </div>

      <div className="mt-8 border-t border-[#d7cbc1] pt-8">
        <a
          href={`/${data.cvFileName}`}
          className="block border border-[#2a2420] bg-[#a65d46] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:opacity-90"
        >
          Download CV
        </a>
      </div>
    </aside>
  );
}

function HeroSection() {
  return (
    <section className="mb-20 pt-3 md:pt-0">
      <h2 className="max-w-4xl font-display text-[38px] leading-[1.08] text-[#211c19] sm:text-[48px] lg:text-[58px]">
        Relationship-led growth with sharp communication and dependable execution.
      </h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <p className="max-w-2xl text-[17px] leading-8 text-[#5d524a]">{data.summary}</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-[#a65d46]" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#695c4e]">
              Available for business support and client-facing roles
            </span>
          </div>
          <div className="border-l-2 border-[#e0d5cc] pl-5">
            <p className="text-sm italic leading-7 text-[#6f6254]">
              "A practical professional profile shaped by communication, sales follow-through,
              and long-term client trust."
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:madhurima0423@gmail.com"
              className="border border-[#2a2420] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2a2420] transition hover:bg-[#f3ece5]"
            >
              Email Madhurima
            </a>
            <a
              href="tel:+8801622112614"
              className="bg-[#2a2420] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:opacity-90"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mb-20 scroll-mt-28">
      <SectionHeader title="Experience" />
      <div className="space-y-14">
        {data.experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className={`relative pl-8 sm:pl-12 ${
              index === 0 ? "border-l-2 border-[#a65d46]" : "border-l-2 border-[#e6ddd5]"
            }`}
          >
            {index === 0 ? (
              <div className="absolute -left-[9px] top-0 h-4 w-4 bg-[#a65d46]" />
            ) : null}
            <p
              className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] ${
                index === 0 ? "text-[#884530]" : "text-[#aa9f95]"
              }`}
            >
              {item.start} - {item.end}
            </p>
            <h3 className="font-display text-[28px] leading-tight text-[#211c19]">{item.role}</h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[#695c4e]">
              {item.company} · {item.location}
            </p>
            <ul className="mt-5 max-w-3xl space-y-3 text-[15px] leading-8 text-[#5d524a]">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a65d46]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const featuredGroups = data.skills.slice(0, 3);
  const remainingTags = data.skills.flatMap((group) => group.items).slice(0, 8);

  return (
    <section id="skills" className="mb-20 scroll-mt-28">
      <SectionHeader title="Expertise" />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} featured={index === 1} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {remainingTags.map((item) => (
          <span
            key={item}
            className="border border-[#d7cbc1] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#695c4e]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function EducationAndInterests() {
  return (
    <section id="education" className="mb-20 grid gap-14 scroll-mt-28 md:grid-cols-2">
      <div>
        <h3 className="font-display text-[28px] uppercase tracking-[0.06em] text-[#211c19]">
          Education
        </h3>
        <div className="mt-8 space-y-8">
          {data.education.map((item) => (
            <article key={item.degree}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#884530]">
                {item.period}
              </p>
              <h4 className="mt-2 text-lg font-semibold text-[#2a2420]">{item.degree}</h4>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#695c4e]">
                {item.institution}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#5d524a]">
                {item.detail} · {item.location}
              </p>
              <p className="mt-2 text-sm text-[#7b7068]">{item.score}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-[28px] uppercase tracking-[0.06em] text-[#211c19]">
          Interests
        </h3>
        <ul className="mt-8 space-y-4">
          {data.interests.map((interest) => (
            <li key={interest} className="flex items-center gap-3 text-[15px] text-[#5d524a]">
              <span className="h-2 w-2 bg-[#a65d46]" />
              <span>{interest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="mb-10 scroll-mt-28 border border-[#e3dad2] bg-[#f3efeb] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-display text-[30px] text-[#211c19]">
          Let&apos;s start a conversation.
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-[#6f6254]">
          Available for client-facing, coordination, sales support, and business development
          opportunities.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
        <ContactCard
          heading="Email"
          value="madhurima0423@gmail.com"
          href="mailto:madhurima0423@gmail.com"
        />
        <ContactCard heading="Primary Phone" value="+8801622112614" href="tel:+8801622112614" />
        <ContactCard
          heading="Alternate Phone"
          value="+8801521400922"
          href="tel:+8801521400922"
        />
        <ContactCard heading="Location" value={data.location} />
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="mailto:madhurima0423@gmail.com?subject=Career%20Opportunity%20for%20Madhurima%20Das%20Burman"
          className="bg-[#1f1b18] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition hover:opacity-90"
        >
          Send Inquiry
        </a>
      </div>
    </section>
  );
}

function SidebarBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#884530]">
        {title}
      </p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="font-display text-[28px] uppercase tracking-[0.06em] text-[#211c19]">
        {title}
      </h2>
      <div className="h-px flex-1 bg-[#e5ddd6]" />
    </div>
  );
}

function SkillCard({ group, featured }: { group: SkillGroup; featured: boolean }) {
  const baseClass = featured
    ? "border-[#a65d46] bg-[#a65d46] text-white"
    : "border-[#e5ddd6] bg-[#f3efeb] text-[#2a2420]";

  return (
    <article className={`flex min-h-[270px] flex-col justify-between border p-7 ${baseClass}`}>
      <span className={`h-3 w-3 rounded-full ${featured ? "bg-white" : "bg-[#a65d46]"}`} />
      <div>
        <h3 className="text-xl font-semibold">{group.title}</h3>
        <ul
          className={`mt-4 space-y-2 text-sm leading-7 ${
            featured ? "text-white/90" : "text-[#5d524a]"
          }`}
        >
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ContactCard({
  heading,
  value,
  href
}: {
  heading: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#884530]">
        {heading}
      </p>
      <p className="mt-3 text-[15px] leading-7 text-[#2a2420]">{value}</p>
    </>
  );

  if (href) {
    return (
      <a className="border-b border-[#2a2420] py-3 hover:text-[#884530]" href={href}>
        {content}
      </a>
    );
  }

  return <div className="border-b border-[#2a2420] py-3">{content}</div>;
}

function ContactLine({ item }: { item: ContactItem }) {
  const inner = <span className="text-sm leading-6 text-[#5d524a]">{item.value}</span>;

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#884530]">
        {item.label}
      </p>
      {item.href ? (
        <a className="mt-1 block break-all hover:text-[#884530]" href={item.href}>
          {inner}
        </a>
      ) : (
        <div className="mt-1">{inner}</div>
      )}
    </div>
  );
}

export default App;
