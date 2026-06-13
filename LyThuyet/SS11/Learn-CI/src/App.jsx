import { useState, useCallback, useEffect } from "react";
import CounterComponent from "./components/CounterComponent";
import DebounceComponent from "./components/DebounceComponent";
import useComponentSize from './components/ComponentSize';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD5kYkY7e_LtY-2fn1G-QyCU95sux6KYrI");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";



export default function App() {
  const [user, setUser] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [ref, size] = useComponentSize();

  useEffect(() => {
    async function fetchGemini() {
      try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        setAiResponse(text);
        console.log(text);
      } catch (error) {
        console.error("Gemini API error:", error);
      }
    }
    fetchGemini();
  }, []);

  const fetchData = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  }, []);

  // lúc này ta truyền deps là fetchData, khi component re-render, fetchData vẫn giữ tham thiếu cũ của nó, cho nên useEffect vẫn chỉ chạy 1 lần duy nhất sau khi render
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <button onClick={fetchData}>Refresh</button>
      {user ? (
        <div>
          <img src={user.picture.medium} alt="" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ) : null}

      <div>
        <div ref={ref} style={{ width: '50%', height: '300px', backgroundColor: 'lightblue' }}>
          Theo dõi kích thước của tôi!
        </div>
        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </div>

      <div>
        <h3>Gemini 1.5 Flash</h3>
        <p>{aiResponse || "Đang tải phản hồi từ AI..."}</p>
      </div>

      <CounterComponent />
      <DebounceComponent />
    </div>
  );
}