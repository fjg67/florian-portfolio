"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { experiences, profile, projects, skillGroups } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type TerminalProps = { open: boolean; onClose: () => void };
type Entry = { command: string; output: string[] };

const commandNames = ["help", "about", "skills", "projects", "experience", "contact", "whoami", "matrix", "clear"];

export function Terminal({ open, onClose }: TerminalProps) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const [matrix, setMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!open) return;
    const activeElement = document.activeElement;
    returnFocusRef.current = activeElement instanceof HTMLElement ? activeElement : null;
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      window.clearTimeout(timeout);
      returnFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!matrix) return;
    const timeout = window.setTimeout(() => setMatrix(false), 2600);
    return () => window.clearTimeout(timeout);
  }, [matrix]);

  function submitCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    setValue("");
    if (command === "clear") {
      setEntries([]);
      return;
    }
    let output: string[];
    switch (command) {
      case "help":
        output = ["Available commands:", ...commandNames.filter((item) => item !== "clear").map((item) => `  ${item}`), "  clear"];
        break;
      case "whoami":
      case "about":
        output = [profile.name, "Mobile • Web • Infrastructure"];
        break;
      case "skills":
        output = skillGroups
          .filter((group) => ["Mobile", "Back-end", "Infrastructure"].includes(group.label))
          .map((group) => `[${group.label.toUpperCase()}] ${group.items.join(" · ")}`);
        break;
      case "projects":
        output = projects.map((project) => `${project.number}  ${project.name}`);
        break;
      case "experience":
        output = experiences.map((experience) => `${experience.company} — ${experience.role} (${experience.period})`);
        break;
      case "contact":
        output = [profile.email, profile.location];
        break;
      case "matrix":
        setMatrix(true);
        output = ["Initializing visual sequence…", "SYSTEM RESTORED ✓"];
        break;
      default:
        output = [`command not found: ${command}`, "Type “help” to list available commands."];
    }
    setEntries((current) => [...current, { command, output }]);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="terminal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0.1 : 0.2 }}>
          <motion.section className="terminal-window" role="dialog" aria-modal="true" aria-labelledby="terminal-title"
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              const focusable = event.currentTarget.querySelectorAll<HTMLElement>("button, input:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])");
              const first = focusable.item(0);
              const last = focusable.item(focusable.length - 1);
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
              }
            }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98, filter: "blur(8px)" }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.25 }}>
            <div className="terminal-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span id="terminal-title">florian@portfolio: ~</span>
              <button onClick={onClose} aria-label="Fermer le terminal">ESC</button>
            </div>
            <div className="terminal-content" aria-live="polite">
              <p className="terminal-welcome">Bienvenue. Tapez <code>help</code> pour explorer.</p>
              {entries.map((entry, index) => (
                <div className="terminal-entry" key={`${entry.command}-${index}`}>
                  <p><span>florian@portfolio:~$</span> {entry.command}</p>
                  {entry.output.map((line, lineIndex) => <p className="terminal-output" key={`${line}-${lineIndex}`}>{line}</p>)}
                </div>
              ))}
              <form onSubmit={submitCommand} className="terminal-form">
                <label htmlFor="terminal-input">florian@portfolio:~$</label>
                <input id="terminal-input" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)}
                  autoComplete="off" spellCheck={false} aria-label="Commande terminal" />
              </form>
            </div>
            {matrix && (
              <div className="matrix-overlay" aria-label="Animation décorative">
                {Array.from({ length: 9 }, (_, index) => <span key={index} style={{ "--column": index } as CSSProperties}>0101<br />{index % 2 ? "API" : "SYS"}<br />1010<br />{index % 2 ? "010" : "101"}</span>)}
                <strong>SYSTEM RESTORED ✓</strong>
              </div>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
