import React from 'react';

export default function SectionHeading({
  sanskrit = "॥ श्री हित हरिवंश ॥",
  title,
  subtitle,
  align = "center",
  light = false
}) {
  const isCenter = align === "center";

  return (
    <div
      style={{
        textAlign: isCenter ? "center" : "left",
        marginBottom: "2.25rem",
        position: "relative"
      }}
    >
      {sanskrit && (
        <span
          className="eyebrow devanagari-text"
          style={{
            color: light ? "var(--gold-light)" : "var(--gold-dark)"
          }}
        >
          {sanskrit}
        </span>
      )}

      <h2
        style={{
          fontSize: "var(--fs-h2)",
          color: light ? "#FFFFFF" : "var(--maroon)",
          fontWeight: 600,
          lineHeight: 1.2,
          textWrap: "balance"
        }}
      >
        {title}
      </h2>

      {/* Decorative Gold Divider with Sacred Lotus Ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCenter ? "center" : "flex-start",
          gap: "10px",
          margin: "0.65rem 0"
        }}
      >
        <span
          style={{
            height: "1px",
            width: "36px",
            background: "linear-gradient(90deg, transparent, var(--gold))"
          }}
        />
        {/* Lotus Ornament */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 21C14 19 16 16.5 16 13C16 8 12 2 12 2Z"
            fill="var(--gold)"
          />
          <path
            d="M12 21C7 20 4 16 4 13C4 10 7 7 7 7C7 7 6 12 12 21Z"
            fill="var(--gold)"
            opacity="0.75"
          />
          <path
            d="M12 21C17 20 20 16 20 13C20 10 17 7 17 7C17 7 18 12 12 21Z"
            fill="var(--gold)"
            opacity="0.75"
          />
        </svg>
        <span
          style={{
            height: "1px",
            width: "36px",
            background: "linear-gradient(90deg, var(--gold), transparent)"
          }}
        />
      </div>

      {subtitle && (
        <p
          style={{
            maxWidth: isCenter ? "640px" : "100%",
            margin: isCenter ? "0 auto" : "0",
            fontSize: "var(--fs-body)",
            color: light ? "rgba(251, 246, 236, 0.88)" : "var(--text-muted)",
            lineHeight: 1.65,
            textWrap: "pretty"
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
