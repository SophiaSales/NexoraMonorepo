import { Button } from "@sophiasales/nexora-button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Nexora Button Demo" }];
}

export default function Home() {
  return (
    <main style={{ display: "flex", gap: 16, padding: 32, flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button size="lg" onClick={() => alert("clicou")}>Large</Button>
      <Button disabled>Disabled</Button>
    </main>
  );
}
