export async function getMotivation(taskText) {
  // const apiKey = "API"; // 🔒 API-key

  try {
    const response = await fetch("https://copilot5.p.rapidapi.com/copilot", {
      method: "POST",
      headers: {
        "x-rapidapi-key": `${apiKey}`,
        "x-rapidapi-host": "copilot5.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `I need to make "${taskText}" and I want you to write a clear, beautiful, simple, funny, motivating and most importantly short text without symbols and links but emoji is ok.`,
        conversation_id: null,
        markdown: true,
      }),
    });
    if (!response.ok) throw new Error("Error " + response.status);
    const result = await response.json();
    const { message } = result.data;
    console.log(message);
    return message;
  } catch (error) {
    console.error("Error receiving motivation:", error);
    return `Good luck with ${taskText}`;
  }
}
