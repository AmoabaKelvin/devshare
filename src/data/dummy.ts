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
    description:
      "Function for generating slugs from a title and handling duplicates",
    code: `const slugify = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return slug;
}`,
    author: "Kelvin Amoaba",
    language: "typescript",
    tags: ["typescript", "slug", "slugify"],
    date: "2021-01-01",
  },
  {
    description:
      "Binary search implementation in Golang. Returns the index of the target if found, else -1",
    code: `func binarySearch(arr []int, target int) int {
    left := 0
    right := len(arr) - 1

    for left <= right {
        mid := (left + right) / 2

        if arr[mid] == target {
            return mid
        } else if arr[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
  
    return -1
}
    `,
    author: "Kelvin Amoaba",
    language: "Go",
    tags: ["DSA", "search", "binary"],
    date: "2021-01-01",
  },
  {
    author: "Cynthia Amoaba",
    description: "Function for generating a random number between two values",
    code: `const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    `,
    language: "typescript",
    tags: ["typescript", "random", "number"],
    date: "2021-01-02",
  },
  {
    author: "Neil Ohene",
    description: "Function for checking if a string is a palindrome",
    code: `public static int factorial(int num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
    `,
    language: "Java",
    tags: ["palindrome", "string"],
    date: "2021-01-03",
  },
  {
    author: "Elorm Dokosi",
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
    tags: ["typescript", "factorial", "number"],
    date: "2021-01-04",
  },
  {
    author: "Halldean",
    description: "Function for sorting an array of numbers in ascending order",
    code: `const sortAscending = (arr: number[]) => {
      return arr.sort((a, b) => a - b);
    }
    `,
    language: "typescript",
    tags: ["typescript", "sort", "array"],
    date: "2021-01-05",
  },
];
