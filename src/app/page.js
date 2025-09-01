import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories/home", { version: "draft" });
  const body = data?.story?.content?.body || [];
  return body.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} />);
}

