import { useState } from "react";

/**
 * VideoCard
 * ---------
 * Affiche une prévisualisation de vidéo YouTube (ou autre) dans une bulle de chat.
 *
 * Props:
 *   url      {string}  URL de la vidéo (YouTube shorts ou standard)
 *   title    {string}  Titre affiché sous la vignette
 *   tag      {string}  Étiquette thématique (ex: "Santé intime")  [optionnel]
 *   duration {string}  Durée lisible (ex: "1 min")                [optionnel]
 */

function getYoutubeId(url) {
  const patterns = [
    /youtube\.com\/shorts\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&/]+)/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

export default function VideoCard({ url, title, tag = "Vidéo", duration }) {
  const [imgError, setImgError] = useState(false);
  const ytId = getYoutubeId(url);
  const thumb = ytId && !imgError
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        marginTop: 12,
        borderRadius: 10,
        overflow: "hidden",
        border: "0.5px solid var(--color-border-secondary)",
        textDecoration: "none",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border-primary)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-secondary)"}
    >
      {/* Vignette */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--color-background-tertiary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {thumb && (
          <img
            src={thumb}
            alt=""
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
        {/* Bouton play */}
        <div style={{
          position: "absolute",
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polygon points="6,4 20,12 6,20" fill="#1a1a1a" />
          </svg>
        </div>
      </div>

      {/* Métadonnées */}
      <div style={{
        padding: "10px 14px",
        background: "var(--color-background-secondary)",
      }}>
        <p style={{ margin: 0, fontSize: 11, color: "var(--color-text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {tag}{duration ? ` · ${duration}` : ""}
        </p>
        <p style={{ margin: "3px 0 0", fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.4 }}>
          {title}
        </p>
      </div>
    </a>
  );
}


/*
 * ─── EXEMPLE D'USAGE DANS UNE BULLE DE CHAT ───────────────────────────────────
 *
 * import VideoCard from "./VideoCard";
 *
 * function NinaBubble({ text, video }) {
 *   return (
 *     <div className="bubble-nina">
 *       <p>{text}</p>
 *
 *       {video && (
 *         <>
 *           <hr style={{ border: "none", borderTop: "0.5px solid var(--color-border-tertiary)", margin: "10px 0" }} />
 *           <VideoCard
 *             url={video.url}
 *             title={video.title}
 *             tag={video.tag}
 *             duration={video.duration}
 *           />
 *         </>
 *       )}
 *     </div>
 *   );
 * }
 *
 *
 * ─── FORMAT DE RÉPONSE API SUGGÉRÉ ────────────────────────────────────────────
 *
 * Au lieu de renvoyer du Markdown avec un lien, le backend retourne :
 *
 * {
 *   "text": "La vaginose est souvent mal comprise...",
 *   "video": {
 *     "url": "https://www.youtube.com/shorts/KSIBZgxUAUg",
 *     "title": "Vaginose et odeurs intimes",
 *     "tag": "Santé intime",
 *     "duration": "1 min"
 *   },
 *   "followUp": "Est-ce que ce sujet t'intéresse pour une raison particulière ?"
 * }
 *
 * Le composant de bulle gère ensuite text + video + followUp séparément.
 */
