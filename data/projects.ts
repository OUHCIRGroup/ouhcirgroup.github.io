export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  links?: { label: string; url: string }[];
};
   
export const projects: Project[] = [
  {
    id: "imls",
    title: "Integrating Generative AI into Children's Maker-Based Learning",
    image: "/projects/imls.jpg",
    description:
      "This IMLS project investigates the need and feasibility of integrating Generative Al models, interfaces, and agents into children's information seeking, evaluation, and maker-based learning experiences, particularly under STEM+C (science, technology, engineering, mathematics, and computing), in public libraries. The project explores how Large Language Model (LLM)-enabled conversational systems can be utilized and evaluated to better address children's needs in hands-on maker-based learning activities, and at the same time, how maker-based experience can be used to promote children's learning skills and Al literacy. Award number: LG-257169-OLS",
  },
  {
    id: "human-bias-fairness-explainability",
    title: "Human Bias, Fairness, and Explainability in Human-AI Interactions",
    image: "/projects/HAII.png",
    description:
      "As artificial intelligence (AI) assisted information systems have become ubiquitous in workplaces and everyday lives, understanding and accounting for fairness has gained increasing attention in the design and evaluation of such systems. This project not only characterizes data and algorithmic biases, but also highlights the cognitive and perceptual biases that may exacerbate system biases and lead to unfair decisions. Within the framework, we analyze the interactions between human and system biases in human-AI interactions, especially in the context of AI-enabled chat and conversational search, intelligent recommender systems, and user–chatbot interactions.",
  },
  {
    id: "crii-bias-aware-iir",
    title:
      "CRII:III: A Bias-Aware Approach to Modeling Users in Interactive Information Retrieval",
    image: "/projects/project1_crii.png",
    description:
      "People often act intuitively and are subject to systematic biases when making decisions under uncertainty. This project seeks to study users’ systematic biases and leverage the learned knowledge in improving the explanatory and predictive power of IR models. The outcomes can help people better leverage the power of information by: (1) incorporating knowledge about their biases into search algorithms, and (2) proactively capturing bias-related search problems and promoting informed, unbiased decision-making.",
    links: [
      {
        label: "NSF Award",
        url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2106152&HistoricalAwards=false",
      },
    ],
  },
  {
    id: "session-level-eval",
    title: "Session Level Evaluation Metric",
    image: "/projects/project3_session level eval.png",
    description:
      "A search session is generally comprised of several queries trying to complete a particular search task. Each query is representative of the search state of the user involved in the search task. In this project, we go beyond traditional query-level evaluation metrics and work toward a more holistic evaluation metric that can represent both user satisfaction and the relevance of documents retrieved across an entire search session.",
  },
  {
    id: "human-system-biases-fair-ir",
    title:
      "Modeling Interaction Between Human Biases and System Biases for Fair IR",
    image: "/projects/project4_interaction between human and system biases.png",
    description:
      "This project leverages insights about human and algorithmic biases to develop and evaluate novel learning-to-rank methods for useful, fair, and efficient large-scale information access. The ultimate goal is to design and evaluate a bias-aware information retrieval system that promotes useful and fairly distributed results under varying motivating tasks. The system aims to enhance the effectiveness of search interactions with limited in-situ user feedback, address user biases in query formulation and information examination, and improve fairness in the exposure of topics, opinions, and content generators from diverse backgrounds.",
  },
  {
    id: "reusability-iir",
    title:
      "Assessing and Improving the Reusability of Research Resources in Interactive Information Retrieval",
    image: "/projects/Project 4_reusability.png",
    description:
      "Reusing resources from existing studies is essential for algorithmic experiments and often serves as the initial step for replication studies, which are critical for advancing scientific research. To evaluate search systems, researchers often reuse standard test collections as a common empirical basis for comparison and to improve the cost-effectiveness of data collection. This project develops a reusability assessment framework for session test collections collected under complex search tasks, assessing how well they support evaluating system performance and how broadly IIR research resources can be reused for new tasks.",
  },
  {
    id: "covid-usefulness-credibility",
    title:
      "Understanding Users’ Biased Usefulness and Credibility Judgments of COVID-19 Search Results",
    image: "/projects/Project5_COVID-19.png",
    description:
      "Despite increasing research attention to algorithmic fairness and transparency, the interactions between boundedly rational users and biased information systems remain largely unexplored. This project focuses on COVID-19 information evaluation in web search and explores how users’ biases affect their judgments of the usefulness and credibility of retrieved search results. It also considers different modalities of interaction, such as graphical interfaces and conversational systems.",
  },
  {
    id: "interest-development-sal",
    title:
      "Interest Development and Knowledge Construction in Search as Learning",
    image: "/projects/model.png",
    description:
      "Among many cognitive factors associated with search as learning (SAL), interest development is a key dimension because it strongly affects learning performance yet remains understudied in interactive IR. We develop an interest–search–learning (ISL) model to reconceptualize learning activities in information seeking and retrieval. This project aims to: (1) characterize interactions between interest development, learning, and search behaviors; (2) synthesize and propose measures for capturing in-situ progress and state variations in interest and knowledge; and (3) develop system supports to facilitate interest development and effective learning in search interactions.",
  },
];
