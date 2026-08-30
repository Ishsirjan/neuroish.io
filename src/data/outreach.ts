import type { OutreachTarget } from "./types"

export const outreachPlaybook = {
  rule: "Three new notes a week. Thursday is follow-up day. September books October. No guest is required to ship an episode.",
  voice: "Short, specific, one ask, one sentence of why them, one sentence of why you. No ‘I hope this finds you well’.",
  followUpDays: 7,
}

export const outreachTargets: OutreachTarget[] = [
  {
    id: "out-spotify",
    name: "Spotify for Podcasters / RSS host",
    role: "Platform — distribution",
    why: "BioIsh needs a public URL on 8 Sep. Do this before any guest email so you can paste a link.",
    channel: "form",
    week: 1,
    date: "2026-09-01",
    show: "platform",
    subject: "Submit BioIsh + Chardi Kala RSS",
    body: `I am submitting two separate shows, not one feed.

Show A — BioIsh
Category: Science / Life sciences
Language: English
Host: Ishsirjan Kaur Chandok, neuroimaging engineer, IGMM–CNRS
Cadence: fortnightly Tuesdays
Launch episode: 8 September 2026
Site: https://ishsirjan.github.io

Show B — Chardi Kala
Category: Religion & Spirituality / Society
Language: English (Punjabi lines inside)
Cadence: the other Tuesdays
Launch episode: 15 September 2026

Cover art: two distinct squares. Do not reuse a brain for the Sikhi show.`,
    followUp: "If a host is still ‘in review’ on 6 Sep, publish YouTube first and treat RSS as a follow-on. Do not slip the date.",
  },
  {
    id: "out-rahul",
    name: "Prof. Rahul Kumar, IIT Hyderabad",
    role: "Mentor · collaborator on the AD radiomics paper",
    why: "He already celebrated your CNRS move in public. A 20-minute October taping about supervising computational imaging is an easy yes if you make it easy.",
    channel: "email",
    week: 1,
    date: "2026-09-01",
    show: "bioish",
    subject: "BioIsh — 20 minutes in October on training computational people",
    body: `Rahul,

I have started BioIsh, a fortnightly methods podcast. Episode 1 (8 Sep) is our precuneus / fusiform radiomics paper. I will be unkind to our own training accuracies in the right way.

I am not asking you onto episode 1. I am asking for a 20-minute October conversation on how you train people to not leak data and not worship AUCs.

Two windows: Tue 6 Oct or Thu 8 Oct, 16:30–17:00 IST, remote. I will send three questions in advance. You can veto any of them.

If the answer is no, I will still send you the episode. I learned the habit in your orbit.

Ishsirjan
IGMM–CNRS, Montpellier`,
    followUp:
      "If no reply by 8 Sep, LinkedIn DM with the live episode link and one line: “Still holding 6 or 8 Oct if useful.”",
  },
  {
    id: "out-sikhri",
    name: "Sikh Research Institute (SikhRI)",
    role: "Sikhi education · possible Chardi Kala guest or cross-mention",
    why: "You need one institution that already teaches Sikhi carefully, so the show does not float as a personality cult.",
    channel: "email",
    week: 1,
    date: "2026-09-01",
    show: "chardi-kala",
    subject: "A methods-minded Sikhi podcast — looking for a conversation, not a blessing",
    body: `Hello,

My name is Ishsirjan Kaur Chandok. I am a Sikh neuroimaging engineer at CNRS in Montpellier. I am launching Chardi Kala, a fortnightly podcast that sits a Sikh idea next to a scientific one and refuses the cheap merge.

Episode 1 (15 Sep, solo) is haumai and attention. Episode 2 is seva and the social brain. I am not a religious studies scholar. I am trying to be a careful practitioner with a microphone.

I am writing to ask two things:
1. If a researcher or educator in your circle likes hard questions, I would like to book 25 minutes in October.
2. If this is not a fit, a one-line redirect is a gift.

I will not ask you to promote a show you have not heard. The first episode will be on the internet on 15 Sep.

Waheguru ji ka khalsa, waheguru ji ki fateh.
Ishsirjan
https://ishsirjan.github.io`,
    followUp: "On 16 Sep, send the live URL. One paragraph. No guilt.",
  },
  {
    id: "out-transmitter",
    name: "The Transmitter / neuroscience editors",
    role: "Science media — guesting or a methods letter",
    why: "You write like a methods editor already. A pitch now, a piece in Q4.",
    channel: "email",
    week: 1,
    date: "2026-09-03",
    show: "bioish",
    subject: "Pitch: ‘Training accuracy is a compliment a model pays itself’",
    body: `Hello,

I am a neuroimaging engineer at IGMM–CNRS and the first author of a medRxiv radiomics study on precuneus and fusiform features in Alzheimer’s disease.

I would like to offer a short methods essay (800–1,000 words) on why neuroimaging papers should stop leading with training accuracy, and what a honest split looks like for longitudinal MRI.

I can file a draft in October. I host a new methods podcast, BioIsh, but this pitch is for your readers, not a cross-promo.

Thank you for the way you already cover tools.
Ishsirjan Kaur Chandok`,
    followUp: "If no reply in 10 days, try a specific editor by name. One retry. Then stop.",
  },
  {
    id: "out-neuromatch",
    name: "Neuromatch / Open Science teaching",
    role: "Community — workshop or podcast swap",
    why: "Your leakage and pipeline episodes are already a mini-course. They have the students.",
    channel: "email",
    week: 1,
    date: "2026-09-03",
    show: "bioish",
    subject: "Leakage and pipelines — a 30-minute teaching session or a tape",
    body: `Hello Neuromatch,

I teach this for a living now, in a lab: automated neuroimaging pipelines, QC, and the ways MRI models cheat.

I can offer a 30-minute October session or a recorded conversation on subject-wise splits and why radiomics inherits your segmentation sins.

I am not selling software. I am trying to put one honest hour in front of people who will run ADNI next semester.

Ishsirjan Kaur Chandok
Assistant Engineer, IGMM–CNRS
github.com/Ishsirjan`,
    followUp: "Follow on 17 Sep with the BioIsh 2 pipeline episode once it exists.",
  },
  {
    id: "out-pint",
    name: "Pint of Science Montpellier",
    role: "Local — in-person neuroscience",
    why: "You live in the city. A May 2027 talk is booked in autumn. Also: French practice.",
    channel: "email",
    week: 1,
    date: "2026-09-03",
    show: "neuroish",
    subject: "Pint of Science — une ingénieure neuroimagerie à Montpellier",
    body: `Bonjour,

Je suis Ishsirjan Kaur Chandok, ingénieure d’études à l’IGMM–CNRS (équipe Kremer). Je construis des pipelines de neuroimagerie.

Je lance un podcast de méthodes en anglais (BioIsh) et un compte Instagram de neurosciences (@neuroish.fr).

Je vous écris pour proposer une intervention Pint of Science 2027 — en français simple — sur « ce qu’un pipeline voit dans un cerveau ». Pas de résultats non publiés.

Si vous avez déjà votre programmation, je peux aider comme bénévole technique.

Merci,
Ishsirjan`,
    followUp: "If the seasonal window is wrong, ask to be put on the volunteer list. That is still a win.",
  },
  {
    id: "out-kavita",
    name: "Kavita Kundal",
    role: "Co-author · collaborator",
    why: "Warm tape. Episode 1 will already mention the paper. A joint October reel or 15-minute add-on is easy.",
    channel: "linkedin",
    week: 2,
    date: "2026-09-08",
    show: "bioish",
    subject: "The episode is live — want 15 minutes in October?",
    body: `Kavita,

BioIsh 1 is up. I walked through our radiomics paper and I named the bruises.

If you want, we record 15 minutes in October: what you would do differently on the next cohort. Informal. Your words.

If you would rather not, ignore this and I will still be glad we made the figure.

Ish`,
    followUp: "One nudge on 15 Sep. Then leave it.",
  },
  {
    id: "out-manpreet",
    name: "Dr. Manpreet Kaur Singh (UC Davis psychiatry)",
    role: "Sikh psychiatrist who has spoken at the Gurmat / neuroscience intersection",
    why: "She has already done the hard public conversation you are starting. A no is useful. A yes is October gold.",
    channel: "email",
    week: 2,
    date: "2026-09-08",
    show: "chardi-kala",
    subject: "Chardi Kala — a careful 25 minutes on Sikhi and mental health",
    body: `Dear Dr. Singh,

I heard your contribution at the UC Riverside Sikh Studies conversation on Gurmat and neuroscience. I am a Sikh neuroimaging engineer (IGMM–CNRS) launching a small podcast, Chardi Kala, that refuses to reduce Gurbani to a network.

Episode 1 (15 Sep, solo) is haumai and rumination. I would be grateful for 25 minutes in late October on how you hold psychiatry and Sikhi in the same clinic without costume-changing.

I can work around clinic hours. I will send questions in advance. You may kill any of them.

With respect,
Ishsirjan Kaur Chandok
https://ishsirjan.github.io`,
    followUp: "After E1 is live, resend with the audio. That is the real ask.",
  },
  {
    id: "out-brainfacts",
    name: "BrainFacts / SfN public education",
    role: "Syndication — reel rights or a guest blog",
    why: "Your explainers are already in their tone. Ask to contribute one piece, not to be featured.",
    channel: "form",
    week: 2,
    date: "2026-09-08",
    show: "neuroish",
    subject: "Offer: one explainer on radiomics or leakage, written to your house style",
    body: `Hello BrainFacts team,

I am a neuroimaging engineer at CNRS and I make short, sourced explainers on Instagram (@neuroish.fr) and a methods podcast (BioIsh).

I would like to write one article in your voice — either “What radiomics is” or “How MRI models cheat via leakage” — with no self-promo beyond a one-line bio.

I can file 800 words in October and take edits without drama.

Ishsirjan Kaur Chandok`,
    followUp: "If the form disappears into a void, try SfN’s public education email once in week 4.",
  },
  {
    id: "out-follow-w1",
    name: "Week 1 follow-ups",
    role: "Process",
    why: "Thursday discipline. Do not invent new names until the old ones are poked.",
    channel: "email",
    week: 2,
    date: "2026-09-10",
    show: "platform",
    subject: "Follow-up — still the same one ask",
    body: `Hello — a short bump on my note of 1–3 September. The ask is unchanged. If it is a no, a no is useful.

Ishsirjan`,
    followUp: "Check Spotify / Apple review status the same afternoon.",
  },
  {
    id: "out-basics",
    name: "Basics of Sikhi / similar educators",
    role: "Sikhi media — not as a theology exam, as a reach-out",
    why: "Younger diaspora listeners already trust these rooms. You want a conversation about practice, not a debate trophy.",
    channel: "email",
    week: 2,
    date: "2026-09-10",
    show: "chardi-kala",
    subject: "A scientist’s Sikhi podcast — looking for a practice conversation",
    body: `Sat sri akaal,

I am Ishsirjan Kaur. I work on neuroimaging in France and I have started Chardi Kala, a podcast where I sit with one Sikh idea at a time. I am not here to ‘prove’ Sikhi with neuroscience.

Episode 1 goes up 15 September (haumai). I would like to record a later episode on how you teach young people to keep seva from becoming content.

If this is the wrong inbox, please point me to the right one.

Ishsirjan`,
    followUp: "Send the live episode on 16 Sep. Stop after one follow-up.",
  },
  {
    id: "out-khalsa-diary",
    name: "Khalsa Diary editors",
    role: "Sikh + mental health writing",
    why: "They already ran a 2025 essay on Sikhi and the architecture of the mind. Cross-citation is cleaner than cold celebrity DMs.",
    channel: "email",
    week: 2,
    date: "2026-09-10",
    show: "chardi-kala",
    subject: "Your ‘Architecture of the Mind’ essay — a recorded reply, not a ratio",
    body: `Hello,

I read your 2025 piece on Sikhi and mental health. I am recording a podcast episode that walks next to some of those ideas and pushes on the places where neuroscience gets over-claimed.

I would like to either:
- interview the writer for 20 minutes in October, or
- publish a short written response you can edit.

I will not treat your essay as a straw man.

Ishsirjan Kaur Chandok
Neuroimaging engineer, IGMM–CNRS`,
    followUp: "If they published the writer’s name, write the writer directly after one week.",
  },
  {
    id: "out-wicci",
    name: "WICCI network (your own presidency)",
    role: "Distribution + women guests",
    why: "You already hold this room. Use it for two October guests and a newsletter mention, not for a brand launch party.",
    channel: "email",
    week: 2,
    date: "2026-09-10",
    show: "neuroish",
    subject: "Two asks: a newsletter line, and one woman in science on a mic",
    body: `Hello colleagues,

I have launched BioIsh (neuroscience methods) and Chardi Kala (Sikhi, careful). I would like:

1. One paragraph in the next internal newsletter, with the 8 Sep and 15 Sep links.
2. Introductions to two women in science or in Sikh public life who explain things cleanly and might tape 20 minutes in October.

I am not asking for a panel, a logo, or a certificate.

Ishsirjan`,
    followUp: "If the newsletter cycle is monthly, get in the next one. That is enough.",
  },
  {
    id: "out-act-paper",
    name: "Corresponding author — Sikh scripture & ACT paper",
    role: "Clinician-scholar guest",
    why: "You cited this paper in Chardi Kala 1. Citing then inviting is the ethical order.",
    channel: "email",
    week: 3,
    date: "2026-09-15",
    show: "chardi-kala",
    subject: "Your ACT / Sikh scripture paper — 20 minutes on what you would not claim",
    body: `Hello,

I cited your Spirituality in Clinical Practice paper on Sikh scripture and ACT in a podcast episode that went up today. I used it as a bridge, not as proof.

I would like 20 minutes on what the paper does not license — where clinicians should not drag Gurbani into a protocol.

I can work to your diary in October. I will send questions first.

Thank you for writing something careful in a field that is often not.
Ishsirjan Kaur Chandok`,
    followUp: "One follow-up on 24 Sep with a timestamp of the citation.",
  },
  {
    id: "out-sikh-women-stem",
    name: "Sikh women in STEM (open call)",
    role: "Peer guests",
    why: "You should not be the only Kaur on your own feed. A public call plus three private notes.",
    channel: "linkedin",
    week: 3,
    date: "2026-09-15",
    show: "chardi-kala",
    subject: "Looking for two Sikh women in science — October tape",
    body: `I am booking October for Chardi Kala.

If you are a Sikh woman in a lab, a clinic, or an engineering seat, and you are tired of being asked to choose a costume, I want 20 minutes of your actual life.

Not a brand story. Not a trauma story unless you want it. A working story.

Comment or DM. I will not put you on a flyer without your line-edit.`,
    followUp: "Privately write two people you already know. Public calls without private notes are theatre.",
  },
  {
    id: "out-gurdwara-mtp",
    name: "Gurdwara / Sikh student group, Montpellier or nearby",
    role: "Local sangat — listening room, not content mine",
    why: "A show about sangat that never sits in one is a brand. Ask to listen first.",
    channel: "email",
    week: 3,
    date: "2026-09-15",
    show: "chardi-kala",
    subject: "May I come sit, not film?",
    body: `Sat sri akaal,

I recently moved to Montpellier for work at CNRS. I have started a small Sikhi podcast in English. I am not asking to record in the darbar.

I am asking when I may come for diwan and langar, and whether there is a student circle that talks. I will keep the phone in a bag.

Ishsirjan Kaur`,
    followUp: "Go once before you write again. Presence is the follow-up.",
  },
  {
    id: "out-follow-w2",
    name: "Week 2 follow-ups",
    role: "Process",
    why: "Same Thursday muscle.",
    channel: "email",
    week: 3,
    date: "2026-09-17",
    show: "platform",
    subject: "Follow-up — episode links attached",
    body: `Hello — attaching the live BioIsh 1 and (if dated) Chardi Kala 1 links. The original ask is the same. A no is welcome.

Ishsirjan`,
    followUp: "Log every no. A no is inventory.",
  },
  {
    id: "out-ig-collab-1",
    name: "Neuroscience reel account A (methods-clean)",
    role: "Instagram collab — duet or stitch",
    why: "One collab reel is worth ten cold hashtags. Pick an account that cites papers.",
    channel: "instagram",
    week: 3,
    date: "2026-09-17",
    show: "neuroish",
    subject: "Duet on leakage or radiomics?",
    body: `Hi — I am Ishsirjan. I engineer neuroimaging pipelines at CNRS and I post methods reels at @neuroish.fr.

Your last paper card was clean. Would you duet a 40-second reel on subject-wise vs scan-wise splits? I can send a script. You can rewrite every line.

No affiliate. No course. Just one useful video.`,
    followUp: "If they do not reply, stitch their public reel with credit and a kinder method note. That is still collaboration.",
  },
  {
    id: "out-ig-collab-2",
    name: "French-language science account",
    role: "Instagram — bilingual reach",
    why: "Montpellier + CNRS audience will not all live in English.",
    channel: "instagram",
    week: 3,
    date: "2026-09-17",
    show: "neuroish",
    subject: "Une version FR de 30 secondes ?",
    body: `Bonjour — je suis ingénieure neuroimagerie à l’IGMM. Je publie en anglais sur @neuroish.fr.

Si tu veux, on fait une version française de 30 secondes sur « qu’est-ce qu’un pipeline » ou sur la fuite de données en IRM. J’écris le texte, tu corriges mon français.

Merci de me dire non si ce n’est pas le moment.`,
    followUp: "Even if they say no, record one French story a week in October. That is the real muscle.",
  },
  {
    id: "out-ibis",
    name: "IBIS / biomedical imaging workflow people",
    role: "Former consulting orbit — guest on pipelines in the wild",
    why: "You briefly consulted. They live in the unglamorous middle of imaging. Perfect BioIsh guest.",
    channel: "email",
    week: 4,
    date: "2026-09-22",
    show: "bioish",
    subject: "BioIsh — 25 minutes on imaging workflows that survive a hospital",
    body: `Hello,

I passed through your world briefly as a consultant. I now build neuroimaging pipelines at CNRS and host BioIsh, a methods podcast.

Episode 2 (live today) is about pipelines as moral objects. I would like 25 minutes in October on what breaks when a workflow leaves a lab and enters a clinic.

I can work to US mornings. Questions in advance.

Ishsirjan Kaur Chandok`,
    followUp: "One bump on 29 Sep.",
  },
  {
    id: "out-kremer-ask",
    name: "Eric Kremer (ask, do not assume)",
    role: "PI — permission and optionally a later tape",
    why: "You need a green light on what is public, and a no on what is not. A guest appearance is secondary and probably later than October.",
    channel: "email",
    week: 4,
    date: "2026-09-22",
    show: "bioish",
    subject: "Public science communication — what I will not say",
    body: `Eric,

I have started a small methods podcast (BioIsh) and an Instagram explainer account. I am writing as a courtesy and a boundary.

I will not discuss unpublished pipeline metrics, patient-identifiable data, vector lots, or anything that is still internal.

I would like your yes on: speaking in general terms about why CNS gene-transfer work needs careful imaging, citing only the lab’s already public pages and papers.

If you would ever want to tape 20 minutes on CAV-2 for a general scientific audience, I can wait until you say it is time. I am not asking for that this month.

Thank you for the room to do this job and this other job.
Ishsirjan`,
    followUp: "This is not a follow-up culture email. If he answers once, obey it.",
  },
  {
    id: "out-elucidata",
    name: "Elucidata science / community",
    role: "Former BD orbit — bioinformatics audience",
    why: "You know their language. A guest on structured biomedical data is on-brand for BioIsh without being a sales call.",
    channel: "linkedin",
    week: 4,
    date: "2026-09-22",
    show: "bioish",
    subject: "Not a sales tape — a data-structure tape",
    body: `Hello — I used to sit on the BD side of your world. I am now a CNRS neuroimaging engineer with a methods podcast.

I want a guest who will say out loud why messy omics and messy imaging fail in the same way: identifiers, leakage, and the lie of a clean CSV.

If someone on the science team wants 20 minutes in October, I will keep it technical and unpaid.

Ishsirjan`,
    followUp: "One bump. If it smells like marketing, withdraw.",
  },
  {
    id: "out-follow-w3",
    name: "Week 3 follow-ups",
    role: "Process",
    why: "Close loops before you invent new ones.",
    channel: "email",
    week: 4,
    date: "2026-09-24",
    show: "platform",
    subject: "Last bump",
    body: `Last bump from me. If I do not hear back I will assume no and wish you good work.

Ishsirjan`,
    followUp: "Move unanswered names to ‘cold’ in the tracker. Do not keep emotional tabs.",
  },
  {
    id: "out-apple",
    name: "Apple Podcasts connect",
    role: "Platform",
    why: "If review is stuck, a human ticket on week 4 still saves October.",
    channel: "form",
    week: 4,
    date: "2026-09-24",
    show: "platform",
    subject: "Review status — BioIsh and Chardi Kala",
    body: `Hello Apple Podcasts support — two separate shows submitted on 1 Sep. BioIsh is live on other hosts as of 8 Sep. Please advise if the RSS or artwork is blocking review. I can replace either within a day.

Ishsirjan Kaur Chandok`,
    followUp: "If both shows are already live, skip this. Do not open tickets for sport.",
  },
  {
    id: "out-youtube-nudge",
    name: "YouTube — community tab + 3 science channels",
    role: "Distribution",
    why: "Ask three small-to-mid science channels for a mention, not a collab video.",
    channel: "email",
    week: 4,
    date: "2026-09-24",
    show: "bioish",
    subject: "A methods episode your viewers can actually use",
    body: `Hello,

I made a 30-minute episode on what a neuroimaging pipeline is, including data leakage. It is aimed at students who are about to run their first ADNI model.

If it is useful, a mention or a link is plenty. I am not asking to be on your show this month.

Ishsirjan Kaur Chandok
BioIsh — youtube.com (your URL)
IGMM–CNRS`,
    followUp: "Pick channels that already cite papers. Do not write to celebrity doctors.",
  },
  {
    id: "out-october-slate",
    name: "October slate (you, 30 Sep)",
    role: "Planning",
    why: "The month is only finished when the next four episode slots have a name or a solo title.",
    channel: "email",
    week: 4,
    date: "2026-09-30",
    show: "platform",
    subject: "Lock October",
    body: `Write this to yourself and put it on the calendar:

BioIsh — 6 Oct: guest or solo “How I would redo our AD paper”
BioIsh — 20 Oct: guest or solo “Site effects”
Chardi Kala — 13 Oct: guest or solo “Kaur in a French lab”
Chardi Kala — 27 Oct: guest or solo “Hukam and failed experiments”

If a guest is a maybe, it is a no. File the solo script on 30 Sep before you go to sleep.`,
    followUp: "There is no follow-up. There is a calendar.",
  },
]
