const blogPosts = [
  {
    id: 1,
    title: "História da Pizza: Uma Viagem Gastronômica",
    author: "Chef João",
    date: "2024-02-15",
    excerpt: "Descubra como a pizza evoluiu de simples pão achatado a um fenômeno culinário mundial...",
    content: `
      <p>A história da pizza é fascinante e repleta de sabor! Originalmente, a pizza nasceu na Itália como um simples pão achatado coberto com ingredientes locais. Na cidade de Nápoles, no século XVIII, os trabalhadores precisavam de refeições rápidas e nutritivas.</p>
      
      <p>A pizza margherita, por exemplo, foi criada em 1889 em homenagem à Rainha Margherita da Itália, apresentando as cores da bandeira italiana: vermelho (tomate), branco (mozzarella) e verde (manjericão).</p>
      
      <p>Com o tempo, a pizza se espalhou pelo mundo, ganhando variações regionais e se tornando um prato universal amado por milhões.</p>
    `,
    tags: ["história", "culinária", "pizza"]
  },
  {
    id: 2,
    title: "Harmonização de Pizzas e Vinhos",
    author: "Sommelier Maria",
    date: "2024-02-20",
    excerpt: "Aprenda a combinar os melhores vinhos com diferentes estilos de pizza...",
    content: `
      <p>A harmonização correta de pizza e vinho pode elevar sua experiência gastronômica a outro nível. Aqui estão algumas dicas essenciais:</p>
      
      <ul>
        <li><strong>Pizza Margherita:</strong> Vinho tinto leve como Chianti</li>
        <li><strong>Pizza de Queijos:</strong> Vinho branco seco ou espumante</li>
        <li><strong>Pizza de Carne:</strong> Vinho tinto encorpado como Cabernet Sauvignon</li>
      </ul>
      
      <p>Lembre-se: o segredo está no equilíbrio entre os sabores da pizza e as notas do vinho.</p>
    `,
    tags: ["vinho", "harmonização", "gastronomia"]
  },
  {
    id: 3,
    title: "Técnicas Secretas de Preparo de Pizza",
    author: "Chef António",
    date: "2024-02-25",
    excerpt: "Descubra os segredos dos mestres pizzaiolos para uma massa perfeita...",
    content: `
      <p>A massa é a alma de uma grande pizza. Aqui estão algumas técnicas profissionais:</p>
      
      <ol>
        <li>Use fermento de qualidade</li>
        <li>Deixe a massa descansar por pelo menos 24 horas</li>
        <li>Abra a massa manualmente, nunca use rolo</li>
        <li>Pré-aqueça sua pedra ou assadeira</li>
      </ol>
      
      <p>A verdadeira magia está nos detalhes e na paixão pelo que se faz!</p>
    `,
    tags: ["técnicas", "massa", "culinária"]
  }
];

function renderBlogList() {
  const blogListContainer = document.getElementById('blog-list');
  blogListContainer.innerHTML = '';

  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post-preview');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p class="blog-meta">Por ${post.author} em ${post.date}</p>
      <p>${post.excerpt}</p>
      <a href="#" onclick="showBlogPost(${post.id}); return false;">Leia mais</a>
    `;
    blogListContainer.appendChild(postElement);
  });
}

function showBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  const blogDetailContainer = document.getElementById('blog-detail');
  
  blogDetailContainer.innerHTML = `
    <div class="blog-post-full">
      <h2>${post.title}</h2>
      <p class="blog-meta">Por ${post.author} em ${post.date}</p>
      <div class="blog-content">${post.content}</div>
      <div class="blog-tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <button onclick="showBlogList()">Voltar para Lista</button>
    </div>
  `;

  document.getElementById('blog-list').style.display = 'none';
  blogDetailContainer.style.display = 'block';
}

function showBlogList() {
  document.getElementById('blog-list').style.display = 'block';
  document.getElementById('blog-detail').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  renderBlogList();
});