import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ModifyForm() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    country: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직을 추가할 수 있습니다. (예: 서버로 데이터 전송)
    console.log("폼 제출:", formData);
  };

  const handleCancel = () => {
    // 취소 버튼 클릭 시 홈으로 이동
    navigate("/");
  };

  return (
    <div className="w-2/6 h-full m-auto mt-10 rounded-2xl border shadow-lg p-6 bg-purple-200">
      <div className="flex justify-center my-10">
        <p className="font-bold text-4xl">추천 장소 등록</p>
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
            onChange={handleImageChange}
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
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
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
            value={formData.country}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
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
            value={formData.content}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 mr-2"
          >
            수정완료
          </button>
          <Link to="/">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              onClick={handleCancel}
            >
              취소
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
