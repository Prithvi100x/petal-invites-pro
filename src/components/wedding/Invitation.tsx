import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Cover } from "./Cover";
import { Events } from "./Events";
import { Footer } from "./Footer";
import { GaneshLoader } from "./GaneshLoader";
import { Hero } from "./Hero";
import { PhotoMosaic } from "./PhotoMosaic";
import { RSVPForm } from "./RSVPForm";

type Stage = "cover" | "opening" | "blessing" | "invitation";

export function Invitation() {
  const [stage, setStage] = useState<Stage>("cover");
  useSmoothScroll(stage === "invitation");

  useEffect(() => {
    if (stage === "cover" || stage === "invitation") return;
    const timeout = window.setTimeout(
      () => setStage(stage === "opening" ? "blessing" : "invitation"),
      stage === "opening" ? 1000 : 2100,
    );
    return () => window.clearTimeout(timeout);
  }, [stage]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = stage === "invitation" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  const showCover = stage === "cover" || stage === "opening";

  return (
    <>
      {stage !== "cover" ? (
        <main
          className="w-full"
          style={
            stage === "invitation"
              ? { animation: "invitation-enter 1200ms cubic-bezier(0.22,0.61,0.36,1) both" }
              : { opacity: 0 }
          }
        >
          <Hero />
          <PhotoMosaic />
          <Events />
          <RSVPForm />
          <Footer />
        </main>
      ) : null}

      {stage === "blessing" ? <GaneshLoader /> : null}
      {showCover ? (
        <Cover opening={stage === "opening"} onOpen={() => setStage("opening")} />
      ) : null}
    </>
  );
}