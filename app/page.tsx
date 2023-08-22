export const runtime = 'edge';

async function getData() {
  const res = await fetch("https://zenquotes.io/api/today");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center p-6 md:p-24 bg-neutral-900">
      <blockquote className="font-bold text-[5vmin] text-white text-center text-balance text">
        {data[0].q}
        <footer className="font-semibold text-neutral-300 text-[3.5vmin]">{data[0].a}</footer>
      </blockquote>
    </main>
  );
}
