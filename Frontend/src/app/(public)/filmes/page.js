import FilmCard from '../../../components/FilmCard';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/filmes`, { cache: 'no-store' });
  const films = await res.json();

  return (
    <main>
      <h1>Filmes</h1>
      <div className="grid">
        {films.map(f => <FilmCard key={f.id} film={f} />)}
      </div>
    </main>
  );
}