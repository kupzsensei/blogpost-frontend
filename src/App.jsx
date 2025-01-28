import { useState } from "react";
import Navbar from "./components/navbar";
import PostCard from "./components/post-card";
import { useQuery } from "@tanstack/react-query";
import { getAllPostAPI } from "./api";
import AddpostCard from "./components/addpost-card";

function App() {
  const { data: allPost } = useQuery({
    queryFn: getAllPostAPI,
    queryKey: ["allPost"],
  });
  return (
    <main className="w-screen h-screen overflow-y-auto flex items-center flex-col bg-gray-950 ">
      <Navbar />
      <section className="py-8 bg-gray-950 w-full max-w-[800px] shadow-lg shadow-white items-center flex-1 min-h-0 flex flex-col gap-5 overflow-y-auto">
        <AddpostCard />
        {allPost?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </section>
    </main>
  );
}

export default App;
