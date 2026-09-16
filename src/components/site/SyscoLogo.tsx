import logo from "@/assets/sysco-logo.png";

type SyscoLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function SyscoLogo({ className = "", variant = "header" }: SyscoLogoProps) {
  const height =
    variant === "footer"
      ? "h-10 md:h-11"
      : "h-10 min-h-[40px] w-auto sm:h-11 md:h-12 lg:h-[3.25rem]";

  return (
    <img
      src={logo}
      alt="Sysco"
      width={256}
      height={180}
      className={`${height} block max-w-[min(46vw,12.5rem)] object-contain object-left sm:max-w-none ${className}`}
    />
  );
}
