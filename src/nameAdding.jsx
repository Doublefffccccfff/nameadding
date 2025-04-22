import { useState } from "react";

const NameAdding = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");
  const [displayName, setDisplayName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // copy current inputs into “submitted” state
    setSubmittedFirstName(name);
    setSubmittedLastName(lastName);
    setDisplayName(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your first name"
          required
          
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          required
          
          className="block w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {displayName && (
  <p className="mt-4 text-lg font-medium">
    Full Name: {submittedFirstName} {submittedLastName}
  </p>
)}
    </div>
  );
};

export default NameAdding;
