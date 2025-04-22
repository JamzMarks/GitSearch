import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface FormSearchProps {
  setUser: (user: any) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export default function FormSearch({ setUser, setError, setLoading }: FormSearchProps) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUser(null);
    setError(null);
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false)
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          name="username"
          className="block w-full py-4 pl-4 pr-14 text-lg text-black border border-gray-300 rounded-lg bg-white focus:outline-none"
          placeholder="Digite um usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-0 top-0 h-full w-14 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-r-lg text-lg flex items-center justify-center"
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
}
