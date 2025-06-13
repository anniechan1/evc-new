"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  caption: string
}

export default function VideoPlayer({ src, poster, caption }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    setIsPlaying(true)
    // Small timeout to ensure state updates before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
          setIsPlaying(false)
        })
      }
    }, 50)
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg mx-auto">
        {!isPlaying ? (
          <div
            className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer group"
            onClick={handlePlayClick}
            role="button"
            aria-label="Play video"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handlePlayClick()
              }
            }}
          >
            <img
              src={poster}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-white/30 backdrop-blur-sm rounded-full p-4 transform transition-transform group-hover:scale-110">
              <Play className="w-10 h-10 text-white fill-white" />
            </div>
            <span className="sr-only">Play video about coffee processing</span>
          </div>
        ) : (
          <video ref={videoRef} controls className="w-full h-full object-cover" onEnded={() => setIsPlaying(false)}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>


      <p
        className="text-center mt-4 text-[#725C3A]/80 text-sm sm:text-base"
        style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
      >
        {caption}
      </p>
    </div>
  )
}
