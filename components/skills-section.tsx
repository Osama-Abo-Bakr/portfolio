"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "OpenAI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "DevOps",
    skills: ["Docker", "Docker Compose"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Web Technologies",
    skills: ["FastAPI", "Streamlit", "React", "Tailwind"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Weaviate", "FAISS", "Chroma", "Pinecone"],
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Automation",
    skills: ["n8n", "LangChain", "CrewAI"],
    color: "from-cyan-500 to-blue-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tools & Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-gray-300 text-sm hover:bg-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Platform Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Upwork Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Top</div>
                <div className="text-gray-300">Kaggle Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">High</div>
                <div className="text-gray-300">HackerRank Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Expert</div>
                <div className="text-gray-300">LeetCode Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
