import { useId, useState } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "company", label: "Company", type: "text", required: false, autoComplete: "organization" },
  { name: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const formId = useId();
  const noteId = `${formId}-note`;

  return (
    <form
      className="max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      aria-describedby={noteId}
      noValidate={false}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.name} htmlFor={`${formId}-${f.name}`} className="flex flex-col gap-2">
            <span className="label-mono text-muted-foreground">
              {f.label}
              {f.required ? (
                <>
                  {" "}
                  <span aria-hidden="true">*</span>
                  <span className="sr-only"> (required)</span>
                </>
              ) : null}
            </span>
            <input
              id={`${formId}-${f.name}`}
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              aria-required={f.required}
              className="border-border focus:border-primary rounded-sm bg-transparent border-b py-3 text-lg outline-none transition-[border-color,box-shadow] duration-300 focus:shadow-[0_4px_0_-2px_var(--color-primary)]"
            />
          </label>
        ))}
      </div>

      <label htmlFor={`${formId}-message`} className="mt-8 flex flex-col gap-2">
        <span className="label-mono text-muted-foreground">
          Message <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </span>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          aria-required
          className="border-border focus:border-primary rounded-sm bg-transparent border-b py-3 text-lg outline-none transition-[border-color,box-shadow] duration-300 focus:shadow-[0_4px_0_-2px_var(--color-primary)]"
        />
      </label>

      <button type="submit" className="label-mono btn-cta-solid bg-ink text-ink-foreground hover:bg-primary mt-10">
        Let's talk <span aria-hidden>→</span>
      </button>

      <p id={noteId} role="status" aria-live="polite" className="text-muted-foreground mt-6 text-sm">
        {sent
          ? "Thanks — your details are ready to send. This form isn't connected to an inbox yet, so please also reach us through the contact details on this page."
          : "This form isn't connected to an inbox yet. Ask to enable submissions and we'll wire it up."}
      </p>
    </form>
  );
}
