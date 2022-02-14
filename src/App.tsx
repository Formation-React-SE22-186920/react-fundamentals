import React, { FC } from 'react';
import ArticlePreview from './components/article-preview';
import articles from './data/articles';

// Composant racine de l'application (celui qui est rendu dans la <div id="root" />)
// Ce composant est responsable de la création de tous les autres
function App() {
  // Rendu du composant
  return (
    <div>
      {
        // Transforme le tableau de données de départ en un tableau d'éléments JSX
        articles.map(
          (article) => <ArticlePreview article={article} />
        )
      }
    </div>
  );
}

export default App;
