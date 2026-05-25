"use client";
import { useState } from "react";
import Students from "../utils/teacher.json";
import { Nanum_Pen_Script } from "next/font/google";

const jobColors = {
  "Frontend IT Teacher":          "#60a5fa",
  "Design IT Teacher":            "#c084fc",
  "Chemistry Teacher":            "#34d399",
  "Mathematics Teacher":          "#f472b6",
  "English Teacher":              "#fbbf24",
  "English Council Teacher":      "#fb923c",
  "History & Society Teacher":    "#a78bfa",
  "Mongolian Literature Teacher": "#4ade80",
  "IT Teacher":                   "#38bdf8",
  "Python Teacher":               "#86efac",
  "PE Teacher":                   "#f87171",
  "Principal":                    "#fde68a",
  "Social Worker":                "#67e8f9",
  "Therapist":                    "#d8b4fe",
  "Manager":                      "#fed7aa",
  "Kitchen Staff":                "#bbf7d0",
  "Staff":                        "#e2e8f0",
  "Student":                      "#cbd5e1",
  "student":                      "#cbd5e1",
  "waiter":                       "#67e8f9",
};

function getInitials(firstname, lastname) {
  return (firstname[0] || "") + (lastname[0] || "");
}

function Card({ person }) {
  const [hovered, setHovered] = useState(false);
  const accentColor = jobColors[person.job] || "#94a3b8";
  const items = person?.items?.map((i) => i.name).join(", ");
  const initials = getInitials(person.firstname, person.lastname);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#f8faff" : "#ffffff",
        borderRadius: "16px",
        padding: "18px 16px",
        boxShadow: hovered
          ? `0 8px 32px rgba(0,0,0,0.12), 0 0 0 2px ${accentColor}55`
          : "0 2px 12px rgba(0,0,0,0.08)",
        border: `1px solid #e2e8f0`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${accentColor}88, ${accentColor}33)`,
            border: `2px solid ${accentColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Georgia', serif",
            fontWeight: "bold",
            fontSize: 16,
            color: "#fff",
            flexShrink: 0,
            letterSpacing: 1,
          }}
        >
          {initials || "?"}
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: "#1e293b",
              letterSpacing: 0.3,
              lineHeight: 1.2,
            }}
          >
            {person.firstname} {person.lastname}
            <img className="border rounded-full h-35 w-35" src={person.image} />
          </div>
          <div
            style={{
              display: "inline-block",
              marginTop: 4,
              padding: "2px 9px",
              borderRadius: 20,
              background: `${accentColor}22`,
              border: `1px solid ${accentColor}66`,
              color: accentColor,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            {person.job}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", fontSize: 12, color: "#64748b" }}>
        <span style={{ background: "#f1f5f9", borderRadius: 8, padding: "3px 9px" }}>
          {person.height} cm
        </span>
        <span style={{ background: "#f1f5f9", borderRadius: 8, padding: "3px 9px" }}>
          {items}
        </span>
        <span style={{ background: "#f1f5f9", borderRadius: 8, padding: "3px 9px" }}>
          #{person.id}
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = Students.filter((s) => {
    const q = query.toLowerCase();
    const fullName = `${s.firstname} ${s.lastname}`.toLowerCase();
    const job = (s.job || s["🧑‍💻job"] || "").toLowerCase();
    return fullName.includes(q) || job.includes(q);
  });Nanum_Pen_Script

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8faff",
        padding: "32px 24px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          fontWeight: 800,
          letterSpacing: 1,
          marginBottom: 8,
          textShadow: "0 2px 16px rgba(0,0,0,0.3)",
        }}
      >
        Nest Teachers
      </h1>
      <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: 20, fontSize: 14 }}>
        {Students.length} members
      </p>

      {}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          maxWidth: 480,
          margin: "0 auto 12px",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          padding: "8px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <span style={{ color: "#94a3b8", fontSize: 18 }}>🔍</span>
        <input
          type="text"
          placeholder="Search by name "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14,
            color: "#1e293b",
            width: "100%",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#94a3b8",
              fontSize: 18,
              lineHeight: 1,
              padding: 0,
            }}
          >
            ✕
          </button>
        )}
      </div>

      <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: 32, fontSize: 13 }}>
        {query
          ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
          : `${Students.length} members`}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {filtered.map((s, i) => (
          <Card key={`${s.id}-${i}`} person={s} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#94a3b8", marginTop: 48, fontSize: 15 }}>
          No results found for "{query}"
        </p>
      )}
    </div>
  );
}