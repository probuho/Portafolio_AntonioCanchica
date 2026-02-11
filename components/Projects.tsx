'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    updated_at: string;
}

export default function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/probuho/repos?sort=updated&per_page=6');
                if (!response.ok) throw new Error('Error al cargar repos');
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                console.error('Error fetching GitHub repos:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const getLanguageColor = (language: string | null) => {
        const colors: { [key: string]: string } = {
            JavaScript: 'text-yellow-400',
            TypeScript: 'text-blue-400',
            Python: 'text-green-400',
            HTML: 'text-orange-400',
            CSS: 'text-pink-400',
            PHP: 'text-purple-400',
            Java: 'text-red-400',
        };
        return colors[language || ''] || 'text-gray-400';
    };

    return (
        <section id="proyectos" className="relative py-20 md:py-32 overflow-hidden bg-cyber-dark/50">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Mis Proyectos</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-neon mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Una selección de mis proyectos más recientes. Conectado en tiempo real con{' '}
                        <a
                            href="https://github.com/probuho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-cyan hover:text-cyber-pink transition-colors inline-flex items-center gap-1"
                        >
                            mi GitHub <FaGithub className="inline" />
                        </a>
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-16 h-16 border-4 border-cyber-cyan border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-400 text-lg mb-4">⚠️ Error al cargar los proyectos</p>
                        <a
                            href="https://github.com/probuho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-cyan hover:text-cyber-pink transition-colors"
                        >
                            Ver proyectos en GitHub →
                        </a>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo) => (
                            <div
                                key={repo.id}
                                className="glass-effect p-6 rounded-xl border border-gray-800 hover:border-cyber-cyan card-hover group"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <FaGithub className="w-10 h-10 text-gray-400 group-hover:text-cyber-cyan transition-colors" />
                                    <div className="flex gap-2">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-cyber-pink transition-colors"
                                            aria-label="Ver en GitHub"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                                    {repo.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                                    {repo.description || 'Sin descripción'}
                                </p>

                                {/* Topics */}
                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.topics.slice(0, 3).map((topic) => (
                                            <span
                                                key={topic}
                                                className="px-2 py-1 text-xs bg-cyber-purple/20 text-cyber-purple rounded border border-cyber-purple/30"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                    {/* Language */}
                                    {repo.language && (
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language).replace('text-', 'bg-')}`}></span>
                                            <span className={`text-sm ${getLanguageColor(repo.language)}`}>{repo.language}</span>
                                        </div>
                                    )}

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1">
                                            <FaStar className="w-3 h-3" />
                                            {repo.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCodeBranch className="w-3 h-3" />
                                            {repo.forks_count}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/probuho?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-lg font-semibold text-white border-2 border-cyber-cyan hover:bg-cyber-cyan/10 transition-all hover:scale-105"
                    >
                        <FaGithub />
                        Ver todos mis proyectos en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
