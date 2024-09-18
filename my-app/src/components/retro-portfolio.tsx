'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Mail, Power, ArrowRight } from "lucide-react"

export function RetroPortfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isOn, setIsOn] = useState(false)

  const togglePower = () => {
    setIsOn(!isOn)
  }

  const navigateTo = (section: string) => {
    setCurrentSection(section)
  }

  return (
    <div className="h-screen bg-black p-4 sm:p-8 flex items-center justify-center">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        body {
          font-family: 'VT323', monospace;
        }

        .crt::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .crt {
          animation: textShadow 1.6s infinite;
        }

        @keyframes textShadow {
          0% {
            text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          5% {
            text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          10% {
            text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          15% {
            text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          20% {
            text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          25% {
            text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          30% {
            text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          35% {
            text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          40% {
            text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          45% {
            text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          50% {
            text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          55% {
            text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          60% {
            text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          65% {
            text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          70% {
            text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          75% {
            text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          80% {
            text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          85% {
            text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          90% {
            text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          95% {
            text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
          100% {
            text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
          }
        }
      `}</style>
      <div 
        className="crt w-auto h-[75vh] aspect-[4/3] bg-[#1a1a1a] overflow-hidden shadow-2xl relative"
        style={{
          transform: 'perspective(800px) rotateX(4deg)',
          boxShadow: isOn ? '0 0 40px rgba(51, 255, 51, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.5)' : 'inset 0 0 40px rgba(0, 0, 0, 0.5)',
          borderRadius: '20px',
          border: '8px solid #2c2c2c',
          transition: 'box-shadow 0.3s ease-in-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
        <div 
          className={`fisheye p-6 sm:p-8 text-[#33ff33] h-full overflow-hidden transition-all duration-500 ${isOn ? 'opacity-100' : 'opacity-0'}`} 
          style={{
            transform: 'perspective(800px) rotateX(2deg)',
            boxShadow: 'inset 0 0 20px rgba(51, 255, 51, 0.3)',
            borderRadius: '12px',
          }}
        >
          <div className="h-full flex flex-col">
            <header className="mb-6 text-center">
              <h1 className="text-4xl mb-4">RETRO PORTFOLIO</h1>
              <nav className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant="outline" 
                  className="border-[#33ff33] text-[#33ff33] bg-transparent hover:bg-[#33ff33] hover:text-black transition-colors" 
                  onClick={() => navigateTo('home')}
                >
                  <Home className="w-4 h-4 mr-2" />
                  HOME
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#33ff33] text-[#33ff33] bg-transparent hover:bg-[#33ff33] hover:text-black transition-colors" 
                  onClick={() => navigateTo('about')}
                >
                  <User className="w-4 h-4 mr-2" />
                  ABOUT
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#33ff33] text-[#33ff33] bg-transparent hover:bg-[#33ff33] hover:text-black transition-colors" 
                  onClick={() => navigateTo('projects')}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  PROJECTS
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#33ff33] text-[#33ff33] bg-transparent hover:bg-[#33ff33] hover:text-black transition-colors" 
                  onClick={() => navigateTo('contact')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  CONTACT
                </Button>
              </nav>
            </header>

            <div className="flex-grow overflow-auto pr-4">
              {currentSection === 'home' && (
                <section>
                  <h2 className="text-3xl mb-6">WELCOME TO MY WORLD</h2>
                  <p className="mb-6">PRESS START TO BEGIN YOUR JOURNEY</p>
                  <div 
                    className="border-2 border-[#33ff33] p-6 mb-6 animate-pulse cursor-pointer hover:bg-[#33ff33] hover:text-black transition-colors"
                    onClick={() => navigateTo('about')}
                  >
                    INSERT COIN TO CONTINUE
                  </div>
                </section>
              )}

              {currentSection === 'about' && (
                <section>
                  <h2 className="text-3xl mb-6">ABOUT ME</h2>
                  <p className="mb-6">I AM A RETRO-LOVING DEVELOPER</p>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>SKILL: HTML/CSS</li>
                    <li>SKILL: JAVASCRIPT</li>
                    <li>SKILL: REACT</li>
                    <li>SKILL: NOSTALGIA</li>
                  </ul>
                </section>
              )}

              {currentSection === 'projects' && (
                <section>
                  <h2 className="text-3xl mb-6">MY PROJECTS</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border-2 border-[#33ff33] p-6">PROJECT 1</div>
                    <div className="border-2 border-[#33ff33] p-6">PROJECT 2</div>
                    <div className="border-2 border-[#33ff33] p-6">PROJECT 3</div>
                    <div className="border-2 border-[#33ff33] p-6">PROJECT 4</div>
                  </div>
                </section>
              )}

              {currentSection === 'contact' && (
                <section>
                  <h2 className="text-3xl mb-6">CONTACT ME</h2>
                  <p className="mb-6">SEND ME A MESSAGE:</p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <input type="text" className="flex-grow bg-black border-2 border-[#33ff33] p-4" placeholder="YOUR MESSAGE HERE" />
                    <Button variant="outline" className="border-[#33ff33] text-[#33ff33] bg-transparent hover:bg-[#33ff33] hover:text-black transition-colors">SEND</Button>
                  </div>
                  <p className="mb-4">OR FIND ME ON:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>GITHUB</li>
                    <li>LINKEDIN</li>
                    <li>TWITTER</li>
                  </ul>
                </section>
              )}
            </div>

            <footer className="mt-6 text-center text-sm">
              © 2023 RETRO PORTFOLIO - ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center">
          {!isOn && (
            <div className="text-[#33ff33] text-sm sm:text-base md:text-lg animate-pulse flex items-center mr-4">
              <span className="mr-2">CLICK HERE TO POWER ON</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          )}
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-red-600 hover:bg-red-700 border-2 border-red-400"
            onClick={togglePower}
          >
            <Power className="h-4 w-4 text-white" />
            <span className="sr-only">Power</span>
          </Button>
        </div>
      </div>
    </div>
  )
}