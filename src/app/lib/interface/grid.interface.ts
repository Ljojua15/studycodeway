export interface gridLevels {
  id: number
  title: string
  description: string
  instructions: string
  initialCSS: string
  targetCSS: string
  gridItems: GridItem[]
  waterPosition: { row: number; col: number }
  plantPositions: { row: number; col: number; plant: string }[]
  hint?: string
}

export interface GridItem {
  id: string
  type: "plant" | "water" | "empty"
  emoji: string
  position: { row: number; col: number }
}
