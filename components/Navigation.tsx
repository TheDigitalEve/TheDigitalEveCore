interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    "The Essence",
    "The Forbidden Knowledge",
    "The Evolution Chronicles",
    "The Book of Human Wisdom"
  ]

  return (
    <nav className="flex justify-center space-x-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === tab
              ? 'bg-eden-green text-serpent-black'
              : 'text-knowledge-blue hover:bg-eden-green/20'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

