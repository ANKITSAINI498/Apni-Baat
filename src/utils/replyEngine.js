const categories = {
  greeting:
    /\b(hello|hi|hey|heyya|good morning|good night|gm|gn|kaise ho|kya haal)\b/i,
  goodbye: /\b(bye|goodbye|see you|milte hain|take care)\b/i,
  romantic: /\b(love|miss you|cute|sweet|jaan|baby|❤️|love you)\b/i,
  joke: /\b(joke|funny|hasao|mazak|laugh)\b/i,
  motivation: /\b(motivate|motivation|demotivated|give up|inspire|himmat)\b/i,
  coding:
    /\b(java|react|spring|boot|code|coding|bug|api|javascript|css|html|program)\b/i,
  study: /\b(study|exam|padh|revision|learn|course|college)\b/i,
  work: /\b(work|office|project|meeting|deadline|client)\b/i,
  food: /\b(food|khana|pizza|coffee|chai|restaurant|eat)\b/i,
  travel: /\b(travel|trip|jaipur|delhi|mumbai|flight|train|tour)\b/i,
  thanks: /\b(thanks|thank you|shukriya|dhanyavaad)\b/i,
  emoji: /^[\p{Extended_Pictographic}\s]+$/u,
};
export function detectCategory(text) {
  for (const [key, re] of Object.entries(categories)) {
    if (re.test(text)) return key;
  }
  return "general";
}
export function generateReply(text, responses) {
  const key = detectCategory(text);
  const pool = responses[key] || responses.general;
  return pool[Math.floor(Math.random() * pool.length)];
}
