type MovieInfoProps = {
  title: string;
  runtime: number;
  director: string;
};

export default function MovieInfo({ title, runtime, director }: MovieInfoProps) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="mb-4">
        <p>Runtime: {runtime} minutes</p>
        <p>Directed by: {director}</p> 
        <p>Genres</p>
      </div>
    </>
  );
} 