import "./styleMain.css";
import Link from "next/link"; 
import Image from "next/image";
import {
  FaBell,
  FaSearch,
  FaLaptopCode,
  FaBriefcase,
  FaPalette,
  FaChartBar,
  FaArrowRight,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaInfinity,
  FaWifi,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="container">
      { }
      <header className="header">
        <div className="logo">
          <Image
            src="/imgLogo.png"
            alt="Logo"
            width={50}
            height={50}
          />

          <div>
            <h2>SmartClass</h2>
            <span>Aprenda hoje, conquiste amanhã.</span>
          </div>
        </div>

        <div className="search">
          <FaSearch />
          <input
            type="text"
            placeholder="Buscar cursos, habilidades ou áreas..."
          />
        </div>

        <div className="actions">
          <FaBell className="icon" />

          <div className="profile">
            <Image
              src="/perfilMarco.png"
              alt="Perfil"
              width={45}
              height={45}
              className="profileImg"
            />

            <p>Olá, Marco</p>
          </div>
        </div>
      </header>

      { }
      <section className="hero">
        <div className="heroContent">
          <small>EXPLORE CURSOS</small>

          <h1>
            Aprenda novas habilidades
            <br />
            e IMPULSIONE sua carreira!
          </h1>

          <p>
            Cursos online com certificado para você aprender
            no seu tempo e conquistar novas oportunidades.
          </p>

          <div className="stats">
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

          <div className="buttons">
            <Link href="/cursos">
              <button className="btn1">Certificados</button>
            </Link>
            <Link href="/">
  <button className="btn2">Início</button>
</Link>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/MainMarco.png"
            alt="Aluno estudando"
            width={800}
            height={500}
          />
        </div>
      </section>

      { }
      <section className="section">
        <h2>Categorias</h2>

        <div className="categories">
          <div className="category">
            <FaLaptopCode />
            <div>
              <h4>Tecnologia</h4>
              <span>128 Cursos</span>
            </div>
          </div>

          <div className="category">
            <FaBriefcase />
            <div>
              <h4>Negócios</h4>
              <span>96 Cursos</span>
            </div>
          </div>

          <div className="category">
            <FaChartBar />
            <div>
              <h4>Marketing</h4>
              <span>80 Cursos</span>
            </div>
          </div>

          <div className="category">
            <FaPalette />
            <div>
              <h4>Design</h4>
              <span>67 Cursos</span>
            </div>
          </div>

          <div className="more">
            Ver Mais <FaArrowRight />
          </div>
        </div>
      </section>

      { }
      <section className="section">
        <h2>Cursos em Destaque</h2>

        <div className="grid">
          <div className="card">
            <Image
              src="/excel.png"
              alt="Excel"
              width={180}
              height={130}
            />

            <div className="cardInfo">
              <h3>Excel do Básico ao Avançado</h3>
              <span>60 horas</span>
            </div>

            <FaHeart className="heart" />
          </div>

          <div className="card">
            <Image
              src="/python.png"
              alt="Python"
              width={180}
              height={130}
            />

            <div className="cardInfo">
              <h3>Python para Iniciantes</h3>
              <span>120 horas</span>
            </div>

            <FaHeart className="heart" />
          </div>

          <div className="card">
            <Image
              src="/comuOratoria.png"
              alt="Oratória"
              width={180}
              height={130}
            />

            <div className="cardInfo">
              <h3>Comunicação e Oratória</h3>
              <span>45 horas</span>
            </div>

            <FaHeart className="heart" />
          </div>

          <div className="card">
            <Image
              src="/scrum.png"
              alt="Scrum"
              width={180}
              height={130}
            />

            <div className="cardInfo">
              <h3>Projetos com Scrum</h3>
              <span>60 horas</span>
            </div>

            <FaHeart className="heart" />
          </div>
        </div>
      </section>

      { }
      <div className="footerCard">
        <h4>Todos os cursos</h4>
        <span>Mais de 300 cursos disponíveis para você.</span>
      </div>
    </main>
  );
}