import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
            const query = {
                username,
                location,
                minRepos,
            };
            const data = await fetchAdvancedUserData(query);
            setUsers(data.items);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSearch} className="space-y-4 bg-gray-100 p-6 rounded shadow-md">
                <div>
                    <label className="block text-sm font-medium">GitHub Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Minimum Repositories</label>
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Enter minimum repositories"
                        className="border border-gray-300 rounded p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error fetching data. Please try again later.</p>}
            <div className="mt-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-4 mb-4 rounded shadow">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                        <h2 className="font-bold">{user.login}</h2>
                        {user.location && <p>Location: {user.location}</p>}
                        <p>Repositories: {user.public_repos}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
