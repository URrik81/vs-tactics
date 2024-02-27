const REM_RATIO = 0.0625;

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export const px2rem = (pixels: number): string => `${pixels * REM_RATIO}rem`;

export const staticAsset = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}/static/${path}`;
};
