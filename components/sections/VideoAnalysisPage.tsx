import { useState } from "react";
import { Play, X } from "lucide-react";

export default function Component() {
  const videos = [
    {
      id: 1,
      title: "How to clear quants QA (SA) cut off in 10 mins",
      url: "https://youtu.be/Q7lS5zdaOKM?si=lZneP57xGJCi6HfL",
      description:
        "Quick strategies to clear quantitative aptitude cutoffs efficiently",
    },
    {
      id: 2,
      title: "Introduction to Numbers",
      url: "https://youtu.be/raKEb6Ax4WE",
      description: "Learn the fundamentals of number systems and concepts",
    },
    {
      id: 3,
      title: "Introduction to Averages",
      url: "https://youtu.be/bBhzPsinUYY",
      description: "Master the basics of averages and their applications",
    },
    {
      id: 4,
      title: "Reading Comprehension (Tones)",
      url: "https://youtu.be/CDEWTaMInUA",
      description: "Understanding tones and nuances in reading comprehension",
    },
    {
      id: 5,
      title: "Root Words",
      url: "https://youtu.be/wXakzp9DQYo",
      description: "Build vocabulary through understanding root words",
    },
    {
      id: 6,
      title: "IPMAT 2023 Solutions Part 1",
      url: "https://youtu.be/COMWsh7rIE0",
      description:
        "IPMAT Indore 2023 QA SA Solutions || IPMAT 2023 Solutions Part 1",
    },
    {
      id: 7,
      title: "IPMAT 2023 Solutions Part 2",
      url: "https://youtu.be/OpngTNZGUw8",
      description:
        "IPMAT Indore 2023 QA MCQ Solutions || IPMAT 2023 Solutions Part 2 (A)",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="text-center space-y-4 mb-12">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-purple-500/30 shadow-sm text-xs font-semibold uppercase tracking-widest text-purple-400">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Video Analysis Hub
          </div> */}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-2">
            Master Your <span className="text-purple-400">Preparation</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Access comprehensive video analysis sessions to boost your
            preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const videoId = extractVideoId(video.url);
            const thumbnailUrl = videoId
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23823588" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="white"%3EVideo%3C/text%3E%3C/svg%3E';

            return (
              <div
                key={video.id}
                className="relative group rounded-xl border-2 border-gray-700 bg-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 overflow-hidden"
                style={{
                  animationDelay: `${index * 40}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                }}
              >
                <div
                  className="relative aspect-video overflow-hidden bg-gray-900 cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23823588" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="white"%3EVideo%3C/text%3E%3C/svg%3E';
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play
                        className="w-8 h-8 text-purple-900 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-gray-800 mb-4">
              <Play className="w-16 h-16 text-purple-400" />
            </div>
            <p className="text-xl font-semibold text-white mb-2">
              No videos available
            </p>
            <p className="text-gray-400">
              Check back soon for new analysis sessions
            </p>
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-900/90 hover:bg-gray-700 text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">
                {selectedVideo.title}
              </h2>
              {selectedVideo.description && (
                <p className="text-sm text-gray-400 mt-1">
                  {selectedVideo.description}
                </p>
              )}
            </div>

            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${extractVideoId(
                  selectedVideo.url
                )}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
