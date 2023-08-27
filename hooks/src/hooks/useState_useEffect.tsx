// useState.tsx
import { useState, useEffect } from "react";

export function FavoriteFood() {
  const [food, setFood] = useState("");

  useEffect(() => {
    setFood("떡볶이");
  }, []);

  return (
    <>
      <h1>{food}</h1>
    </>
  );
}
