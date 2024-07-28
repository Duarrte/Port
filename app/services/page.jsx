"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Backend',
    description: 'Tenho experiência em desenvolvimento de backend utilizando Django (Python) e PHP. Isso inclui a criação de APIs, implementação de lógica de negócios e integração com bancos de dados.',
    href: '',
  },
  {
    num: '02',
    title: 'Banco de dados',
    description: 'Possuo conhecimento em diversos sistemas de gerenciamento de banco de dados, como MySQL, PostgreSQL e outros. Estou familiarizado com modelagem de dados, otimização de consultas e manutenção de bases de dados.',
    href: '',
  },
  {
    num: '03',
    title: 'Desenvolvimento de Software',
    description: 'Meu foco principal é o desenvolvimento de software utilizando Python. Tenho experiência no ciclo completo de desenvolvimento, desde a concepção da arquitetura até a implementação e teste de soluções.',
    href: '',
  },
  {
    num: '04',
    title: 'Desenvolvimento Mobile',
    description: 'Desenvolvo aplicativos móveis utilizando Ionic com Angular, criando soluções que funcionam em múltiplas plataformas. Isso inclui a criação de interfaces intuitivas e a integração com APIs para funcionalidades avançadas.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-5 group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 group-hover:text-white transition-all duration-500">
                  {service.num}
                </span>
                <Link href={service.href}>
                  <a className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                    <BsArrowDownRight className="text-blue-500 text-2xl md:text-3xl" />
                  </a>
                </Link>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white group-hover:text-blue-400 transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
              <div className="border-b border-gray-700 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
