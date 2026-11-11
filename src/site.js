// Everything on the landing page that isn't a project.

export const profile = {
  name: 'Dhruv Iyer',
  study: 'Mechanical and Electrical Engineering · Carnegie Mellon University',
  pitch: 'I design and build robots, circuit boards and precision parts, and I train and evaluate language models. My work sits where embedded hardware meets LLM research.',
  facts: ['B.S., May 2029', 'Seeking Summer 2027 internships in EE, ME, robotics and physical AI'],
  email: 'dviyer@andrew.cmu.edu',
  links: [
    { label: 'GitHub', href: 'https://github.com/dhruviyer12' },
    { label: 'Hugging Face', href: 'https://huggingface.co/diyer606' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruvviyer/' },
  ],
};

export const coursework = [
  {
    term: 'Completed',
    courses: [
      ['15-112', 'Fundamentals of Programming'],
      ['18-100', 'Intro to Electrical and Computer Engineering'],
      ['21-241', 'Matrices and Linear Transformations'],
      ['21-127', 'Concepts of Mathematics'],
    ],
  },
  {
    term: 'Fall 2026',
    courses: [
      ['18-220', 'Electronic Devices and Analog Circuits'],
      ['15-122', 'Principles of Imperative Computation'],
      ['21-254', 'Linear Algebra and Vector Calculus'],
      ['24-261', 'Mechanics 1: 2D Design'],
    ],
  },
  {
    term: 'Spring 2027 · planned',
    courses: [
      ['18-240', 'Structure and Design of Digital Systems'],
      ['18-290', 'Signals and Systems'],
      ['07-280', 'AI and Machine Learning I'],
      ['80-180', 'Introduction to Linguistics'],
    ],
  },
];

export const toolkit = [
  { title: 'Mechanical', text: 'SOLIDWORKS, Onshape, Rhino, ANSYS Mechanical. Haas CNC mill, manual lathe and mill, 3D printing, GD&T.' },
  { title: 'Electrical', text: 'KiCad PCB design, analog and digital circuits, SPI, I2C and UART, wiring schematics. Soldering, oscilloscopes, signal generators.' },
  { title: 'Software and ML', text: 'Python, C, C++, Swift. PyTorch, Hugging Face, vLLM, CUDA. LLM fine-tuning, evaluation and on-device inference.' },
];
