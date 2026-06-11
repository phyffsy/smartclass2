"use client";

import "./certificados.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Certificados() {
  const [activeTab, setActiveTab] = useState<string>("todos");

  return (
    <div className="certificados">
      <div className="header">
        <div className="logo">
          <Image src="/logo.png" alt="SmartClass Logo" width={90} height={90} />
          <div>
            <h2>SmartClass</h2>
            <span>Aprenda hoje, conquiste amanhã.</span>
          </div>
        </div>

        <div className="search-container">
          <Image src="/lupa.png" alt="Buscar" width={16} height={16} className="search-icon" />

          <input
            className="search"
            placeholder="Buscar cursos, habilidades ou áreas..."
          />
        </div>

        <div className="header-actions">
          <Image src="/Sino.png" alt="Notificações" width={24} height={24} className="notification-icon" />
          <div className="user-divider"></div>

          <div className="user">
            <Image src="/Marco.png" alt="Foto de Marco" width={40} height={40} className="avatar" />
            <div className="user-info">
              <span>Olá, Marco!</span>
              <h3>Ver perfil</h3>
            </div>
            <Image src="/setaBaixo.png" alt="Menu" width={14} height={14} />
          </div>
        </div>
      </div>

      <div className="title">
        <h1>Certificados</h1>
        <p>Acompanhe suas conquistas e compartilhe seu aprendizado com o mundo</p>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-icon-container bg-blue-100">
            <Image src="/selo.png" alt="" width={32} height={32} />
          </div>
          <div className="card-content">
            <h2>12</h2>
            <span>Certificados conquistados</span>
            <a href="#"><strong>Ver todos</strong></a>
          </div>
        </div>

        <div className="card">
          <div className="card-icon-container bg-green-100">
            <Image src="/calendar.png" alt="" width={32} height={32} />
          </div>
          <div className="card-content">
            <h2>8</h2>
            <span>Cursos concluídos</span>
            <a href="#"><strong>Ver cursos</strong></a>
          </div>
        </div>

        <div className="card">
          <div className="card-icon-container bg-yellow-100">
            <Image src="/clock.png" alt="" width={32} height={32} />
          </div>
          <div className="card-content">
            <h2>320h</h2>
            <span>Horas de estudo</span>
            <a href="#"><strong>Ver progresso</strong></a>
          </div>
        </div>

        <div className="card">
          <div className="card-icon-container bg-purple-100">
            <Image src="/Share.png" alt="" width={32} height={32} />
          </div>
          <div className="card-content">
            <h2>5</h2>
            <span>Certificados compartilhados</span>
            <a href="#"><strong>Ver compartilhados</strong></a>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-tabs">
          <button
            className={activeTab === "todos" ? "active" : ""}
            onClick={() => setActiveTab("todos")}
          >
            <strong>Todos</strong>
          </button>

          <Link href="/concluido" className="tab-link">
            <strong>Concluído</strong>
          </Link>

          <button
            className={activeTab === "andamento" ? "active" : ""}
            onClick={() => setActiveTab("andamento")}
          >
            <strong>Em andamento</strong>
          </button>
        </div>
      </div>

      <div className="list">
        <div className="item">
          <Image src="/Ads.png" alt="Certificado ADS" width={180} height={120} className="cert-thumb" />

          <div className="info">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <span className="date">Concluído em 14 de Maio de 2026</span>

            <div className="meta-info">
              <span className="meta-item">
                <Image src="/hrs.png" alt="" width={16} height={16} />
                Carga horária: 1.200h
              </span>
              <span className="meta-item">Código: PF-2026-0587</span>
            </div>
          </div>

          <div className="actions">
            <button className="btn-outline">
              <Image src="/baixar1.png" alt="" width={18} height={18} />
              Baixar
            </button>

            <button className="btn-outline btn-primary">
              <Image src="/Share.png" alt="" width={18} height={18} />
              Compartilhar
            </button>
          </div>
        </div>

        <div className="item">
          <Image src="/Excel.png" alt="Certificado Excel" width={180} height={120} className="cert-thumb" />

          <div className="info">
            <h3>Excel do Básico ao Avançado</h3>
            <span className="date">Concluído em 7 de Março de 2026</span>

            <div className="meta-info">
              <span className="meta-item">
                <Image src="/hrs.png" alt="" width={16} height={16} />
                Carga horária: 40h
              </span>
              <span className="meta-item">Código: PF-2026-0587</span>
            </div>
          </div>

          <div className="actions">
            <button className="btn-outline">
              <Image src="/baixar1.png" alt="" width={18} height={18} />
              Baixar
            </button>

            <button className="btn-outline btn-primary">
              <Image src="/Share.png" alt="" width={18} height={18} />
              Compartilhar
            </button>
          </div>
        </div>

        <div className="item">
          <Image src="/designComFigma.png" alt="Certificado Figma" width={180} height={120} className="cert-thumb" />

          <div className="info">
            <h3>Design Gráfico Com Figma</h3>
            <span className="date">Concluído em 23 de Fevereiro de 2026</span>

            <div className="meta-info">
              <span className="meta-item">
                <Image src="/hrs.png" alt="" width={16} height={16} />
                Carga horária: 60h
              </span>
              <span className="meta-item">Código: PF-2026-0587</span>
            </div>
          </div>

          <div className="actions">
            <button className="btn-outline">
              <Image src="/baixar1.png" alt="" width={18} height={18} />
              Baixar
            </button>

            <button className="btn-outline btn-primary">
              <Image src="/Share.png" alt="" width={18} height={18} />
              Compartilhar
            </button>
          </div>
        </div>

        <div className="item">
          <Image src="/MarketingDigitalNaPratica.png" alt="Certificado Marketing" width={180} height={120} className="cert-thumb" />

          <div className="info">
            <h3>Marketing Digital Na Prática</h3>
            <span className="date">Concluído em 3 de Dezembro de 2025</span>

            <div className="meta-info">
              <span className="meta-item">
                <Image src="/hrs.png" alt="" width={16} height={16} />
                Carga horária: 100h
              </span>
              <span className="meta-item">Código: PF-2026-0587</span>
            </div>
          </div>

          <div className="actions">
            <button className="btn-outline">
              <Image src="/baixar1.png" alt="" width={18} height={18} />
              Baixar
            </button>

            <button className="btn-outline btn-primary">
              <Image src="/Share.png" alt="" width={18} height={18} />
              Compartilhar
            </button>
          </div>
        </div>
      </div>

      <div className="linkedin-banner-container">
        <div className="linkedin-banner">
          <div className="linkedin-banner-left">
            <div className="linkedin-icon-wrapper">
              <Image src="/Prancheta.png" alt="" width={24} height={24} />
            </div>

            <div className="linkedin-banner-text">
              <h4>Compartilhe suas conquistas</h4>
              <p>
                Adicione seus certificados ao LinkedIn e mostre suas habilidades
                para o mercado.
              </p>
            </div>
          </div>

          <button className="btn-linkedin">
            <Image src="/LinkedIn.png" alt="" width={40} height={40} />
            Adicionar ao LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}