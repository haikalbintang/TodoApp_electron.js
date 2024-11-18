const status = {
  newEntry: "newEntry",
  progress: "progress",
  withNote: "note",
  done: "done",
};

export const navLinks = [
  { name: "daily", textAlign: "text-right", textAlignXL: "text-center" },
  { name: "today", textAlign: "text-center", textAlignXL: "text-center" },
  { name: "later", textAlign: "text-left", textAlignXL: "text-center" },
];

export const mainDataSeed = [
  {
    title: "Belajar React (35%)",
    subtitle: "from Jonas' course on Udemy",
    descriptions: ["Supabase", "React Query"],
    status: "progress",
    priority: "high",
    time: 2,
  },
  {
    title: "Kerjain Project Pribadi (1/3 MVP)",
    subtitle: "this exactly project",
    descriptions: ["Static design first"],
    status: "progress",
    priority: "high",
    time: 2,
  },
  {
    title: "Belajar Nahwu-Shorof (30%)",
    subtitle: "ga cuma saat les Bang Andri",
    descriptions: [
      "Tambah kosa kata arab-indo",
      "shorof",
      "perlancar nahwu",
      "hapalin Al-Fajr",
    ],
    status: "progress",
    priority: "high",
    time: 2,
  },
  {
    title: "Belajar DSA (10%)",
    subtitle: "from Udemy, Python",
    descriptions: ["Singly Linked List ✅", "Stack"],
    status: "progress",
    priority: "high",
    time: 2,
  },
  {
    title: "Isi Form Next Extension Program",
    subtitle: "baca docs nya dulu",
    descriptions: [
      "https://drive.google.com/file/d/1x-DRdVe1UzH0lHYvMzLq1rR8NVRaZ2kT/view List ✅",
      "https://airtable.com/appqoBLR8M8tPrnYD/shrUDGZ26TE0FbPkI?prefill_Student%20Name%20%28Form%20View%29=M.%20Haikal%20Bintang",
    ],
    status: "done",
    priority: "high",
    time: 2,
  },
];

export const pastDataSeed = [
  {
    title: "Ngoding",
    subtitle: "50 m",
    description: "di Gema Pesona",
    status: status.done,
  },
];

export const futureDataSeed = [
  {
    title: "Piknik",
    subtitle: "50 m",
    descriptions: ["di Gema Pesona"],
    status: status.done,
  },
];
