# Revista Innovus - Documentação

## 📋 Descrição do Projeto

Página institucional para a **Revista Innovus** - Revista Institucional de Inovação, Ciência e Tecnologia. Estrutura HTML e CSS limpa, acessível e escalável para uma publicação seriada online.

## 📁 Estrutura de Arquivos

```
Revista/
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos compilados (CSS)
├── styles.scss         # Estilos fonte (SCSS - opcional)
└── README.md           # Documentação
```

## 🎨 Componentes da Página

### 1. **Cabeçalho da Revista** (Header)
- Nome completo: Revista Innovus
- Subtítulo: Revista Institucional de Inovação, Ciência e Tecnologia
- Logo placeholder
- Badge indicando publicação seriada online
- Design gradiente com cores institucionais

### 2. **Sobre a Revista** (About Section)
- Objetivo da revista
- Escopo editorial
- Vínculo institucional
- Público-alvo
- Compromisso de continuidade
- Cards responsivos com destaque visual

### 3. **Informações Editoriais** (Editorial Info)
- Instituição responsável: Fundação Innovus
- Periodicidade: Semestral
- Ano de início: 2024
- Tipo de suporte: Online
- Idioma(s): Português Brasileiro
- ISSN Online: Em processo de registro
- Grid adaptativo de informações

### 4. **Equipe Editorial** (Editorial Team)
- Editor-chefe: Dr. João Silva
- Editor Científico: Dra. Maria Santos
- Secretário de Redação: Pedro Oliveira
- Conselho Editorial: 5 membros
- Cards com efeito hover

### 5. **Edições da Revista** (Editions)
- Edição Atual (obrigatória)
  - Capa visual (placeholder)
  - Sumário com artigos
  - Expediente da edição
  - Botões de acesso (HTML e PDF)
- Preparação para múltiplas edições

### 6. **Arquivo / Edições Anteriores** (Archive)
- Organização por ano
- Card para cada edição
- Links permanentes
- Estrutura pronta para crescimento
- Status "Em breve" para próximas edições

### 7. **Informações Técnicas** (Technical Section)
- URL fixa e permanente
- Acesso público sem login
- Indexação por mecanismos de busca
- Publicação institucional permanente
- Estrutura escalável
- Atualização manual fácil

### 8. **Rodapé** (Footer)
- Informações sobre a revista
- Contato (email e telefone)
- Links importantes
- Copyright

## 🎨 Design e Estilo

### Cores Institucionais
- **Azul Primário**: #003d7a (Headers, títulos)
- **Azul Secundário**: #0d5fa0 (Hover states)
- **Vermelho Destaque**: #e74c3c (Badges, bordas)
- **Cinza Claro**: #f8f9fa (Backgrounds)
- **Cinza Escuro**: #2c3e50 (Texto principal)

### Tipografia
- **Família**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tamanho Base**: 16px
- **Line Height**: 1.6
- **Pesos**: 400 (normal), 600 (semibold), 700 (bold)

### Responsive Design
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px
- Layout adaptativo em todas as seções

## ⚙️ Como Usar

### 1. **Estrutura Básica**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo -->
</body>
</html>
```

### 2. **Adicionar Nova Edição**

No arquivo `index.html`, na seção de Arquivo:

```html
<div class="archive-item">
    <h4>Vol. 1, nº 2 - Dezembro 2024</h4>
    <p class="archive-theme">Tema: Sustentabilidade e Tecnologia</p>
    <div class="archive-links">
        <a href="#" class="link-access">Acessar</a>
        <a href="#" class="link-pdf">PDF</a>
    </div>
</div>
```

### 3. **Atualizar Edição Atual**

Na seção "Edição Atual", substitua:
- Sumário: Adicione itens na lista
- Expediente: Atualize informações
- Links: Substitua URLs

### 4. **Adicionar Membro da Equipe Editorial**

```html
<div class="team-member">
    <h3 class="team-role">Função</h3>
    <p class="team-name">Nome Completo</p>
</div>
```

### 5. **Adicionar Membro do Conselho**

```html
<li>Dr./Dra. Nome - Instituição</li>
```

## 📱 Recursos de Acessibilidade

- ✅ Semântica HTML5 (header, main, section, footer)
- ✅ ARIA labels e roles apropriados
- ✅ Navegação por teclado
- ✅ Contraste de cores WCAG AA
- ✅ Focus visível para links
- ✅ Estrutura de headings lógica
- ✅ Suporte a leitores de tela
- ✅ Modo escuro automático (CSS media query)

## 🔍 SEO

A página é otimizada para mecanismos de busca:
- Meta tags descritivas
- Canonical URL
- Estrutura semântica
- Headings hierárquicos
- Alt text pronto para imagens
- URLs amigáveis

## 📦 Compilação SCSS

Se quiser recompilar o SCSS:

```bash
# Com Node-sass
node-sass styles.scss styles.css

# Com Sass oficial
sass styles.scss styles.css

# Com watch (monitorar mudanças)
sass --watch . :
```

## 🚀 Implantação

1. **URLs Permanentes**: Mantenha a URL fixa em seu servidor
2. **Sem Banco de Dados**: Atualize arquivos HTML manualmente
3. **Indexação**: Submeta a URL aos mecanismos de busca
4. **HTTPS**: Use protocolo seguro
5. **Backups**: Mantenha versões anteriores

## 📋 Checklist de Uso

- [ ] Atualizar nome da instituição (Fundação Innovus)
- [ ] Inserir logo verdadeiro (substituir placeholder)
- [ ] Adicionar emails e contatos reais
- [ ] Configurar URLs permanentes
- [ ] Atualizar metadados (description, keywords)
- [ ] Testar links e botões
- [ ] Validar HTML e CSS
- [ ] Testar responsividade
- [ ] Testar acessibilidade
- [ ] Submeter ao Google Search Console

## 🔄 Fluxo de Atualização de Edições

1. Crie uma nova pasta para a edição (ex: `/edições/vol1-n2/`)
2. Prepare HTML ou PDF da edição
3. Adicione item na seção Arquivo
4. Atualize "Edição Atual" se for a mais recente
5. Mantenha links permanentes para versões antigas
6. Publique e monitore acesso

## 📝 Notas Importantes

- **Não é landing page**: Mantém estrutura editorial permanente
- **Não é temporário**: Publicação seriada institucional
- **Sem login**: Acesso público irrestrito
- **Escalável**: Pronto para crescimento
- **Manual**: Não precisa de banco de dados

## 🤝 Contato

Para dúvidas sobre a estrutura ou customizações, consulte a documentação de seus desenvolvedores.

---

**Última atualização**: Janeiro 2026
**Versão**: 1.0
