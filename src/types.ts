import { EventHandler } from '@create-figma-plugin/utilities'

// ------------------------—------------------------—
export interface AdjContent extends EventHandler {
  name: 'ADJUST_CONTENT'
  handler: (count: number, adjAutoLay: boolean) => void
}
// ------------------------—------------------------—
export interface adjH extends EventHandler {
  name: 'ADJUST_HIGHT'
  handler: (count: number, scaleUp: boolean) => void
}
// ------------------------—------------------------—
export interface adjW extends EventHandler {
  name: 'ADJUST_WIDTH'
  handler: (count: number, scaleUp: boolean) => void
}
// ------------------------—------------------------—
export interface adjWH extends EventHandler {
  name: 'ADJUST_WIDTH_HEIGHT'
  handler: (count: number, scaleUp: boolean) => void
}
// ------------------------—------------------------—
export interface adjAutoLayout extends EventHandler {
  name: 'ADJUST_AUTOLAYOUT'
  handler: (count: number, scaleUp: boolean) => void
}
// ------------------------—------------------------—


export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
