import { FC } from "react"
import { Article } from '../types/api';

// Interface décrivant la structure des propriétés reçues par le composant lors de sa création (props)
interface ArticlePreviewProps {
  article: Article
}

// Composant représentant un aperçu d'article
const ArticlePreview: FC<ArticlePreviewProps> = ({ article }) => {
  // Rendu du composant
  return (
    <div>
      <h2>{article.title}</h2>
      <div>Publié le {article.date.toLocaleDateString()}</div>
      <p>
        {article.content}
      </p>
    </div>
  )
}

export default ArticlePreview;
