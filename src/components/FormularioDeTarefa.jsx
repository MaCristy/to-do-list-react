import { useState } from 'react';

function FormularioDeTarefa({ onAdd }) {
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim()) {
      onAdd(tarefa);
      setTarefa('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioDeTarefa;