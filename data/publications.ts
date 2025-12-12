// data/publications.ts

export type PublicationType = "journal" | "conference" | "book" | "other";

export interface PublicationLink {
  label: string; // e.g., "Paper", "Code", "Slides", "Poster", "Tutorial"
  url: string;
}

export interface Publication {
  id: string;
  year: number;
  type: PublicationType; // based on original "j", "c", "b"
  authors: string;
  title: string;
  venue: string;
  extra?: string; // awards / notes
  links?: PublicationLink[];
}

export interface PublicationYearGroup {
  year: number;
  items: Publication[];
}

// ---- 2020–2025 data ----

export const publicationsByYear: PublicationYearGroup[] = [
  {
    year: 2025,
    items: [
      {
        id: "jiang2025-data-reuse",
        year: 2025,
        type: "journal",
        authors: "Jiang, T., Li, W., & Liu, J.",
        title:
          "The landscape of data reuse in interactive information retrieval: Motivations, sources, and evaluation of reusability",
        venue:
          "Journal of the Association for Information Science and Technology (JASIST).",
        links: [
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.25020",
          },
        ],
      },
      {
        id: "dewan2025-llm-usefulness-labeling",
        year: 2025,
        type: "conference",
        authors: "Dewan, M., Liu, J., & Shah, C.",
        title: "LLM-driven usefulness labeling for IR evaluation",
        venue:
          "In Proceedings of the 48th International ACM SIGIR Conference on Research and Development in Information Retrieval, Padova, Italy.",
        links: [
          {
            label: "Preprint",
            url: "https://arxiv.org/abs/2503.08965",
          },
        ],
      },
      {
        id: "chen2025-decoy-effect-search-interaction",
        year: 2025,
        type: "journal",
        authors: "Chen, N., Liu, J., Fang, H., Luo, Y., Sakai, T., & Wu, X.-M.",
        title:
          "Decoy effect in search interaction: Understanding user behavior and measuring system vulnerability",
        venue: "ACM Transactions on Information Systems (TOIS).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/10.1145/3708884",
          },
        ],
      },
      {
        id: "liu2025-boundedly-rational-medical-misinformation",
        year: 2025,
        type: "conference",
        authors: "Liu, J., & He, J.",
        title:
          "Boundedly rational searchers interacting with medical misinformation: Characterizing context-dependent decoy effects on credibility and usefulness evaluation in sessions",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/10.1145/3698204.3716453",
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        id: "zhang2024-older-adults-algorithm-literacy",
        year: 2024,
        type: "journal",
        authors: "Zhang, Y., & Liu, J.",
        title:
          "Falling behind again? Characterizing and assessing older adults’ algorithm literacy in interactions with video recommendations",
        venue:
          "Journal of the Association for Information Science and Technology (JASIST).",
        links: [
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.24960",
          },
        ],
      },
      {
        id: "jung2024-isk-framework-children",
        year: 2024,
        type: "journal",
        authors: "Jung, Y. J., & Liu, J.",
        title:
          "Toward a conceptual framework characterizing the interplay of interest development, information search, and knowledge construction (ISK) in children’s learning",
        venue: "Aslib Journal of Information Management.",
        links: [
          {
            label: "Paper",
            url: "https://www.emerald.com/insight/content/doi/10.1108/AJIM-01-2024-0041/full/html",
          },
        ],
      },
      {
        id: "wang2024-dynamic-perceptions-gain-cost",
        year: 2024,
        type: "journal",
        authors: "Wang, B., & Liu, J.",
        title:
          "Understanding users’ dynamic perceptions of search gain and cost in sessions: An expectation confirmation model",
        venue:
          "Journal of the Association for Information Science and Technology (JASIST).",
        links: [
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.24935",
          },
        ],
      },
      {
        id: "zhang2024-older-adults-mental-models-video-recs",
        year: 2024,
        type: "conference",
        authors: "Zhang, Y., & Liu, J.",
        title:
          "Unpacking older adults' mental models of video recommender systems: A qualitative study",
        venue:
          "In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3677389.3702577",
          },
        ],
      },
      {
        id: "chen2024-llm-threshold-priming",
        year: 2024,
        type: "conference",
        authors: "Chen, N., Liu, J., Dong, X., Liu, Q., Sakai, T., & Wu, X.-M.",
        title:
          "AI can be cognitively biased: An exploratory study on threshold priming in LLM-based batch relevance assessment",
        venue:
          "In Proceedings of the 2nd International ACM SIGIR Conference on Information Retrieval in the Asia Pacific (SIGIR-AP).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/10.1145/3673791.3698420",
          },
        ],
      },
      {
        id: "azzopardi2024-evaluating-cognitive-biases-sigir-ap",
        year: 2024,
        type: "conference",
        authors: "Azzopardi, L., & Liu, J.",
        title:
          "Evaluating cognitive biases in conversational and generative IIR: A tutorial",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Information Retrieval in the Asia Pacific (SIGIR-AP).",
        links: [
          {
            label: "Tutorial",
            url: "https://dl.acm.org/doi/10.1145/3673791.3698437",
          },
        ],
      },
      {
        id: "wang2024-biased-users-biased-results-ictir",
        year: 2024,
        type: "conference",
        authors: "Wang, B., & Liu, J.",
        title:
          "Cognitively biased users interacting with algorithmically biased results in whole-session search on debated topics",
        venue:
          "In Proceedings of the ACM International Conference on the Theory of Information Retrieval (ICTIR 2024), Washington D.C., USA.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3664190.3672520",
          },
        ],
      },
      {
        id: "liu2024-search-under-uncertainty-sigir-tutorial",
        year: 2024,
        type: "conference",
        authors: "Liu, J., & Azzopardi, L.",
        title:
          "Search under Uncertainty: Cognitive Biases and Heuristics – A Tutorial on Testing, Mitigating and Accounting for Cognitive Biases in Search Experiments",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2024), Washington D.C., USA.",
        links: [
          {
            label: "Tutorial",
            url: "https://dl.acm.org/doi/10.1145/3626772.3661382",
          },
        ],
      },
      {
        id: "wang2024-proactive-llm-support-system",
        year: 2024,
        type: "conference",
        authors: "Wang, B.",
        title:
          "A proactive system for supporting users in interactions with large language models",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2024), Sheffield, UK.",
        links: [
          {
            label: "Extended Abstract",
            url: "https://dl.acm.org/doi/abs/10.1145/3627508.3638325",
          },
          {
            label: "Slides",
            url: "https://drive.google.com/file/d/1eoWn3GEHTxalL3n3f4xZs0kkkozxuHJv/view",
          },
        ],
      },
      {
        id: "azzopardi2024-search-under-uncertainty-chiir",
        year: 2024,
        type: "conference",
        authors: "Azzopardi, L., & Liu, J.",
        title:
          "Search under uncertainty: Cognitive biases and heuristics – Tutorial on modeling search interaction using behavioral economics",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2024), Sheffield, UK.",
        links: [
          {
            label: "Tutorial",
            url: "https://beiir.github.io/",
          },
        ],
      },
      {
        id: "wang2024-task-supportive-personalized-hllm",
        year: 2024,
        type: "conference",
        authors: "Wang, B., Liu, J., Karimnazarov, J., & Thompson, N.",
        title:
          "Task supportive and personalized human–large language model interaction: A user study",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2024), Sheffield, UK.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/10.1145/3627508.3638344",
          },
          {
            label: "Poster",
            url: "https://drive.google.com/file/d/1PeguajZvSdtoKX-JpkX_B1kOweT4cq8o/view",
          },
        ],
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        id: "markwald2023-state-aware-eval-metrics",
        year: 2023,
        type: "journal",
        authors: "Markwald, M., Liu, J., & Yu, R.",
        title:
          "Constructing and meta-evaluating state-aware evaluation metrics for interactive search systems",
        venue: "Information Retrieval Journal.",
        links: [
          {
            label: "Paper",
            url: "https://link.springer.com/article/10.1007/s10791-023-09426-1",
          },
        ],
      },
      {
        id: "zhang2023-proxy-health-info-seeking",
        year: 2023,
        type: "journal",
        authors: "Zhang, Y., & Liu, J.",
        title:
          "Deconstructing proxy health information-seeking behavior: A systematic review",
        venue: "Library and Information Science Research, 45(3).",
        links: [
          {
            label: "Paper",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0740818823000269",
          },
        ],
      },
      {
        id: "wang2023-in-situ-expectations-web-search",
        year: 2023,
        type: "journal",
        authors: "Wang, B., & Liu, J.",
        title:
          "Investigating the role of in-situ user expectations in Web search",
        venue: "Information Processing & Management.",
        links: [
          {
            label: "Paper",
            url: "https://www.sciencedirect.com/science/article/pii/S0306457323000377",
          },
          {
            label: "Code",
            url: "https://github.com/OUHCIRGroup/User-search-expectation",
          },
        ],
      },
      {
        id: "liu2023-behavioral-econ-approach-iir-book",
        year: 2023,
        type: "book",
        authors: "Liu, J.",
        title:
          "A behavioral economics approach to interactive information retrieval: Understanding and supporting boundedly rational users",
        venue: "Springer Nature.",
        links: [
          {
            label: "Book abstract",
            url: "https://link.springer.com/book/9783031232282",
          },
        ],
      },
      {
        id: "wang2023-adaptive-search-path-recommendation",
        year: 2023,
        type: "conference",
        authors: "Wang, B., & Liu, J.",
        title:
          "Characterizing and early predicting user performance for adaptive search path recommendation",
        venue:
          "In Proceedings of the Annual Meeting of the Association for Information Science and Technology (ASIS&T).",
        extra: "Best Information Behavior Conference Paper Award (SIG-USE).",
        links: [
          {
            label: "Award",
            url: "https://www.asist.org/sig/siguse/sig-use-awards/",
          },
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.799",
          },
          {
            label: "Code",
            url: "https://github.com/OUHCIRGroup/User-search-performance",
          },
        ],
      },
      {
        id: "chen2023-reference-dependent-web-eval",
        year: 2023,
        type: "conference",
        authors: "Chen, N., Liu, J., & Sakai, T.",
        title:
          "A reference-dependent model for Web search evaluation: Understanding and measuring the experience of boundedly rational users",
        venue:
          "In Proceedings of the ACM Web Conference 2023 (TheWebConf2023), Austin, TX, USA.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3543507.3583551",
          },
        ],
      },
      {
        id: "liu2023-two-sided-fairness-framework",
        year: 2023,
        type: "conference",
        authors: "Liu, J.",
        title: "A two-sided fairness framework in search and recommendation",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2023), Austin, TX, USA.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/fullHtml/10.1145/3576840.3578332",
          },
        ],
      },
      {
        id: "lei2023-ir-academia-industry-analysis",
        year: 2023,
        type: "conference",
        authors: "Lei, J., Bu, Y., & Liu, J.",
        title:
          "Information retrieval research in academia and industry: A preliminary analysis of productivity, authorship, impact, and topic distribution",
        venue: "In iConference 2023.",
        links: [
          {
            label: "Paper",
            url: "https://link.springer.com/chapter/10.1007/978-3-031-28032-0_29",
          },
        ],
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        id: "jiang2022-limitations-future-directions-iir",
        year: 2022,
        type: "journal",
        authors: "Jiang, T., & Liu, J.",
        title:
          "Reflection on future directions: A systematic review of reported limitations and solutions in interactive information retrieval user studies",
        venue: "Aslib Journal of Information Management.",
        links: [
          {
            label: "Paper",
            url: "https://www.emerald.com/insight/content/doi/10.1108/AJIM-05-2022-0253/full/html",
          },
        ],
      },
      {
        id: "liu2022-cranfield-inspired-reusability",
        year: 2022,
        type: "journal",
        authors: "Liu, J.",
        title:
          "Toward Cranfield-inspired reusability assessment in interactive information retrieval evaluation",
        venue: "Information Processing & Management, 59(5): 103007.",
        links: [
          {
            label: "Paper",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0306457322001182",
          },
        ],
      },
      {
        id: "liu2022-uneven-gaps-graded-satisfaction-hicss",
        year: 2022,
        type: "conference",
        authors: "Liu, J., & Han, F.",
        title:
          "5-4 ≠ 4-3: On the uneven gaps between different levels of graded user satisfaction in interactive information retrieval evaluation",
        venue:
          "In Proceedings of the 56th Hawaii International Conference on System Sciences (HICSS), Maui, HI.",
        links: [
          {
            label: "Paper",
            url: "https://scholarspace.manoa.hawaii.edu/items/657d0075-2d0e-43e1-85a5-48088bbd925b",
          },
        ],
      },
      {
        id: "jung2022-childrens-interest-search-knowledge",
        year: 2022,
        type: "conference",
        authors: "Jung, Y. J., & Liu, J.",
        title:
          "Children’s interest, search, and knowledge: A pilot analysis of a STEM maker workshop",
        venue:
          "In Proceedings of the 85th Annual Meeting of the Association for Information Science and Technology (ASIS&T), 59(1).",
        extra: "Best Information Behavior Conference Poster Award (SIG-USE).",
        links: [
          {
            label: "Award",
            url: "https://www.asist.org/sig/siguse/sig-use-awards/",
          },
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.702",
          },
        ],
      },
      {
        id: "wang2022-expectations-web-search-behavior",
        year: 2022,
        type: "conference",
        authors: "Wang, B., & Liu, J.",
        title:
          "Investigating the relationship between in-situ user expectations and Web search behavior",
        venue:
          "In Proceedings of the 85th Annual Meeting of the Association for Information Science and Technology (ASIS&T), 59(1).",
        links: [
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.740",
          },
          {
            label: "Code",
            url: "https://github.com/OUHCIRGroup/User-Expectations-Web-Search-Behavior",
          },
        ],
      },
      {
        id: "liu2022-matching-diversity-acceptance-sigir",
        year: 2022,
        type: "conference",
        authors: "Liu, J., & Han, F.",
        title:
          "Matching search result diversity with user diversity acceptance in Web search sessions",
        venue:
          "In Proceedings of the ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), Madrid, Spain.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3477495.3531880",
          },
        ],
      },
      {
        id: "ghosh2022-ntcir16-data-search",
        year: 2022,
        type: "conference",
        authors: "Ghosh, S., & Liu, J.",
        title: "OUHCIR at the NTCIR-16 Data Search 2 Task",
        venue: "In Proceedings of the NTCIR-16 Conference, Tokyo, Japan.",
        links: [
          {
            label: "Paper",
            url: "https://research.nii.ac.jp/ntcir/workshop/OnlineProceedings16/pdf/ntcir/07-NTCIR16-DATA-GhoshS.pdf",
          },
        ],
      },
      {
        id: "liu2022-usefulness-oriented-sessions-jcdl",
        year: 2022,
        type: "conference",
        authors: "Liu, J., & Shah, C.",
        title:
          "Leveraging user interaction signals and task state information in adaptively optimizing usefulness-oriented search sessions",
        venue:
          "In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL), Cologne, Germany.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/10.1145/3529372.3530926",
          },
        ],
      },
      {
        id: "brown2022-reference-dependence-early-prediction",
        year: 2022,
        type: "conference",
        authors: "Brown, T., & Liu, J.",
        title:
          "A reference dependence approach to enhancing early prediction of session behavior and satisfaction",
        venue:
          "In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL), Cologne, Germany.",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3529372.3533294",
          },
        ],
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        id: "liu2021-deconstructing-search-tasks",
        year: 2021,
        type: "journal",
        authors: "Liu, J.",
        title:
          "Deconstructing search tasks in interactive information retrieval: A systematic review of task dimensions and predictors",
        venue: "Information Processing & Management, 58(3), 102522.",
        links: [
          {
            label: "Paper",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0306457321000315",
          },
        ],
      },
      {
        id: "liu2021-state-aware-meta-eval-cikm",
        year: 2021,
        type: "conference",
        authors: "Liu, J., & Yu, R.",
        title:
          "State-aware meta-evaluation of evaluation metrics in interactive information retrieval",
        venue:
          "In Proceedings of the 30th ACM International Conference on Information & Knowledge Management (CIKM).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3459637.3482190",
          },
        ],
      },
      {
        id: "liu2021-interest-development-search-as-learning",
        year: 2021,
        type: "conference",
        authors: "Liu, J., & Jung, Y. J.",
        title:
          "Interest development, knowledge learning, and interactive IR: Toward a state-based approach to search as learning",
        venue:
          "In Proceedings of the 2021 Conference on Human Information Interaction and Retrieval (CHIIR 2021).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/pdf/10.1145/3406522.3446015",
          },
        ],
      },
      {
        id: "ghosh2021-speech-acts-multi-channel",
        year: 2021,
        type: "conference",
        authors: "Ghosh, S., & Ghosh, S.",
        title:
          "Classifying speech acts using multi-channel deep attention network for task-oriented conversational search agents",
        venue:
          "In Proceedings of the 2021 Conference on Human Information Interaction and Retrieval (CHIIR 2021).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3406522.3446057",
          },
        ],
      },
      {
        id: "ghosh2021-do-users-need-human-like",
        year: 2021,
        type: "conference",
        authors: "Ghosh, S., & Ghosh, S.",
        title:
          "“Do users need human-like conversational agents?” – Exploring conversational system design using framework of human needs",
        venue: "DESIRES workshop.",
        links: [
          {
            label: "Paper",
            url: "http://desires.dei.unipd.it/papers/paper-07.pdf.pdf",
          },
        ],
      },
      {
        id: "wang2021-implicit-search-states",
        year: 2021,
        type: "conference",
        authors: "Wang, B., & Liu, J.",
        title:
          "Extracting the implicit search states from explicit behavioral signals in complex search tasks",
        venue:
          "Proceedings of the Association for Information Science and Technology, 58(1), 854–856.",
        links: [
          {
            label: "Paper",
            url: "https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.587",
          },
          {
            label: "Code",
            url: "https://github.com/OUHCIRGroup/Implicit-Search-States-Explicit-Behaviors",
          },
        ],
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        id: "sarkar2020-implicit-information-need",
        year: 2020,
        type: "journal",
        authors: "Sarkar, S., Mitsui, M., Liu, J., & Shah, C.",
        title:
          "Implicit information need as explicit problems, help, and behavioral signals",
        venue: "Information Processing & Management, 57(2), 102069.",
        links: [
          {
            label: "Paper",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0306457319300457",
          },
        ],
      },
      {
        id: "liu2020-reference-dependence-effects",
        year: 2020,
        type: "conference",
        authors: "Liu, J., & Han, F.",
        title:
          "Investigating reference dependence effects on user search interaction and satisfaction: A behavioral economics perspective",
        venue:
          "In Proceedings of the 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2020).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3397271.3401085",
          },
        ],
      },
      {
        id: "liu2020-identifying-predicting-task-states",
        year: 2020,
        type: "conference",
        authors: "Liu, J., Sarkar, S., & Shah, C.",
        title: "Identifying and predicting the states of complex search tasks",
        venue:
          "In Proceedings of the 2020 Conference on Human Information Interaction and Retrieval (CHIIR 2020).",
        links: [
          {
            label: "Paper",
            url: "https://dl.acm.org/doi/abs/10.1145/3343413.3377976",
          },
        ],
      },
    ],
  },
];

// Flattened list (useful for helpers)
export const allPublications: Publication[] = publicationsByYear.flatMap(
  (yearGroup) => yearGroup.items
);

// Helper: get publications by a list of IDs (for Recent Publications on home page)
export function getPublicationsByIds(ids: string[]): Publication[] {
  const idSet = new Set(ids);
  return allPublications.filter((pub) => idSet.has(pub.id));
}

// Example: a curated list of recent publications to show on the home page
export const recentPublicationIds: string[] = [
  "dewan2025-llm-usefulness-labeling",
  "chen2025-decoy-effect-search-interaction",
  "jiang2025-data-reuse",
  "wang2024-task-supportive-personalized-hllm",
];
