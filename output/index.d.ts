import { Configuration } from 'webpack';
import { YylBaseInitConfigOption } from 'yyl-base-webpack-config';
export declare type WConfigVue2Result = Required<Pick<Configuration, 'module' | 'resolve' | 'plugins'>>;
declare function yylVue2WebpackConfig(op: YylBaseInitConfigOption): Configuration;
export default yylVue2WebpackConfig;
