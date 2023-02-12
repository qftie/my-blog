import { NextPage } from "next";
import styles from './index.module.scss'
import {useState} from 'react'

// 要传props过来，需要提前定义props的类型
interface IProps {
    isShow: boolean;
    onClose: Function;
}

// layout就是个架子，渲染什么由js决定
function Login(props: IProps) {
    // 解构赋值，设置默认值为false
    const { isShow = false } = props;
    const {form, setForm} = useState({
        phone: '',
        verifyCode: ''
    });


    const handleGetVerifyCode = () => {

    }

    const handleClose = () => {
    };

    const handleLogin = () => {

    }

    const handleOAuthGit = () => {

    }
    return (
        isShow ? (
            <div className={styles.loginArea}>
                {/* 登录框 */}
                <div className={styles.loginBox}>
                    {/* 登录界面标题栏 */}
                    <div className={styles.loginTitle}>
                        <div>手机号登录</div>
                        <div className={styles.close} onClose={handleClose}>×</div>
                    </div>
                    {/* 输入手机号区域 */}
                    <input name="phone" type="text" placeholder="请输入手机号" value={form.phone} />
                    {/* 验证码区域 */}
                    <div className={styles.verifyCodeArea}>
                        <span className={styles.getVerfyCode} onClick={handleGetVerifyCode}>获取验证码</span>
                        <input name="verifyCode" type="text" placeholder="请输入验证码" value={form.verifyCode} />
                    </div>
                    {/* 登录按钮 */}
                    <div className={styles.loginBtn} onClick={handleLogin}>登录</div>
                    {/* 第三方登录 */}
                    <div className={styles.otherLogin} onClick={handleOAuthGit}>使用Github登录</div>
                    {/* 用户协议 */}
                    <div className={styles.loginPrivacy}>
                        注册登录即表示同意
                        <a href="https://www.imooc.com/help/detail/222" target="_blank" rel="noreferrer">隐私政策</a>

                    </div>


                </div>
            </div>
        ) : null
    );
}

export default Login;