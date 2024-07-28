"use client";

import { FaPython, FaPhp, FaReact, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const about = {
  title: 'Sobre mim',
  description: "Sou apaixonado por tecnologia e desenvolvimento de software. Sempre em busca de novos desafios e oportunidades para crescer profissionalmente.",
  info: [
    { fieldName: "Nome", fieldValue: "Luan Duarte" },
    { fieldName: "Nacionalidade", fieldValue: "Brasileiro" },
    { fieldName: "Email", fieldValue: "lvassconcelos@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Disponível" },
    { fieldName: "Idiomas", fieldValue: "Inglês, Português-BR" },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Minhas Experiências',
  description: "Estou em busca da minha primeira oportunidade na área de Tecnologia da Informação.",
  items: [],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Formação',
  description: "Onde estudei: ",
  items: [
    {
      institution: "Universidade Augusto Motta",
      position: "Análise e Desenvolvimento de Sistemas",
      duration: "2022 - 2024",
    },
  ],
};

const skills = {
  title: "Minhas Habilidades",
  description: "Algumas das minhas principais habilidades incluem:",
  skillList: [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaDatabase />, name: 'Banco de Dados' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8 sm:mx-4">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px] text-white/60">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-8 max-w-[620px]">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="text-white/60 font-semibold">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.length > 0 ? (
                      experience.items.map((item, index) => (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <p className="text-white/60">Sem experiências disponíveis.</p>
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-sl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
