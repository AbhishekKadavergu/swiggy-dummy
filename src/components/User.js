import { useState } from "react";

export const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <button
        onClick={() => {
            const c1 = count+1
          setCount(c1);
        }}
      >
        Counter
      </button>
      <h3>
        Count = {count}
        Count2 = {count2}
      </h3>
      <h3>Name: {name}</h3>
      <h3>Location: Hyderabad</h3>
      <h3>Follow me on Instagram: abhishek_kadavergu</h3>
    </div>
  );
};
