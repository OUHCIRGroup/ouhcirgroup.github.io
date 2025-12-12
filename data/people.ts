export type PeopleCategoryId =
  | "faculty"
  | "phd"
  | "masters"
  | "undergrad"
  | "visitors"
  | "alumni";

export type Person = {
  id: string;
  name: string;
  category: PeopleCategoryId;
  image?: string;
  role: string;
  affiliation?: string;
  period?: string;
  description?: string;
  keywords?: string;
  website?: string;
};

export type PeopleSection = {
  id: PeopleCategoryId;
  title: string;
  people: Person[];
};

export const peopleSections: PeopleSection[] = [
  {
    id: "faculty",
    title: "Faculty",
    people: [
      {
        id: "jiqun-liu",
        name: "Jiqun Liu",
        category: "faculty",
        image: "/people/jiqunliu.png",
        role: "Assistant Professor and Lab Director",
        affiliation:
          "School of Library and Information Studies, University of Oklahoma",
        website: "https://jiqunl.github.io/me/",
        description:
          "My research focuses on the intersection of human-computer interaction (HCI), interactive information seeking/retrieval, and cognitive psychology, and seeks to apply the knowledge learned about people interacting with information in adaptive recommendation, user education, and intelligent nudging.",
      },
      {
        id: "yong-ju-jung",
        name: "Yong Ju Jung",
        category: "faculty",
        image: "/people/image_jung.jpg",
        role: "Assistant Professor",
        affiliation:
          "School of Library and Information Studies, University of Oklahoma",
        website: "https://scholar.google.com/citations?user=bRyezogAAAAJ&hl=en",
        description:
          "My research centers on the social and affective aspects of informal learning and information behaviors with innovative technologies across libraries, museums, makerspaces, and online environments, with a particular focus on children’s interest development and agency.",
      },
    ],
  },

  {
    id: "phd",
    title: "PhD Students",
    people: [
      {
        id: "ben-wang",
        name: "Ben Wang",
        category: "phd",
        image: "/people/benwang.jpg",
        role: "PhD Student in Information Studies",
        period: "2021 – ",
        website: "https://www.linkedin.com/in/ben-wang-007464171/",
        description:
          "My research interests are in Large Language Models, Interactive Information Retrieval, and Human-Computer Interaction. My work aims to improve user experience and system performance in Human–AI interaction by understanding user behaviors and integrating state-of-the-art models.",
      },
      {
        id: "mahdieh-nazari",
        name: "Mahdieh Nazari",
        category: "phd",
        image: "/people/Nazari.jpg",
        role: "PhD Student in Information Studies",
        period: "2022 –",
        description:
          "My research interests include Human-Computer Interaction and User Studies. My previous work on assessing the usability of a Learning Management System helped me explore users’ cognitive biases and how they perceive and use learning technologies.",
      },
    ],
  },

  {
    id: "masters",
    title: "Master Students",
    people: [
      {
        id: "darius-jones",
        name: "Darius Jones",
        category: "masters",
        image: "/people/dariusjones.jpg",
        role: "M.S. Data Science, OU DSAI",
        period: "2022.2 –",
        description:
          "Research Interests: User behavior analysis; user-centered information retrieval evaluation.",
      },
      {
        id: "tyler-brown",
        name: "Tyler Brown",
        category: "masters",
        image: "/people/tyler.jpg",
        role: "M.S. Data Science, OU DSAI",
        period: "2021.6 –",
        description:
          "Research Interests: Expectation-aware information retrieval evaluation.",
      },
    ],
  },

  {
    id: "undergrad",
    title: "Undergraduate Students",
    people: [
      {
        id: "diego-cifuentes-madero",
        name: "Diego Cifuentes Madero",
        category: "undergrad",
        image: "/people/Diego.png",
        role: "Computer Engineering, OU",
        period: "2024 –",
        description:
          "Keywords: Human-Computer Interaction, Data Analytics, Large Language Models.",
      },
      {
        id: "danielle-mosby",
        name: "Danielle Mosby",
        category: "undergrad",
        image: "/people/Danielle.jpg",
        role: "Information Science and Technology, OU",
        period: "2024 –",
        description:
          "Keywords: Machine Learning, Cybersecurity, Human-Computer Interaction.",
      },
      {
        id: "jamshed-karimnazarov",
        name: "Jamshed Karimnazarov",
        category: "undergrad",
        image: "/people/Jamshed.jpg",
        role: "Computer Science, OU",
        period: "2023.5 –",
        description:
          "Keywords: Machine Learning, Large Language Models, Recommendation Systems.",
      },
      {
        id: "nicolas-thompson",
        name: "Nicolas Thompson",
        category: "undergrad",
        image: "/people/Nick Thompson.png",
        role: "Computer Science, OU",
        period: "2023.8 –",
        description:
          "Keywords: Ethical Engineering, Machine Learning, Human-Computer Interaction.",
      },
      {
        id: "brandon-robertiello",
        name: "Brandon Robertiello",
        category: "undergrad",
        image: "/people/Brandon.jpeg",
        role: "Computer Science, OU",
        period: "2023.2 –",
        description: "Keywords: Machine Learning, Human-Computer Interaction.",
      },
      {
        id: "jack-graham",
        name: "Jack Graham",
        category: "undergrad",
        image: "/people/jack.jpg",
        role: "Economics, OU",
        period: "2023.2 –",
        description: "Keywords: Behavioral Economics, Data Analytics.",
      },
      {
        id: "keon-moradi",
        name: "Keon Moradi",
        category: "undergrad",
        image: "/people/BioPic_Keon.jpeg",
        role: "Computer Science and Mathematics, OU",
        period: "2022.8 –",
        description:
          "Research Interests: Machine learning; fairness-aware learning to rank in information retrieval.",
      },
      {
        id: "zeming-hu",
        name: "Zeming Hu",
        category: "undergrad",
        image: "/people/zeminghu.jpg",
        role: "Petroleum Engineering, OU",
        period: "2022.2 –",
        description:
          "Research Interests: Human-Computer Interaction, Data Analytics.",
      },
    ],
  },

  {
    id: "visitors",
    title: "Visitors & External Student Collaborators",
    people: [
      {
        id: "yuhao-zhang",
        name: "Yuhao Zhang",
        category: "visitors",
        image: "/people/Yuhao.jpg",
        role: "Visiting PhD Student, Renmin University of China",
        period: "2022 –",
        description:
          "My research interests are in digital inequality, community informatics, and interactive information seeking, with a focus on promoting digital equity for disadvantaged groups.",
      },
      {
        id: "fangyuan-han",
        name: "Fangyuan Han",
        category: "visitors",
        role: "MS Student, Xiamen University",
        period: "2020.9 –",
        description:
          "Research Interests: Users’ systematic biases in information retrieval and recommender systems.",
      },
      {
        id: "tianji-jiang",
        name: "Tianji Jiang",
        category: "visitors",
        role: "PhD Student, UCLA",
        period: "2021.7 –",
        description:
          "Research Interests: Biases and limitations in user experiment reporting, human information behavior.",
      },
    ],
  },

  {
    id: "alumni",
    title: "Alumni",
    people: [
      {
        id: "satanu-ghosh",
        name: "Satanu Ghosh",
        category: "alumni",
        image: "/people/satanughosh.jpg",
        role: "PhD Student in Information Studies",
        period: "2021 – 2022",
        website: "https://scholar.google.com/citations?user=0Zk6fMMAAAAJ&hl=en",
        description:
          "Research Interests: Conversational and interactive information retrieval using NLP techniques, with a focus on transformer-based approaches.",
      },
      {
        id: "pragya-chatterjee",
        name: "Pragya Chatterjee",
        category: "alumni",
        image: "/people/pragya_image.jpeg",
        role: "BSIST, OU SLIS",
        period: "2021 – 2024",
        description:
          "Research Interests: Human-Computer Interaction, Data Analytics.",
      },
      {
        id: "julie-torgerson",
        name: "Julie Torgerson",
        category: "alumni",
        role: "MLIS, Graduate Assistant, OU SLIS",
        period: "2020.9 – 2021.5",
        description: "Research Interests: Survey on user study methods.",
      },
      {
        id: "meghana-nagendra",
        name: "Meghana Nagendra",
        category: "alumni",
        role: "M.S. Data Science, OU DSAI",
        period: "2021.1 – 2021.5",
        description: "Research Interests: Decoy effect in recommender systems.",
      },
      {
        id: "qingyang-wang",
        name: "Qingyang Wang",
        category: "alumni",
        role: "Undergraduate Student, Rutgers University",
        period: "2020.9 – 2021.4",
        description:
          "Research Interests: Task state extraction and prediction in interactive information retrieval.",
      },
    ],
  },
];
