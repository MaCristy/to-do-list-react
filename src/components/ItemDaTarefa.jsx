function ItemDaTarefa({ tarefa, onToggle, onRemove }) {
  return (
    <li className={`task-item ${tarefa.concluida ? 'completed' : ''}`}>
      <span onClick={() => onToggle(tarefa.id)}>{tarefa.texto}</span>
      <div className="task-item-actions">
        <button onClick={() => onRemove(tarefa.id)}>X</button>
      </div>
    </li>
  );
}

export default ItemDaTarefa;