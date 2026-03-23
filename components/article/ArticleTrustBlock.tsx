type Source = { label: string; url: string };

type Props = {
  authorName: string;
  authorUrl?: string;
  publishedAt: string;
  updatedAt?: string;
  sources?: Source[];
  reviewedBy?: string;
};

export default function ArticleTrustBlock({
  authorName,
  authorUrl,
  publishedAt,
  updatedAt,
  sources = [],
  reviewedBy,
}: Props) {
  return (
    <section className="rounded-xl border p-4 text-sm">
      <p><strong>Author:</strong> {authorUrl ? <a href={authorUrl}>{authorName}</a> : authorName}</p>
      <p><strong>Published:</strong> {publishedAt}</p>
      {updatedAt ? <p><strong>Updated:</strong> {updatedAt}</p> : null}
      {reviewedBy ? <p><strong>Reviewed by:</strong> {reviewedBy}</p> : null}
      {sources.length ? (
        <>
          <p className="mt-2 font-semibold">Sources</p>
          <ul className="list-disc pl-5">
            {sources.map((s) => (
              <li key={s.url}><a href={s.url}>{s.label}</a></li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
