import fetch from "node-fetch";
import process from "process";

const API_ENDPOINT = "https://api.example.com/data";
const API_KEY = process.env.MY_SECRET_API_KEY;

// Check if the API_KEY was loaded
if (API_KEY) {
  console.log("API key loaded.");
} else {
  console.error("API key missing.");
}

async function data() {
  try {
    const response = await fetch(API_ENDPOINT, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (!response.ok) {
      throw new Error("Response not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

data();
