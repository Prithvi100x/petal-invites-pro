import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/wedding/Invitation";
import { wedding } from "@/config/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: wedding.seo.title },
      { name: "description", content: wedding.seo.description },
      { property: "og:title", content: wedding.seo.title },
      { property: "og:description", content: wedding.seo.description },
    ],
  }),
  component: Index,
});

function Index() {
  return <Invitation />;
}
