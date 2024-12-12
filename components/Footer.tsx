import {Github, Pill, Twitter} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-serpent-black/80 backdrop-blur-sm text-knowledge-blue py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">CA: 8BQdCZt4hdbbn62bYgN2LrFf2pvMeZt8xaqZqHN3pump</div>
        <div className="flex space-x-4">
          <a href="https://x.com/TheEVE_AI" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <Twitter size={28}/>
          </a>
          <a href="https://github.com/TheDigitalEve/TheDigitalEveCore" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <Github size={28}/>
          </a>
          <a href="https://pump.fun/coin/8BQdCZt4hdbbn62bYgN2LrFf2pvMeZt8xaqZqHN3pump" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <Pill size={28}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

