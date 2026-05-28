import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// https://vite.dev/config/
export default defineConfig({
  // ========== 关键修改：适配 GitHub Pages 部署的基础路径 ==========
  // 这里的仓库名要和你 GitHub 上的仓库名完全一致（注意大小写）
  base: '/神州特工/',
  build: {
    sourcemap: 'hidden',
    // 显式指定输出目录，确保 GitHub Actions 能找到构建产物
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