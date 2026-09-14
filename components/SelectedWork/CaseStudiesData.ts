export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string;

  role: string[];
  challenge: string[];

  approachIntro?: string;

  approach: {
    number: string;
    title: string;
    text: string;
    selectedWork?: {
      label: string;
      url: string;
    }[];
  }[];

  impact: string[];

  metrics: {
    value: string;
    label: string;
  }[];

  showcaseItems?: {
    category: string;
    title: string;
    text: string;
    image: string;
  }[];
};
export const caseStudies: CaseStudy[] = [
  {
    slug: "economic-policy-awareness",

    category: "Campaigns",

    title: "Economic Policy Awareness Campaign",

    subtitle: "2026 Armenian National Elections",

    image: "/portfolio/economic-policy-awareness.jpg",

    intro:
      "A 6-month, multi-channel communications campaign designed to translate the Wings of Unity platform’s economic policy agenda into an accessible public conversation — combining digital, media, expert positioning and direct stakeholder engagement.",

    role: [
      "Campaign created and led by Nune Hovsepyan, overseeing the campaign’s strategic communications, positioning, messaging, media engagement and overall execution.",
      "The campaign was delivered with the involvement of Arev Avagyan, Social Media Lead, and Anahit Pilosyan, PR Manager.",
    ],

    challenge: [
      "Ahead of Armenia’s 2026 parliamentary elections, the Wings of Unity platform needed to communicate a new economic policy agenda to audiences with very different levels of economic knowledge and interest.",
      "The challenge was to make complex economic policy accessible without oversimplifying the substance, while building credibility among both the general public and professional stakeholders.",
    ],

    approachIntro:
      "We built a multi-layered communications ecosystem moving audiences from awareness to understanding, credibility and direct engagement.",

    approach: [
      {
        number: "01",
        title: "Create Awareness & Build Anticipation",
        text:
          "Short-form teasers generated anticipation before the formal launch.",
        selectedWork: [
          {
            label: "Teaser campaign",
            url: "https://www.youtube.com/watch?v=-VYZdeNV-W4",
          },
          {
            label: "Teaser",
            url: "https://www.youtube.com/shorts/fMPB8FZe7kg",
          },
        ],
      },

      {
        number: "02",
        title: "Launch the Economic Policy Agenda",
        text:
          "The economic agenda was formally introduced through a flagship press conference and structured into seven clear communication areas.",
        selectedWork: [
          {
            label: "Flagship press conference",
            url: "https://www.youtube.com/watch?v=GBp_WWiLj0c",
          },
          {
            label: "Economic policy overview",
            url: "https://www.youtube.com/shorts/FyDQEe5P9Rk",
          },
          {
            label: "Economic direction",
            url: "https://www.youtube.com/watch?v=fhSFpYud6u0",
          },
          {
            label: "Economic direction",
            url: "https://www.youtube.com/shorts/5JOGFcTdRgs",
          },
        ],
      },

      {
        number: "03",
        title: "Make Complex Policy Accessible",
        text:
          "The economic agenda was translated into accessible short-form and animated content, including SME policy.",
        selectedWork: [
          {
            label: "Animated policy explainer",
            url: "https://www.youtube.com/shorts/NRmCWv4E8fQ",
          },
          {
            label: "Animated explainer",
            url: "https://www.facebook.com/reel/1109482987971918",
          },
        ],
      },

      {
        number: "04",
        title: "Build Credibility & Sustain the Conversation",
        text:
          "Individual experts were positioned as credible voices across specific economic policy areas, while sustained media engagement kept the agenda visible throughout the six-month campaign.",
        selectedWork: [
          {
            label: "Expert presentation",
            url: "https://www.youtube.com/watch?v=Hl2xncvQ_Hk",
          },
          {
            label: "Expert presentation",
            url: "https://www.youtube.com/watch?v=wcKcKgfBusc",
          },
          {
            label: "Media interview",
            url: "https://www.youtube.com/watch?v=izndzQiaab4",
          },
          {
            label: "Media interview",
            url: "https://www.youtube.com/watch?v=hOQUE2KfYOI",
          },
          {
            label: "Media interview",
            url: "https://www.youtube.com/watch?v=pYWRQaBskKI",
          },
        ],
      },

      {
        number: "05",
        title: "Turn Communication into Engagement",
        text:
          "The digital and media strategy was extended into direct, face-to-face communication. 30+ public speeches · 250+ targeted stakeholder meetings. This created opportunities for direct dialogue with communities, professionals and key stakeholder groups.",
      },
    ],

    impact: [
      "The campaign helped establish the economic agenda as a credible alternative to populist promises — communicating clear, substantive and realistic policy solutions rather than commitments that could not be realistically delivered.",
    ],

    metrics: [
      {
        value: "7M+",
        label: "total views",
      },
      {
        value: "1.8M+",
        label: "media & social media publications",
      },
      {
        value: "30+",
        label: "public speeches",
      },
      {
        value: "250+",
        label: "targeted stakeholder meetings",
      },
    ],
  },

{
  slug: "prime-ministerial-candidate-positioning",

  category: "Political Communications",

  title: "Prime Ministerial Candidate Positioning Campaign",

  subtitle: "2026 Armenian Parliamentary Elections",

  intro:
    "A phased, integrated advertising campaign designed to transform Arman Tatoyan’s established public recognition as Armenia’s former Human Rights Defender into a distinct political identity as the Wings of Unity candidate for Prime Minister — combining nationwide outdoor advertising, digital communication and candidate-led video messaging.",

  image: "/portfolio/prime-ministerial-positioning.png",

  metrics: [
    {
      value: "12M+",
      label: "media impressions",
    },
    {
      value: "9M+",
      label: "video message views",
    },
    {
      value: "200+",
      label: "outdoor advertising placements",
    },
  ],

  role: [
    "Campaign created and led by Nune Hovsepyan, overseeing positioning strategy, messaging, creative direction and overall communications execution.",
  ],

  challenge: [
    "Arman Tatoyan entered the 2026 parliamentary elections with established public recognition from his previous role as Human Rights Defender.",
    "The challenge was to convert that existing recognition into a new political identity — establishing him as a prime ministerial candidate and building clear associations between the candidate, the Wings of Unity party and its core political messages.",
    "The campaign also needed to build strong voter recall of the party and, later in the campaign, its ballot number.",
  ],

  approachIntro:
    "We developed a phased communications strategy that followed the voter journey from recognition to political association and ballot recall. Outdoor placement was informed by sociological and electoral data, prioritizing geographic areas with stronger potential for voter engagement while maintaining nationwide visibility.",

  approach: [
    {
      number: "01",
      title: "Establish the Candidate",
      text:
        "The first phase focused on establishing Tatoyan’s new political identity. A consistent visual system across outdoor and digital channels connected the candidate’s face, name, party and political promise, creating repeated association between his existing public profile and his new role as a prime ministerial candidate.",
      selectedWork: [],
    },
    {
      number: "02",
      title: "Move from Recognition to Choice",
      text:
        "As candidate recognition strengthened, the campaign shifted from identity to political meaning. The second wave gave greater prominence to key political messages and the ballot number, while maintaining visual continuity with the first phase. This created a deliberate progression: Candidate recognition → Political association → Ballot recall.",
      selectedWork: [],
    },
    {
      number: "03",
      title: "Respond to the Political Agenda",
      text:
        "A series of short candidate-led video messages translated political positions and proposals into clear, accessible social media content. Messaging was continuously adapted to developments in the news cycle and shifts in the political agenda, allowing the candidate to respond quickly to emerging issues without losing consistency in the broader positioning strategy.",
      selectedWork: [
        {
          label: "Candidate-led video message",
          url: "https://www.youtube.com/shorts/m8P_lP-5kgA",
        },
      ],
    },
  ],

  impact: [
    "The campaign built a clear bridge between public recognition and electoral choice — transforming Tatoyan’s established public profile into a distinct prime ministerial positioning and connecting the candidate, the Wings of Unity party, its political messages and ballot number within one memorable communications system.",
    "By moving deliberately from recognition to political association and ballot recall, the campaign was designed not only to make the candidate visible, but to make that visibility meaningful at the point of voter choice.",
  ],
  
},

{
  slug: "humanizing-political-leader-storytelling",

  category: "Storytelling",

  title: "Human-Centered Storytelling",

  subtitle: "Humanizing a Political Leader Through Storytelling",

  image: "/portfolio/human-centered.png",

  intro:
    "A character-driven video series revealing the person behind the public role — his values, experiences and vision for the country’s future.",

  role: [
    "Led by Nune Hovsepyan, overseeing the project from strategic positioning and concept development through to final product approval.",
    "The project was delivered with Tiruhi Bayburdyan, PR Specialist, and Arev Avagyan, SMM Lead.",
  ],

  challenge: [
    "Political communication often focuses on positions, speeches and policy messages, leaving little space for audiences to understand the person behind the public role.",
    "The challenge was to build a more human, relatable and multidimensional image while remaining grounded in his civic and political positioning.",
  ],

  approachIntro:
    "We developed a human-centered storytelling series focused on the person — his experiences, values, perspectives and journey, ultimately connecting these stories to his vision for the country’s future.",

  approach: [
    {
      number: "01",
      title: "Shift the Focus from Position to Person",
      text:
        "Rather than leading with political positions or policy messages, the series focused on personal experiences, values, perspectives and the individual journey behind the public role.",
      selectedWork: [],
    },

    {
      number: "02",
      title: "Use Natural Conversation and Personal Narrative",
      text:
        "The storytelling format relied on natural conversations and personal narratives, allowing audiences to discover the person behind the public figure in a more authentic and emotionally accessible way.",
      selectedWork: [],
    },

    {
      number: "03",
      title: "Connect Personal Stories to a Broader Vision",
      text:
        "Individual stories were connected to the leader’s wider civic and political positioning, helping personal experience reinforce his broader vision for the country’s future.",
      selectedWork: [
        {
          label: "Selected Story 01",
          url: "https://www.youtube.com/watch?v=E0aWgjEmeNQ",
        },
        {
          label: "Selected Story 02",
          url: "https://www.youtube.com/watch?v=dYIOco0JnJ8&t=6s",
        },
        {
          label: "Selected Story 03",
          url: "https://www.youtube.com/watch?v=r3uEn4YUPtQ",
        },
        {
          label: "Selected Story 04",
          url: "https://www.youtube.com/watch?v=OCma3-jvsbE",
        },
      ],
    },
  ],

  impact: [
    "The series expanded the leader’s image beyond political and policy communication, making it more human and emotionally accessible.",
    "With 1M+ social media views and 50+ media publications, the series strengthened relatability, familiarity and emotional connection, while reinforcing the broader positioning strategy.",
  ],

  metrics: [
    {
      value: "1M+",
      label: "social media views",
    },
    {
      value: "50+",
      label: "media publications",
    },
  ],
},

{
  slug: "symbol-brand-storytelling",

  category: "Brand Storytelling",

  title: "Symbol & Brand Storytelling",

  subtitle: "Turning a Political Symbol into a Recognizable Brand Asset",

  image: "/portfolio/symbol-brand-storytelling.png",

  intro:
    "A brand storytelling campaign designed to build recognition of the Wings of Unity political identity by transforming its winged bull symbol from a visual identifier into a recognizable brand asset with its own meaning and story.",

  role: [
    "Campaign created and led by Nune Hovsepyan, overseeing the campaign’s strategic communications, positioning, messaging and overall execution.",
    "The campaign was delivered with the involvement of Arev Avagyan, Social Media Lead, and Tiruhi Bayburdyan, PR Manager.",
  ],

  challenge: [
    "As a newly established political party, Wings of Unity needed to build recognition quickly. The challenge was not simply to introduce a new name and visual identity, but to create a strong association between the party, its winged bull symbol, and its founders.",
  ],

  approachIntro:
    "Recognizing that a new political symbol becomes more memorable when audiences understand what it represents and where it comes from, we transformed the origin of the winged bull into a brand story.",

  approach: [
    {
      number: "01",
      title: "Turn the Symbol into a Story",
      text:
        "Drawing on its connection to the Sardarapat Memorial, we created a dedicated storytelling video linking the symbol’s cultural reference to the broader values and political narrative of Wings of Unity and its founders.",
      selectedWork: [],
    },
    {
      number: "02",
      title: "Build a Consistent Brand Association",
      text:
        "The storytelling brought the Wings of Unity name, the winged bull symbol and the party’s founders together within one consistent narrative, strengthening the association between them.",
      selectedWork: [],
    },
    {
      number: "03",
      title: "Amplify the Story",
      text:
        "The story was amplified across social media and earned media, extending the narrative beyond the original video and giving the symbol significant public visibility.",
      selectedWork: [],
    },
  ],

  impact: [
    "The story generated 2M+ views and 150+ media and social media publications, giving the winged bull significant visibility and helping transform it from a visual identifier into a recognizable brand asset with its own meaning and story, while reinforcing the association between the Wings of Unity name, its symbol and its founders.",
  ],

  metrics: [
    {
      value: "2M+",
      label: "views",
    },
    {
      value: "150+",
      label: "media & social media publications",
    },
  ],
},
{
  slug: "human-centered-storytelling",

  category: "Storytelling",

  title: "Human-Centered Storytelling",

  subtitle: "6-Year Impact",

  image: "/portfolio/human-centered-storytelling.png",

  intro:
    "A long-term communications approach designed to make the Human Rights Defender’s work more human, accessible and relevant by showing how institutional interventions translated into tangible change in people’s lives.",

  role: [
    "Led the end-to-end storytelling process — identifying and selecting compelling cases, shaping their narrative and positioning, and overseeing filming, editing and final production.",
  ],

  challenge: [
    "The Defender’s work often involved complex institutional processes, while its real impact on people’s lives remained less visible through traditional institutional communication.",
    "The challenge was to move beyond formal reporting and show how the Defender’s work translated into tangible change in people’s lives.",
  ],

  approachIntro:
    "We introduced a human-centered storytelling approach, transforming real cases and successful interventions into accessible stories focused on people and outcomes.",

  approach: [
    {
      number: "01",
      title: "Find the Human Story",
      text:
        "Compelling cases were identified and selected based on their ability to show the real-life impact of the Defender’s work.",
      selectedWork: [],
    },
    {
      number: "02",
      title: "Shift the Focus from Process to Outcome",
      text:
        "Instead of communicating only what the institution had done, the stories showed who had been helped, what problem had been resolved and what changed as a result.",
      selectedWork: [],
    },
    {
      number: "03",
      title: "Turn Cases into Accessible Stories",
      text:
        "Each case was shaped into a clear human-centered narrative and developed through filming, editing and final production for public communication.",
      selectedWork: [
        {
          label: "COVID-19: A Family Reunification Success Story",
          url: "https://www.youtube.com/watch?v=TtND9mfKtqg",
        },
        {
          label:
            "Free Eye Surgery Secured for a Resident of a Border Community",
          url: "https://www.youtube.com/watch?v=iWeIK-yiODY",
        },
        {
          label:
            "Citizen Regains the Right to Obtain a Driving Licence",
          url: "https://www.youtube.com/watch?v=deOd0LQhwWg",
        },
        {
          label:
            "Free Cardiac Stent Procedure Secured for a Resident of a Care Home",
          url: "https://www.youtube.com/watch?v=ijTGIkyJDRs",
        },
      ],
    },
  ],

  impact: [
    "Over six years, public trust in the Human Rights Defender institution increased from 29% to 81%, according to Caucasus Barometer data. IRI public opinion research also placed the Human Rights Defender highest among state institutions in terms of public satisfaction with its work.",
    "At the same time, the annual number of complaints and requests addressed to the institution increased from 5,113 to 21,181 — a 4.1× increase — reflecting a growing willingness among people to turn to the Defender for support.",
    "These results reflect a broader institutional effort, with the communications transformation helping make the Defender’s work more human, accessible and relevant to the public.",
    "These indicators reflect the institution’s overall performance during this period and are not attributed to communications or storytelling alone.",
  ],

  metrics: [
    {
      value: "29% → 81%",
      label: "institutional trust",
    },
    {
      value: "Highest",
      label: "public satisfaction among state institutions",
    },
    {
      value: "4.1×",
      label: "increase in annual complaints & requests",
    },
  ],
},

{
  slug: "arman-tatoyan-personal-branding",

  category: "Personal Branding",

  title: "Arman Tatoyan — Executive Positioning & Public Reputation",

  subtitle: "Human Rights Defender of Armenia",

  image: "/portfolio/arman-tatoyan-positioning.jpg",

  intro:
    "A long-term executive positioning and reputation strategy designed to build a more human, accessible and trusted public presence around both Arman Tatoyan and the Human Rights Defender institution.",

  role: [
    "Over six years, I led the communications approach supporting the Defender’s public positioning and the institution’s reputation.",
  ],

  challenge: [
    "When Arman Tatoyan assumed office as Human Rights Defender, the challenge was not simply to increase institutional visibility, but to build a more human, accessible and trusted public presence around both the Defender and the institution.",
    "This required changing how the institution communicated with citizens and journalists, and how its work, impact and relevance were translated into public-facing communication.",
  ],

  approachIntro:
    "The strategy centered on moving from predominantly formal institutional communication toward a more human-centered, accessible and impact-driven model.",

  approach: [
    {
      number: "01",
      title: "Humanize the Public Positioning",
      text:
        "We reshaped the way the Defender communicated with the public, transforming the structure, tone and substance of public messaging to create a more accessible and human public presence.",
      selectedWork: [],
    },

    {
      number: "02",
      title: "Strengthen Media Relationships",
      text:
        "We strengthened relationships and day-to-day engagement with journalists, supporting more consistent, responsive and credible communication around the Defender’s work.",
      selectedWork: [],
    },

    {
      number: "03",
      title: "Show Impact Through Real Stories",
      text:
        "We gave institutional work a human face, using real cases, success stories and tangible outcomes to show how human rights protection translated into meaningful change in people’s lives.",
      selectedWork: [],
    },

    {
      number: "04",
      title: "Build Understanding Through Awareness Campaigns",
      text:
        "Alongside ongoing communications, we introduced targeted public awareness campaigns around priority human rights issues, tailoring messages, formats and channels to specific audiences and using communication not only to inform, but to build understanding and engagement.",
      selectedWork: [],
    },
  ],

  impact: [
    "During Tatoyan’s tenure, public trust in the Human Rights Defender institution increased from 29% to 81%, according to Caucasus Barometer data. IRI public opinion research also placed the Human Rights Defender highest among state institutions in terms of public satisfaction with its work.",
    "The communications transformation formed part of a broader institutional effort that strengthened the Defender’s public profile and helped position the institution as a more accessible, human-centered and trusted public authority.",
    "These indicators reflect the institution’s overall performance during this period and are not attributed to communications alone.",
  ],

  metrics: [
    {
      value: "6 years",
      label: "communications leadership",
    },
    {
      value: "29% → 81%",
      label: "institutional trust",
    },
    {
      value: "Highest",
      label: "public satisfaction among state institutions",
    },
  ],
},

{
  slug: "success-stories-video-series",

  category: "Scriptwriting & Content Creation",

  title: "Success Stories Video Series",

  subtitle: "U.S. Alumni Association of Armenia",

  image: "/portfolio/success-stories-video-series.png",

  intro:
    "A human-centered video series featuring Armenian alumni of U.S. educational and professional exchange programs, highlighting their experiences, achievements and impact.",

  role: [
    "Project led by Nune Hovsepyan, overseeing story development, scriptwriting, filming, creative direction, editing and final video approval.",
  ],

  challenge: [
    "The challenge was to move beyond institutional communication and demonstrate the real-life impact of U.S. educational and professional exchange opportunities through authentic personal stories.",
    "Each story needed to connect individual experience with a broader message of professional growth, knowledge exchange and impact in Armenia.",
  ],

  approachIntro:
    "We developed a human-centered storytelling format built around individual alumni journeys.",

  approach: [
    {
      number: "01",
      title: "Build the Story Around the Person",
      text:
        "Each video centered on an individual alumni journey, using personal experience as the entry point into the broader story of exchange, learning and professional growth.",
      selectedWork: [],
    },
    {
      number: "02",
      title: "Combine Structure with Authenticity",
      text:
        "Each story combined structured interviews, authentic personal narratives and contextual footage to create a clear and engaging narrative.",
      selectedWork: [],
    },
    {
      number: "03",
      title: "Create a Consistent Series Identity",
      text:
        "The videos maintained a consistent narrative and visual identity across the series, helping individual stories feel part of one coherent communication product.",
      selectedWork: [
        {
          label: "Success Story 01",
          url: "https://www.youtube.com/watch?v=eU6KuSiv6uU",
        },
        {
          label: "Success Story 02",
          url: "https://www.youtube.com/watch?v=AyrZQ4azrwM",
        },
        {
          label: "Success Story 03",
          url: "https://www.youtube.com/watch?v=iY9gjKV25Is",
        },
        {
          label: "Success Story 04",
          url: "https://www.youtube.com/watch?v=N05rdphQ9Us",
        },
      ],
    },
  ],

  impact: [
    "The series transformed alumni experiences into relatable stories of opportunity, professional growth and impact.",
    "By putting people at the center of the communication, the videos made the value of international education and professional exchange more tangible, credible and engaging for wider audiences.",
  ],

  metrics: [],
},

{
  slug: "public-awareness-video-series",

  category: "Scriptwriting & Content Creation",

  title: "Public Awareness Video Series",

  subtitle: "Human Rights Defender of Armenia",

  image: "/portfolio/public-awareness-video-series.png",

  intro:
    "A public awareness video series designed to translate complex legal and social rights into clear, accessible and engaging content for the general public.",

  role: [
    "Project led by Nune Hovsepyan, overseeing the end-to-end creative and content development process — from topic development, research and scriptwriting to shot planning, visual sketches, production coordination and final video approval.",
  ],

  challenge: [
    "Legal and social rights are often communicated through complex institutional language that is difficult for the general public to understand and apply in everyday situations.",
    "The challenge was to transform these topics into clear, practical and engaging video content without losing the substance of the information.",
  ],

  approachIntro:
    "We developed a structured public awareness video format designed to simplify complex rights-based topics and make them easier to understand through concise scripts, clear visual planning and accessible storytelling.",

  approach: [
    {
      number: "01",
      title: "Identify Relevant Public Awareness Topics",
      text:
        "Topics were selected around legal and social rights that directly affect people in everyday life and often require clearer public explanation.",
      selectedWork: [],
    },

    {
      number: "02",
      title: "Translate Complexity into Clear Scripts",
      text:
        "Research and legal information were transformed into concise, accessible scripts designed for audiences without specialist legal knowledge.",
      selectedWork: [],
    },

    {
      number: "03",
      title: "Design the Story Visually",
      text:
        "Each video was developed through shot planning, visual sketches and production coordination to ensure the information was not only understandable, but also visually engaging.",
      selectedWork: [],
    },

    {
      number: "04",
      title: "Create Practical Public Awareness Content",
      text:
        "The final videos focused on real-life rights and procedures, giving audiences clear and usable information through a consistent video format.",
      selectedWork: [
        {
          label: "Women’s Rights at Work",
          url: "https://www.youtube.com/watch?v=twqRgKMeGLE",
        },
        {
          label: "Maternity & Employment Rights",
          url: "https://www.youtube.com/watch?v=moHHqZAc5qU",
        },
        {
          label: "Access to Age Pension",
          url: "https://www.youtube.com/watch?v=TUM-fwrOLNs",
        },
        {
          label: "Disability Recognition",
          url: "https://www.youtube.com/watch?v=rHAYwR2KAMQ",
        },
      ],
    },
  ],

  impact: [
    "The series turned complex legal and social rights into clear, accessible public information.",
    "By combining research, scriptwriting and visual storytelling, the videos helped make rights and procedures easier for wider audiences to understand and apply in practice.",
  ],

  metrics: [],
},
{
  slug: "brand-identity-development",

  category: "Brand Identity",

  title: "Brand Identity Development",

  subtitle:
    "Concern Dialog · Tatoyan Foundation · Wings of Unity · PRAXIS",

  image: "/portfolio/brand-identity-development.png",

  intro:
    "A selection of corporate, institutional, political and consultancy brand identity projects — from strategic direction and concept development to visual identity systems and complete brand books.",

  role: [],

  challenge: [],

  approach: [],

  impact: [],

  metrics: [],

  showcaseItems: [
  {
    category: "Corporate Brand Identity",
    title: "Concern Dialog",
    text:
      "Led the development of Concern Dialog’s new logo, coordinating the partner agency, ensuring alignment with the company’s brand identity, and overseeing the development of the final brand book.",
    image:
      "/portfolio/concern-dialog-corporate-brand-identity.png",
  },

  {
    category: "Institutional Brand Identity",
    title: "Tatoyan Foundation",
    text:
      "Directed the development of the Tatoyan Foundation’s brand identity, overseeing strategy, concept and execution.",
    image:
      "/portfolio/tatoyan-foundation-brand-identity.png",
  },

  {
    category: "Political Brand Identity",
    title: "Wings of Unity",
    text:
      "Led the development of the Wings of Unity political brand identity, overseeing the process from strategic direction and concept development to the creation of the logo and its visual identity system.",
    image:
      "/portfolio/wings-of-unity-political-brand-identity.png",
  },

 {
        category: "Brand Strategy & Identity Development",
        title: "PRAXIS",
        text:
          "Created and led the development of the PRAXIS brand from the ground up — defining its strategic positioning, brand narrative and messaging, directing the visual identity, and overseeing the development of the complete brand book.",
        image:
          "/portfolio/praxis-brand-strategy-identity-development.png",
      },
    ],
  },

  ];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}