// import { useState, useEffect } from "react";
// import { colors, fonts } from "../styles/Theme";
// import Button from "../styles/Button";


// const MAIN_TOKEN = "IGAALhk8PJCBJBZAFlmNnlCOWg2OXgxS0lJOXcySE9kUUc4Q3FIQW9UcmM3c2tuNHV4emlNYnd3YzNDS2pPVnVFMlBiSTZAKUktEeEg4YVFOOGp1alY1VVdaaWlrUE9Lb1Y1a0pPR1Bldm9ZAcW1VR0w4RzREaEhad0MtM0I0TG43bwZDZD";

// /* ================================
//    Refresh Instagram Token
// ================================ */
// const refreshInstagramToken = async (oldToken: string) => {
//   try {
//     const res = await fetch(
//       `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldToken}`
//     );

//     const data = await res.json();

//     if (data.access_token) {
//       localStorage.setItem("insta_token", data.access_token);
//       return data.access_token;
//     }

//     return null;
//   } catch {
//     return null;
//   }
// };

// const Gallery = () => {

//   const [token, setToken] = useState(
//     localStorage.getItem("insta_token") || MAIN_TOKEN
//   );

//   const [instagramPosts, setInstagramPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   /* ================================
//      Fetch Posts + Auto Refresh
//   ================================= */
//   useEffect(() => {
//     if (!token) return;

//     const fetchInstagramPosts = async (activeToken = token) => {
//       try {
//         setLoading(true);

//         let response = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${activeToken}`
//         );

//         /* =============================
//            TOKEN EXPIRED → REFRESH HERE
//         ============================== */
//         if (!response.ok) {
//           console.warn("Token expired. Refreshing...");

//           const newToken = await refreshInstagramToken(activeToken);

//           if (newToken) {
//             setToken(newToken);
//             return fetchInstagramPosts(newToken);
//           }

//           throw new Error("Token refresh failed");
//         }

//         const data = await response.json();

//         const imagePosts = data.data
//           .filter((post: { media_type: string }) => post.media_type === "IMAGE")
//           .slice(0, 10)
//           .map(
//             (
//               post: { media_url: string; caption: string; permalink: string },
//               index: number
//             ) => ({
//               url: post.media_url,
//               alt: post.caption || `Instagram post ${index + 1}`,
//               title: post.caption || `Instagram post ${index + 1}`,
//               permalink: post.permalink,
//             })
//           );

//         setInstagramPosts(imagePosts);
//         setError(null);
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message);
//         setInstagramPosts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInstagramPosts();
//   }, [token]);



//   const handleImageClick = (permalink: string | URL | undefined) => {
//     if (permalink) {
//       window.open(permalink, "_blank", "noopener,noreferrer");
//     }
//   };

//   const ImageBox = ({ image, classes }: any) => {
//     const [imageLoaded, setImageLoaded] = useState(false);
//     const [imageDimensions, setImageDimensions] = useState({
//       width: 0,
//       height: 0,
//     });

//     const handleImageLoad = (e: any) => {
//       setImageDimensions({
//         width: e.target.naturalWidth,
//         height: e.target.naturalHeight,
//       });
//       setImageLoaded(true);
//     };

//     const getSmartObjectPosition = () => {
//       if (!imageLoaded) return "center";
//       const aspectRatio = imageDimensions.width / imageDimensions.height;

//       if (aspectRatio < 1) return "center 25%";
//       else if (aspectRatio > 1.3) return "center 40%";
//       else return "center 30%";
//     };

//     if (!image || !image.url) {
//       return (
//         <div
//           className={`${classes} bg-gray-200 rounded-2xl flex items-center justify-center`}
//         >
//           <p className="text-gray-500 text-sm">No image</p>
//         </div>
//       );
//     }

//     return (
//       <div
//         className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(71,4,109,0.35)] ring-1 ring-gray-300 ${classes} transition-all duration-300 transform hover:scale-105`}
//         onClick={() => handleImageClick(image.permalink)}
//       >
//         <div className="w-full h-full aspect-[4/3] bg-gray-200">
//           <img
//             src={image.url}
//             alt={image.alt}
//             title="kuttystory theme based baby photostudio"
//             loading="lazy"
//             onLoad={handleImageLoad}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             style={{
//               objectPosition: getSmartObjectPosition(),
//               opacity: imageLoaded ? 1 : 0,
//               transition: "opacity 0.3s ease-in-out",
//             }}
//           />
//           {!imageLoaded && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="animate-pulse bg-gray-300 w-full h-full rounded-2xl"></div>
//             </div>
//           )}
//         </div>

//         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//   <div
//     className="rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
//     style={{ backgroundColor: colors.whites }}
//   >
//     <svg
//       className="h-6 w-6 text-gray-700"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//     </svg>
//   </div>
// </div>

//       </div>
//     );
//   };

//   /* EXACT SAME UI */
//   if (loading) {
//     return (
//       <section
//         id="gallery"
//         className="relative"
//         style={{
//           backgroundColor: colors.cream,
//           fontFamily: fonts.body,
//         }}
//       >
//         <div className="flex justify-center py-20">
//           Loading Instagram posts...
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="gallery"
//       className="relative"
//       style={{
//         backgroundColor: colors.cream,
//         fontFamily: fonts.body,
//       }}
//     >
//      <div className="pb-1 pt-8 sm:pb-12 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2
//               className="text-33xl sm:text-4xl md:text-5xl font-bold mb-6 mt-0 leading-snug"
//               style={{ color: colors.purpledark, fontFamily: fonts.heading }}
//             >
//               Gallery
//             </h2>
//             <p
//               className="text-lg max-w-3xl mx-auto font-medium"
//               style={{ color: colors.purpledark }}
//             >
//               Tiny beginnings, timeless memories — held forever in each photograph
//             </p>
//             {error && (
//               <p className="text-red-600 text-sm mt-2">
//                 Failed to load Instagram posts. Please check your access token.
//               </p>
//             )}
//           </div>

//           {/* GRID LAYOUT */}
//           <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
//             <div className="col-span-3 row-span-2">
//               <ImageBox image={instagramPosts[0] || {}} classes="bg-orange-200 h-80" />
//             </div>
//             <div className="col-span-4">
//               <ImageBox image={instagramPosts[1] || {}} classes="bg-blue-200 h-36" />
//             </div>
//             <div className="col-span-5 row-span-2">
//               <ImageBox image={instagramPosts[2] || {}} classes="bg-yellow-200 h-80" />
//             </div>
//             <div className="col-span-2">
//               <ImageBox image={instagramPosts[3] || {}} classes="bg-green-200 h-36" />
//             </div>
//             <div className="col-span-2">
//               <ImageBox image={instagramPosts[8] || {}} classes="bg-orange-300 h-36" />
//             </div>
//             <div className="col-span-2">
//               <ImageBox image={instagramPosts[5] || {}} classes="bg-green-300 h-36" />
//             </div>
//             <div className="col-span-3">
//               <ImageBox image={instagramPosts[6] || {}} classes="bg-blue-300 h-36" />
//             </div>
//             <div className="col-span-2">
//               <ImageBox image={instagramPosts[7] || {}} classes="bg-teal-200 h-36" />
//             </div>
//             <div className="col-span-3">
//               <ImageBox image={instagramPosts[4] || {}} classes="bg-pink-200 h-36" />
//             </div>
//             <div className="col-span-2">
//               <ImageBox image={instagramPosts[9] || {}} classes="bg-green-300 h-36" />
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <Button
//               variant="cta"
//               href="https://www.instagram.com/kuttystoryindia/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Join the Journey
//             </Button>
//           </div>
//         </div>
//       </div>   
//        </section>
//   );
// };

// export default Gallery;


import { useState, useEffect } from "react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";

const MAIN_TOKEN = import.meta.env.VITE_INSTAGRAM_TOKEN;
/* ================================
   Token Refresh
================================ */
const refreshInstagramToken = async (oldToken: string) => {
  try {
    const res = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldToken}`
    );
    const data = await res.json();

    if (data.access_token) {
      localStorage.setItem("insta_token", data.access_token);
      return data.access_token;
    }
  } catch (err) {
    console.error("Token refresh failed:", err);
  }
  return null;
};

/* ================================
   Fetch Carousel Children
================================ */
const fetchCarouselImages = async (mediaId: string, token: string) => {
  try {
    const res = await fetch(
      `https://graph.instagram.com/${mediaId}/children?fields=media_url,media_type&access_token=${token}`
    );
    const data = await res.json();

    return (data.data || [])
      .filter((item: any) => item.media_type === "IMAGE")
      .map((item: any) => ({
        url: item.media_url,
        type: "IMAGE",
      }));
  } catch (err) {
    console.error("Carousel fetch error:", err);
    return [];
  }
};

/* ================================
   Process Single Media (like backend)
================================ */
const processMedia = async (media: any, token: string) => {
  if (media.media_type === "IMAGE") {
    return [
      {
        url: media.media_url,
        alt: media.caption || "Instagram Image",
        title: media.caption || "Instagram Image",
        permalink: media.permalink,
      },
    ];
  }

  if (media.media_type === "CAROUSEL_ALBUM") {
    const children = await fetchCarouselImages(media.id, token);

    return children.map((child: any) => ({
      url: child.url,
      alt: media.caption || "Carousel Image",
      title: media.caption || "Carousel Image",
      permalink: media.permalink,
    }));
  }

  return [];
};

const Gallery = () => {
  const [token, setToken] = useState(
    localStorage.getItem("insta_token") || MAIN_TOKEN
  );

  const [instagramPosts, setInstagramPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  /* ================================
     Fetch Instagram Media
  ================================= */
  useEffect(() => {
    if (!token) return;

    const fetchMedia = async (activeToken: string, retry = true) => {
      try {
        setLoading(true);

        let nextUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${activeToken}`;

        let images: any[] = [];
        const LIMIT = 10;

        while (nextUrl && images.length < LIMIT) {
          const res = await fetch(nextUrl);

          /* TOKEN REFRESH */
          if (!res.ok) {
            if (retry) {
              const newToken = await refreshInstagramToken(activeToken);
              if (newToken) {
                setToken(newToken);
                return fetchMedia(newToken, false);
              }
            }
            throw new Error("Token expired");
          }

          const data = await res.json();
          const mediaList = data.data || [];

          /* PROCESS MEDIA IN PARALLEL (like ThreadPoolExecutor) */
          const results = await Promise.all(
            mediaList.map((media: any) => processMedia(media, activeToken))
          );

          for (const result of results) {
            for (const item of result) {
              if (images.length < LIMIT) {
                images.push(item);
              }
            }
          }

          nextUrl = data?.paging?.next || null;
        }

        setInstagramPosts(images);
        setError(null);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
        setInstagramPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia(token);
  }, [token]);

  /* ================================
     UI (UNCHANGED)
  ================================= */

  const handleImageClick = (permalink: string | URL | undefined) => {
    if (permalink) {
      window.open(permalink, "_blank", "noopener,noreferrer");
    }
  };

  const ImageBox = ({ image, classes }: any) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({
      width: 0,
      height: 0,
    });

    const handleImageLoad = (e: any) => {
      setImageDimensions({
        width: e.target.naturalWidth,
        height: e.target.naturalHeight,
      });
      setImageLoaded(true);
    };

    const getSmartObjectPosition = () => {
      if (!imageLoaded) return "center";
      const aspectRatio = imageDimensions.width / imageDimensions.height;

      if (aspectRatio < 1) return "center 25%";
      else if (aspectRatio > 1.3) return "center 40%";
      else return "center 30%";
    };

    if (!image || !image.url) {
      return (
        <div
          className={`${classes} bg-gray-200 rounded-2xl flex items-center justify-center`}
        >
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
            title="kuttystory theme based baby photostudio"
            loading="lazy"
            onLoad={handleImageLoad}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{
              objectPosition: getSmartObjectPosition(),
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section
        id="gallery"
        className="relative"
        style={{ backgroundColor: colors.cream, fontFamily: fonts.body }}
      >
        <div className="flex justify-center py-20">
          Loading Instagram posts...
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="relative"
      style={{ backgroundColor: colors.cream, fontFamily: fonts.body }}
    >
      <div className="pb-1 pt-8 sm:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* YOUR EXISTING UI GRID (UNCHANGED) */}
          <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3 row-span-2">
              <ImageBox image={instagramPosts[0] || {}} classes="h-80" />
            </div>
            <div className="col-span-4">
              <ImageBox image={instagramPosts[1] || {}} classes="h-36" />
            </div>
            <div className="col-span-5 row-span-2">
              <ImageBox image={instagramPosts[2] || {}} classes="h-80" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[3] || {}} classes="h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[8] || {}} classes="h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[5] || {}} classes="h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={instagramPosts[6] || {}} classes="h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[7] || {}} classes="h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={instagramPosts[4] || {}} classes="h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={instagramPosts[9] || {}} classes="h-36" />
            </div>
          </div>

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