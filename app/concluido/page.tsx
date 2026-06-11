import Image from "next/image";
import {
  Bell,
  Award,
  BookOpen,
  Clock3,
  Share2,
} from "lucide-react";
import "./style.css";
export default function Home() {
 const stats = [
  {
    icon: (
      <img
        src="/azul.png"
        alt="Award"
        className="stat-icon"
      />
    ),
    value: "12",
    label: "Certificados conquistados",
    link: "Ver todos",
    color: "bg-blue-100",
  },
  {
    icon: (
      <img
        src="/verde.png"
        alt="Book"
        className="stat-icon"
      />
    ),
    value: "8",
    label: "Cursos concluídos",
    link: "Ver cursos",
    color: "bg-green-100",
  },
  {
    icon: (
      <img
        src="/amarelo.png"
        alt="Clock"
        className="stat-icon"
      />
    ),
    value: "320h",
    label: "Horas de estudo",
    link: "Ver progresso",
    color: "bg-yellow-100",
  },
  {
    icon: (
      <img
        src="/compartilhar.png"
        alt="Share"
        className="stat-icon"
      />
    ),
    value: "5",
    label: "Certificados compartilhados",
    link: "Ver compartilhados",
    color: "bg-indigo-100",
  },
];
  

  return (
    <div className="page">

      <header className="header">
        <div className="container header-content">

          <div className="logo-area">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
            />

            <div>
              <h1 className="logo">SmartClass</h1>

              <p className="logo-subtitle">
                Aprenda hoje, conquiste amanhã.
              </p>
            </div>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar cursos, habilidades ou áreas..."
              className="search-input"
            />
          </div>
          <div className="user-area">
            <Bell className="icon" />

            <div className="user-profile">
              <Image
                src="/perfil.png"
                alt="Perfil"
                width={42}
                height={42}
                className="avatar"
              />

              <div>
                <p className="user-name">Olá, Marco!</p>

                <p className="user-link">
                  Ver perfil
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container main-content">

        <div className="title-section">
          <h2 className="title">
            Certificados
          </h2>

          <p className="subtitle">
            Acompanhe suas conquistas e compartilhe seu aprendizado com o mundo
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="card"
            >
              <div
                className={`card-icon ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="card-number">
                  {item.value}
                </h3>

                <p className="card-text">
                  {item.label}
                </p>

                <button className="card-link">
                  {item.link}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="tabs">
          <div className="tabs-left">
            <button className="tab-active">
              Concluído
            </button>

            <button className="tab">
              Em andamento
            </button>
          </div>

          <button className="filter-button">
            Mais recentes
          </button>
        </div>

        <div className="certificate-card">
          <div className="certificate-image">
            <Image
              src="/certificado.png"
              alt="Certificado"
              fill
              className="certificate-img"
            />
          </div>
        </div>

        <div className="share-box">
          <div>
            <h3 className="share-title">
              Compartilhe suas conquistas
            </h3>

            <p className="share-text">
              Adicione seus certificados ao LinkedIn e mostre suas habilidades para o mercado.
            </p>
          </div>

          <button className="linkedin-button">
            Adicionar ao LinkedIn
          </button>
        </div>
      </main>
    </div>
  );
}