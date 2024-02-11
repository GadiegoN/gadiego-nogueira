import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

interface RepoProps {
    id: string
    name: string
    description: string
    homepage: string
}

export function Projects() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios
            .get("https://api.github.com/users/gadiegon/repos?sort=updated")
            .then((response) => {
                setRepos(response.data)
            })
            .catch((error) => {
                console.error("Erro ao encontrar projetos!", error)
            })
    }, [])

    return (
        <div id="projects" className="p-10 flex flex-col">
            <div className="mb-5">
                <h1 className="text-3xl font-bold">Meus Projetos</h1>
                <span className="text-base font-mono">Aqui estão alguns dos meus projetos mais recentes.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
                {
                    repos.map((repo: RepoProps) => {
                        if (repo.homepage !== null) {
                            return (
                                (
                                    <div key={repo.id} className="border-2 flex justify-between p-10 gap-3 mb-5 rounded-lg">
                                        <div className="flex-1 flex justify-between items-center">
                                            <div>
                                                <p className="text-xl font-bold">{repo.name}</p>
                                                <p className="font-mono">{repo.description}</p>
                                            </div>
                                            <Button variant="outline" asChild>
                                                <a target="_blank" href={repo.homepage}>Ver Projeto</a>
                                            </Button>
                                        </div>
                                    </div>
                                ))
                        }
                    })
                }
            </div>
        </div>
    )
}