"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

const options = [
  { value: "light", label: "Tema claro", icon: Sun },
  { value: "dark", label: "Tema escuro", icon: Moon },
  { value: "system", label: "Tema do sistema", icon: Monitor },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita mismatch de hidratação: o tema escolhido só é conhecido após montar no client
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="radiogroup"
      aria-label="Selecionar tema"
      className="flex items-center gap-0.5 rounded-full bg-black/20 p-0.5"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const isActive = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`p-1.5 rounded-full transition-colors ${
              isActive
                ? "bg-white text-gray-900"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
}
