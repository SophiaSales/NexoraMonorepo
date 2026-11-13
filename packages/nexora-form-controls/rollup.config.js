import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        { file: pkg.main, format: "cjs", sourcemap: true, exports: "named" },
        { file: pkg.module, format: "esm", sourcemap: true },
    ],
    external: [
        ...Object.keys(pkg.peerDependencies || {}),
        "react/jsx-runtime",
        "tslib",
    ],
    plugins: [typescript({
            useTsconfigDeclarationDir: true,
            include: ["**/*.ts", "**/*.tsx"],
        })],
};
