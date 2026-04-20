// All portfolio projects in display order.
// source: "youtube" | "drive"
// sourceId: YouTube video ID or Google Drive file ID
//
// IMPORTANT for Drive videos:
// Each Drive file must be shared as "Anyone with the link can view"
// otherwise the embed will show a "permission denied" error.

export const projects = [
  {
    title: "A Place to Itself",
    category: "Short Film — Documentary",
    role: "Editor",
    source: "drive",
    sourceId: "1QrS5Q5dz2ih9lD9UMDIUZBqO21vO4-D0",
  },
  {
    title: "Tohfa",
    category: "Short Film — Fiction",
    role: "Editor",
    note: "Official selection — Indian Film Festival Stuttgart & ImagineIndia Film Festival, Madrid 2025",
    source: "drive",
    sourceId: "16yKSezQpg7js-B9om9LE6IDM4MSw2WLO",
  },
  {
    title: "Ghutan",
    category: "Short Film — Fiction",
    role: "Editor",
    source: "youtube",
    sourceId: "-3UYGNs8FnQ",
  },
  {
    title: "Next to You",
    category: "Short Film — Fiction",
    role: "Editor & Director",
    source: "youtube",
    sourceId: "j6Q4l510Bbw",
  },
  {
    title: "So Mini Things by Aiyyo Shraddha",
    category: "Stand-up Comedy Special",
    role: "Offline Editor & On-Location Editor",
    source: "youtube",
    sourceId: "F30y5bdYOE0",
  },
  {
    title: "M.I.A. @ WEEKENDER",
    category: "Music Video",
    role: "Editor",
    source: "drive",
    sourceId: "1tmaZtJJrSl4TxOWizt8VwN9iPDDpi8z9",
  },
  {
    title: "Kathakar: Mahashivratri Special",
    category: "Music Video — OMTV App",
    role: "Editor",
    source: "drive",
    sourceId: "1DREg9hlwMXVtUXpoC5DB3c8fuMPqmTzA",
  },
  {
    title: "Yuj: Itihaas Yoga Ka",
    category: "Non-fiction Show — OMTV App",
    role: "Editor",
    source: "drive",
    sourceId: "1DXNNY7pV3K06h0dbokuZbJQTzZTct0Q9",
  },
  {
    title: "Kokonuts: The Happy Playce!",
    category: "Advertisement",
    role: "Editor",
    source: "drive",
    sourceId: "1IMKgreLbE-TP2h6w8RBYrSk4Nd6vC9Lm",
  },
];

export function getEmbedUrl(project) {
  if (project.source === "youtube") {
    return `https://www.youtube.com/embed/${project.sourceId}?rel=0&modestbranding=1`;
  }
  return `https://drive.google.com/file/d/${project.sourceId}/preview`;
}

export function getThumbnailUrl(project) {
  if (project.source === "youtube") {
    return `https://img.youtube.com/vi/${project.sourceId}/maxresdefault.jpg`;
  }
  return `https://drive.google.com/thumbnail?id=${project.sourceId}&sz=w1280`;
}
