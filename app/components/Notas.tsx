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
  onClearHistory: () => void;
}> = ({ onSubmit, onClearHistory }) => {
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

  const handleClearHistory = () => {
    if (confirm("Tem certeza de que deseja apagar o histórico?")) {
      onClearHistory();
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
        Enviar Nota
      </button>
      <button
        type="button"
        onClick={handleClearHistory}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition"
      >
        Apagar Histórico
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
      <table className="w-full table-auto border-collapse bg-white shadow-lg mb-6">
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

      {/* Histórico detalhado */}
      <h2 className="text-lg font-bold mb-2 text-blue-700">Histórico Detalhado</h2>
      <div className="grid grid-cols-1 gap-4">
        {history.map((record, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-md">
            <p>
              <strong>Atleta:</strong> {record.athleteName}
            </p>
            <p>
              <strong>Bateria:</strong> {record.heatNumber}
            </p>
            <p>
              <strong>Jurados e Notas:</strong>
            </p>
            <ul className="list-disc list-inside">
              {record.jurorNames.map((juror, idx) => (
                <li key={idx}>
                  {juror}: {record.scores[idx]}
                </li>
              ))}
            </ul>
            <p>
              <strong>Média:</strong> {record.scores.reduce((a, b) => a + b, 0) / record.scores.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainPage: React.FC = () => {
  const [history, setHistory] = useState<AthleteRecord[]>([]);
  const [viewLaunchScores, setViewLaunchScores] = useState(false);

  const handleScoresSubmit = (scores: number[], jurorNames: string[], athleteName: string, heatNumber: string) => {
    const newRecord = { athleteName, heatNumber, jurorNames, scores };
    setHistory([...history, newRecord]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleLaunchScores = () => {
    const enteredPassword = prompt("Digite a senha para lançar notas:");
    if (enteredPassword === "A$JACONE") {
      setViewLaunchScores(true);
    } else {
      alert("Senha incorreta! Acesso negado.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      {/* Lado Esquerdo */}
      <div className="w-full lg:w-1/3 p-4 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Ações</h2>
        <button
          onClick={handleLaunchScores}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md mb-4 hover:bg-blue-500 transition"
        >
          Lançar Nota
        </button>
        <button
          onClick={() => setViewLaunchScores(false)}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition"
        >
          Acompanhar Notas
        </button>
      </div>

      {/* Lado Direito */}
      <div className="w-full lg:w-2/3 p-4">
        {viewLaunchScores ? (
          <SubmitScores onSubmit={handleScoresSubmit} onClearHistory={handleClearHistory} />
        ) : (
          <RankingTable history={history} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
