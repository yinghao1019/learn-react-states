import OpenAI from "openai";

export async function POST(request) {
    // 接收並解析前端傳來的物件
    const { name, city, occupation } = await request.json();
    
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system", content: `你是一自我介紹產生器，
                可以根據使用者的資料產生一份敘述。
                敘述限制200個字` },
            {
                role: "user",
                content: `#使用者資料
                姓名:${name}, 
                居住城市: ${city}, 
                職業: ${occupation}`
            }
        ]
    });

    console.log("ai 回應的範例", completion.choices[0].message);

    const message = {
        intro: completion.choices[0].message.content
    }
    return Response.json(message);
}