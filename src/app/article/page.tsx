import React from "react";
import { article } from ".";

const ArticleDetail = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 rounded-3xl mt-20 mb-20">
            <h1 className="text-2xl font-bold text-black mb-4 text-center">{article.title}</h1>

            <img
                src={article.image}
                alt="Article image"
                className="w-full h-auto rounded-xl mb-4"
            />

            <div className="text-sm text-gray-600 mb-6">
                <p>
                    <strong>Autor:</strong> {article.author}
                </p>
                <p>
                    <strong>Publicado:</strong> {article.date}
                </p>
            </div>

            <p className="text-gray-800 text-sm mb-10">{article.description}</p>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-black">Comentarios</h2>
                <a
                    href="#"
                    className="text-sm text-[#E10600] font-semibold hover:underline"
                >
                    Agregar Comentario
                </a>
            </div>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                {article.comments.map((comment, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-xl"
                    >
                        <p className="font-bold text-sm text-[#E10600] mb-1">
                            {comment.name}
                        </p>
                        <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetail;
