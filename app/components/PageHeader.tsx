export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold">{title}</h1>
      <p className="text-val-cream-dark">{description}</p>
    </div>
  );
}
