import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ed Corner Ops",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpsRouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
