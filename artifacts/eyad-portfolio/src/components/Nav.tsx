import { useLocation } from "wouter";
import {
  BookIcon,
  BriefcaseIcon,
  DocumentIcon,
  HomeIcon,
  PlusIcon,
  ProcessIcon,
} from "./icons";

const NAV_ICON_COLOR = "rgba(255,255,255,0.85)";

const navItems = [
  {
    label: "Home",
    href: "/#home",
    match: (p: string) => p === "/",
    icon: HomeIcon,
    color: NAV_ICON_COLOR,
    activeColor: NAV_ICON_COLOR,
  },
  {
    label: "Portfolio",
    href: "/#work",
    match: () => false,
    icon: BriefcaseIcon,
    color: NAV_ICON_COLOR,
    activeColor: NAV_ICON_COLOR,
  },
  {
    label: "FAQ",
    href: "/#faq",
    match: () => false,
    icon: DocumentIcon,
    color: NAV_ICON_COLOR,
    activeColor: NAV_ICON_COLOR,
  },
];

const sidebarItems = [
  { label: "Process",     href: "/#process", icon: BookIcon,      color: "#005BFF" },
  { label: "Portfolio",   href: "/#work",    icon: ProcessIcon,   color: "#005BFF" },
  { label: "Book a call", href: "/#book",    icon: PlusIcon,      color: "#005BFF" },
];

function Divider() {
  return (
    <span
      className="mx-1 h-5 w-px shrink-0"
      style={{ background: "rgba(255,255,255,0.12)" }}
      aria-hidden="true"
    />
  );
}

export default function Nav() {
  const [pathname] = useLocation();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1 rounded-full px-2 py-1.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Profile identity */}
            <a
              href="/#home"
              className="flex items-center gap-2.5 rounded-full px-1 py-0.5 transition-opacity hover:opacity-85"
            >
              <div
                className="h-8 w-8 shrink-0 overflow-hidden rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <img
                  src="/profile.png"
                  alt="Eyad Alashry"
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-semibold tracking-tight text-white whitespace-nowrap">
                  Eyad Alashry
                </p>
                <p
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Reels Video Editor
                </p>
              </div>
            </a>

            <Divider />

            {/* Nav icon items */}
            {navItems.map((item, index) => {
              const isActive = item.match(pathname);
              const Icon = item.icon;
              return (
                <div key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span
                      className="mx-0.5 h-4 w-px shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-150"
                    style={{
                      color: isActive ? item.activeColor : item.color,
                      background: isActive ? `${item.activeColor}18` : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${item.color}20`;
                      (e.currentTarget as HTMLElement).style.color = item.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = isActive
                        ? `${item.activeColor}18`
                        : "transparent";
                      (e.currentTarget as HTMLElement).style.color = item.color;
                    }}
                  >
                    <Icon />
                  </a>
                </div>
              );
            })}

            <Divider />

            {/* Book a Call CTA */}
            <a
              href="/#book"
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-white transition-all duration-150"
              style={{
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)";
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* Bottom horizontal quick nav */}
      <aside
        aria-label="Quick navigation"
        className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 flex-row items-center gap-1 rounded-full px-2 py-1.5 md:flex"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <span
                  className="mx-0.5 h-4 w-px shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-hidden="true"
                />
              )}
              <a
                href={item.href}
                aria-label={item.label}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-150"
                style={{ color: item.color }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${item.color}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "";
                }}
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            </div>
          );
        })}
      </aside>

      <div className="h-[72px] md:h-[80px]" aria-hidden="true" />
    </>
  );
}
