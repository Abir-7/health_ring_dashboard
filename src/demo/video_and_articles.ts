export interface TArticle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TVideo {
  id: string;
  title: string;
  description: string;
  image: string;
  videoSrc: string;
}

export const articles: TArticle[] = [
  {
    id: "1",
    title: "How to Optimize Images for Web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia. Praesentium, officiis quis. Illum repellendus sunt iusto...",
    image:
      "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
  },
  {
    id: "2",
    title: "React Best Practices",
    description:
      "Learn the best practices for building scalable React applications...",
    image:
      "https://images.unsplash.com/photo-1581091012184-3f2957d5c90e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Tailwind Tips and Tricks",
    description:
      "A collection of tips and tricks to speed up your Tailwind workflow...",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
  },
];

export const demoVideos: TVideo[] = [
  {
    id: "1",
    title: "Big Buck Bunny",
    description:
      "A short animated film featuring a giant rabbit and lots of fun adventures.",
    image:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "2",
    title: "React Basics Tutorial",
    description:
      "Learn the fundamentals of React including components, props, and state management.",
    image:
      "https://images.unsplash.com/photo-1581091012184-3f2957d5c90e?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: "3",
    title: "Tailwind CSS Tips",
    description:
      "A short guide to improving your Tailwind workflow and utility-first design.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: "4",
    title: "HLS Streaming Demo",
    description:
      "Example of streaming HLS video with audio using a public test URL.",
    image:
      "https://images.unsplash.com/photo-1581090700227-c8f2c5b93317?auto=format&fit=crop&w=800&q=80",
    videoSrc: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
];
