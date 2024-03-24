"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState("loading...")

  useEffect(() => {
    fetch("http://localhost:8000/").then(response => response.text()).then(resData => setData(resData))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data}</div>
    </main>
  );
}
