import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ItemForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: null,
    title: "",
    country: "",
    content: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.country || !formData.content) {
      console.error("필수 필드를 모두 작성해주세요");
      return;
    }

    try {
      const response = await fetch("https://diary-back.fly.dev/api/v1/diary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("제출 실패:", response.status);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="w-2/6 h-full m-auto mt-10 rounded-2xl border shadow-lg p-6 bg-purple-200">
      <div className="flex justify-center my-10">
        <p className="font-bold text-4xl">다이어리 내용등록</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            이미지 선택:
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            제목:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-md py-2 px-3"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            나라:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full border rounded-md py-2 px-3"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            내용:
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full border rounded-md py-2 px-3"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 mr-2"
          >
            제출
          </button>
          <Link to="/">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              취소
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}