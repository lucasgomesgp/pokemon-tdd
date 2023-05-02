export function Card({
  title = "",
  type = "",
  skill = 0,
  speed = 0,
  strength = 0,
  weight = 0,
}: CardProps) {
  return (
    <div className="container">
      <div className="title" data-testid="title">
        {title}
      </div>
      <img
        src="../../../assets/front_default.png"
        alt="Pokémon"
        data-testid="pokemon"
      />
    </div>
  );
}
