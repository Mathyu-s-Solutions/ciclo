import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative circular fragments */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top left circular fragments */}
        <div className="absolute -top-64 -left-64">
          <div className="w-[600px] h-[600px] border-4 border-blue-400 rounded-full opacity-35"></div>
        </div>
        <div className="absolute -top-56 -left-56">
          <div className="w-[500px] h-[500px] border-4 border-blue-400 rounded-full opacity-40"></div>
        </div>
        {/* Bottom right circular fragments */}
        <div className="absolute -bottom-64 -right-64">
          <div className="w-[600px] h-[600px] border-4 border-blue-400 rounded-full opacity-35"></div>
        </div>
        <div className="absolute -bottom-56 -right-56">
          <div className="w-[500px] h-[500px] border-4 border-blue-400 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Header Component */}
      <Header />

      {/* Hero Component */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
