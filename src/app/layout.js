import "./globals.css";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function RootLayout({ children }) {
  const sb = getStoryblokApi();
  const { data } = await sb.get("cdn/stories/config", { version: "draft" }).catch(()=>({}));
  const cfg = data?.story?.content;

  return (
    <html lang="sv">
      <body>
        {cfg?.header && <StoryblokComponent blok={cfg.header} />}
        <main>{children}</main>
        {cfg?.footer && <StoryblokComponent blok={cfg.footer} />}
      </body>
    </html>
  );
}
