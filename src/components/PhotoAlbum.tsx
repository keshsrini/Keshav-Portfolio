import { motion } from 'motion/react';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photo {
  url: string;
  title: string;
}

interface Album {
  id: number;
  name: string;
  coverImage: string;
  photoCount: number;
  photos: Photo[];
}

export function PhotoAlbum() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const albums: Album[] = [
    {
      id: 1,
      name: 'AWS Student Community Day - 2025',
      coverImage: '/assets/AWS SCD-2025/Cover Pic.jpg',
      photoCount: 12,
      photos: [
        { url: '/assets/AWS SCD-2025/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/AWS SCD-2025/1758378570488.jpg', title: 'Event Photo 1' },
        { url: '/assets/AWS SCD-2025/1758378570507.jpg', title: 'Event Photo 2' },
        { url: '/assets/AWS SCD-2025/1758378570805.jpg', title: 'Event Photo 3' },
        { url: '/assets/AWS SCD-2025/1758378571358.jpg', title: 'Event Photo 4' },
        { url: '/assets/AWS SCD-2025/1758378573207.jpg', title: 'Event Photo 5' },
        { url: '/assets/AWS SCD-2025/1758378573374.jpg', title: 'Event Photo 6' },
        { url: '/assets/AWS SCD-2025/1758378574472.jpg', title: 'Event Photo 7' },
        { url: '/assets/AWS SCD-2025/1758378574473.jpg', title: 'Event Photo 8' },
        { url: '/assets/AWS SCD-2025/1758382974557.jpg', title: 'Event Photo 9' },
        { url: '/assets/AWS SCD-2025/1758382974939.jpg', title: 'Event Photo 10' },
        { url: '/assets/AWS SCD-2025/1758382975092.jpg', title: 'Event Photo 11' },
      ],
    },
    {
      id: 2,
      name: 'Google AI Cloud Labs Bootcamp',
      coverImage: '/assets/Google AI/cover pic.jpg',
      photoCount: 4,
      photos: [
        { url: '/assets/Google AI/cover pic.jpg', title: 'Cover Photo' },
        { url: '/assets/Google AI/1758894084959.jpg', title: 'Bootcamp Session 1' },
        { url: '/assets/Google AI/1758894086318.jpg', title: 'Bootcamp Session 2' },
        { url: '/assets/Google AI/1758894087448.jpg', title: 'Bootcamp Session 3' },
      ],
    },
    {
      id: 3,
      name: 'TOSS Conference - 2025',
      coverImage: '/assets/TOSS/Cover Pic.jpg',
      photoCount: 6,
      photos: [
        { url: '/assets/TOSS/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/TOSS/1752846114154.jpg', title: 'Conference Photo 1' },
        { url: '/assets/TOSS/1752846130030.jpg', title: 'Conference Photo 2' },
        { url: '/assets/TOSS/1752935085105.jpg', title: 'Conference Photo 3' },
        { url: '/assets/TOSS/1752935085157.jpg', title: 'Conference Photo 4' },
        { url: '/assets/TOSS/1752935086828.jpg', title: 'Conference Photo 5' },
      ],
    },
    {
      id: 4,
      name: 'AWShe Tech Day - 2025',
      coverImage: '/assets/SHETECH/Cover Pic.jpg',
      photoCount: 5,
      photos: [
        { url: '/assets/SHETECH/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/SHETECH/1742043859228.jpg', title: 'Tech Day Photo 1' },
        { url: '/assets/SHETECH/1742043860471.jpg', title: 'Tech Day Photo 2' },
        { url: '/assets/SHETECH/1742043868010.jpg', title: 'Tech Day Photo 3' },
        { url: '/assets/SHETECH/1742043871638.jpg', title: 'Tech Day Photo 4' },
      ],
    },
    {
      id: 5,
      name: 'Hackathons',
      coverImage: '/assets/Hackathon/Cover Pic.jpg',
      photoCount: 6,
      photos: [
        { url: '/assets/Hackathon/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/Hackathon/1740722814260.jpg', title: 'Hackathon Photo 1' },
        { url: '/assets/Hackathon/1740722820001.jpg', title: 'Hackathon Photo 2' },
        { url: '/assets/Hackathon/1740722820544.jpg', title: 'Hackathon Photo 3' },
        { url: '/assets/Hackathon/1740849331930.jpg', title: 'Hackathon Photo 4' },
        { url: '/assets/Hackathon/1740849333811.jpg', title: 'Hackathon Photo 5' },
      ],
    },
    {
      id: 6,
      name: 'AWS re:Invent 2024 Recap - AWS User Group Chennai',
      coverImage: '/assets/AWS reinvent/Cover Pic.jpg',
      photoCount: 6,
      photos: [
        { url: '/assets/AWS reinvent/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/AWS reinvent/1738412983610.jpg', title: 're:Invent Recap Photo 1' },
        { url: '/assets/AWS reinvent/1738412983714.jpg', title: 're:Invent Recap Photo 2' },
        { url: '/assets/AWS reinvent/1738412991409.jpg', title: 're:Invent Recap Photo 3' },
        { url: '/assets/AWS reinvent/1738412991843.jpg', title: 're:Invent Recap Photo 4' },
        { url: '/assets/AWS reinvent/1738412994938.jpg', title: 're:Invent Recap Photo 5' },
      ],
    },
    {
      id: 7,
      name: 'Global AI Community Day',
      coverImage: '/assets/AI Community/Cover Pic.jpg',
      photoCount: 3,
      photos: [
        { url: '/assets/AI Community/Cover Pic.jpg', title: 'Cover Photo' },
        { url: '/assets/AI Community/1736524026212.jpg', title: 'AI Community Day Photo 1' },
        { url: '/assets/AI Community/1736571951453.jpg', title: 'AI Community Day Photo 2' },
      ],
    },
    {
      id: 8,
      name: 'AWS Advocacy Team - 2024',
      coverImage: '/assets/AWS Advocacy Team-2024.jpg',
      photoCount: 1,
      photos: [
        { url: '/assets/AWS Advocacy Team-2024.jpg', title: 'AWS Advocacy Team Photo' },
      ],
    },
  ];

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    setSelectedPhoto(null);
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  return (
    <section id="photos" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-[#E50914]">Photo Gallery</h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">
            {selectedAlbum ? selectedAlbum.name : 'Moments Worth Sharing'}
          </p>
        </motion.div>

        {/* Back Button */}
        {selectedAlbum && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackToAlbums}
            className="flex items-center gap-2 mb-8 px-4 py-2 bg-zinc-900 hover:bg-[#E50914] transition-colors border border-zinc-800 hover:border-[#E50914]"
          >
            <ArrowLeft size={20} />
            Back to Albums
          </motion.button>
        )}

        {/* Albums Grid */}
        {!selectedAlbum && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleAlbumClick(album)}
                className="relative group cursor-pointer overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#E50914] transition-all duration-300 aspect-square"
              >
                <ImageWithFallback
                  src={album.coverImage}
                  alt={album.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Album Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg mb-1 group-hover:text-[#E50914] transition-colors line-clamp-2">
                    {album.name}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {album.photoCount} {album.photoCount === 1 ? 'Photo' : 'Photos'}
                  </p>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(229, 9, 20, 0)',
                      '0 0 30px 0 rgba(229, 9, 20, 0.5)',
                      '0 0 0 0 rgba(229, 9, 20, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Photos Grid (when album is selected) */}
        {selectedAlbum && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedAlbum.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPhoto(index)}
                className="relative group cursor-pointer overflow-hidden aspect-video bg-zinc-900"
              >
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">{photo.title}</h3>
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>

                {/* Red border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E50914] transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedPhoto !== null && selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#E50914] transition-colors"
              >
                <X size={32} />
              </button>

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 50px rgba(229, 9, 20, 0.3)',
                    '0 0 80px rgba(229, 9, 20, 0.6)',
                    '0 0 50px rgba(229, 9, 20, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="border-4 border-[#E50914]"
              >
                <ImageWithFallback
                  src={selectedAlbum.photos[selectedPhoto].url}
                  alt={selectedAlbum.photos[selectedPhoto].title}
                  className="w-full h-auto"
                />
              </motion.div>

              <div className="mt-4 text-center">
                <h3 className="text-2xl mb-2">{selectedAlbum.photos[selectedPhoto].title}</h3>
                <p className="text-[#E50914]">{selectedAlbum.name}</p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto((selectedPhoto - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length);
                  }}
                  className="px-6 py-2 bg-zinc-900 hover:bg-[#E50914] transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto((selectedPhoto + 1) % selectedAlbum.photos.length);
                  }}
                  className="px-6 py-2 bg-zinc-900 hover:bg-[#E50914] transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
