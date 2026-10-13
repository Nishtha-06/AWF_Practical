import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { getTasks, createTask, updateTask, deleteTask } from "../api";

function Projects() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creating, setCreating] = useState(false);
    const [createError, setCreateError] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [deleteError, setDeleteError] = useState(false);

    // Fetch tasks from our Express backend when the page loads
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { replace: true });
            return;
        }

        getTasks()
            .then((result) => {
                setTasks(result);
                setLoading(false);
            })
            .catch((requestError) => {
                if (requestError.status === 401) {
                    navigate("/login", {
                        replace: true,
                        state: { message: "Your session expired. Please log in again." },
                    });
                    return;
                }
                setError(true);
                setLoading(false);
            });
    }, [navigate]);

    // Create a new task and add it to the displayed task list
    const handleCreate = async (event) => {
        event.preventDefault();
        setCreating(true);
        setCreateError(false);

        try {
            const newTask = await createTask({
                title,
                description,
            });

            setTasks((currentTasks) => [...currentTasks, newTask]);
            setTitle("");
            setDescription("");
        } catch (requestError) {
            if (requestError.status === 401) {
                navigate("/login", {
                    replace: true,
                    state: { message: "Your session expired. Please log in again." },
                });
                return;
            }
            setCreateError(true);
        } finally {
            setCreating(false);
        }
    };

    // Start editing the selected task
    const handleEdit = (task) => {
        setEditingId(task._id);
        setEditTitle(task.title);
        setEditDescription(task.description);
        setUpdateError(false);
    };

    // Update the selected task in MongoDB and refresh the displayed task
    const handleUpdate = async (event) => {
        event.preventDefault();
        setUpdating(true);
        setUpdateError(false);

        try {
            const updatedTask = await updateTask(editingId, {
                title: editTitle,
                description: editDescription,
            });

            setTasks((currentTasks) =>
                currentTasks.map((task) =>
                    task._id === editingId ? updatedTask : task
                )
            );

            setEditingId(null);
        } catch (requestError) {
            if (requestError.status === 401) {
                navigate("/login", {
                    replace: true,
                    state: { message: "Your session expired. Please log in again." },
                });
                return;
            }
            setUpdateError(true);
        } finally {
            setUpdating(false);
        }
    };

    // Delete the selected task from MongoDB and remove it from the list
    const handleDelete = async (id) => {
        setDeletingId(id);
        setDeleteError(false);

        try {
            await deleteTask(id);
            setTasks((currentTasks) =>
                currentTasks.filter((task) => task._id !== id)
            );
        } catch (requestError) {
            if (requestError.status === 401) {
                navigate("/login", {
                    replace: true,
                    state: { message: "Your session expired. Please log in again." },
                });
                return;
            }
            setDeleteError(true);
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return <div className="task-state centered-panel"><Spinner /></div>;
    }

    if (error) {
        return <div className="task-state centered-panel"><ErrorMessage /></div>;
    }

    return (
        <div className="task-management-page">
            <div className="task-page-heading">
                <div>
                    <p className="eyebrow">Workspace</p>
                    <h2>Tasks</h2>
                </div>
                <p className="task-page-summary">Plan, track, and complete your work.</p>
            </div>

            <form className="task-create-form" onSubmit={handleCreate}>
                <input
                    className="task-input"
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <input
                    className="task-input"
                    type="text"
                    placeholder="Task description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />

                <button className="task-button task-button-primary" type="submit" disabled={creating}>
                    {creating ? "Creating..." : "Create Task"}
                </button>
            </form>

            {createError && <p className="task-error">Failed to create task.</p>}

            {tasks.length === 0 ? (
                <p className="empty-tasks">No tasks found.</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li className="task-card" key={task._id}>
                            {editingId === task._id ? (
                                <form className="task-edit-form" onSubmit={handleUpdate}>
                                    <input
                                        className="task-input"
                                        type="text"
                                        value={editTitle}
                                        onChange={(event) =>
                                            setEditTitle(event.target.value)
                                        }
                                        required
                                    />

                                    <input
                                        className="task-input"
                                        type="text"
                                        value={editDescription}
                                        onChange={(event) =>
                                            setEditDescription(event.target.value)
                                        }
                                        required
                                    />

                                    <button className="task-button task-button-primary" type="submit" disabled={updating}>
                                        {updating ? "Updating..." : "Save"}
                                    </button>

                                    <button
                                        className="task-button task-button-secondary"
                                        type="button"
                                        onClick={() => setEditingId(null)}
                                    >
                                        Cancel
                                    </button>

                                    {updateError && (
                                        <p className="task-error">Failed to update task.</p>
                                    )}
                                </form>
                            ) : (
                                <>
                                    <div className="task-card-content">
                                        <h3>{task.title}</h3>
                                        <p className="task-description">{task.description}</p>
                                        <p className="task-status">
                                            <span>Status:</span>
                                            <strong className={task.completed ? "status-badge status-completed" : "status-badge status-pending"}>
                                                {task.completed ? "Completed" : "Pending"}
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="task-actions">
                                    <button className="task-button task-button-secondary" onClick={() => handleEdit(task)}>
                                        Edit
                                    </button>

                                    <button
                                        className="task-button task-button-danger"
                                        onClick={() => handleDelete(task._id)}
                                        disabled={deletingId === task._id}
                                    >
                                        {deletingId === task._id
                                            ? "Deleting..."
                                            : "Delete"}
                                    </button>
                                    </div>

                                    {deleteError && (
                                        <p className="task-error">Failed to delete task.</p>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Projects;
