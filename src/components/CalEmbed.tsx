"use client";

import { useEffect } from "react";

type CalFunction = {
  (method: string, ...args: unknown[]): void;
  ns?: Record<string, unknown>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFunction;
  }
}

const CAL_NAMESPACE = "30min";
const CAL_LINK = "edcorner/30min";
const CAL_SCRIPT_SRC = "https://app.cal.com/embed/embed.js";

export function CalEmbed() {
  useEffect(() => {
    if (!window.Cal) {
      const queue: CalFunction = function calQueue(method: string, ...args: unknown[]) {
        queue.q?.push([method, ...args]);
      };

      queue.q = [];
      window.Cal = queue;
    }

    const cal = window.Cal;

    if (!document.querySelector(`script[src="${CAL_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = CAL_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    cal.ns = cal.ns ?? {};

    if (!cal.ns[CAL_NAMESPACE]) {
      cal.ns[CAL_NAMESPACE] = function namespacedCal(method: string, ...args: unknown[]) {
        cal("ns", CAL_NAMESPACE, method, ...args);
      };
    }

    const calNamespace = cal.ns[CAL_NAMESPACE] as CalFunction;

    cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });
    calNamespace("inline", {
      elementOrSelector: "#cal-inline-30min",
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: true,
      },
    });
    calNamespace("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="cal-embed-wrap">
      <div id="cal-inline-30min" className="cal-inline" />
      <a className="cal-fallback" href="https://cal.com/edcorner/30min" target="_blank" rel="noreferrer">
        Open booking calendar in a new tab
      </a>
    </div>
  );
}
