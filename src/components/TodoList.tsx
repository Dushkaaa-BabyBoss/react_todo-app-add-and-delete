import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type FilterProps = {
  filteredTodo: Todo[];
  deleteTodo: (todoId: number) => void;
  tempoTodo: Todo | null;
};

export const TodoList: React.FC<FilterProps> = ({
  filteredTodo,
  deleteTodo,
  tempoTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodo.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          tempoTodo={tempoTodo}
        />
      ))}
      {tempoTodo && (
        <TodoItem
          todo={tempoTodo}
          key={tempoTodo.id}
          deleteTodo={deleteTodo}
          tempoTodo={tempoTodo}
        />
      )}
    </section>
  );
};
