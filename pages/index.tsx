import type { NextPage } from "next"

/* 
.tsx文件是带有JSX语法的TypeScript文件

NextPage组件类型是Next.js提供的一种特殊组件类型，
可以访问一些Next.js提供的特殊功能，例如动态导入、预加载、懒加载等。
将组件声明为NextPage组件，可以更清晰地表示该组件将如何与Next.js一起工作,增加可读和维护性。
使用NextPage组件类型是一种最佳实践 */
const Home:NextPage = () => {
    return (
        <div>我是首页</div>
    );
};

export default Home;