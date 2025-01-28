import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { addPostAPI } from "../api";

export default function AddpostCard() {
  const queryClient = useQueryClient();
  const addpostMutation = useMutation({
    mutationFn: addPostAPI,
    onSettled: (data) => {
      console.log("settled", data);
      queryClient.invalidateQueries(["allPost"]);
    },
  });
  const noteRef = useRef(null);

  const handlePost = () => {
    const postData = { note: noteRef.current.value };
    addpostMutation.mutate(postData);
  };
  return (
    <div className="shadow-md shadow-white w-[600px] bg-white h-[200px] items-center flex gap-3 p-5">
      <img
        src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
        alt=""
        className="h-[100px] bg-white rounded-full border border-green-400"
      />
      <textarea
        name="post"
        ref={noteRef}
        className="flex-1 h-full border border-gray-500 p-2"
      ></textarea>
      <button
        onClick={handlePost}
        className="bg-blue-500 text-white font-bold p-3 rounded-lg"
      >
        POST
      </button>
    </div>
  );
}
