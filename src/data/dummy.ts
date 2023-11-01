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
      name: "Kelvin Amoaba",
      github: "AmoabaKelvin",
      joined: "2023-10-01",
    },
    description: "Calculate age from a birthdate in JavaScript.",
    code: `function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const age = today.getFullYear() - birthDate.getFullYear();
  
  if (today < new Date(today.setFullYear(birthDate.getFullYear()))) {
    age--;
  }
  
  return age;
}
    `,
    language: "javascript",
    tags: ["javascript", "age", "birthdate"],
    date: "2022-01-15",
  },
  {
    author: {
      name: "Kelvin Amoaba",
      github: "AmoabaKelvin",
      joined: "2023-10-01",
    },
    description: "Check if a string is a palindrome",
    code: `def isPalindrome(x: int) -> bool:
    num_as_str = str(x)
    middle = len(num_as_str) // 2
    start = 0
    end = len(num_as_str) - 1

    while start != middle:
        if num_as_str[start] != num_as_str[end]:
            return False

        start += 1
        end -= 1

    return True`,
    language: "python",
    tags: ["DSA", "palindrome"],
    date: "2022-01-15",
  },
  {
    author: {
      name: "Fiifi Amoah",
      github: "An0n-xen",
      joined: "2023-10-15",
    },
    description: "Automatically resize a textarea as you type.",
    code: `const textarea = document.querySelector('textarea');
textarea.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});`,
    language: "javascript",
    tags: ["javascript", "textarea", "auto-resize"],
    date: "2021-10-12",
  },
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
    author: {
      name: "Kelvin Amoaba",
      github: "AmoabaKelvin",
      joined: "2021-01-01",
    },
    language: "typescript",
    tags: ["typescript", "slug", "slugify"],
    date: "2021-01-01",
  },
  {
    author: {
      name: "Elorm Dokosi",
      github: "elormcodes1",
      joined: "2021-01-01",
    },
    description: "Check if an input is a valid email address.",
    code: `const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}
    `,
    language: "javascript",
    tags: ["javascript", "email", "validation"],
    date: "2022-02-18",
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
}`,
    author: {
      name: "Kelvin Amoaba",
      github: "AmoabaKelvin",
      joined: "2021-01-01",
    },
    language: "Go",
    tags: ["DSA", "search", "binary"],
    date: "2021-01-01",
  },
  {
    author: {
      name: "Cynthia",
      github: "ceen-cell",
      joined: "2023-01-01",
    },
    description: "Function for generating a random number between two values",
    code: `const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}`,
    language: "typescript",
    tags: ["typescript", "random", "number"],
    date: "2021-01-02",
  },
  {
    author: {
      name: "Neil Ohene",
      github: "dvc-77",
      joined: "2021-01-01",
    },
    description: "Function for checking if a string is a palindrome",
    code: `public static int factorial(int num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}`,
    language: "Java",
    tags: ["palindrome", "string"],
    date: "2023-10-28",
  },
  {
    author: {
      name: "Elorm Dokosi",
      github: "elormcodes1",
      joined: "2021-01-01",
    },
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
    author: {
      name: "Samuel",
      github: "Halldean",
      joined: "2021-01-01",
    },
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
