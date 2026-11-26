import { Button } from "@sophiasales/nexora-button";
import { Checkbox, Radio, Switch } from "@sophiasales/nexora-form-controls";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Nexora Button Demo" }];
}

const colors = ["pink", "purple", "blue"] as const;
const variants = ["primary", "secondary", "tertiary"] as const;
const sizes = ["xs", "sm", "md", "lg"] as const;

const Sun = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const Moon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const row = { display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" } as const;

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 40,
        background:
          "radial-gradient(circle at 15% 10%, #fbd5ea 0%, transparent 45%)," +
          "radial-gradient(circle at 85% 20%, #d9c8f7 0%, transparent 45%)," +
          "radial-gradient(circle at 50% 90%, #bfdcff 0%, transparent 50%), #f6f0fb",
      }}
    >
      {colors.map((color) => (
        <section key={color} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: 24, textTransform: "capitalize" }}>
            {color}
          </h2>

          <div style={row}>
            {variants.map((variant) => (
              <Button key={variant} color={color} variant={variant}>
                {variant}
              </Button>
            ))}
            <Button color={color} disabled>
              Disabled
            </Button>
            <Button color={color} icon="→" iconPosition="right">
              With icon
            </Button>
          </div>

          <div style={row}>
            {sizes.map((size) => (
              <Button key={size} color={color} size={size}>
                {size}
              </Button>
            ))}
            <Button color={color} onClick={() => alert(`clicou: ${color}`)}>
              Click me
            </Button>
          </div>

          <div style={row}>
            <Checkbox color={color} label="Marcado" defaultChecked />
            <Checkbox color={color} label="Desmarcado" />
            <Checkbox color={color} label="Desabilitado" disabled />
            <Checkbox color={color} label="Desabilitado marcado" disabled defaultChecked />
          </div>

          <div style={row}>
            <Radio color={color} name={`radio-${color}`} label="Opção A" defaultChecked />
            <Radio color={color} name={`radio-${color}`} label="Opção B" />
            <Radio color={color} name={`radio-${color}`} label="Opção C" />
            <Radio color={color} name={`radio-off-${color}`} label="Desabilitado" disabled />
          </div>

          <div style={row}>
            <Switch color={color} label="Ligado" defaultChecked />
            <Switch color={color} label="Desligado" />
            <Switch color={color} label="Desabilitado" disabled />
            <Switch color={color} label="Desabilitado ligado" disabled defaultChecked />
            <Switch color={color} label="Claro / escuro" iconOff={Sun} iconOn={Moon} />
          </div>
        </section>
      ))}
    </main>
  );
}
