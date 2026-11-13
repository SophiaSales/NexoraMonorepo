import { Button } from "@sophiasales/nexora-button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Nexora Button Demo" }];
}

const colors = ["pink", "purple", "blue"] as const;
const variants = ["primary", "secondary", "tertiary"] as const;
const sizes = ["xs", "sm", "md", "lg"] as const;

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
        </section>
      ))}
    </main>
  );
}
