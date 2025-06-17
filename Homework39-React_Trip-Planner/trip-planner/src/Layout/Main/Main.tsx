import "./Main.css";

interface MainProps {
  title: string;
  page: string | null;
}

function Main({ title, page }: MainProps) {
  return (
    <main className="Main">
      {page ? <h1>{page} Page</h1> : <h2>{title}</h2>}
    </main>
  );
}

export default Main;
