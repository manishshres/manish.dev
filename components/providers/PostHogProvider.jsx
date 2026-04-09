import { useEffect } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

// ─────────────────────────────────────────────────────────
// TODO: Replace with your PostHog project API key.
// Sign up at https://posthog.com → Project Settings → API Keys
// Then add to .env.local: NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxx
// ─────────────────────────────────────────────────────────
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

export default function PostHogProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!POSTHOG_KEY) return; // skip if no key configured yet

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false, // manual pageview tracking below
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });

    // Track page views on route change
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  if (!POSTHOG_KEY) return <>{children}</>;

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
