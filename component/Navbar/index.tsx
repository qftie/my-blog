import type { NextPage } from "next";
import {useState} from 'react';
// link相当于a标签
import Link from "next/link";
import styles from './index.module.scss';
import { useRouter } from "next/router";
import { navs } from "./config";
import { Button } from "antd";
import Login from "../Login";
// layout就是个架子，渲染什么由js决定
const Navbar: NextPage = () => {
    const { pathname } = useRouter();
    const [ isShowLogin, setIsShowLogin] = useState(false);

    const handleGotoEditorPage = () => {
        

    }

    const handleLogin = () => {
        setIsShowLogin(true);

    }

    const handleClose = () => {
        /* 让父组件知道登录弹窗关闭了 */
        setIsShowLogin(false);
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logoArea}>MapleBLOG</div>
            <div className={styles.linkArea}>
                {
                    // 引用属性时加?，就可以实现没有该属性时也不会报错
                    // map时需要添加独一无二的key
                    /* Link组件知识：
                    Link组件是Next.js提供的特有组件，它可以实现页面间的跳转，不会导致整个页面的重新加载。a标签是HTML的标签，它实现页面间的跳转需要整个页面重新加载。

                    Link组件通过服务端渲染实现页面跳转，不需要额外的脚本，可以加速页面的跳转。而a标签是通过客户端渲染实现页面跳转，如果链接指向的页面大，那么加载速度就会变慢。

                    Link组件可以自动处理页面路径，可以简化页面间的跳转，缩短开发时间。a标签需要自己处理页面路径，需要自己写链接，开发起来比较麻烦。

                    总的来说，Link组件是更好的页面跳转的选择，它可以提高页面的加载速度，简化页面间的跳转，提高开发效率。
                     */
                    navs?.map((nav => (
                        <Link key={nav?.label} href={nav?.value}>
                            {/* 如果该项路由的值等于目前所在的路由，就显示已激活的状态 */}
                            <span className={pathname === nav?.value ? styles.active : ''}>{nav.label}</span >
                        </Link>
                    )))
                }
            </div>
            <div className={styles.operationArea}>
                <Button onClick={handleGotoEditorPage}>写文章</Button>
                <Button type="primary" onClick={handleLogin}>登录</Button>
            </div>
            {/* 登录框需要知道是否显示，以及是否关闭 */}
            <Login isShow={isShowLogin} onClose={handleClose}></Login>
        </div>
    );
};

export default Navbar;