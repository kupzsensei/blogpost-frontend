export default function CommentModal({ setCommentModal, data }) {
  console.log(data);
  return (
    <main className="w-screen h-screen  shadow-md bg-black/80 fixed top-0 left-0 flex justify-center items-center">
      <div
        onClick={() => setCommentModal(false)}
        className="absolute top-0 w-screen h-screen left-0  z-[-10]"
      ></div>
      <section className="w-[400px] h-[700px] bg-white z-10 p-5 gap-2">
        {data?.comments?.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-3 border border-gray-400 p-5 rounded-lg mb-5"
          >
            <img
              src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
              alt=""
              className="h-[30px] rounded-full p-1 border border-green-600"
            />
            <p>{comment.note}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
