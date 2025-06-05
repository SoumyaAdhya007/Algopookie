import axios from "axios";
const headers = {
  Authorization: `Bearer ${process.env.JUDGE0_SULU_TOKEN}`,
};

export const getJudge0LanguageId = (language) => {
  const languageMap = {
    PYTHON: 71,
    JAVA: 62,
    JAVASCRIPT: 63,
  };
  return languageMap[language.toUpperCase()];
};

export const submissionBatch = async (submissions) => {
  const { data } = await axios.post(
    `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,
    {
      submissions,
    },
    { headers }
  );
  console.log("Submission tokens:", data);
  return data;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const pollBatchResults = async (tokens) => {
  while (true) {
    const { data } = await axios.get(
      `${process.env.JUDGE0_API_URL}/submissions/batch`,
      {
        params: {
          tokens: tokens.join(","),
          base64_encoded: false,
        },
      },
      { headers }
    );

    const results = data.submissions;
    const isAllDone = results.every(
      (res) => res.status.id !== 1 && res.status.id !== 2
    );
    if (isAllDone) return results;
    await sleep(1000);
  }
};

export const getLanguageName = (languageId) => {
  const LANGUAGE_NAMES = {
    74: "TypeScript",
    71: "Python",
    62: "Java",
    63: "JavaScript",
  };

  return LANGUAGE_NAMES[languageId] || "Unknown";
};
