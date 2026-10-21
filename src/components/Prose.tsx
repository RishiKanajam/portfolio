import { Fragment } from "react";

export default function Prose({ text }: { text: string }) {
  return <>{text.split("**").map((part, i) => i % 2
    ? <strong key={i}>{part}</strong>
    : <Fragment key={i}>{part}</Fragment>)}</>;
}
