const EZRA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MTUwMzU3LCJpYXQiOjE3MzgwNjM5NTcsImp0aSI6IjBjMTM3NTY1NDFiYjRhNTY5ZTU2YmIxOWYzODU5NjZlIiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJlenJhbWFuIn0.uThF63wQhzipStAyi-6ITGOBiNeb-2tYTUbdNRTqiR8";

const ADMIN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MTUwMzE3LCJpYXQiOjE3MzgwNjM5MTcsImp0aSI6IjM2MWM5NWIwY2QxNjRiZmI4NDgxNmUyY2UzZDVmYzA2IiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.leiMNUv6T5T6uZ5YhpUeE3GyPKy4DBYPxygCTvahj10";

export const getAllPostAPI = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/post/", {
    method: "GET",
  });

  const res = await response.json();
  return res;
};

export const addPostAPI = async (data) => {
  const response = await fetch("http://127.0.0.1:8000/api/post/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ADMIN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  return res;
};

export const likePostAPI = async (data) => {
  const response = await fetch("http://127.0.0.1:8000/api/like/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${EZRA}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  return res;
};
