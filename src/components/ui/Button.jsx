import { Link } from "react-router-dom";

export function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  className = "",
  style,
  ...props
}) {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontWeight: 600,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.65 : 1,
    transition: "all var(--duration-fast) var(--ease-default)",
    border: "none",
    fontFamily: "inherit",
    textDecoration: "none",
  };

  const sizeStyles = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 24px", fontSize: 14 },
    lg: { padding: "15px 30px", fontSize: 15 },
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent-600))",
      color: "#fff",
      boxShadow: "0 4px 20px rgba(14, 127, 114, 0.35)",
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text-muted)",
    },
  };

  const hoverStyles = !disabled
    ? {
        primary: { transform: "translateY(-2px)", boxShadow: "0 10px 30px rgba(14, 127, 114, 0.45)" },
        secondary: { borderColor: "var(--color-accent)", color: "var(--color-accent)", background: "rgba(14, 127, 114, 0.08)" },
        ghost: { color: "var(--color-text)" },
      }
    : {};

  const combinedStyle = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  const Component = to ? Link : href ? "a" : "button";

  return (
    <Component
      type={to || href ? undefined : type}
      to={to}
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className}`}
      style={combinedStyle}
      onMouseEnter={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, hoverStyles[variant]);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, variantStyles[variant]);
        e.currentTarget.style.transform = "";
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
