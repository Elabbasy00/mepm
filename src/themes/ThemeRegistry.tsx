"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

import { extendTheme } from "@mui/joy/styles";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeOptions = React.useMemo(
    () =>
      extendTheme({
        // direction: themeDirection,

        // fontFamily: {
        //   body: fontFamily,
        //   display: fontFamily,
        // },
        colorSchemes: {
          light: {
            palette: {
              text: {},
              background: {
                body: "#ffffff",
              },
              primary: {
                solidBg: "#0d4e7f",
              },
              neutral: {},
              success: {
                softBg: "#C7F7C7",
              },
            },
          },
          dark: {
            palette: {
              background: {},
            },
          },
        },
      }),
    []
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <CssVarsProvider
        theme={themeOptions}
        defaultMode="light"
        disableTransitionOnChange
      >
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
