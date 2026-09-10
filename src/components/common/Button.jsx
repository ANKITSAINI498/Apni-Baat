export default function Button({ children, ...p }) {
  return (
    <button className="icon-btn" {...p}>
      {children}
    </button>
  );
}
