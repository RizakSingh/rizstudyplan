const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
})

const askAI = async (question) => {

    const result = await model.generateContent(question)

    const response = result.response.text()

    return response
}

module.exports = askAI