import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { Video } from '../types';
import { useSearch } from '../lib/SearchContext';
import { YOUTUBE_LINKS } from '../data/videoLinks';

export default function Media() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const { searchQuery } = useSearch();

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    // Transformation des liens simples en objets exploitables par React
    const formattedVideos = YOUTUBE_LINKS.map((url, index) => {
      const videoId = getYoutubeId(url);
      return {
        id: videoId || `vid-${index}`,
        url: url,
        title: "", // Pas besoin de titre manuel
        description: "",
        category: "all",
        thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ""
      };
    });

    setVideos(formattedVideos);
    setLoading(false);
  }, []);

  // Filtrage basé uniquement sur la recherche (puisque nous n'avons plus de catégories manuelles)
  const filtered = videos.filter(v => 
    v.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto relative min-h-screen"
    >
      {/* Background avec image locale corrigée */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/artiste.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.20] dark:opacity-[0.30] grayscale"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 relative z-10">
        <div>
          <div className="section-label">Médiathèque</div>
          <h1 className="display-title text-5xl md:text-7xl mb-6 italic text-brand-warm-grey">
            Galerie & <span className="text-brand-gold italic">Vidéos</span>
          </h1>
          <p className="text-brand-warm-grey/60 max-w-lg font-light leading-relaxed text-base md:text-lg">
            Retrouvez tous les moments forts en vidéo. Les contenus sont mis à jour directement depuis notre chaîne.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-video bg-white/10 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filtered.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-video rounded-3xl overflow-hidden bg-black group border border-white/5 shadow-2xl"
            >
              {playingVideoId === video.id ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title="YouTube video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button 
                    onClick={() => setPlayingVideoId(null)}
                    className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-brand-gold transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <img 
                    src={video.thumbnailUrl} 
                    alt="Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button 
                    onClick={() => setPlayingVideoId(video.id)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-brand-gold/40">
                        <Play size={28} fill="currentColor" />
                    </div>
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-32 bg-white/5 rounded-[3rem] border-2 border-dashed border-brand-gold/10 relative z-10">
          <p className="text-brand-warm-grey/50 italic uppercase tracking-[0.3em] text-sm font-black">
            {searchQuery ? `Aucun résultat pour "${searchQuery}"` : "Contenu bientôt disponible."}
          </p>
        </div>
      )}
    </motion.div>
  );
}