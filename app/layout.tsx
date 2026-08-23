import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Open Sauce Sans (SIL OFL, see app/fonts/open-sauce-sans/OFL.txt).
// Kept on the CSS variable name --font-outfit rather than renaming it: ~25
// files across the project already reference var(--font-outfit) for every
// piece of Latin/English text (wordmarks, badges, CTAs, form fields). This
// repoints all of them to Open Sauce Sans in one place instead of a mass
// find-and-replace across the codebase.
//
// unicode-range below is Google's "latin" + "latin-ext" subsets merged, and
// deliberately excludes the Hebrew block (U+0590-05FF) and Hebrew
// presentation forms (U+FB1D-FB4F) so this face never matches Hebrew glyphs
// — the browser falls through to --font-rubik for those automatically. (The
// value must be an inline literal here — next/font's compiler plugin
// statically analyzes this call and rejects a variable reference.)
const openSauceSans = localFont({
  src: [
    { path: "./fonts/open-sauce-sans/OpenSauceSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/open-sauce-sans/OpenSauceSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/open-sauce-sans/OpenSauceSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/open-sauce-sans/OpenSauceSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/open-sauce-sans/OpenSauceSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/open-sauce-sans/OpenSauceSans-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0100-02BA, U+0131, U+0152-0153, U+02BB-02BC, U+02BD-02C5, U+02C6, U+02C7-02CC, U+02CE-02D7, U+02DA, U+02DC, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2000-206F, U+2020, U+20A0-20AB, U+20AC, U+20AD-20C0, U+2113, U+2122, U+2191, U+2193, U+2212, U+2215, U+2C60-2C7F, U+A720-A7FF, U+FEFF, U+FFFD",
    },
  ],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Self-hosted Rafika (CC0 public domain — see app/fonts/rafika/LICENSE.txt).
// Used for exactly one word: "WILD" in the "WILD Together" brand phrase.
// Single weight — the family ships Regular only.
const rafika = localFont({
  src: [{ path: "./fonts/rafika/Rafika.otf", weight: "400", style: "normal" }],
  variable: "--font-rafika",
  display: "swap",
  // Latin-only, matching the Open Sauce Sans range, so a stray Hebrew
  // character can never fall through to this display face.
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

const SITE_URL = "https://tumbapp.com";

// Shared scaffold only — each route (app/page.tsx, app/users/page.tsx) owns
// its own title/description/canonical/OG/Twitter metadata.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${openSauceSans.variable} ${rubik.variable} ${rafika.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
