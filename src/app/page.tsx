import MarqueeText from "@/components/MarqueeText";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-[Inter] relative">
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
              Hi 👋, I&apos;m Killian Marty — a Front-End Developer with 3 years
              of experience building sleek, performant web interfaces.
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
                <span className="text-white">@OpenSource Together (OST)</span> →
                shaping collaborative open-source projects.
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
                    <span className="underline hover:text-white/60">View</span>
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
                      contributions. Take on challenges, earn rewards, and make
                      GitHub more engaging.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-white flex items-center gap-1 ml-4"
                  >
                    <span className="underline hover:text-white/60">View</span>
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
                    <span className="underline hover:text-white/60">View</span>
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
                      design for a SaaS-focused image sharing platform dedicated
                      to natural wallpapers.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-white flex items-center gap-1 ml-4"
                  >
                    <span className="underline hover:text-white/60">View</span>
                    <span className="inline-block no-underline">↗</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 font-light">
              <span className="text-white/60">Try our research </span>
              <a href="#" className="text-white underline">
                preview
              </a>
              <span className="text-white/60">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
