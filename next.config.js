// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['react-virtualized']);
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: {
        displayName: true,
        ssr: true,
        fileName: true,
      },
    },
  };
  
module.exports = withTM(nextConfig);
