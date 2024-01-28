import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import Home from "./src/pages/index.js";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home></Home>
    </NativeBaseProvider>
  );
}