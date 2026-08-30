export const profile = {
  name: "Ishsirjan Kaur Chandok",
  firstName: "Ishsirjan",
  tagline:
    "Neuroimaging engineer who already hosts BioIsh, already posts as @neuroish.fr, and is now turning that into a real two-show studio.",
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
        "About 20,000 LinkedIn followers. That is your highest-leverage channel in month one. Instagram and the two podcasts are the long game.",
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
      "BioIsh — a 25–35 minute solo neuroscience show. You explain one paper, one method, or one project the way you would to a sharp undergrad who stayed after journal club.",
    chardiKala:
      "Chardi Kala — a 20–30 minute Sikhi show. Lived inquiry: haumai and attention, seva and the social brain, women in the lab and in the sangat, hukam and uncertainty in research. Punjabi welcome. No gurdwara-replacement energy.",
    social:
      "NeuroIsh — Instagram, Facebook, YouTube Shorts, and LinkedIn. Neuroscience only on the visual platforms. Sikhi lives on the second podcast plus stories, not on the neuroscience grid.",
  },
  constraints: [
    "Full-time CNRS engineer. Content gets a Sunday block plus two weeknights. That is it.",
    "Month one is solo. Guests are booked now for October. Do not stall episode one waiting for a yes.",
    "French, Indian, and Sikh audiences overlap but do not want the same post. Cross-post visuals. Rewrite LinkedIn.",
    "Medical claims stay cautious. You are an engineer and a student of the literature, not a clinician.",
  ],
}

export const shows = [
  {
    id: "bioish",
    name: "BioIsh",
    kind: "Neuroscience podcast",
    length: "25–35 min",
    cadence: "Every other Tuesday",
    color: "teal",
    promise:
      "One idea, explained from the inside: papers, pipelines, neurotech, and the bioinformatics underneath imaging.",
  },
  {
    id: "chardi-kala",
    name: "Chardi Kala",
    kind: "Sikhi podcast",
    length: "20–30 min",
    cadence: "The other Tuesdays",
    color: "saffron",
    promise:
      "Khoj in public. Sikhi as a living practice of attention, seva, and courage — in conversation with, never reduced to, science.",
  },
  {
    id: "neuroish",
    name: "NeuroIsh",
    kind: "Instagram · Facebook · YouTube · LinkedIn",
    length: "30–60s reels · 150–220 word posts",
    cadence: "3 reels / week · 2 LinkedIn / week",
    color: "ink",
    promise:
      "The same mind, shorter. Science explainers, paper cards, project walkthroughs, and news you can trust.",
  },
]
