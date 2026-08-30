import type { Script } from "./types"

export const podcastScripts: Script[] = [
  {
    id: "pod-bioish-layman",
    kind: "podcast",
    channel: "bioish",
    title: "BioIsh — Layman room: Your MRI is not a photograph",
    subtitle: "What a brain scan is actually doing, in the language you would use at dinner. No paper, no guest, no Sikhi.",
    duration: "26–30 min",
    whyYou:
      "You sit in a CNRS imaging lab. Most of your audience has only been inside an MRI as a patient. This episode earns the right to do papers later.",
    scrollStop: "That picture of your brain is a negotiation, not a photograph.",
    hook: "If an MRI were a photograph, radiology would be a weekend hobby. It is not. It is a set of arguments the scanner has with water, time, and a very bored proton.",
    sections: [
      {
        heading: "Cold open (0:00–1:20)",
        duration: "1 min",
        lines: [
          "Record standing. No music. Do not start with CNRS.",
          "“That picture of your brain is a negotiation, not a photograph.”",
          "“I am Ish. I build neuroimaging pipelines in Montpellier. Today I will not read a paper. I will tell you what the machine is actually doing, in language you can repeat to a parent.”",
          "“This is BioIsh, layman room. Later this month I read a paper slowly, then I talk to an expert. Three different jobs. Today is the dinner table.”",
        ],
      },
      {
        heading: "A tube, a magnet, a story (1:20–9:00)",
        duration: "8 min",
        lines: [
          "An MRI is a strong magnet plus radio waves plus a computer that is guessing in public. Hydrogen in water is the actor. Fat and fluid behave differently. That is contrast, not ‘the camera liked this angle’.",
          "T1, T2, FLAIR — give each one a household job. T1: who lives where, the anatomy map. T2: who is swollen or wet. FLAIR: the same argument with the cerebrospinal fluid told to sit down.",
          "A voxel is a sugar-cube of space. Nothing in that cube is a single neuron. If you remember one insult to hype, remember that.",
          "Motion is not a vibe. A swallow can smear a gyrus. That is why a beautiful model on a dirty T1 is a press release — we will say that sentence again on a paper day, not today.",
        ],
      },
      {
        heading: "What ‘AI saw Alzheimer’s’ usually means (9:00–18:00)",
        duration: "9 min",
        lines: [
          "A headline compresses a pipeline: people, scanner, labels, split, model, a number. If any of those is missing, you do not have news. You have marketing.",
          "Labels are made by humans who disagree. The model learns the disagreement too.",
          "If the same person is in training and in the test, the model is recognising a family member, not a disease.",
          "PET is a different argument — a tracer, a wait, a cost. MRI is the scan most of the world can actually get. That is why I care about MRI-first work. It is not because PET is fake.",
          "Give them three questions to keep: Which scan. Which people. Which data the model never saw.",
        ],
      },
      {
        heading: "What I want you to do with this (18:00–25:00)",
        duration: "7 min",
        lines: [
          "If you are a student: learn what a NIfTI is before you learn PyTorch.",
          "If you are a family member: a pretty overlay is not a diagnosis. Ask what was measured.",
          "If you make content: do not say ‘the AI detected’ unless you can say from what.",
          "Next BioIsh is the paper room. I will read my own radiomics study and be unkind to it. Then an expert comes in. This show does not mash those three jobs into one episode, and it does not mash science into Sikhi.",
        ],
      },
    ],
    commentAsk: "MRI",
    close:
      "“I am Ishsirjan. This was the layman room. If you want the one-page I use with students, write MRI in the comments. I will send it. Paper room next.”",
    caption:
      "BioIsh, layman room: your MRI is not a photograph.\n\nWrite MRI in the comments. I will send you the paper I start people on.",
    hashtags: ["#BioIsh", "#MRI", "#neuroscience", "#explainerscience", "#neuroimaging"],
    sources: [
      { label: "Any first-year MRI physics lecture you trust — Bloch, contrast, voxels" },
      { label: "BIDS / NIfTI as the ‘this is a file, not a vibe’ pointer" },
    ],
    clips: [
      { label: "A negotiation, not a photograph", timestamp: "0:00–0:40" },
      { label: "Three questions for an AI headline", timestamp: "mark in edit" },
    ],
  },
  {
    id: "pod-bioish-1",
    kind: "podcast",
    channel: "bioish",
    title: "BioIsh — Paper room: The regions that whisper Alzheimer's first",
    subtitle: "A slow read of your radiomics paper. Precuneus, fusiform gyrus, 382 people, and the bruises on the accuracy.",
    duration: "28–32 min",
    whyYou:
      "This is your first-author medRxiv work. You extracted nine FreeSurfer radiomic features from precuneus and fusiform gyrus across 0, 6, 12, and 24 months. Nobody else can tell this story from the inside without guessing.",
    scrollStop: "Alzheimer's does not kick the door. It edits two quiet streets while the family argues about the keys.",
    hook: "If Alzheimer's announced itself with a billboard, we would have solved it. It does not. It edits two quiet neighbourhoods of cortex years before anyone fails a memory test in a way a family can name.",
    sections: [
      {
        heading: "Cold open (0:00–1:10)",
        duration: "1 min",
        lines: [
          "Record this standing, no music yet. Do not start with your CV.",
          "“Alzheimer's does not kick the door. It edits two quiet streets in your cortex while the family is still arguing about the keys.”",
          "“I am Ish. I build neuroimaging pipelines in Montpellier, at the Kremer lab at IGMM–CNRS. I trained in bioinformatics at IIT Hyderabad.”",
          "“This is BioIsh, paper room. Last time I spoke like dinner. Today I read a paper with my name on it, slowly, and I will be unkind to it in the right places.”",
        ],
      },
      {
        heading: "Why these two regions (1:10–7:00)",
        duration: "6 min",
        lines: [
          "Draw the medial surface with words. Precuneus: tucked against the midline, behind the somatosensory strip, in the posteromedial parietal lobe. It is a hub of the default mode network. It lights when you wander, remember yourself, and stitch scenes.",
          "Fusiform gyrus: ventral temporal lobe, the face-and-form stream. Not just ‘face area’ folklore. Object identity, word form, the feeling that a thing is a thing.",
          "In Alzheimer's literature these two keep showing early thinning and volume loss. That is not a vibe. That is replicated morphometry.",
          "Say this clearly: we did not discover the precuneus. We asked whether a small, interpretable radiomic set from these two regions could classify stages and track 24-month change.",
        ],
      },
      {
        heading: "What we actually did (7:00–16:00)",
        duration: "9 min",
        lines: [
          "Cohort: 382 people. 134 cognitively normal, 149 MCI, 99 AD. T1-weighted MRI at 0, 6, 12, 24 months.",
          "Pipeline: FreeSurfer. Nine radiomic features, left and right, precuneus and fusiform. Name three of them on air: gray matter volume, cortical thickness, and one shape or intensity feature you are comfortable defending.",
          "Stats: Mann–Whitney U, Benjamini–Hochberg. Do not skip the multiple-testing sentence. Listeners who skip that sentence become the people who tweet ‘p less than 0.001’ as if it were a diagnosis.",
          "Classification: random forests for AD vs CN, AD vs MCI, MCI vs CN. Training accuracies were high — 98%, 97%, 99%. Then you say the sentence that earns trust: “Training accuracy is a compliment the model pays itself. I will not pretend that is external validation.”",
          "Progression: multiple linear regression and ARIMA. Left fusiform GMV tracked change hardest in our fits (r around 0.97 in the prognostic models we reported). Time-series beat plain linear fits in most comparisons.",
          "If you have a figure printed, describe it. If not, describe the shape: CN high and flat-ish, MCI sliding, AD lower, the left ventral stream falling first in our models.",
        ],
      },
      {
        heading: "What I would tell a sceptical PI (16:00–23:00)",
        duration: "7 min",
        lines: [
          "Radiomics is not magic. It is reproducible measurement plus a model. If your segmentation wobbles, your radiomics wobbles.",
          "High training accuracy with a modest feature set on one cohort is a starting gun, not a finish. Next work is held-out ADNI splits, another scanner, another field strength.",
          "We used regions we already believed in. That is hypothesis-driven and also a bias. A whole-cortex control would make the paper harder and better.",
          "Clinical translation is not ‘replace a neurologist’. It is ‘flag who needs a longer workup sooner’.",
          "Tie to your current life without leaking: “I now spend my days making neuroimaging pipelines behave. The unglamorous truth of this field is that the model is the last ten percent. The first ninety is whether the T1 was even a T1.”",
        ],
      },
      {
        heading: "One image for the listener to keep (23:00–26:30)",
        duration: "3 min",
        lines: [
          "Ask them to put a finger on the midline of their own skull, a few centimetres above the occipital bump, and imagine a small wedge of cortex cooling. That is the cartoon of precuneus thinning. It is a cartoon. Keep it labeled as one.",
          "Then: the next time a headline says ‘AI detects Alzheimer's from MRI’, ask three questions. Which region. Which split. Which scanner they never saw.",
        ],
      },
    ],
    commentAsk: "PAPER",
    close:
      "“I am Ishsirjan. This was the paper room. Next BioIsh is an expert in the chair. If you want the PDF, write PAPER in the YouTube comments. I will send it. Come argue with me. That is the point.”",
    caption:
      "BioIsh, paper room: I read my radiomics paper on the precuneus and fusiform gyrus — 382 people, four time points, the bruises on our own accuracy.\n\nWrite PAPER in the comments. I will send you the paper.",
    hashtags: [
      "#BioIsh",
      "#neuroscience",
      "#Alzheimers",
      "#radiomics",
      "#neuroimaging",
      "#bioinformatics",
      "#WomenInSTEM",
    ],
    sources: [
      {
        label: "Chandok et al., medRxiv 2024.05.15.24307407",
        url: "https://www.medrxiv.org/content/10.1101/2024.05.15.24307407v2",
      },
      { label: "FreeSurfer recon-all documentation" },
      { label: "Buckner et al. on the posteromedial default network (classic DMN anatomy)" },
    ],
    clips: [
      { label: "Cold open — two neighbourhoods", timestamp: "0:00–0:45" },
      { label: "Training accuracy is a self-compliment", timestamp: "mark in edit" },
      { label: "Three questions for an AI-AD headline", timestamp: "mark in edit" },
    ],
  },
  {
    id: "pod-ck-1",
    kind: "podcast",
    channel: "chardi-kala",
    title: "Chardi Kala 1 — Haumai, rumination, and the default mode network",
    subtitle: "A Sikh engineer holds a conversation between Gurbani and attention science without letting either side win cheaply.",
    duration: "24–28 min",
    whyYou:
      "You live both rooms: a CNRS neuroimaging lab and a Punjabi Sikh life. The internet is full of people who flatten Simran into ‘meditation lowers cortisol’. You can refuse that flattening and still be precise.",
    scrollStop: "Haumai is not self-esteem. If someone told you it was, they sold you a TED talk.",
    hook: "Haumai is not self-esteem. It is the small tight ‘I’ that narrates the day. Neuroscience has a network that loves that job. The mistake is to say they are the same thing.",
    sections: [
      {
        heading: "Cold open (0:00–1:20)",
        duration: "1 min",
        lines: [
          "“Haumai is not self-esteem. If someone told you it was, they sold you a TED talk.”",
          "“Sat sri akaal. I am Ish. I work on brains in a French lab, and I grew up inside Sikhi — not as a topic, as a life.”",
          "“This is Chardi Kala. Khoj. I will put a Sikh idea next to a scientific one and refuse to let either swallow the other.”",
          "“Today: the tight ‘I’, and a cortical network that lights when the mind talks about itself. I will not say they are the same thing.”",
        ],
      },
      {
        heading: "What haumai is, and is not (1:20–8:00)",
        duration: "7 min",
        lines: [
          "Read one short line of Gurbani you are allowed and comfortable reciting, then give your own working translation. Do not perform scholarship you do not have. Say: “I am a scientist who practices. I am not a gyaní.”",
          "Haumai: I-am-ness. The grind of mine and me. It is not confidence. It is not ambition. A PI can have almost no haumai and still run a hard lab. A quiet person can be made entirely of it.",
          "Five thieves as a moral psychology, not a DSM appendix. Kaam, krodh, lobh, moh, ahankar. You can name them in Punjabi first.",
          "Chardi kala is not toxic positivity. It is a posture under hukam. You can be grieving and in chardi kala. That sentence matters because your listeners will include people who are not okay.",
        ],
      },
      {
        heading: "What the default mode network actually is (8:00–15:00)",
        duration: "7 min",
        lines: [
          "DMN: medial prefrontal, posterior cingulate / precuneus, angular gyrus, and friends. Active in rest, self-talk, time travel, theory of mind.",
          "Rumination research: when self-referential talk becomes sticky, mood follows. That is psychology with imaging correlates, not a soul detector.",
          "Meditation studies: some show DMN down-regulation in practiced contemplatives. Effect sizes vary. Task, tradition, and scanner disagree like relatives at a wedding.",
          "Say the guardrail twice: “If I say haumai equals DMN, I have insulted both Guru Nanak and Raichle. I will not do that.”",
        ],
      },
      {
        heading: "The honest overlap (15:00–22:00)",
        duration: "7 min",
        lines: [
          "Overlap 1 — Decentering. Gurbani asks you to watch the ‘I’ without feeding it. ACT and mindfulness literature call a cousin of this decentering. Faber and colleagues have even written about Sikh scripture and ACT. Cite the existence of that paper; do not oversell it.",
          "Overlap 2 — Practice changes a system. Naam is not a wellness app. It is a discipline. Neuroscience only gets to say: repeated attention training can change networks. That is already a lot. It is not proof of nadar.",
          "Overlap 3 — Sangat as regulation. Isolation feeds the narrator. We will go deeper on seva next episode.",
          "Your Montpellier sentence: walking home from IGMM, the mind writing grant-shaped stories about who you are. That is a lab form of haumai. You can smile at it. You do not have to believe it.",
        ],
      },
    ],
    close:
      "“If you came for a TED talk that says ‘Sikhi predicted fMRI’, this is not that show. If you came to think more carefully about the ‘I’ that follows you into a lab and into the diwan hall, stay. The next Chardi Kala is in a month or two — seva, when it is ready. I am Ish. ishsirjan.github.io. Chardi kala.”",
    caption:
      "Chardi Kala 1: haumai is not self-esteem, and the default mode network is not a soul. I hold them next to each other as a Sikh who builds neuroimaging pipelines — and I refuse the cheap merge.\n\nI am Ish. https://ishsirjan.github.io",
    hashtags: ["#ChardiKala", "#Sikhi", "#Gurbani", "#haumai", "#attention"],
    sources: [
      { label: "Raichle, The Brain's Default Mode Network (Annual Review of Neuroscience)" },
      { label: "Khalsa Diary, The Architecture of the Mind (2025) — use as a conversation partner, not gospel" },
      { label: "Spirituality in Clinical Practice — Sikh scripture and ACT (doi 10.1037/scp0000385)" },
      { label: "UC Riverside Sikh Studies / Gurmat and psychiatry conversations, 2025" },
    ],
    clips: [
      { label: "Haumai is not self-esteem", timestamp: "mark" },
      { label: "I will not say haumai equals DMN", timestamp: "mark" },
    ],
  },
  {
    id: "pod-bioish-2",
    kind: "podcast",
    channel: "bioish",
    title: "BioIsh 2 — From scans to a system: how neuroimaging pipelines actually work",
    subtitle: "DICOM to decision. FreeSurfer, QC, leakage, and the unglamorous engineering that makes a biomarker real.",
    duration: "30–34 min",
    whyYou:
      "Your job title is not ‘content creator’. It is Assistant Engineer on automated neuroimaging pipelines. This episode is the reason BioIsh is not another explainer podcast hosted by a journalist.",
    scrollStop: "A beautiful model on a dirty T1 is a press release.",
    hook: "A beautiful model on a dirty T1 is a press release. A boring pipeline that fails loudly is science.",
    sections: [
      {
        heading: "Cold open",
        duration: "1 min",
        lines: [
          "“A beautiful model on a dirty T1 is a press release. A boring pipeline that fails loudly is science.”",
          "“Last time: two cortical neighbourhoods. Today: the factory that measures them.”",
          "“If you have never turned a folder of DICOMs into something a statistician can touch, this is a map. If you have, this is a confession.”",
        ],
      },
      {
        heading: "The stack, named (1:00–10:00)",
        duration: "9 min",
        lines: [
          "Acquisition: field strength, coil, motion, the patient who swallowed at the wrong time.",
          "Conversion: DICOM to NIfTI. Bids if you are lucky. A graveyard of folders if you are not.",
          "Preprocess: orientation, skull strip, intensity normalization. FreeSurfer recon-all as a city with its own traffic laws.",
          "QC: visual, automated, and the third kind — the one where you open a surface and your stomach drops.",
          "Features: volumes, thicknesses, radiomics. Then a table. Then a model that must not have seen tomorrow’s scan in yesterday’s training.",
          "You may mention CAV-2 and CNS gene-transfer imaging only as public knowledge from the Kremer lab’s published work: vectors that prefer neurons, axonal travel, the need to measure brains carefully. Then stop. No unpublished pipeline metrics.",
        ],
      },
      {
        heading: "Failure modes I have respect for (10:00–20:00)",
        duration: "10 min",
        lines: [
          "Partial volume. A voxel is not a neuron. It is a compromise.",
          "Site effects. The scanner is a collaborator with opinions.",
          "Surface topology errors around the medial wall and temporal pole. Precuneus lovers, stay humble.",
          "Leakage: subject-wise splits versus scan-wise splits. If the same person is in train and test, your AUC is a family reunion.",
          "Point to your Leakage_Audit repo as a public habit, not a product launch.",
        ],
      },
      {
        heading: "What ‘automated’ should mean (20:00–28:00)",
        duration: "8 min",
        lines: [
          "Automated is not unattended. Automated is: the same steps, the same logs, the same QC gates, a human for the exceptions.",
          "Reproducibility is a kindness to your future self and to the clinician who will never read your Jupyter notebook.",
          "A good pipeline is a moral object. It decides who looks like an outlier.",
        ],
      },
    ],
    close:
      "“If you want a starter kit: learn BIDS, learn to hate your own QC last, and read one FreeSurfer error to the end before you Google. BioIsh will be back on the other Tuesday. Bring a paper.”",
    caption:
      "BioIsh 2: what an automated neuroimaging pipeline actually is — DICOM to features, QC, site effects, and why data leakage makes honest people publish fairy tales.",
    hashtags: ["#BioIsh", "#neuroimaging", "#FreeSurfer", "#bioinformatics", "#OpenScience", "#CNRS"],
    sources: [
      { label: "BIDS specification" },
      { label: "FreeSurfer wiki — known limitations" },
      { label: "Kremer lab public pages on CAV-2 CNS gene transfer — background only" },
      { label: "Your Leakage_Audit notes / repo" },
    ],
    clips: [
      { label: "A beautiful model on a dirty T1", timestamp: "0:20" },
      { label: "Leakage is a family reunion", timestamp: "mark" },
    ],
  },
  {
    id: "pod-ck-2",
    kind: "podcast",
    channel: "chardi-kala",
    title: "Chardi Kala 2 — Seva, langar, and the social brain",
    subtitle: "October or November — not September. Why selfless work is not a productivity hack.",
    duration: "24–28 min",
    whyYou:
      "You have run seva-shaped rooms: NSS, Project CLAP, Hult Prize, WICCI, student government. You also know oxytocin headlines are usually garbage. This episode needs both instincts.",
    scrollStop: "Langar is not a soup kitchen with better branding. It is a machine for dissolving rank.",
    hook: "Langar is not a soup kitchen with better branding. It is a technology for dissolving rank. The brain has opinions about rank.",
    sections: [
      {
        heading: "Cold open",
        duration: "1 min",
        lines: [
          "“Langar is not a soup kitchen with better branding. It is a machine for dissolving rank. The brain has opinions about rank.”",
          "“Last time: the ‘I’. Today: what happens when that ‘I’ is handed a jhaadu and a 200-litre pot.”",
          "“Seva is the most public Sikh technology and the most poorly exported. People turn it into volunteering hours. That is like calling simran a screen-time setting.”",
        ],
      },
      {
        heading: "Seva without the brochure (1:00–9:00)",
        duration: "8 min",
        lines: [
          "Three doors: tan, man, dhan. Body, mind, material. You have done all three badly and well. Say one concrete memory — a langar line, a campus night, a messy NGO spreadsheet — without making yourself the hero.",
          "Seva that still wants a photograph is not a moral failure. It is information. Notice it.",
          "Caste, class, and who gets to serve versus who is served. Do not give a diaspora fairy tale. Montpellier will not save you from this.",
        ],
      },
      {
        heading: "What social neuroscience can add (9:00–18:00)",
        duration: "9 min",
        lines: [
          "Social identity and health: feeling part of a meaningful group is one of the more robust psychological buffers we have. Haslam’s ‘social cure’ work is a fair citation if you keep it humble.",
          "Helping and mood: volunteering studies show associations with lower depression and higher life satisfaction. Associations. Confounding lives here — healthier people can show up.",
          "Oxytocin, ‘helper’s high’, mirror neurons: mention them as the three horsemen of lazy science communication, then move on.",
          "Pain of exclusion is not a metaphor in anterior cingulate literature. Sangat is, among other things, an anti-exclusion machine. That is allowed. It is not the whole of sangat.",
        ],
      },
      {
        heading: "A rule for this show (18:00–23:00)",
        duration: "5 min",
        lines: [
          "If a finding makes Sikhi look fashionable, slow down.",
          "If a shabad makes a paper look small, let the paper be small.",
          "Invite one piece of mail: “Tell me a seva that did not feel good. I am collecting those.”",
        ],
      },
    ],
    close:
      "“This show stays slow on purpose. If you have a seva that did not feel good, write to me. I am Ish. ishsirjan.github.io.”",
    caption:
      "Chardi Kala 2: seva is not volunteering hours, langar is not branding, and the social brain is allowed to have a modest opinion — nothing more.\n\nI am Ish. https://ishsirjan.github.io",
    hashtags: ["#ChardiKala", "#Sikhi", "#Seva", "#Langar", "#Sangat", "#MentalHealth"],
    sources: [
      { label: "Haslam et al., The New Psychology of Health / social cure" },
      { label: "BMC Public Health volunteering and depression literature — cite as association" },
      { label: "Your own NSS / Project CLAP years — lived source, not a paper" },
    ],
    clips: [
      { label: "Langar as a technology for dissolving rank", timestamp: "0:15" },
      { label: "Three horsemen of lazy science communication", timestamp: "mark" },
    ],
  },
  {
    id: "pod-bioish-expert",
    kind: "podcast",
    channel: "bioish",
    title: "BioIsh — Expert room: How do you trust an imaging paper?",
    subtitle: "A conversation, not a lecture. Guest first: Rahul Kumar. Backup: a methods voice who will argue with you in public.",
    duration: "28–34 min",
    whyYou:
      "The third room this month is another mind. You already know how to hold journal club. This is that, with a mic, and with someone who can tell you that you are wrong.",
    scrollStop: "I did not invite you here to agree with me.",
    hook: "A methods podcast that never lets another scientist talk is a monologue with better lighting. Today someone else holds the chalk.",
    sections: [
      {
        heading: "Before you hit record",
        duration: "0 min",
        lines: [
          "Send three questions 48 hours ahead. They may veto any of them.",
          "Agree the red line: no unpublished CNRS numbers, no student gossip, no ‘quick take’ on a paper they have not read.",
          "If they cancel after Thursday, move the publish date. Do not fill this slot with another solo paper.",
        ],
      },
      {
        heading: "Cold open — you, 45 seconds",
        duration: "1 min",
        lines: [
          "“This is BioIsh, expert room. I am Ish. I build neuroimaging pipelines at CNRS.”",
          "Name the guest in one sentence of why them, not a CV parade.",
          "“I did not invite you here to agree with me.”",
        ],
      },
      {
        heading: "Question set (let them run)",
        duration: "22 min",
        lines: [
          "1. When you open an imaging paper, what is the first thing you look for — and what makes you close the tab?",
          "2. A student brings you an AUC of 0.97. What do you ask before you smile?",
          "3. Train/test splits: tell a story of leakage you are allowed to tell, without naming the guilty.",
          "4. MRI versus PET versus blood: what should a clinic trust first in 2026, and what is still theatre?",
          "5. What did my radiomics paper do honestly, and where would you have made me rewrite?",
          "6. If you could ban one phrase from science Twitter, what dies?",
          "Leave two minutes of silence after their best sentence. Do not jump in with your pipeline.",
        ],
      },
      {
        heading: "Your last minute",
        duration: "2 min",
        lines: [
          "Thank them by name. Repeat one thing they changed in your head.",
          "Point to next month: another layman, another paper, another expert. Three rooms. No crossover episode.",
        ],
      },
    ],
    commentAsk: "TRUST",
    close:
      "“I am Ishsirjan. This was the expert room. Write TRUST in the comments if you want the papers we named. I will send them.”",
    caption:
      "BioIsh, expert room: how do you trust an imaging paper?\n\nWrite TRUST in the comments. I will send you the papers we named.",
    hashtags: ["#BioIsh", "#neuroimaging", "#journalclub", "#OpenScience", "#methods"],
    clips: [
      { label: "I did not invite you here to agree with me", timestamp: "0:30" },
      { label: "The 0.97 AUC question", timestamp: "mark" },
    ],
  },
]
