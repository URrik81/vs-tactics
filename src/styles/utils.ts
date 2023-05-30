

export const staticAsset = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}/static/${path}`;
  };