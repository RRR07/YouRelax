import { useState } from "react";
import "./App.css";
import SocialIcon from "./SocialIcons";

function App() {
  const [user, setUser] = useState({});

  function handleChange(key, value) {
    setUser((user) => ({
      ...user,
      [key]: value,
    }));
    console.log(user);
  } 
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-screen h-screen ">
        <div className=" col-span-1 flex border flex-col p-4">
          <h1 className="font-semibold">Basic Info</h1>
          <div className="flex items-center">
            <p>Name:</p>
            <input
              className=" m-2 border-2 rounded"
              type="text"
              value={user.name}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            />
          </div>
          <div className="flex items-center">
            <p>Number:</p>
            <input
              className=" m-2 border-2 rounded"
              type="text"
              value={(user.number ? "+91 " : "") + (user.number || "")} // Check if user.number is defined before concatenating
              onChange={(e) => {
                handleChange("number", e.target.value.replace("+91 ", "")); // Remove "+91 " before setting the state
              }}
            />
          </div>
          <div className="flex items-center">
            <p>Email:</p>
            <input
              className=" m-2 border-2 rounded"
              type="email"
              value={user.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
          </div>
          <h1 className="font-semibold mt-5">Socials</h1>
          <div className="flex items-center">
            <p>Github:</p>
            <input
              className=" m-2 border-2 rounded"
              type="text"
              value={user.github}
              onChange={(e) => {
                handleChange("github", e.target.value);
              }}
            />
          </div>
          <div className="flex items-center">
            <p>LinkedIn:</p>
            <input
              className=" m-2 border-2 rounded"
              type="text"
              value={user.linkedin}
              onChange={(e) => {
                handleChange("linkedin", e.target.value);
              }}
            />
          </div>
          <h1 className="font-semibold mt-5">Education</h1>
          <div className="grid-cols-6 items-center">
            <h2>10 + 2</h2>
            <input
              className=" m-2 border-2 rounded"
              type="text"
              value={user.linkedin}
              onChange={(e) => {
                handleChange("linkedin", e.target.value);
              }}
            />
          </div>
        </div>

        {/* Resume Screen */}
        <div className="flex flex-col gap-2 p-5">
          <div className="font-semibold text-teal-600 text-3xl">
            {user.name}
          </div>
          <div className="flex flex-full gap-5 text-slate-500">
            <p> {user.number} </p>
            <p>{user.email}</p>
          </div>
          <div className="flex gap-3">
            <SocialIcon type={"github"} link={user.github} />
            <SocialIcon type={"linkedin"} link={user.linkedin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
