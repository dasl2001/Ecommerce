import { renderRichText } from "@storyblok/react/rsc";
export function renderSbText(value) {
  if (value && typeof value === "object" && value.type === "doc" && Array.isArray(value.content)) {
    return renderRichText(value);
  }
  if (typeof value === "string") {
    return <p>{value}</p>;
  }
  return null;
}
