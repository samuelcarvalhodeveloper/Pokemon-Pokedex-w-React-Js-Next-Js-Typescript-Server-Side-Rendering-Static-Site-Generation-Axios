export type BannerStyledProps = {
  backgroundImage: any;
}

export type SmoothScrollingStyledProps = {
  backgroundImage: any;
}

type PokemonArrayContent = {
  name: string;
  url: string;
}

export type PokemonArray = {
  results: Array<PokemonArrayContent>;
}

export type IndexDataProps = {
  data: {
    results: Array<PokemonArrayContent>;
  }
}

export type IndexContainerProps = {
  data: {
    results: Array<PokemonArrayContent>;
  }
}

export type PokemonSectionProps = {
  data: {
    results: Array<PokemonArrayContent>;
  }
}

export type PokemonCardProps = {
  name: string;
}

export type PokemonCardInfoProps = {
  name: string | undefined;
}

export type PokemonInfoProps = {
  name: string | undefined;
}

type Types = {
  type: {
    name: string;
  }
}

type Data = {
  id: number | string;
  name: string;
  types: Array<Types>
  sprites: {
    front_default: string
  }
}

export type PokemonData = {
  data: Data
}

export type Selected = {
  selected: number;
}
