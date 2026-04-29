import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Parse JSON from markdown code block safely
function parseJSON(text: string) {
  try {
    const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
    if (jsonMatch && jsonMatch[1]) {
      return JSON.parse(jsonMatch[1]);
    }
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse JSON from AI response:", text);
    throw new Error("AI response was not valid JSON");
  }
}

export async function gradeEssay(essayText: string, level: string, requirements: string) {
  const prompt = `
作为一位专业的日语老师，请批改以下学生的日语作文。
学生的日语水平是：\${level}。
【老师的额外要求】：\${requirements || '无'}

【学生作文】：
\${essayText}

请仔细分析，并以下面的JSON格式返回批改结果（必须是合法的JSON，不要有额外文本）：
\`\`\`json
{
  "score": 85, // 0-100总分
  "subScores": { // 各项得分
    "content": 17, // 内容完整度 0-20
    "grammar": 19, // 语法准确性 0-25
    "vocabulary": 16, // 词汇使用 0-20
    "expression": 15, // 表达自然度 0-20
    "structure": 18 // 结构逻辑 0-15
  },
  "comprehensiveFeedback": "整体评语...（约100字）",
  "typicalErrors": [
    {
      "wrongSentence": "错误的句子",
      "correction": "修改后的句子",
      "reason": "错误原因分析（如：助词使用不当）"
    }
  ]
}
\`\`\`
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return parseJSON(response.text || "{}");
  } catch (error) {
    console.error("AI Grading failed:", error);
    throw error;
  }
}

export async function generateClassAnalysis(essaysData: any[]) {
  const prompt = `
你是一位资深的日语教学专家。以下是你班上最近一次作文任务的批改数据统计及部分典型错误。
请根据这些数据生成一份【班级整体分析报告】和【课堂讲义】。

输入数据（涵盖了学生的错误类型和分数段）：
\${JSON.stringify(essaysData, null, 2)}

请以JSON格式返回：
\`\`\`json
{
  "averageScore": 78.5,
  "highestScore": 94,
  "lowestScore": 52,
  "totalEssays": 42,
  "highFrequencyErrors": [
    { "name": "助词错误", "count": 36, "percentage": "85.7%" },
    { "name": "动词变形", "count": 21, "percentage": "50.0%" }
  ],
  "typicalProblems": [
    {
      "title": "助词「は」与「が」混用",
      "manifestation": "问题表现...",
      "teachingAdvice": "教学建议..."
    }
  ],
  "excellentExpressions": [
    { "sentence": "优秀句子", "highlight": "亮点说明..." }
  ],
  "lectureSuggestions": [
    { "topic": "重点讲解助词区别", "duration": "15分钟" }
  ],
  "lectureNotes": {
    "opening": "本次作文开场点评...",
    "errorsExplanation": [
      {
        "original": "原句",
        "issue": "问题",
        "correction": "修改建议"
      }
    ],
    "exercises": [
      "课堂练习题1..."
    ]
  }
}
\`\`\`
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return parseJSON(response.text || "{}");
  } catch (error) {
    console.error("AI Class Analysis failed:", error);
    throw error;
  }
}
