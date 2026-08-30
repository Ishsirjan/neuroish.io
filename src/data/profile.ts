export const profile = {
  name: "Ishsirjan Kaur Chandok",
  firstName: "Ishsirjan",
  tagline:
    "Neuroimaging engineer who already hosts BioIsh and already posts as @neuroish.fr. Neuroscience and Sikhi stay in different rooms.",
  location: "Montpellier, France · IGMM–CNRS, Eric Kremer Lab",
  site: "https://ishsirjan.github.io",
  instagram: "@neuroish.fr",
  github: "https://github.com/Ishsirjan",
  linkedin: "https://www.linkedin.com/in/ikc444",
  scholar: "https://scholar.google.com/citations?user=Pwz2zvgAAAAJ",
  languages: ["English", "Punjabi", "Hindi", "French (working)"],
  oneLiner:
    "I build computational frameworks that turn complex brain data into something a clinician, a student, or a curious person can actually use.",
  facts: [
    {
      label: "Day job",
      value:
        "Assistant Engineer, Eric Kremer Lab, IGMM–CNRS. Automated neuroimaging pipelines around CAV-2 gene-transfer work, Dravet, and CNS vector imaging.",
    },
    {
      label: "Training",
      value:
        "M.Tech Medical Biotechnology / Bioinformatics, IIT Hyderabad. B.Tech Biotechnology, JIIT. Biodesign diploma. Briefly started LLB at SGTB Khalsa College, then chose bioinformatics.",
    },
    {
      label: "Already a communicator",
      value:
        "Portfolio lists you as BioIsh podcast host. Instagram is already @neuroish.fr. You headed journal club and anchoring at IITH, sold TEDx, and run WICCI. You are not starting from zero.",
    },
    {
      label: "Audience you already have",
      value:
        "About 20,000 LinkedIn followers. That is the science distribution channel. Instagram is papers and projects. Sikhi has its own, slower podcast — not this feed.",
    },
    {
      label: "Science you can teach from the inside",
      value:
        "AD radiomics (precuneus + fusiform gyrus), FreeSurfer pipelines, random forests / ARIMA on longitudinal MRI, Dravet, AIDOC, GILT, leakage audits, PneumoniaMNIST, plant functional genomics, leprosy database work.",
    },
    {
      label: "Sikhi, without forcing it",
      value:
        "Kaur. Punjabi first language. Khalsa College year. Diaspora life in a French lab. The Sikhi show should sound like khoj, not a lecture from a granthi you are not.",
    },
  ],
  voiceRules: [
    "Talk like journal club, not a TED script. Precision first, then warmth.",
    "Say what the paper actually did. Then say what it does not prove.",
    "Never reduce Gurbani to a brain region. Hold the dialogue. Do not collapse it.",
    "Do not leak unpublished CNRS / Kremer-lab results. Speak in public methods and published science.",
    "French lab life is texture, not the brand. The brand is clear science and honest Sikhi.",
    "You already know how to hold a room. Record standing. One idea per reel.",
  ],
  positioning: {
    bioish:
      "BioIsh — three neuroscience episodes a month, three jobs: a layman topic, a paper read slowly, and a conversation with an expert. Never a Sikhi crossover episode.",
    chardiKala:
      "Chardi Kala — one Sikhi episode every one to two months. Lived inquiry. Own feed, own art, own Sunday. Punjabi welcome. No gurdwara-replacement energy, and no neuroscience trailer.",
    social:
      "NeuroIsh — Instagram, Facebook, YouTube Shorts, LinkedIn. Two paper reels and one project reel a week. Latest papers, short and attractive. Sikhi does not appear on this grid.",
  },
  constraints: [
    "Full-time CNRS engineer. Content gets a Sunday block plus two weeknights. That is it.",
    "Layman and paper episodes ship solo. The expert episode is the only one that waits on a person — and it has a move-the-date rule, not a skip-the-format rule.",
    "Neuroscience and Sikhi audiences may overlap in your life. They do not overlap in the posts. Separate feeds. Separate asks.",
    "Medical claims stay cautious. You are an engineer and a student of the literature, not a clinician.",
  ],
}

export const shows = [
  {
    id: "bioish",
    name: "BioIsh",
    kind: "Neuroscience podcast",
    length: "25–35 min",
    cadence: "3 / month: layman · paper · expert",
    color: "teal",
    promise:
      "A neuroscience curriculum: one topic in human language, one paper read in detail, one expert in the room.",
  },
  {
    id: "chardi-kala",
    name: "Chardi Kala",
    kind: "Sikhi podcast",
    length: "20–30 min",
    cadence: "1 episode / 1–2 months",
    color: "saffron",
    promise:
      "Khoj in public. Own feed. Not a neuroscience series, not a clip on the paper grid.",
  },
  {
    id: "neuroish",
    name: "NeuroIsh",
    kind: "Instagram · Facebook · YouTube · LinkedIn",
    length: "30–60s reels · 150–220 word posts",
    cadence: "2 papers + 1 project / week",
    color: "ink",
    promise:
      "Latest papers, short and attractive. One project a week from work you can defend. Neuroscience only.",
  },
]
