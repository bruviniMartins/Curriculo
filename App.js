function App() {
  return (
    <div className="resume-container">
      <header>
        <h1>Bruno Vinícius dos Santos Martins</h1>
        <p>Rua José Honório n° 199 – Jardim Maria Angélica, Jacarezinho/PR – 86.400-000</p>
        <p>Contato: (43) 99688-5970 | E-mail: bvmartins20@gmail.com | CNH AB</p>
      </header>

      <section>
        <h2>Resumo das Qualificações</h2>
        <ul>
          <li>Gerenciamento de sistemas de informações: levantamento de informações, alimentação de sistemas, preenchimento de relatórios e contratos;</li>
          <li>Atendimento a Clientes/Público: escuta ativa, empatia e atenção a detalhes;</li>
          <li>Comprometimento, Pontualidade, Trabalho em Equipe, Proatividade e Iniciativa;</li>
          <li>Implementação e execução de testes baseados em BDD para garantir a conformidade do software;</li>
          <li>Testes regressivos e de menus para garantir estabilidade e integridade do software ao longo do tempo;</li>
          <li>Interação eficaz com desenvolvedores e equipes de TI;</li>
          <li>Conhecimentos em Word, Excel, PowerPoint e Inglês Intermediário.</li>
        </ul>
      </section>

      <section>
        <h2>Formação Acadêmica</h2>
        <p>Ensino Médio − Colégio Estadual Rui Barbosa | Conclusão: Dezembro/2020</p>
        <p>Cursando Análise e Desenvolvimento de Sistemas − FATEC (Faculdade de Tecnologia de Ourinhos)</p>
      </section>

      <section>
        <h2>Experiências Profissionais</h2>
        <h3>Estágio Setor de Frota/Patrimônio − UENP (12/2018 a 12/2020)</h3>
        <ul>
          <li>Atendimento a Servidores, Professores e Diretores;</li>
          <li>Organização do Setor de Frota e planejamento de viagens dos colaboradores;</li>
          <li>Gerenciamento de sistemas de informações.</li>
        </ul>

        <h3>Auxiliar Administrativo − Grupo Paludeto (06/2022 a 01/2023)</h3>
        <ul>
          <li>Emissão de notas e documentação;</li>
          <li>Registro e alimentação de dados;</li>
          <li>Gravação de aulas e matrículas de alunos;</li>
          <li>Reuniões para explicação do sistema de ensino.</li>
        </ul>

        <h3>Analista de Sistemas QA − Autbank (01/2023 - Atual)</h3>
        <ul>
          <li>Testes Regressivos e de Menus;</li>
          <li>Interação com a equipe de desenvolvedores;</li>
          <li>Testes em BDD e baseados em bancos de dados;</li>
          <li>Alimentação do sistema e ferramentas de QA.</li>
        </ul>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
