import * as React from "react"
import type { Preview } from "@storybook/react-vite"

import { Toaster } from "@leaner/ui/components/sonner"
import { TooltipProvider } from "@leaner/ui/components/tooltip"

import "../src/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' = hiện vi phạm a11y dạng cảnh báo trong panel; đổi 'error' để fail test.
      test: "todo",
    },
  },
  // Nút chuyển Light/Dark trên toolbar — preview component ở cả 2 theme
  globalTypes: {
    theme: {
      description: "Theme sáng / tối",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string
      React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
      }, [theme])

      return (
        <TooltipProvider>
          <Story />
          <Toaster />
        </TooltipProvider>
      )
    },
  ],
}

export default preview
