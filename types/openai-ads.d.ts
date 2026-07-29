type OpenAIAdsCommand = (
  command: "init" | "measure" | "consent",
  ...args: unknown[]
) => void;

interface Window {
  oaiq?: OpenAIAdsCommand;
}
