import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:bg-primary/10"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-transform duration-300 hover:rotate-12" />
      )}
    </Button>
  );
}
