/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl w-full flex flex-col items-center space-y-12 relative z-10">


        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 p-4 rounded-full border border-white/10"
        >
          <CheckCircle2 className="w-12 h-12 text-indigo-400" />
        </motion.div>

        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Pagamento confirmado <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
              com sucesso
            </span>
          </h1>
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed max-w-md"
        >
          <div className="space-y-4">
            <p>
              Seu acesso a <span className="text-white font-medium">Viralpulse</span> já foi liberado.
            </p>
            <div className="space-y-2 text-base md:text-lg">
              <p>
                Se você ainda não criou sua conta, utilize o mesmo e-mail da compra.
              </p>
              <p>
                Se já possui conta, clique para entrar com sua chave de acesso.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
              <p className="text-sm uppercase tracking-widest text-slate-500 font-bold">
                Insira sua chave de acesso abaixo
              </p>
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-500/50 to-indigo-500/50 inline-block w-full">
                <div className="bg-[#0a0a0a] px-6 py-4 rounded-xl">
                  <p className="text-purple-400 font-bold text-lg md:text-xl tracking-wider">
                    <span className="text-white select-all">viral2026k</span>
                  </p>
                  <p className="text-slate-500 text-xs mt-2 font-medium uppercase tracking-tighter">
                    salve para evitar problemas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Button Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full flex flex-col items-center space-y-4"
        >
          <a 
            href="https://www.viralpulse.cloud/" 
            className="group relative w-full max-w-sm overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(99,102,241,0.3)] block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600" />
            <div className="relative flex items-center justify-center space-x-2 bg-[#050505] hover:bg-transparent transition-colors duration-300 rounded-full py-4 px-8">
              <span className="text-lg font-bold text-white group-hover:text-white transition-colors">
                Começar agora
              </span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Acesso imediato liberado
          </p>
        </motion.div>

        {/* Info Box Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-3xl p-6 flex items-start space-x-4"
        >
          <div className="mt-1 bg-indigo-500/20 p-2 rounded-xl">
            <Info className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-sm md:text-base text-slate-400 leading-relaxed">
            <span className="font-bold text-white block mb-1">Dica Importante:</span> 
            Sua chave de acesso é exclusiva. Guarde em local seguro e utilize sempre o e-mail da compra para evitar bloqueios ou falhas no acesso.
          </div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        className="mt-20 text-xs text-slate-600 tracking-widest uppercase font-bold"
      >
        © 2026 Viral Pulse • Inteligência Estratégica
      </motion.div>
    </div>
  );
}
