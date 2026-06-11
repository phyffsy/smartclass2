import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <nav className="topo">
        <div className="marca">
          <Image
            src="/logo.png"
            alt="Logo do SmartClass"
            width={130}
            height={80}
          />
          <div>
            <h1>SmartClass</h1>
            <p>Aprenda hoje, conquiste amanhã.</p>
          </div>
        </div>

        <ul className="links">
          <li>
            <Link href="/cursos">Cursos</Link>
          </li>
          <li><a href="/cursos">Certificados</a></li>
          <li><a href="#">Como funciona</a></li>
        </ul>

        <div className="botoes-topo">
          <Link href="/login" className="botao-entrar">
            Entrar
          </Link>

          <Link href="/cadastro">
            <button className="botao-cadastrar">
              Cadastrar
            </button>
          </Link>
        </div>
      </nav>

      <header className="banner-principal">
        <div className="bloco-foto">
          <Image
            src="/11c04246-9f51-4491-8a54-9c02832a086c.png"
            alt="Mulher no PC"
            width={800}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        <div className="bloco-texto">
          <h1>Invista no seu futuro.</h1>
          <h2>Aprenda. Cresça. <span className="destaque-azul">Conquiste.</span></h2>
          <p>Cursos profissionalizantes online para você desenvolver novas habilidades, aumentar suas oportunidades e transformar sua vida.</p>

          <div className="caixa-pesquisa">
            <div className="barra-pesquisa">
              <i className="fa-solid fa-magnifying-glass lupa"></i>
              <input type="text" className="campo-pesquisa" placeholder="O que você quer aprender?" />
              <button className="botao-pesquisa">Buscar</button>
            </div>

            <div className="lista-recursos">
              <div className="item-recurso">
                <i className="fa-solid fa-certificate"></i>
                <div className="texto-recurso">Certificado<br />Reconhecido</div>
              </div>

              <div className="item-recurso">
                <i className="fa-solid fa-wifi"></i>
                <div className="texto-recurso">100% Online</div>
              </div>

              <div className="item-recurso">
                <i className="fa-solid fa-infinity"></i>
                <div className="texto-recurso">Acesso<br />ilimitado</div>
              </div>

              <div className="item-recurso">
                <i className="fa-regular fa-clock"></i>
                <div className="texto-recurso">Aprenda no<br />seu tempo</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="quadro-vantagens">
        <div className="cartao-vantagem">
          <i className="fa-solid fa-book-open"></i>
          <h3>Cursos Atualizados</h3>
          <p>Conteúdos alinhados com o mercado de trabalho.</p>
        </div>

        <div className="cartao-vantagem">
          <i className="fa-solid fa-id-card"></i>
          <h3>Certificado Reconhecido</h3>
          <p>Receba seu certificado e valorize seu currículo.</p>
        </div>

        <div className="cartao-vantagem">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <h3>Aprenda no Seu Tempo</h3>
          <p>Estude quando e onde quiser, sem pressa.</p>
        </div>

        <div className="cartao-vantagem">
          <i className="fa-solid fa-chart-line"></i>
          <h3>Impulsione Sua Carreira</h3>
          <p>Mais conhecimento para mais oportunidades.</p>
        </div>
      </section>

      <section className="bloco-inferior">
        <h2>Como funciona</h2>

        <ol className="lista-passos">
          <li className="item-passo">
            <div className="bola-icone">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="conteudo-passo">
              <h3>1. Escolha um curso</h3>
              <p>Encontre o curso ideal para seus objetivos</p>
            </div>
          </li>

          <li className="item-passo">
            <div className="bola-icone">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="conteudo-passo">
              <h3>2. Estude online</h3>
              <p>Acesse as aulas e materiais quando quiser.</p>
            </div>
          </li>

          <li className="item-passo">
            <div className="bola-icone">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="conteudo-passo">
              <h3>3. Conclua e receba seu certificado.</h3>
              <p>Mostre suas habilidades para o mercado.</p>
            </div>
          </li>
        </ol>

        <div className="caixa-chamada">
          <div className="chamada-esquerda">
            <i className="fa-solid fa-award icone-medalha"></i>
            <p>Mais de 10.000 alunos já transformaram suas vidas com nossos cursos. <span className="texto-chamativo">Agora é sua vez!</span></p>
          </div>
          <button className="botao-chamada">Comece agora</button>
        </div>
      </section>
    </>
  );
}