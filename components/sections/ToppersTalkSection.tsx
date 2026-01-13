import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  FileText,
  AlertTriangle,
  Table,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Target,
  Clock,
  ExternalLink,
  Download,
  TrendingUp,
} from "lucide-react";

export default function Component() {
  const [activeSlide, setActiveSlide] = useState(0);

  const mockScores = [
    {
      name: "Hash IPMAT 14",
      score: "211/360",
      date: "19th February 2026",
      rank: "Rank 7",
      img: "/HashIPMAT14.jpeg",
    },
    {
      name: "Hash IPMAT 20",
      score: "184/360",
      date: "7th March 26",
      rank: "Rank 11",
      img: "/HashIPMAT20.jpeg",
    },
    {
      name: "Hash IPMAT 19",
      score: "186/360",
      date: "13 April 2025",
      rank: "Rank 5 ",
      img: "/HashIPMAT19.jpeg",
    },
    {
      name: "Hash IPMAT 17",
      score: "226/360",
      date: "12th April 2025",
      rank: "Rank 3",
      img: "/HashIPMAT17.jpeg",
    },
  ];

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % mockScores.length);
  const prevSlide = () =>
    setActiveSlide(
      (prev) => (prev - 1 + mockScores.length) % mockScores.length
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-16 pb-20">
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-16">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Trophy className="w-64 h-64 text-[#f9a01b]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-[#f9a01b]">
                <img
                  // src="/air1commandcenter/air1.png"
                  src="/air1.png"
                  alt="AIR 1"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#f9a01b] text-white font-black px-4 py-2 rounded-xl text-xl">
                AIR 1
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f9a01b] text-[#f9a01b] text-xs font-bold mb-6">
                <Star className="w-3 h-3 fill-current" /> SUCCESS STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                The Blueprint ofs <span className="text-[#f9a01b]">AIR 1.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                "Becoming AIR 1 wasn't about studying 18 hours a day. It was
                about solving the right problems, failing in mocks early, and
                keeping a clinical record of my progress."
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700">
                  <Clock className="w-4 h-4 text-[#f9a01b]" /> 18 Months Prep
                </div>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700">
                  <Target className="w-4 h-4 text-[#f9a01b]" /> 150+ Mocks
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Hardest Nut to Crack
              </h3>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-500/30 transition-all">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">01.</span> Data Interpretation
              </h4>
              <img
                src="/try-yourself.png"
                alt="Try Yourself"
                className="w-full h-auto rounded-lg blur-sm mb-6 cursor-pointer"
                onClick={() => window.open("/try-yourself.png", "_blank")}
              />
              <button
                onClick={() => window.open("/try-yourself.png", "_blank")}
                className="text-[#f9a01b] text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Try Yourself <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  The Scoreboard
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-800">
              {mockScores.map((score, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === activeSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <img
                    src={score.img}
                    alt={score.name}
                    className="w-full h-full object-cover brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-8 flex flex-col justify-end">
                    <span className="text-green-400 text-xs font-black tracking-widest uppercase mb-1">
                      {score.date}
                    </span>
                    <h4 className="text-2xl font-black text-white mb-2">
                      {score.name}
                    </h4>
                    <div className="flex items-end justify-between">
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase">
                            Score
                          </p>
                          <p className="text-xl font-black text-[#f9a01b]">
                            {score.score}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase">
                            Rank
                          </p>
                          <p className="text-xl font-black text-white">
                            {score.rank}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            "https://study.ipmcareer.com/mock/81568d95-7c5f-4b6b-bb38-727cdb7cdf48",
                            "_blank"
                          )
                        }
                        className="text-[#f9a01b] text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
                      >
                        Challenge yourself <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {mockScores.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeSlide
                      ? "w-8 bg-orange-500"
                      : "w-1.5 bg-slate-700 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="bg-slate-900/30 rounded-3xl border-2 border-dashed border-slate-800 p-12 text-center">
          <h3 className="text-3xl font-black mb-2 text-white">
            Download My Study Assets
          </h3>
          <p className="text-slate-500 mb-10">
            The exact files I used to maintain consistency and track my
            progress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Wn7z6unSpNQSV7U0dK_mO33zYcGE46qi/view?usp=sharing",
                  "_blank"
                )
              }
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 transition-all text-left flex items-center gap-6 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[#f9a01b] group-hover:bg-[#f9a01b] group-hover:text-black transition-all">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-lg text-white">
                  500+ Solved MCQs
                </h4>
                <p className="text-slate-500 text-sm">
                  Every question I solved in one PDF.
                </p>
              </div>
              <Download className="w-6 h-6 text-slate-700 group-hover:text-orange-500 transition-colors" />
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/10RMRmi6gtHT5xQIiTvRPadeVTS2tedcI1BRALMKFztQ/edit?gid=684469844#gid=684469844",
                  "_blank"
                )
              }
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500 transition-all text-left flex items-center gap-6 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <Table className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-lg text-white">
                  Akshat Attri's Daily Timetable
                </h4>
                <p className="text-slate-500 text-sm">
                  Live Excel sheet with hour-by-hour logs.
                </p>
              </div>
              <ExternalLink className="w-6 h-6 text-slate-700 group-hover:text-green-500 transition-colors" />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center text-center py-10">
          <Quote className="w-12 h-12 text-[#f9a01b] mb-6" />
          <h2 className="text-3xl font-medium italic text-slate-300 max-w-4xl leading-relaxed">
            "The distance between AIR 1000 and AIR 1 is not knowledge, it is the
            quality of your analysis of what you don't know."
          </h2>
          <div className="mt-8">
            <p className="text-white font-black text-lg">Nikhilesh Sanka</p>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
              IIM Indore '28
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
