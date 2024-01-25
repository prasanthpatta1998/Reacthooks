import React, { Suspense, useState, useTransition } from "react";
import Posts from "./Posts";
import "./App.css"

const UseTransition2 = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const selectTab = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <div>
        <button onClick={() => selectTab("about")}>About</button>
        <button onClick={() => selectTab("posts")}>Posts</button>
        <button onClick={() => selectTab("contact")}>Contact</button>
        <div className="glimmer-panel">
          <div className="glimmer-line" />
          <div className="glimmer-line" />
          <div className="glimmer-line" />
        </div>
      </div>
      <hr />
      {activeTab === "about" ? <About /> : null}
      {activeTab === "posts" ? <Posts /> : null}
      {activeTab === "contact" ? <Contact /> : null}
    </Suspense>
  );
};

export default UseTransition2;

export const About = () => {
  console.log("About Tab");
  return <h6>About Tab</h6>;
};

export const Contact = () => {
  console.log("Contact Tab");
  return <h6>Contact Tab</h6>;
};
