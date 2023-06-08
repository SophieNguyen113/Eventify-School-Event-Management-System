import { React, useState, useEffect } from "react";
import axios from "axios";

function QuoteGenerator(props) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote("To be or not to be");
  }, []);

  const generateQuote = async () => {
    let newQuote = await axios.get("https://api.quotable.io/random");
    console.log(newQuote.data.content);
    setQuote(newQuote.data.content);
  };

  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={generateQuote}>Generate</button>
    </div>
  );
}

export default QuoteGenerator;