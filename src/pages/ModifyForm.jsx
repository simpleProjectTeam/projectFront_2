import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ModifyForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    country: "",
    content: "",
  });
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`https://diary-back.fly.dev/api/v1/diary/${id}`);
          const data = await response.json();
          if (data.resultCode === "S-1" && data.data) {
            setFormData({
              image: data.data.image,
              title: data.data.title,
              country: data.data.country,
              content: data.data.content,
            });
          }
        }
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
  
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://diary-back.fly.dev/api/v1/diary/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("수정 실패:", response.status);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="w-2/6 h-full m-auto mt-10 rounded-2xl border shadow-lg p-6 bg-purple-200">
      <div className="flex justify-center my-10">
        <p className="font-bold text-4xl">다이어리 수정</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
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
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            제목:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-md py-2 px-3"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
            나라:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full border rounded-md py-2 px-3"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            내용:
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full border rounded-md py-2 px-3"
            value={formData.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 mr-2"
          >
            수정
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            onClick={() => navigate("/")}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}