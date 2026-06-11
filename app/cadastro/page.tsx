"use client";

import "./cadastro.css";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Cadastro() {
    return (
        <div className="container">
            <div className="left">
                <div className="logo">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                    <div className="SmartClass">
                        <h1>SmartClass</h1>
                        <span>Aprenda hoje, conquiste amanhã.</span>
                    </div>
                </div>

                <div className="text">
                    <h1>
                        Seu futuro começa <br />
                        com um novo <span>aprendizado</span>
                    </h1>

                    <p>
                        Crie sua conta e comece agora a transformar conhecimento em
                        oportunidades.
                    </p>
                </div>

                <div className="image">
                    <Image src="/img.png" alt="banner" width={500} height={400} />
                </div>

                <div className="benefits">
                    <div className="benefit-item">
                        <Image src="/certificado.png" alt="" width={16} height={16} />
                        <span>Certificado Reconhecido</span>
                    </div>

                    <div className="benefit-item">
                        <Image src="/wifi.png" alt="" width={16} height={16} />
                        <span>100% Online</span>
                    </div>

                    <div className="benefit-item">
                        <Image src="/infinito.png" alt="" width={16} height={16} />
                        <span>Acesso ilimitado</span>
                    </div>

                    <div className="benefit-item">
                        <Image src="/relogio.png" alt="" width={16} height={16} />
                        <span>Aprenda no seu tempo</span>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="headerRight">
                    <div className="seta">
                        <Link href="/">
                            <FaArrowLeft />
                        </Link>
                    </div>

                    <div className="top">
                        <span>Já tem uma conta?</span>
                        <Link href="/login">Faça login</Link>
                    </div>
                </div>

                <div className="crie">
                    <h1>Crie sua conta</h1>
                </div>

                <p>Preencha os dados abaixo para começar</p>

                <form className="form">
                    <div className="row">
                        <div className="input">
                            <Image src="/pessoa.png" alt="" width={18} height={18} />
                            <input placeholder="Digite seu nome" />
                        </div>

                        <div className="input">
                            <Image src="/pessoa.png" alt="" width={18} height={18} />
                            <input placeholder="Digite seu sobrenome" />
                        </div>
                    </div>

                    <div className="input">
                        <Image src="/email.png" alt="" width={18} height={18} />
                        <input placeholder="Digite seu e-mail" />
                    </div>

                    <div className="input">
                        <Image src="/lock.png" alt="" width={18} height={18} />
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <small>Mínimo de 8 caracteres com letras, números e um símbolo.</small>

                    <div className="input">
                        <Image src="/lock.png" alt="" width={18} height={18} />
                        <input type="password" placeholder="Confirme sua senha" />
                    </div>

                    <div className="input">
                        <Image src="/calendario.png" alt="" width={18} height={18} />
                        <input type="date" />
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" />
                        <span>
                            Eu aceito os <a href="#">Termos de Uso</a> e a{" "}
                            <a href="#">Política de Privacidade</a>.
                        </span>
                </div>

                    <Link href="/dashboard">
                        <button className="btn-cadastro" type="button">
                            Cadastrar
                        </button>
                    </Link>
                </form>

                <div className="divider">
                    <span>Ou cadastre-se com</span>
                </div>

                <button className="social">
                    <Image src="/google.png" alt="" width={20} height={20} />
                    Cadastrar com Google
                </button>

                <button className="social">
                    <Image src="/facebook.png" alt="" width={20} height={20} />
                    Cadastrar com Facebook
                </button>

                <div className="security">
                    <Image src="/security.png" alt="" width={16} height={16} />
                    <span>Seus dados estão protegidos com segurança.</span>
                </div>
            </div>
        </div>
    );
}