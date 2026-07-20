"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita mismatch de hidratação: o tema resolvido só é conhecido após montar no client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Alternar tema"
        className="text-gray-300 hover:text-white transition-colors p-1 rounded-md"
      >
        <Moon className="w-5 h-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="text-gray-300 hover:text-white transition-colors p-1 rounded-md"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
