"use client";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export function AnalyticsWrapper() {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Analytics />
    </>
  );
}
