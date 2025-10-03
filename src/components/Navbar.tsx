import Separator from "./Separator";

export default function Navbar() {
  return (
    <div className="fixed top-12 left-12 md:top-82 md:left-24">
      <div className="max-w-[180px]">
        <div className="text-md text-white/60 font-light">KillianCodes</div>
        <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
          Projects
        </div>
        <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
          Curriculum
        </div>
        <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
          Contact
        </div>
        <Separator className="mt-2 mb-2" />
        <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300 mt-0">
          Overview
        </div>
      </div>
    </div>
  );
}
