import React, { useId, useState, useTransition } from "react";

const UseTransition = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const id = useId()

  const handleChange = (e) => {
    setSearch(e.target.value);
    // startTransition(() => {
      let list = [];
      for (let i = 0; i < 2000; i++) {
        list.push(e.target.value);
      }
      setSearchList(list);
    // });
  };

  return (
    <div>
      <input id={id} type="text" value={search} onChange={(e) => handleChange(e)} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          {searchList.map((each, index) => (
            <p key={index}>{each}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default UseTransition;
