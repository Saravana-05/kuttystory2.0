import React, { useState, useEffect } from "react";
import { colors, fonts } from "../styles/Theme"; // adjust as needed
import Button from "../styles/Button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const INSTAGRAM_ACCESS_TOKEN = 'IGAALhk8PJCBJBZAE1ERHFOcWZAVa1JHa283NkpvcjFWSW1OMk5wN2EteS0yb3ZAXTVhMZAFp1TjJuRWw3TktDVExPbFhfSVRKVE05c0tXRTl6UUE0VHVqRVpITFVFRnIzc3p0Q0lDWExpMTZADYnYxdlI3cE5jWUx1aW9GSjhMOUFiUQZDZD';
  
  // Fetch Instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${INSTAGRAM_ACCESS_TOKEN}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        
        const data = await response.json();
        
        // Filter only images and take first 10 posts
        const imagePosts = data.data
          .filter(post => post.media_type === 'IMAGE')
          .slice(0, 10)
          .map((post, index) => ({
            url: post.media_url,
            alt: post.caption || `Instagram post ${index + 1}`,
            title: post.caption || `Instagram post ${index + 1}`,
            permalink: post.permalink
          }));
        
        setInstagramPosts(imagePosts);
        setError(null);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError(error.message);
        setInstagramPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const handleImageClick = (permalink) => {
    if (permalink) {
      window.open(permalink, '_blank', 'noopener,noreferrer');
    }
  };

  const ImageBox = ({ image, classes }) => {
    if (!image || !image.url) {
      return (
        <div className={`${classes} bg-gray-200 rounded-2xl flex items-center justify-center`}>
          <p className="text-gray-500 text-sm">No image</p>
        </div>
      );
    }
    
    return (
      <div
        className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(71,4,109,0.35)] ring-1 ring-gray-300 ${classes} transition-all duration-300 transform hover:scale-105`}
        onClick={() => handleImageClick(image.permalink)}
      >
        <div className="w-full h-full aspect-[4/3] bg-gray-200">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="rounded-full p-3 shadow-lg"
            style={{ backgroundColor: colors.whites }}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section
        id="gallery"
        className="relative"
        style={{
          backgroundColor: colors.cream,
          fontFamily: fonts.body,
        }}
      >
        <div className="pb-1 pt-8 sm:pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-0 leading-snug"
                style={{ color: colors.purpledark, fontFamily: fonts.heading }}
              >
                Gallery
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto font-medium"
                style={{ color: colors.purpledark }}
              >
                Loading Instagram posts...
              </p>
            </div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="relative"
      style={{
        backgroundColor: colors.cream,
        fontFamily: fonts.body,
      }}
    >
      <div className="pb-1 pt-8 sm:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-0 leading-snug"
              style={{ color: colors.purpledark, fontFamily: fonts.heading }}
            >
              Gallery
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto font-medium"
              style={{ color: colors.purpledark }}
            >
              Tiny beginnings, timeless memories — held forever in each
              photograph
            </p>
            {error && (
              <p className="text-red-600 text-sm mt-2">
                Failed to load Instagram posts. Please check your access token.
              </p>
            )}
          </div>

          {/* Grid Layout - Same as original */}
          <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3 row-span-2">
              <ImageBox image={instagramPosts[0] || {}} classes="bg-orange-200 h-80" />
            </div>
            <div className="col-span-4">
              <ImageBox image={instagramPosts[1] || {}} classes="bg-blue-200 h-36" />
            </div>
            <div className="col-span-5 row-span-2">
              <ImageBox image={instagramPosts[2] || {}} classes="bg-yellow-200 h-80" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[3] || {}} classes="bg-green-200 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[8] || {}} classes="bg-orange-300 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[5] || {}} classes="bg-green-300 h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={instagramPosts[6] || {}} classes="bg-blue-300 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[7] || {}} classes="bg-teal-200 h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={instagramPosts[4] || {}} classes="bg-pink-200 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[9] || {}} classes="bg-green-300 h-36" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              variant="cta"
              href="https://www.instagram.com/kuttystoryindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;