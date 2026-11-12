// Single source of truth for the resume link.
// The ?v= token busts browser/CDN caches, so a replaced public/Resume.pdf
// shows immediately instead of a previously opened copy. Bump it whenever
// the resume file is replaced.
export const RESUME_URL = "/Resume.pdf?v=2026-11-12";
