import { cn } from "../utils/libs";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return <header className={cn("py-4", className)}>Header</header>;
}

export default Header;
