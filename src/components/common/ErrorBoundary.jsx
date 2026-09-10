import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("BaatCheet render error:", error);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          background: "#07090f",
          color: "#edf2ff",
          fontFamily: "Inter,system-ui,sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 680,
            width: "100%",
            padding: 28,
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 20,
            background: "rgba(16,20,31,.9)",
          }}
        >
          <div style={{ fontSize: 28, marginBottom: 10 }}>
            ⚠️ BaatCheet could not render
          </div>
          <p style={{ color: "#aab3c7" }}>
            A frontend runtime error occurred. The exact error is shown below so
            it can be fixed instead of leaving a blank screen.
          </p>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              padding: 16,
              borderRadius: 12,
              background: "#0b0e16",
              color: "#ff9fb1",
            }}
          >
            {this.state.error?.stack || String(this.state.error)}
          </pre>
          <button
            onClick={() => location.reload()}
            style={{
              marginTop: 12,
              padding: "10px 14px",
              border: 0,
              borderRadius: 10,
              background: "#8b7cff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Reload app
          </button>
        </div>
      </div>
    );
  }
}
