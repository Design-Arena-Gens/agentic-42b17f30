"use client";

import { useState } from "react";

interface AITool {
  id: string;
  name: string;
  category: string;
  url: string;
  description: string;
  features: string[];
  pricing: string;
  tags: string[];
}

const aiTools: AITool[] = [
  {
    id: "cursor",
    name: "Cursor",
    category: "IDE",
    url: "https://cursor.sh",
    description: "AI-powered code editor built on VSCode with advanced autocomplete and chat features",
    features: ["AI chat", "Code completion", "Multi-file editing", "Terminal integration"],
    pricing: "Free / $20/mo Pro",
    tags: ["editor", "autocomplete", "chat"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "Code Assistant",
    url: "https://github.com/features/copilot",
    description: "AI pair programmer that suggests code completions in real-time",
    features: ["Code suggestions", "Multi-language support", "Context-aware", "IDE plugins"],
    pricing: "$10/mo Individual / $19/user/mo Business",
    tags: ["autocomplete", "github", "vscode"]
  },
  {
    id: "claude-code",
    name: "Claude Code",
    category: "Code Assistant",
    url: "https://claude.com/claude-code",
    description: "Terminal-based AI coding assistant by Anthropic",
    features: ["CLI interface", "Full codebase context", "Multi-step tasks", "File operations"],
    pricing: "Included with Claude Pro",
    tags: ["cli", "terminal", "autonomous"]
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    category: "UI Generation",
    url: "https://v0.dev",
    description: "Generate UI components from text descriptions using AI",
    features: ["React components", "Tailwind CSS", "shadcn/ui", "Instant preview"],
    pricing: "Free credits / $10/mo",
    tags: ["ui", "react", "frontend"]
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    category: "IDE",
    url: "https://replit.com/ai",
    description: "Cloud IDE with integrated AI assistance",
    features: ["Code completion", "Chat", "Deployment", "Collaboration"],
    pricing: "Free / $20/mo Pro",
    tags: ["cloud", "ide", "deployment"]
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "Code Assistant",
    url: "https://www.tabnine.com",
    description: "AI code assistant with privacy-focused local models",
    features: ["Code completion", "Private models", "Team learning", "Multi-language"],
    pricing: "Free / $12/mo Pro",
    tags: ["autocomplete", "privacy", "local"]
  },
  {
    id: "codeium",
    name: "Codeium",
    category: "Code Assistant",
    url: "https://codeium.com",
    description: "Free AI-powered toolkit for code completion and chat",
    features: ["Autocomplete", "Chat", "Code search", "70+ languages"],
    pricing: "Free for individuals",
    tags: ["free", "autocomplete", "chat"]
  },
  {
    id: "windsurf",
    name: "Windsurf",
    category: "IDE",
    url: "https://codeium.com/windsurf",
    description: "Agentic IDE by Codeium with Cascade AI flow",
    features: ["AI flows", "Context awareness", "Multi-file edits", "Terminal integration"],
    pricing: "Free / Pro tiers available",
    tags: ["ide", "agentic", "autonomous"]
  },
  {
    id: "continue",
    name: "Continue",
    category: "Code Assistant",
    url: "https://continue.dev",
    description: "Open-source autopilot for VSCode and JetBrains",
    features: ["Chat", "Autocomplete", "Custom models", "Open source"],
    pricing: "Free (OSS)",
    tags: ["open-source", "vscode", "jetbrains"]
  },
  {
    id: "aider",
    name: "Aider",
    category: "CLI Tool",
    url: "https://aider.chat",
    description: "AI pair programming in your terminal",
    features: ["Git integration", "Multi-file editing", "Claude/GPT support", "CLI"],
    pricing: "Free (OSS)",
    tags: ["cli", "open-source", "git"]
  },
  {
    id: "supermaven",
    name: "Supermaven",
    category: "Code Assistant",
    url: "https://supermaven.com",
    description: "Fast AI code completion with 1M token context window",
    features: ["Fast completion", "Large context", "IDE plugins", "Low latency"],
    pricing: "Free / $10/mo Pro",
    tags: ["autocomplete", "fast", "large-context"]
  },
  {
    id: "codex-cli",
    name: "OpenAI Codex",
    category: "API",
    url: "https://openai.com/blog/openai-codex",
    description: "AI system that translates natural language to code",
    features: ["API access", "Multi-language", "Natural language", "Code generation"],
    pricing: "API pricing",
    tags: ["api", "openai", "generation"]
  },
  {
    id: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    category: "Code Assistant",
    url: "https://sourcegraph.com/cody",
    description: "AI coding assistant with codebase context",
    features: ["Chat", "Autocomplete", "Code search", "Enterprise"],
    pricing: "Free / Enterprise",
    tags: ["enterprise", "search", "context"]
  },
  {
    id: "phind",
    name: "Phind",
    category: "Search Engine",
    url: "https://www.phind.com",
    description: "AI search engine for developers",
    features: ["Code search", "Technical answers", "Real-time web", "VS Code extension"],
    pricing: "Free / $15/mo Pro",
    tags: ["search", "documentation", "learning"]
  },
  {
    id: "copilot-workspace",
    name: "GitHub Copilot Workspace",
    category: "Development Environment",
    url: "https://githubnext.com/projects/copilot-workspace",
    description: "Task-centric development environment with AI",
    features: ["Issue to PR", "Planning", "Implementation", "Testing"],
    pricing: "Preview access",
    tags: ["github", "workflow", "experimental"]
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    category: "Web IDE",
    url: "https://bolt.new",
    description: "AI-powered full-stack web development in browser",
    features: ["Prompt to app", "Live preview", "Full-stack", "Instant deploy"],
    pricing: "Free / Pro tiers",
    tags: ["web", "fullstack", "instant"]
  },
  {
    id: "lovable",
    name: "Lovable (GPT Engineer)",
    category: "App Builder",
    url: "https://lovable.dev",
    description: "Build full-stack applications from prompts",
    features: ["Full app generation", "Database", "Auth", "Deployment"],
    pricing: "Free / $20/mo Pro",
    tags: ["fullstack", "no-code", "rapid"]
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    category: "Data Analysis",
    url: "https://julius.ai",
    description: "AI data analyst for code and data science",
    features: ["Data analysis", "Visualization", "Python", "SQL"],
    pricing: "Free / $20/mo Pro",
    tags: ["data", "analysis", "python"]
  }
];

const categories = ["All", "IDE", "Code Assistant", "CLI Tool", "UI Generation", "API", "Search Engine", "Development Environment", "Web IDE", "App Builder", "Data Analysis"];
const allTags = Array.from(new Set(aiTools.flatMap(tool => tool.tags))).sort();

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => tool.tags.includes(tag));
    const matchesSearch = searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTags && matchesSearch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                ⚔️ AI Tools Arena
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Test, compare, and evaluate AI developer tools
              </p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {filteredTools.length} tools
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search tools by name, description, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Tags {selectedTags.length > 0 && `(${selectedTags.length} selected)`}
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-green-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedCategory !== "All" || selectedTags.length > 0 || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedTags([]);
                setSearchQuery("");
              }}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {tool.name}
                </h3>
                <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                  {tool.category}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {tool.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Features:
                </h4>
                <ul className="space-y-1">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                      <span className="mr-1.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {tool.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {tool.pricing}
                </span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Try it →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No tools found matching your criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedTags([]);
                setSearchQuery("");
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
            AI Tools Arena • A curated collection of AI developer tools for testing and comparison
          </p>
        </div>
      </footer>
    </div>
  );
}
