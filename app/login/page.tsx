import React from "react";
import "./style.css";
import {
    FaArrowLeft,
    FaEnvelope,
    FaLock,
    FaGoogle,
    FaFacebook,
    FaShieldAlt,
    FaWifi,
    FaInfinity,
    FaClock,
} from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import Link from "next/link";
export default function App() {
    return (
        <div className="container">
            { }
            <div className="left">

                <div className="logo">

                    <img className="imgLogo" src="/imgLogo.png" alt="logo" />

                    <div>

                        <h2>SmartClass</h2>

                        <p>Aprenda hoje, conquiste amanhã.</p>

                    </div>

                </div>

                <div className="content">
                    <h1>
                        Seu futuro começa <br />
                        com um novo <span>aprendizado</span>
                    </h1>

                    <p>
                        Acesse sua conta e continue
                        transformando conhecimento
                        em oportunidades.
                    </p>

                    <img
                        src="/imgPcSmartClass.png"
                        alt="Estudo"
                        className="study-image"
                    />
                </div>

                <div className="features">
                    <div>
                        <FaShieldAlt />
                        <span>Certificado Reconhecido</span>
                    </div>

                    <div>
                        <FaWifi />
                        <span>100% Online</span>
                    </div>

                    <div>
                        <FaInfinity />
                        <span>Acesso ilimitado</span>
                    </div>

                    <div>
                        <FaClock />
                        <span>Aprenda no seu tempo</span>
                    </div>
                </div>
            </div>

            { }
            <div className="right">
                <div className="top-bar">
                    <Link href="/">
                        <FaArrowLeft className="back" />
                    </Link>
                    <p>
                       <a href="/cadastro">Cadastre-se</a>
                    </p>
                </div>

                <div className="form-container">
                    <h1>
                        Bem-vindo(a) de volta!<span>👋</span>
                    </h1>

                    <p className="subtitle">
                        Faça login para continuar aprendendo.
                    </p>

                    { }
                    <label>E-mail</label>

                    <div className="input-box">
                        <FaEnvelope />
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>

                    { }
                    <label>Senha</label>

                    <div className="input-box">
                        <FaLock />
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <a href="/" className="forgot">
                        Esqueceu a senha?
                    </a>

                    <a href="/dashboard">
                        <button className="login-btn">Entrar</button>
                    </a>

                    <div className="divider">
                        <hr />
                        <span>Ou continue com</span>
                        <hr />
                    </div>

                    <button className="social-btn1">
                        <FaGoogle />
                        Continuar com Google
                    </button>

                    <button className="social-btn">
                        <FaFacebook />
                        Continuar com Facebook
                    </button>

                    <div className="security">
                        <FaShieldAlt />
                        <span>Seus dados estão protegidos com segurança.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}