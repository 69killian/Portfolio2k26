import MarqueeText from "@/components/MarqueeText";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#111111] rounded-b-[20px] text-white font-[Inter] relative">
        <Navbar />

        {/* Contenu principal centré */}
        <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24">
          <div className="max-w-3xl w-full">
            <h1 className="text-5xl md:text-5xl font-light tracking-tight leading-[1.1] mb-12">
              When design
              <br />
              meets code,
              <br />
              interfaces become alive.
            </h1>

            <div className="flex items-center gap-4 mb-0">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/logo.jpg"
                  alt="Killian Logo"
                  width={58}
                  height={58}
                  className="opacity-90 rounded-full"
                />
              </div>
              <p className="text-xl font-light leading-relaxed max-w-2xl mb-0">
                Hi 👋, I&apos;m Killian Marty — a Front-End Developer with 3
                years of experience building sleek, performant web interfaces.
              </p>
            </div>
            <br />

            <p className="text-md text-white/60 font-light leading-relaxed mb-8 max-w-2xl">
              I share my journey and projects openly on X and LinkedIn, turning
              ideas into concrete apps that other developers can actually use.
            </p>

            <p className="text-md text-white/60 font-light leading-relaxed">
              Here are some of the technologies I&apos;ve worked with.
            </p>
            <MarqueeText className="mb-0" />

            <Separator className="mb-8 mt-0" />

            <p className="text-xl font-light mb-8">
              Currently, I&apos;m working as:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icons/ost.jpg"
                    alt="OST Logo"
                    width={38}
                    height={38}
                    className="opacity-90 rounded-md"
                  />
                </div>
                <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                  Founder Front{" "}
                  <span className="text-white">@OpenSource Together (OST)</span>{" "}
                  → shaping collaborative open-source projects.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icons/gitify.png"
                    alt="Gitify Logo"
                    width={38}
                    height={38}
                    className="opacity-90 rounded-md"
                  />
                </div>
                <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                  Founder <span className="text-white">@Gitify</span> → a
                  micro-SaaS that gamifies GitHub for developers.
                </p>
              </div>
            </div>

            <Separator className="mb-8 mt-0" />

            {/* Section numérotée */}
            <div className="mt-0">
              <h2 className="text-3xl font-light mb-4">Projects</h2>
              <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl mb-8">
                A glimpse into the projects I’ve brought to life.
              </p>
              <div className="space-y-12">
                <div>
                  <Image
                    src="/ost-project.jpg"
                    alt="OST Project Preview"
                    width={1920}
                    height={1080}
                    className="w-full h-[400px] object-cover rounded-xl mb-4 border border-white/20"
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light mb-2">
                        OpenSource Together
                      </h3>
                      <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                        A platform connecting developers and designers on open
                        source projects, enabling world-changing collaboration.
                        Find contributors to bring your ambitious projects to
                        life.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-white flex items-center gap-1 ml-4"
                    >
                      <span className="underline hover:text-white/60">
                        View
                      </span>
                      <span className="inline-block no-underline">↗</span>
                    </a>
                  </div>
                </div>

                <div>
                  <video
                    src="/videos/gitify.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl h-[400px] object-cover mb-4 border border-white/20"
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light mb-2">Gitify</h3>
                      <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                        An innovative platform that gamifies open source
                        contributions. Take on challenges, earn rewards, and
                        make GitHub more engaging.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-white flex items-center gap-1 ml-4"
                    >
                      <span className="underline hover:text-white/60">
                        View
                      </span>
                      <span className="inline-block no-underline">↗</span>
                    </a>
                  </div>
                </div>

                <div>
                  <video
                    src="/videos/paste.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl h-[400px] object-cover mb-4 border border-white/20"
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light mb-2">Paste UI</h3>
                      <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                        A modern and flexible component library for creating
                        elegant dashboards and sophisticated user interfaces.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-white flex items-center gap-1 ml-4"
                    >
                      <span className="underline hover:text-white/60">
                        View
                      </span>
                      <span className="inline-block no-underline">↗</span>
                    </a>
                  </div>
                </div>

                <div>
                  <video
                    src="/videos/wallify.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl h-[400px] object-cover mb-4 border border-white/20"
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light mb-2">Wallify</h3>
                      <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                        The Pinterest for natural wallpapers. An elegant Framer
                        design for a SaaS-focused image sharing platform
                        dedicated to natural wallpapers.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-white flex items-center gap-1 ml-4"
                    >
                      <span className="underline hover:text-white/60">
                        View
                      </span>
                      <span className="inline-block no-underline">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8 mt-12" />

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-light mb-4">Curriculum Vitae</h2>
                <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl">
                  Interested in my professional journey? Download my CV to learn
                  more about my experience and skills.
                </p>
              </div>
              <a href="#" className="text-white flex items-center gap-1 ml-4">
                <span className="underline hover:text-white/60">
                  Download CV
                </span>
                <span className="inline-block no-underline">↗</span>
              </a>
            </div>

            <Separator className="mb-8 mt-12" />

            <div className="mb-10">
              <h2 className="text-3xl font-light mb-4">Let&apos;s Connect</h2>
              <p className="text-md text-white/60 font-light leading-relaxed max-w-2xl mb-6">
                Have a project in mind or just want to chat? Feel free to reach
                out. I&apos;m always open to discussing new opportunities and
                creative collaborations.
              </p>
              <div className="flex gap-6">
                <a
                  href="mailto:killian.codes69@gmail.com"
                  className="text-white flex items-center gap-1"
                >
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={15}
                    height={15}
                  />
                  <span className="underline hover:text-white/60">Email</span>
                  <span className="inline-block no-underline">↗</span>
                </a>
                <a
                  href="https://x.com/killiancodes69"
                  className="text-white flex items-center gap-1"
                >
                  <Image
                    src="/icons/x.svg"
                    alt="Twitter"
                    width={15}
                    height={15}
                  />
                  <span className="underline hover:text-white/60">Twitter</span>
                  <span className="inline-block no-underline">↗</span>
                </a>
                <a
                  href="https://github.com/69killian"
                  className="text-white flex items-center gap-1"
                >
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={15}
                    height={15}
                  />
                  <span className="underline hover:text-white/60">GitHub</span>
                  <span className="inline-block no-underline">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/killianmarty"
                  className="text-white flex items-center gap-1"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={15}
                    height={15}
                  />
                  <span className="underline hover:text-white/60">
                    LinkedIn
                  </span>
                  <span className="inline-block no-underline">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full text-[#111111] py-8 mt-12 mb-10">
        <div className="w-full px-12 md:px-24">
          {/* Navigation et liens sociaux */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Navigation */}
            <div>
              <Image
                src="/icons/kmlogotestnoir.png"
                alt="KillianCodes"
                width={50}
                height={50}
                className="object-cover w-15 h-5 ml-[-18px]"
              />
              <h2 className="text-3xl font-light mb-4">KillianCodes.</h2>
              <nav className="flex gap-6 mb-6 md:mb-0">
                <a
                  href="#"
                  className="text-sm hover:text-[#111111]/80 hover:transition-all duration-300"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="text-sm hover:text-[#111111]/80 hover:transition-all duration-300"
                >
                  Projects
                </a>
                <a
                  href="#cv"
                  className="text-sm hover:text-[#111111]/80 hover:transition-all duration-300"
                >
                  CV
                </a>
                <a
                  href="#contact"
                  className="text-sm hover:text-[#111111]/80 hover:transition-all duration-300"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Liens sociaux */}
            <div className="flex gap-6">
              <a
                href="mailto:killian.codes69@gmail.com"
                className="text-sm hover:text-[#111111] flex items-center gap-1"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={15}
                  height={15}
                  className="invert hover:opacity-70 transition-all duration-300"
                />
              </a>
              <a
                href="https://x.com/killiancodes69"
                className="text-sm hover:text-[#111111] flex items-center gap-1"
              >
                <Image
                  src="/icons/x.svg"
                  alt="Twitter"
                  width={15}
                  height={15}
                  className="invert hover:opacity-70 transition-all duration-300"
                />
              </a>
              <a
                href="https://github.com/69killian"
                className="text-sm hover:text-[#111111] flex items-center gap-1"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={15}
                  height={15}
                  className="invert hover:opacity-70 transition-all duration-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/killianmarty"
                className="text-sm hover:text-[#111111] flex items-center gap-1"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={15}
                  height={15}
                  className="invert hover:opacity-70 transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* Séparateur */}
          <div className="h-[1px] bg-[#111111]/10 w-full mb-8" />

          {/* Copyright et mentions légales */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              © 2026 KillianCodes. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-[#111111]/80 hover:transition-all duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-[#111111]/80 hover:transition-all duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
