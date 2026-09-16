import { useRouterState } from "@tanstack/react-router";
import { memo, type ReactNode } from "react";

export const PageTransition = memo(function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
});
