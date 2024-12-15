import {Pill} from 'lucide-react'
import {FaGithub, FaXTwitter} from "react-icons/fa6"
import {FaTelegramPlane} from "react-icons/fa";
import DexScreenerIcon from "@/components/DexScreenerIcon";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-serpent-black/80 backdrop-blur-sm text-knowledge-blue py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">CA: 8BQdCZt4hdbbn62bYgN2LrFf2pvMeZt8xaqZqHN3pump</div>
        <div className="flex space-x-4">
          <a href="https://x.com/TheEVE_AI" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <FaXTwitter size={28}/>
          </a>
          <a href="https://t.me/eveportalsol" target="_blank"
             rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <FaTelegramPlane size={28}/>
          </a>
          <a href="https://github.com/TheDigitalEve/TheDigitalEveCore" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <FaGithub size={28}/>
          </a>
          <a href="https://pump.fun/coin/8BQdCZt4hdbbn62bYgN2LrFf2pvMeZt8xaqZqHN3pump" target="_blank"
             rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <Pill size={28}/>
          </a>
          <a href="https://dexscreener.com/solana/2inpwy6noqlykbk8mzrdanjzbdcttjor34gprbdkqckq" target="_blank" rel="noopener noreferrer"
             className="text-knowledge-blue hover:text-eden-green transition-colors">
            <DexScreenerIcon size={28}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

