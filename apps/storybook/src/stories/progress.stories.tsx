import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "@leaner/ui/components/progress"

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 60,
  },
  render: (args) => <Progress {...args} className="w-72" />,
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

function Animated() {
  const [value, setValue] = React.useState(10)
  React.useEffect(() => {
    const t = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10))
    }, 600)
    return () => clearInterval(t)
  }, [])
  return <Progress value={value} className="w-72" />
}

export const Animated_: Story = {
  name: "Animated",
  render: () => <Animated />,
}
