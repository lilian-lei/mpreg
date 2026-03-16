import { Github, Star, GitFork, Code, ExternalLink } from "lucide-react";

export default function Repository() {
  const repositories = [
    {
      name: "mpreg",
      description: "Main repository for the M-preg project",
      url: "https://github.com/lilian-lei/mpreg",
      stars: "1.2k",
      forks: "234",
      language: "TypeScript",
      color: "#3178c6",
    },
    {
      name: "casino-api",
      description: "Backend API for MPreg platform",
      url: "#casino-api",
      stars: "842",
      forks: "156",
      language: "Node.js",
    },
    {
      name: "game-engine",
      description: "Core game engine for slots, roulette, and craps",
      url: "#game-engine",
      stars: "623",
      forks: "98",
      language: "Rust",
      color: "#dea584",
    },
    {
      name: "mobile-app",
      description: "React Native mobile application",
      url: "#mobile-app",
      stars: "512",
      forks: "87",
      language: "React Native",
      color: "#61dafb",
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-background relative">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Github className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Repository</h1>
          <p className="text-xl text-muted-foreground">
            Open source projects and codebases
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-4">{repo.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: repo.color }}
                      />
                      <span className="text-foreground">{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contributing Section */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Contributing</h3>
          <p className="text-muted-foreground mb-4">
            We welcome contributions from the community! Feel free to submit issues and pull requests to any of our repositories.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/lilian-lei/mpreg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              Visit Main Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}