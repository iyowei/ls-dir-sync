import { readdirSync } from "fs";
import { join } from "path";

export default function lsDirSync(path) {
  const FILES = readdirSync(path, { withFileTypes: true });

  FILES.forEach((dirent, index) => {
    FILES[index] = {
      path: join(path, dirent.name), // 给到的 Path 必须是合法的绝对路径，所以这里仅组合路径即可
      dirent,
    };
  });

  return FILES;
}
