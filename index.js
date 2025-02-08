import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  { name: "Simulador 3D de Gravitação", link: "https://github.com/seu-usuario/projeto-gravitacao" },
  { name: "Jogo Educativo de Eletricidade", link: "https://github.com/seu-usuario/jogo-eletricidade" },
  { name: "Artigo sobre IA no PPA", link: "https://github.com/seu-usuario/artigo-ia-ppa" },
];

export default function PersonalPage() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Página Pessoal - Juciane Maia</title>
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 p-8">
          <motion.div
            className="max-w-4xl mx-auto text-center py-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Juciane Maia</h1>
            <p className="text-lg text-gray-600 mb-8">
              Analista de Sistemas | Especialista em Engenharia de Software | Entusiasta em IA e Ensino de Física
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              <Button asChild>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </Button>
              <Button asChild>
                <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
              <Button asChild>
                <a href="mailto:seuemail@dominio.com">
                  <FaEnvelope className="mr-2" /> Contato
                </a>
              </Button>
            </div>

            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow-xl">
                    <CardContent>
                      <h3 className="text-xl font-medium text-gray-800">{project.name}</h3>
                      <Button className="mt-4" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Acessar Projeto
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}