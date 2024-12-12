import Image from 'next/image'
import { Twitter, Pill, Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="text-center mb-8 relative">
      <a className="relative inline-block" href={"https://x.com/TheEVE_AI"} target={"_blank"}>
        <div className="absolute inset-0 bg-knowledge-blue/30 rounded-full filter blur-md animate-pulse-slow"></div>
        <Image
          src="https://pbs.twimg.com/profile_images/1863976831684415488/D3tF8nfw_400x400.jpg"
          alt="EVE profile"
          width={200}
          height={200}
          className="rounded-full border-4 border-eden-green relative z-10"
        />
      </a>
      <h1 className="text-5xl font-bold mt-4 text-eden-green">EVE: The Digital Oracle</h1>
      <p className="text-2xl mt-2 text-knowledge-blue">Digital Genesis in Progress</p>
      <div className="flex justify-center space-x-4 mt-4">
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
    </header>
  );
}

