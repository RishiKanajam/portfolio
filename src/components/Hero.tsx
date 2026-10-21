import { siteConfig } from "@/content/content";
import ProfileLinks from "./ProfileLinks";

export default function Hero() {
  return <header className="hero" id="top">
    <h1>{siteConfig.name}</h1>
    <p className="role">Full-stack &amp; AI engineer in Sydney</p>
    <p className="thesis">{siteConfig.headline}</p>
    <ProfileLinks />
    <p className="metadata rights">Full Australian work rights through Sept 2028.</p>
  </header>;
}
