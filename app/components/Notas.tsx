"use client";

import React, { useState } from "react";

interface AthleteRecord {
  athleteName: string;
  heatNumber: string;
  jurorNames: string[];
  scores: number[];
}

const SubmitScores: React.FC<{
  onSubmit: (scores: number[], jurorNames: string[], athleteName: string, heatNumber: string) => void;
}> = ({ onSubmit }) => {
  const [athleteName, setAthleteName] = useState("");
  const [heatNumber, setHeatNumber] = useState("");
  const [jurorNames, setJurorNames] = useState("");
  const [scores, setScores] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const jurors = jurorNames.split(",").map((name) => name.trim());
    const scoreValues = scores.split(",").map((score) => parseFloat(score.trim()));

    if (athleteName && heatNumber && jurors.length && scoreValues.length) {
      onSubmit(scoreValues, jurors, athleteName, heatNumber);
      setAthleteName("");
      setHeatNumber("");
      setJurorNames("");
      setScores("");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Lançar Notas</h2>
      <input
        type="text"
        placeholder="Nome do Atleta"
        value={athleteName}
        onChange={(e) => setAthleteName(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Número da Bateria"
        value={heatNumber}
        onChange={(e) => setHeatNumber(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Jurados (separados por vírgula)"
        value={jurorNames}
        onChange={(e) => setJurorNames(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Notas (separadas por vírgula)"
        value={scores}
        onChange={(e) => setScores(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition"
      >
        Enviar
      </button>
    </form>
  );
};

const RankingTable: React.FC<{ history: AthleteRecord[] }> = ({ history }) => {
  const calculateRanking = () => {
    return [...history]
      .map((record) => ({
        ...record,
        average: record.scores.reduce((a, b) => a + b, 0) / record.scores.length,
      }))
      .sort((a, b) => b.average - a.average);
  };

  const ranking = calculateRanking();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white text-center">Tabela de Atletas</h2>
      <table className="w-full table-auto border-collapse bg-white shadow-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2 border">Posição</th>
            <th className="p-2 border">Atleta</th>
            <th className="p-2 border">Bateria</th>
            <th className="p-2 border">Média</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((record, index) => (
            <tr key={index} className={`text-center ${index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}`}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{record.athleteName}</td>
              <td className="p-2 border">{record.heatNumber}</td>
              <td className="p-2 border">{record.average.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-bold mt-6 text-blue-700">Histórico Detalhado</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {history.map((record, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md border border-blue-300"
          >
            <h4 className="text-md font-bold mb-2 text-blue-600">
              {record.athleteName} - Bateria {record.heatNumber}
            </h4>
            <ul className="text-sm">
              {record.jurorNames.map((juror, i) => (
                <li key={i} className="flex justify-between">
                  <span className="font-medium text-gray-700">Jurado {juror}:</span>
                  <span className="text-gray-900">{record.scores[i]}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-blue-700 font-bold">
              Média: {record.scores.reduce((a, b) => a + b, 0) / record.scores.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainPage: React.FC = () => {
  const [history, setHistory] = useState<AthleteRecord[]>([]);
  const [viewHistory, setViewHistory] = useState(false);

  const handleScoresSubmit = (scores: number[], jurorNames: string[], athleteName: string, heatNumber: string) => {
    const newRecord = { athleteName, heatNumber, jurorNames, scores };
    setHistory([...history, newRecord]);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      {/* Lado Esquerdo */}
      <div className="w-full lg:w-1/3 p-4 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Ações</h2>
        <button
          onClick={() => setViewHistory(false)}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md mb-4 hover:bg-blue-500 transition"
        >
          Lançar Nota
        </button>
        <button
          onClick={() => setViewHistory(true)}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition"
        >
          Acompanhar Notas
        </button>
      </div>

      {/* Lado Direito */}
      <div className="w-full lg:w-2/3 p-4">
        {viewHistory ? <RankingTable history={history} /> : <SubmitScores onSubmit={handleScoresSubmit} />}
      </div>
    </div>
  );
};

export default MainPage;
