import { FolderTreeWithState } from "@/components/features/folder-tree/folder-tree";

import { type FolderTreeType } from "@/types/folder-tree";

const DATA: FolderTreeType[] = [
  {
    id: "1",
    name: "my-react-project",
    type: "folder",
    isOpen: true,
    children: [
      {
        id: "2",
        name: "src",
        type: "folder",
        isOpen: true,
        children: [
          {
            id: "3",
            name: "components",
            type: "folder",
            isOpen: false,
            children: [
              {
                id: "4",
                name: "ui",
                type: "folder",
                isOpen: false,
                children: [
                  { id: "5", name: "Button.tsx", type: "file" },
                  { id: "6", name: "Input.tsx", type: "file" },
                  { id: "7", name: "Modal.tsx", type: "file" },
                  { id: "8", name: "Tooltip.tsx", type: "file" },
                ],
              },
              {
                id: "9",
                name: "features",
                type: "folder",
                isOpen: false,
                children: [
                  {
                    id: "10",
                    name: "auth",
                    type: "folder",
                    isOpen: false,
                    children: [
                      { id: "11", name: "LoginForm.tsx", type: "file" },
                      { id: "12", name: "RegisterForm.tsx", type: "file" },
                      { id: "13", name: "AuthProvider.tsx", type: "file" },
                    ],
                  },
                  {
                    id: "14",
                    name: "dashboard",
                    type: "folder",
                    isOpen: false,
                    children: [
                      { id: "15", name: "Dashboard.tsx", type: "file" },
                      { id: "16", name: "Stats.tsx", type: "file" },
                      { id: "17", name: "Charts.tsx", type: "file" },
                    ],
                  },
                ],
              },
              { id: "18", name: "Layout.tsx", type: "file" },
              { id: "19", name: "Header.tsx", type: "file" },
              { id: "20", name: "Footer.tsx", type: "file" },
            ],
          },
          {
            id: "21",
            name: "hooks",
            type: "folder",
            isOpen: false,
            children: [
              { id: "22", name: "useAuth.ts", type: "file" },
              { id: "23", name: "useLocalStorage.ts", type: "file" },
              { id: "24", name: "useApi.ts", type: "file" },
              { id: "25", name: "useDebounce.ts", type: "file" },
            ],
          },
          {
            id: "26",
            name: "utils",
            type: "folder",
            isOpen: false,
            children: [
              { id: "27", name: "formatters.ts", type: "file" },
              { id: "28", name: "validators.ts", type: "file" },
              { id: "29", name: "constants.ts", type: "file" },
              { id: "30", name: "helpers.ts", type: "file" },
            ],
          },
          {
            id: "31",
            name: "types",
            type: "folder",
            isOpen: false,
            children: [
              { id: "32", name: "user.ts", type: "file" },
              { id: "33", name: "api.ts", type: "file" },
              { id: "34", name: "common.ts", type: "file" },
            ],
          },
          {
            id: "35",
            name: "styles",
            type: "folder",
            isOpen: false,
            children: [
              { id: "36", name: "globals.css", type: "file" },
              { id: "37", name: "components.css", type: "file" },
              { id: "38", name: "variables.css", type: "file" },
            ],
          },
          { id: "39", name: "App.tsx", type: "file" },
          { id: "40", name: "main.tsx", type: "file" },
          { id: "41", name: "index.css", type: "file" },
          { id: "42", name: "vite-env.d.ts", type: "file" },
        ],
      },
      {
        id: "43",
        name: "public",
        type: "folder",
        isOpen: false,
        children: [
          { id: "44", name: "favicon.ico", type: "file" },
          { id: "45", name: "logo.png", type: "file" },
          { id: "46", name: "manifest.json", type: "file" },
          {
            id: "47",
            name: "assets",
            type: "folder",
            isOpen: false,
            children: [
              { id: "48", name: "hero-image.jpg", type: "file" },
              { id: "49", name: "icon-sprite.svg", type: "file" },
            ],
          },
        ],
      },
      {
        id: "50",
        name: "tests",
        type: "folder",
        isOpen: false,
        children: [
          {
            id: "51",
            name: "__mocks__",
            type: "folder",
            isOpen: false,
            children: [
              { id: "52", name: "api.ts", type: "file" },
              { id: "53", name: "localStorage.ts", type: "file" },
            ],
          },
          {
            id: "54",
            name: "components",
            type: "folder",
            isOpen: false,
            children: [
              { id: "55", name: "Button.test.tsx", type: "file" },
              { id: "56", name: "LoginForm.test.tsx", type: "file" },
            ],
          },
          { id: "57", name: "setup.ts", type: "file" },
          { id: "58", name: "utils.test.ts", type: "file" },
        ],
      },
      {
        id: "59",
        name: "docs",
        type: "folder",
        isOpen: false,
        children: [
          { id: "60", name: "README.md", type: "file" },
          { id: "61", name: "CONTRIBUTING.md", type: "file" },
          { id: "62", name: "API.md", type: "file" },
          {
            id: "63",
            name: "assets",
            type: "folder",
            isOpen: false,
            children: [
              { id: "64", name: "architecture-diagram.png", type: "file" },
              {
                id: "65",
                name: "screenshots",
                type: "folder",
                isOpen: false,
                children: [
                  { id: "66", name: "dashboard.png", type: "file" },
                  { id: "67", name: "login-page.png", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      { id: "68", name: "package.json", type: "file" },
      { id: "69", name: "package-lock.json", type: "file" },
      { id: "70", name: "tsconfig.json", type: "file" },
      { id: "71", name: "vite.config.ts", type: "file" },
      { id: "72", name: "tailwind.config.js", type: "file" },
      { id: "73", name: "eslint.config.js", type: "file" },
      { id: "74", name: ".gitignore", type: "file" },
      { id: "75", name: ".env.example", type: "file" },
    ],
  },
  {
    id: "76",
    name: "node-api-server",
    type: "folder",
    isOpen: false,
    children: [
      {
        id: "77",
        name: "src",
        type: "folder",
        isOpen: false,
        children: [
          {
            id: "78",
            name: "controllers",
            type: "folder",
            isOpen: false,
            children: [
              { id: "79", name: "authController.js", type: "file" },
              { id: "80", name: "userController.js", type: "file" },
              { id: "81", name: "productController.js", type: "file" },
            ],
          },
          {
            id: "82",
            name: "middleware",
            type: "folder",
            isOpen: false,
            children: [
              { id: "83", name: "auth.js", type: "file" },
              { id: "84", name: "validation.js", type: "file" },
              { id: "85", name: "errorHandler.js", type: "file" },
            ],
          },
          {
            id: "86",
            name: "models",
            type: "folder",
            isOpen: false,
            children: [
              { id: "87", name: "User.js", type: "file" },
              { id: "88", name: "Product.js", type: "file" },
              { id: "89", name: "Order.js", type: "file" },
            ],
          },
          {
            id: "90",
            name: "routes",
            type: "folder",
            isOpen: false,
            children: [
              { id: "91", name: "auth.js", type: "file" },
              { id: "92", name: "users.js", type: "file" },
              { id: "93", name: "products.js", type: "file" },
            ],
          },
          { id: "94", name: "server.js", type: "file" },
          { id: "95", name: "database.js", type: "file" },
          { id: "96", name: "config.js", type: "file" },
        ],
      },
      { id: "97", name: "package.json", type: "file" },
      { id: "98", name: ".env", type: "file" },
      { id: "99", name: "docker-compose.yml", type: "file" },
      { id: "100", name: "Dockerfile", type: "file" },
    ],
  },
  {
    id: "101",
    name: "mobile-app",
    type: "folder",
    isOpen: false,
    children: [
      {
        id: "102",
        name: "android",
        type: "folder",
        isOpen: false,
        children: [
          { id: "103", name: "build.gradle", type: "file" },
          { id: "104", name: "AndroidManifest.xml", type: "file" },
        ],
      },
      {
        id: "105",
        name: "ios",
        type: "folder",
        isOpen: false,
        children: [
          { id: "106", name: "Info.plist", type: "file" },
          { id: "107", name: "Podfile", type: "file" },
        ],
      },
      {
        id: "108",
        name: "src",
        type: "folder",
        isOpen: false,
        children: [
          {
            id: "109",
            name: "screens",
            type: "folder",
            isOpen: false,
            children: [
              { id: "110", name: "HomeScreen.tsx", type: "file" },
              { id: "111", name: "ProfileScreen.tsx", type: "file" },
              { id: "112", name: "SettingsScreen.tsx", type: "file" },
            ],
          },
          {
            id: "113",
            name: "navigation",
            type: "folder",
            isOpen: false,
            children: [
              { id: "114", name: "AppNavigator.tsx", type: "file" },
              { id: "115", name: "TabNavigator.tsx", type: "file" },
            ],
          },
          { id: "116", name: "App.tsx", type: "file" },
        ],
      },
      { id: "117", name: "package.json", type: "file" },
      { id: "118", name: "metro.config.js", type: "file" },
    ],
  },
];

const FolderTreePage = () => {
  return (
    <div className="p-10 flex ps-30">
      <FolderTreeWithState tree={DATA} />
    </div>
  );
};

export default FolderTreePage;
