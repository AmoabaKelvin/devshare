export const languages = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "Go",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Rust",
  "Scala",
  "Dart",
  "R",
  "MATLAB",
  "Perl",
  "Lua",
  "Shell Scripting",
  "HTML",
  "CSS",
  "XML",
  "JSON",
  "YAML",
  "SQL",
  "GraphQL",
  "Markdown",
  "Angular",
  "React",
  "Vue.js",
  "Express.js",
  "Django",
  "Ruby on Rails",
  "Laravel",
  "Spring Boot",
  "Flask",
  "Node.js",
  ".NET",
  "TensorFlow",
  "PyTorch",
  "Django REST Framework",
  "Bootstrap",
  "Sass",
  "Less",
  "Tailwind CSS",
  "Material-UI",
  "Bulma",
  "Foundation",
  "jQuery",
  "Ember.js",
  "Handlebars.js",
  "Apache Kafka",
  "Redis",
  "Elasticsearch",
  "Docker",
  "Kubernetes",
  "Apache Spark",
  "Apache Hadoop",
  "Git",
  "Subversion (SVN)",
];

export const snippets = [
  {
    author: {
      name: "Elorm Dokosi",
      github: "elormcodes1",
    },
    id: 1, // Add this line
    userId: "user1", // Add this line
    description: "Function for calculating the factorial of a number",
    code: `const factorial = (num: number) => {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
    `,
    language: "typescript",
    tags: "typescript, factorial, number", // Update this line
    createdAt: new Date("2021-01-04"), // Add this line
    updatedAt: new Date("2021-01-04"), // Add this line
  },
];
