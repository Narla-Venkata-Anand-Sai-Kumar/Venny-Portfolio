export function repoOgImage(repo?: string): string | undefined {
  if (!repo) return undefined;
  const path = repo.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
  if (!path) return undefined;
  return `https://opengraph.githubassets.com/1/${path}`;
}
