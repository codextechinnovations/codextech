import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function SmoothScroll({ children }) {
  useSmoothScroll();
  return children;
}
