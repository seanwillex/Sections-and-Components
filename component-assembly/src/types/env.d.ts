interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 