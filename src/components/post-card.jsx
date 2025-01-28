import { useState } from "react";
import CommentModal from "./comment-modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePostAPI } from "../api";

export default function PostCard({ data }) {
  const queryClient = useQueryClient();
  const [commentModal, setCommentModal] = useState(false);
  const likeMutation = useMutation({
    mutationFn: likePostAPI,
    onSettled: (data) => {
      console.log(data, "settled LIKED");
      queryClient.invalidateQueries(["allPost"]);
    },
  });
  return (
    <div className="shadow-md shadow-gray-400 w-[600px] bg-white  flex gap-3 p-5">
      <img
        src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
        alt=""
        className="h-[40px] bg-white rounded-full border border-green-400"
      />
      <div className="flex-1 flex flex-col gap-2">
        <p name="post" className="flex-1 h-full">
          {data.note}
        </p>
        <div className="flex justify-between">
          <p className="font-medium text-gray-500 my-2">
            👍 {data.like.length}
          </p>
        </div>
        <div className="flex ">
          <button
            onClick={() => {
              const postData = { id: data.id };
              likeMutation.mutate(postData);
            }}
            className="flex-1 border border-gray-400 py-2"
          >
            Like
          </button>
          <button
            onClick={() => setCommentModal(true)}
            className="flex-1 border border-gray-400 py-2"
          >
            Comment
          </button>
        </div>
      </div>
      {commentModal && (
        <CommentModal data={data} setCommentModal={setCommentModal} />
      )}
    </div>
  );
}
