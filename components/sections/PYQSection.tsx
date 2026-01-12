import React, { useState } from "react";
import { Download, ChevronRight, FileText, BookOpen, Star } from "lucide-react";

export default function Component() {
  // PYQ Topic Wise
  const topicWiseMaterials = [
    {
      id: "1",
      title: "PYQ Quantitative Ability",
      driveLink:
        "https://drive.google.com/file/d/15yQXr-LgjmIVukMUvvbqk1RRAo4sJKnL/view",
      description:
        "Topic-wise previous year questions for structured practice.",
      featured: true,
    },
    {
      id: "2",
      title: "PYQ Verbal Ability",
      driveLink:
        "https://drive.google.com/file/d/1aQY6qKMzllw8G1CPn2XtMOyRYBzN3d1S/view",
      description:
        "Topic-wise previous year questions for structured practice.",
      featured: true,
    },
  ];

  // PYQ Year Wise
  const yearWiseMaterials = [
    {
      id: "3",
      title: "IPMAT 2019 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1UTkGWTwvn1-HuGIgCbPcdbZjb_K3HNSI/view?usp=sharing",
      description:
        "Official IPMAT 2019 question paper with complete solutions.",
      year: 2019,
    },
    {
      id: "4",
      title: "IPMAT 2020 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1SH1ZHac4uOBlGO_w8JwN9HV3BbVVzonf/view?usp=sharing",
      description:
        "Official IPMAT 2020 question paper with complete solutions.",
      year: 2020,
    },
    {
      id: "5",
      title: "IPMAT 2021 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1HUaaJ8gNKH6RrGF5LM0ng0B0L-6u_N8I/view?usp=sharing",
      description:
        "Official IPMAT 2021 question paper with complete solutions.",
      year: 2021,
    },
    {
      id: "6",
      title: "IPMAT Indore 2022 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1OpEXKBEFOXT32-5gWknPcEQb2G2fuZID/view?usp=sharing",
      description:
        "Official IPMAT 2022 question paper with complete solutions.",
      year: 2022,
    },
    {
      id: "7",
      title: "IPMAT Indore 2023 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1EGRTSS-pFy1hrFCqhw79CDeLV875VspW/view?usp=sharing",
      description:
        "Official IPMAT 2023 question paper with complete solutions.",
      year: 2023,
    },
    {
      id: "8",
      title: "IPMAT Indore 2024 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1iWd2MAV0JPN0qV3auhzE-XWhvjiqMO_I/view?usp=sharing",
      description:
        "Official IPMAT 2024 question paper with complete solutions.",
      year: 2024,
    },
    {
      id: "9",
      title: "IPMAT Indore 2025 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1nxcpovN2FfWT3bAa8LvU-djipeZcVhPw/view?usp=sharing",
      description:
        "Official IPMAT 2025 question paper with complete solutions.",
      year: 2025,
    },
  ];

  // Exam tabs
  const examTabs = [
    { id: "ipmat_indore", label: "IPMAT Indore" },
    { id: "ipmat_rohtak", label: "IPMAT Rohtak" },
    { id: "jipmat", label: "JIPMAT" },
    { id: "iim_b_ug", label: "IIM B UG" },
  ];

  const [activeExamTab, setActiveExamTab] = useState("ipmat_indore");

  const openDriveLink = (driveLink: string) => {
    window.open(driveLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Exam Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4">
          {examTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveExamTab(tab.id)}
              className={`relative text-sm font-semibold transition-colors ${
                activeExamTab === tab.id
                  ? "text-[#f9a01b] border-b-2 border-[#f9a01b]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeExamTab === "ipmat_indore" ? (
          <>
            {/* PYQ Topic Wise Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#823588]" />
                PYQ – Topic Wise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicWiseMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                        <FileText className="w-6 h-6" />
                      </div>
                      {material.featured && (
                        <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-2 py-1 rounded flex items-center gap-1">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {material.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      {material.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download
                      </button>
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PYQ Year Wise Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#823588]" />
                PYQ – Year Wise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearWiseMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        UG Exam
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {material.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      {material.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download
                      </button>
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-slate-400">
              PYQ materials for this exam will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
