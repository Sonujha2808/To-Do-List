import "./List.css";
import 'bootstrap-icons/font/bootstrap-icons.css' ;
export const List = ({ todolist, handleToggle, handleDelete }) => {
  return (
    <ul className="list">
      {todolist.map((listItem) => (
        <li key={listItem.id} className={listItem.done ? "done" : ""}>
          <span>{listItem.item}</span>
          <span className="actions">
            {listItem.done ? (
              <i class="bi bi-x-circle-fill" onClick={() => handleToggle(listItem.id)} ></i>
            ) : (
                <i class="bi bi-check-circle-fill"onClick={() => handleToggle(listItem.id)} ></i>
            )}

<i class="bi bi-trash-fill" onClick={() => handleDelete(listItem.id)}></i> 
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;