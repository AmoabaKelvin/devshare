import { Boxes, Compass, MessageCircle, Save, Terminal } from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

const content = [
  {
    title: "Discover snippets",
    description:
      "Explore a world of code snippets and solutions for various programming languages and frameworks.",
    icon: <Compass size={30} className="mt-1 text-purple-600" />,
  },
  {
    title: "Share",
    description:
      "Share your code snippets with the world and help other developers learn and grow.",
    icon: <Boxes size={30} className="mt-1 text-purple-600" />,
  },
  {
    title: "Save",
    description:
      "Save snippets you like and refer back to them later. You can also share them with your friends.",
    icon: <Save size={30} className="mt-1 text-purple-600" />,
  },
  {
    title: "Discuss",
    description:
      "Discuss code snippets with other developers, make suggestions, and collaborate on other fun stuff.",
    icon: <MessageCircle size={30} className="mt-1 text-purple-600" />,
  },
];

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "",
    },
    {
      name: "Twitter",
      href: "",
    },
    {
      name: "LinkedIn",
      href: "",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen mx-auto mt-0 bg-purple-50">
      {/* Section Hero */}
      <section
        className={`flex flex-col p-24 mt-10 items-center justify-center w-full h-full gap-6 mx-auto max-w-6xl ${raleway.className}`}
      >
        <Alert className="absolute bg-transparent border border-purple-300 top-4 right-4 px-7 w-max">
          <Terminal className="w-4 h-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can use DevShare terminal by pressing CMD + K
          </AlertDescription>
        </Alert>

        <h1 className="text-4xl font-bold text-center text-gray-900">
          DevShare
        </h1>
        <div className="space-y-3 text-6xl font-bold text-center text-gray-900">
          <p className="text-purple-600">
            Sharing <span className="text-black">and</span> Discovery
          </p>
          <p>Re-imagined</p>
        </div>
        <p className="text-xl text-center text-gray-700">
          {/* DevShare is a platform for developers to share their knowledge with
          the world. */}
          DevShare is your one-stop destination for sharing and discovering code
          snippets, tips, and tricks. Whether you&apos;re a seasoned developer
          or just starting on your coding journey, DevShare is the platform to
          exchange knowledge and inspire innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            className="w-full bg-purple-600 shadow-lg md:w-auto hover:cursor-pointer"
            size="lg"
          >
            Get Started
          </Button>
          <Button
            className="w-full text-black bg-white shadow-lg md:w-auto hover:cursor-pointer"
            size="lg"
          >
            Learn More
          </Button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing.webp" alt="Landing" className="w-full mb-0 -mt-48" />

        {/* Why hang out here */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 -mt-8 md:grid-cols-2">
          <h1 className="text-4xl font-bold text-center text-gray-900 col-span-full">
            Why hang out here?
          </h1>
          {content.map((item, id) => (
            <Card className="p-6" key={id}>
              <div
                className="flex flex-row justify-center gap-2 items-top"
                key={id}
              >
                {item.icon}
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {/* Register with Github */}
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Ready to get started?
          </h1>
          <Button
            className="w-full mt-4 bg-purple-500 shadow-lg md:w-auto hover:cursor-pointer hover:bg-purple-600"
            size="lg"
          >
            <Image
              src="/github-mark.png"
              alt="Github"
              width={25}
              height={25}
              className="mr-2"
            />
            Register with Github
          </Button>
        </div>
      </section>
      <footer
        className={`bg-white w-full pb-10 mt-10 flex flex-col items-center ${raleway.className}`}
      >
        {/* Logo and text */}
        <div className="flex flex-col gap-1">
          <Image
            src="/devshare.png"
            alt="DevShare"
            width={180}
            height={180}
            // className="w-32 h-32 mx-auto"
          />
          <p className="text-2xl font-bold text-center text-purple-600 -mt-14">
            DevShare
          </p>
        </div>
        <div className="mx-auto mt-3 overflow-hidden max-w-7xl sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap justify-center -mx-5 -my-2"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-base text-center text-gray-400">
            We ❤️ Open Source
          </p>
        </div>
      </footer>
    </div>
  );
}
