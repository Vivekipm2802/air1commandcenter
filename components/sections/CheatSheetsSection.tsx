import React from 'react';
import { Zap, Book, ShieldCheck, Scale, Globe, Download, Eye } from 'lucide-react';

export const CheatSheetsSection: React.FC = () => {
  const sheets = [
    { 
      title: "Quantitative Aptitude", 
      icon: <Scale />, 
      color: "text-blue-400", 
      bg: "bg-blue-400/10", 
      count: "150+ Maxims",
      viewUrl: "https://drive.google.com/file/d/1cxCqiNXtMCf9vgwfScMvUequighPR1Yi/view",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1cxCqiNXtMCf9vgwfScMvUequighPR1Yi"
    },
    { 
      title: "Verbal Ability", 
      icon: <ShieldCheck />, 
      color: "text-purple-400", 
      bg: "bg-purple-400/10", 
      count: "80+ Key Articles",
      viewUrl: "https://drive.google.com/file/d/1VBafb7mZ37voc5Lx3yK80kbo68QcGcCZ/view",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1VBafb7mZ37voc5Lx3yK80kbo68QcGcCZ"
    },
    { 
      title: "Logical Reasoning Patterns", 
      icon: <Zap />, 
      color: "text-[#f9a01b]", 
      bg: "bg-orange-400/10", 
      count: "25+ Strategies",
      viewUrl: "https://drive.google.com/file/d/1lNQxcfTKzYQ2bX3wuCrD1KTghkD7CfmF/view",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1lNQxcfTKzYQ2bX3wuCrD1KTghkD7CfmF"
    },
    { 
      title: "Data Interpretation", 
      icon: <Book />, 
      color: "text-green-400", 
      bg: "bg-green-400/10", 
      count: "500+ Words",
      viewUrl: "https://drive.google.com/file/d/1dU-U44riXDA9TvLnoeMSQnPwKKUHV2j0/view",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1dU-U44riXDA9TvLnoeMSQnPwKKUHV2j0"
    },
  ];


  const downloadPDF = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_self"); // forces download
  };

  const viewPDF = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank"); // opens online
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sheets.map((sheet, i) => (
          <div 
            key={i} 
            className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-all"
          >
            <div className={`w-14 h-14 rounded-xl ${sheet.bg} ${sheet.color} flex items-center justify-center shrink-0`}>
              {React.cloneElement(sheet.icon as React.ReactElement, { className: "w-7 h-7" })}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold group-hover:text-[#f9a01b] transition-colors">{sheet.title}</h4>
              <p className="text-sm text-slate-500">{sheet.count} included</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => viewPDF(sheet.viewUrl, e)}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-400 transition-all"
                title="View PDF"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => downloadPDF(sheet.downloadUrl, e)}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#f9a01b] hover:border-[#f9a01b] hover:text-slate-900 transition-all"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};