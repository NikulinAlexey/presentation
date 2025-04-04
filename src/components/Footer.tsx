import { cn } from "../utils/libs";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return <footer className={cn("py-4", className)}>Footer</footer>;
}

export default Footer;
