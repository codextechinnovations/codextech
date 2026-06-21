import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  magnetic,
  className = "",
  style,
  ...props
}) {
  const btnRef = useRef(null);
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
    position: "relative",
    willChange: "transform",
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

  const handleMouseMove = useCallback((e) => {
    if (!magnetic || !btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [magnetic, disabled]);

  const handleMouseLeave = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.35)",
    });
  }, []);

  const combinedStyle = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  const Component = to ? Link : href ? "a" : "button";

  const handleEnter = (e) => {
    if (disabled) return;
    if (magnetic) {
      const { transform: _, ...rest } = hoverStyles[variant] || {};
      Object.assign(e.currentTarget.style, rest);
    } else {
      Object.assign(e.currentTarget.style, hoverStyles[variant] || {});
    }
  };

  const handleLeave = (e) => {
    Object.assign(e.currentTarget.style, variantStyles[variant]);
    handleMouseLeave();
  };

  return (
    <Component
      ref={btnRef}
      type={to || href ? undefined : type}
      to={to}
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className}`}
      style={combinedStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Component>
  );
}
