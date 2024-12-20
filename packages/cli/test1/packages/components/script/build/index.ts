import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除apui2

export const removeDist = () => {
  return delPath(`${pkgPath}/apui2`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/apui2/lib/src`))
    .pipe(dest(`${pkgPath}/apui2/es/src`));
};
  
//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
  
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);