const getAllTodos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await data.json();
  return json;
};

const TodosPage = async () => {
  const todos = await getAllTodos();
  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-4">Todos</h1>
      {/* <div>{JSON.stringify(todos)}</div> */}
      <div className="grid grid-cols-2 gap-4">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo) => {
            return (
              <div key={todo.id} className="p-4 shadow-md rounded-md">
                <div>Title: {todo.title} </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodosPage;
