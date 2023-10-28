import { Folders, Pin, Star } from "lucide-react";

import { snippets } from "@/data/dummy";
import { getGithubStatsForUser } from "@/lib/utils";

import SavedSnippets from "../../snippets/_components/saved-snippets";

const ProfileViewPage = async ({ params }: { params: { person: string } }) => {
  const githubStats = await getGithubStatsForUser(params.person);

  return (
    <div className="grid grid-cols-1 md:grid-cols-7">
      <div className="flex flex-col w-full h-full md:col-span-5">
        {/* TODO: CHANGE TO NEXT IMAGE */}
        <h1 className="mt-3 text-4xl font-bold text-center text-purple-400">
          Kelvin Amoaba
        </h1>
        <p className="flex items-center justify-center gap-2 mt-4 text-center text-slate-300">
          <span>
            Joined on <span className="text-white">June 2023</span>
          </span>
          <span className="text-white">•</span>
          <span>1 snippet shared</span>
        </p>

        <p className="mt-10 leading-7 text-left text-white">
          Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis neque animi id, dolore corrupti provident! Molestias, in
          magni? Eum, reiciendis dolorum. Cumque, officia sed tempore eum
          inventore quia autem magni. dolor sit amet consectetur adipisicing
          elit. Doloremque molestias deserunt, temporibus tenetur odio, sint
          excepturi soluta enim illum unde aliquid cum impedit quia consequatur
          fugiat officia fuga, blanditiis vel!
        </p>

        {/*  Shared snippets */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-2 text-sm text-center text-white">
            <span className="text-2xl font-bold text-purple-400">
              Kelvin&apos;s Shared Snippets
            </span>
          </div>

          {/* Snippets */}
          {snippets.slice(0, 3).map((snippet, id) => (
            <SavedSnippets key={id} snippet={snippet} />
          ))}
        </div>
      </div>
      <div className="sticky hidden h-screen col-span-2 ml-10 md:block top-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={githubStats.avatar_url}
          alt="John Doe"
          className="self-center w-full rounded-lg shadow-md"
        />

        {/* Display some stats */}
        <p className="flex items-center justify-center gap-2 mt-4 text-sm text-center text-slate-300">
          <span>
            <span className="text-white">{githubStats.followers}</span>{" "}
            followers
          </span>
          <span className="text-white">•</span>
          <span>
            <span className="text-white">{githubStats.following}</span>{" "}
            following
          </span>
        </p>

        {/* Repositories */}
        <span className="flex items-center justify-center gap-2 mt-4 text-sm text-center text-slate-300">
          <Folders size={16} />
          <span className="text-white">
            {githubStats.public_repos}{" "}
            <span className="text-slate-300">Repositories</span>
          </span>
        </span>

        <a
          href={githubStats.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 my-4 text-white bg-gray-700 rounded-md hover:bg-gray-600"
        >
          <span>View Github</span>
        </a>

        {/* Pinned repos */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-center text-white">
            <Pin size={16} />
            <span className="text-slate-300">Pinned Repos</span>
          </div>

          {/* Repos */}

          {githubStats.pinnedItems.edges.map((repo: any, id: number) => (
            <div key={id} className="flex flex-col">
              <p className="flex items-center justify-between">
                <a
                  href={repo.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400"
                >
                  {repo.node.name}
                </a>
                <p className="flex gap-1 text-sm text-slate-300">
                  <Star size={16} />
                  <span className="text-white">{repo.node.stargazerCount}</span>
                </p>
              </p>
              <p className="text-sm text-slate-300">
                {repo.node.description.slice(0, 90)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPage;
