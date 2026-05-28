import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// https://vite.dev/config/
export default defineConfig({
  // ========== 关键修正：base必须和GitHub仓库名完全一致（区分大小写） ==========
  // 你的仓库名是 SHENZHOU-Agent，所以必须写成 /SHENZHOU-Agent/
  base: '/SHENZHOU-Agent/', 
  build: {
    sourcemap: 'hidden',
    // 确保构建产物输出到dist目录，和GitHub Actions配置一致
    outDir: 'dist'
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }),
    tsconfigPaths()
  ],
})