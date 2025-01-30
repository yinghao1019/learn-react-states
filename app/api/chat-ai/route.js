// 關於next.js架構API建置規則可參考
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body
import OpenAI from "openai";

export async function POST(request) {
    // TODO: 接收並解析前端傳來的物件
    const userMessage = await request.json();
    console.log(userMessage);
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { role: "system", content: "你是一日本旅遊專家。使用Markdown 美化" },
            {
                role: "user", 
                content: userMessage.text
            }
        ]
    });

    console.log("ai 回應的範例",completion.choices[0].message);

    const message = {
        text: completion.choices[0].message.content,
        createdAt: Date.now(),
        role: 'assistant'
    }
    return Response.json(message);
}