// Provide authenticated API functions for task operations.
const BASE_URL = "http://localhost:3000";

function getAuthHeaders() {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Authentication required. Please log in.");
    }

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

async function getResponseError(response, fallbackMessage) {
    let message = fallbackMessage;

    try {
        const data = await response.json();
        if (data.message) message = data.message;
    } catch {
        // Keep the operation-specific message when the response is not JSON.
    }

    if (response.status === 401) {
        localStorage.removeItem("token");
    }

    const error = new Error(message);
    error.status = response.status;
    return error;
}

// Get all tasks from the backend
export async function getTasks() {
    const response = await fetch(`${BASE_URL}/tasks`, {
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw await getResponseError(response, "Failed to fetch tasks");
    }

    return response.json();
}

// Create a new task
export async function createTask(task) {
    const response = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(task),
    });

    if (!response.ok) {
        throw await getResponseError(response, "Failed to create task");
    }

    return response.json();
}

// Update an existing task
export async function updateTask(id, task) {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(task),
    });

    if (!response.ok) {
        throw await getResponseError(response, "Failed to update task");
    }

    return response.json();
}

// Delete a task
export async function deleteTask(id) {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw await getResponseError(response, "Failed to delete task");
    }

    return response.json();
}
