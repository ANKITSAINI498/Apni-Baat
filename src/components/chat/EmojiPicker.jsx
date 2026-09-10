const groups = [
  ["Smileys", "😀 😃 😄 😁 😂 🙂 🙃 😉 😊 😍 🥰 😘 😎 🤔 😭 😡"],
  ["People", "👍 👎 👏 🙌 🤝 💪 👋 🙏"],
  ["Food", "🍕 🍔 🍜 🍟 🍰 ☕ 🍵"],
  ["Travel", "✈️ 🚗 🗺️ 🏖️ 🏔️"],
  ["Symbols", "❤️ 🧡 💛 💚 💙 💜 🖤 🔥 ⭐"],
];
export default function EmojiPicker({ onPick }) {
  return (
    <div className="emoji-picker">
      {groups.map(([n, s]) => (
        <div key={n}>
          <small>{n}</small>
          <p>
            {[...s].map((e, i) => (
              <button key={i} onClick={() => onPick(e)}>
                {e}
              </button>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
