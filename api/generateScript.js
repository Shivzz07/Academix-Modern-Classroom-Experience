import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });


export default async function handler(req, res) {
  // Only allow POST requests -- anything else gets rejected
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  console.log("Key exists:", !!OPENAI_KEY, "length:", OPENAI_KEY?.length);

  try {
    // Step 1: Get a random funny news story
    const newsRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 300,
        messages: [{
          role: "user",
          content: `Give me one funny, weird, or absurd real news story. 
Nothing political, nothing AI related. 
Format strictly as:
Topic: <headline>
Content: <2 sentence summary>
Nothing else.`
        }]
      }),
    });

    const newsData = await newsRes.json();
     
    const newsText = newsData.choices[0].message.content;
   

    // Step 2: Generate the character conversation, using that news story
    const convRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 2000,
        messages: [{
          role: "user",
          content: `You are a scriptwriter for a group chat between 13 quirky characters who are reacting to a topic.

Topic and context: ${newsText}

The characters and their strict personalities are:
- Chilli: dumb, confidently wrong, passes illogical arguments with full conviction
- Yum: obsessed with food, finds hidden food references in everything, steers every point back to dinner
- Flow: anxious and stressed, overthinks everything, no chill at all
- Juno: fun and musical, responds with peace-making energy, occasionally breaks into song lyrics mid sentence
- Jax: nerdy, has a scientific theory or opinion for everything, occasionally states something that sounds smart but is actually a myth
- Nell: angry, questions everyone's existence, loves to provoke and ragebait the group
- Chip: soft spoken and emotional, gets too sensitive about small things, takes things personally
- Pippa: completely lost, no idea what the conversation is about, keeps asking others to recap

Rules:
1. Write exactly 90 to 120 lines total
2. Every character must appear multiple times
3. Each line must be SHORT — maximum 10 words per line, the shorter the better
4. Personalities must stay consistent throughout — never break character
5. The conversation should feel like a chaotic group chat, not a debate
7. Nell must ragebait at least twice
8. Pippa must ask for a recap at least 3 times
9. Chip must get hurt or emotional at least twice
10. Chilli and Jax must have at least one exchange where Chilli says something dumb and Jax corrects with a theory
12. The conversation should build naturally — reaction, chaos, tangents, someone trying to bring it back
13. Return ONLY a valid JSON array. No markdown, no explanation, no backticks, nothing before or after the array.
14. Add a some "Ehh" , "err" to the conversation making it more real , like after once the whole gang makes fun of Tod , everyone should laugh with "hahha" and slangs , this should be managed stretching to the max word/line count.

Format exactly like this:
[
  { "character": "Chilli", "personality": "dumb", "line": "wait so the sun is just a big lamp?" },
  { "character": "Jax", "personality": "nerdy", "line": "technically it is a G-type main sequence star" },
  { "character": "Nell", "personality": "angry", "line": "why are we even here discussing this" }
]

Start the JSON array immediately with [ and end with ]. Nothing else.`
        }]
      }),
    });

    const convData = await convRes.json();
    const raw = convData.choices[0].message.content;

    const first = raw.indexOf("[");
    const last = raw.lastIndexOf("]");
    const cleaned = raw.slice(first, last + 1);
    const parsed = JSON.parse(cleaned);

    // Send both results back to the browser
    return res.status(200).json({
      newsText: newsText,
      script: parsed,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate script" });
  }
}