import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Threat Prevention in Action
          </h2>
          <p className="text-primary-100 text-lg">
            Watch how our AI-powered platform detects and prevents sophisticated cyber attacks in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Thumbnail overlay (shown when video is not playing) */}
          {!isPlaying && (
            <div className="absolute inset-0 z-10">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button
                  onClick={togglePlayPause}
                  className="p-5 bg-accent-500 hover:bg-accent-600 rounded-full text-white transition-colors duration-200 transform hover:scale-105"
                  aria-label="Play video"
                >
                  <Play className="h-10 w-10" />
                </button>
              </div>
            </div>
          )}

          {/* Actual video */}
          <div className="aspect-w-16 aspect-h-9 relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              {/* Using a placeholder video URL - in a real application, replace with actual video */}
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/pause button when video is playing */}
            {isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 p-3 bg-accent-500 hover:bg-accent-600 rounded-full text-white z-20 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Pause video"
              >
                <Pause className="h-6 w-6" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;