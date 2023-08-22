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
      <blockquote className="font-[700] text-2xl text-white text-center text-balance text">
        {data[0].q}
        <footer className="font-[400] text-neutral-300 text-base">{data[0].a}</footer>
      </blockquote>
    </main>
  );
}
