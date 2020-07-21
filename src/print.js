export default function printMe() {
  console.log('I get called from print.js!');
  
  // 使用 source map追踪到错误和警告在源代码中的原始位置
  // cosnole.error('I get called from print.js!');
}